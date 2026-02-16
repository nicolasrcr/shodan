import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function getIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    null
  );
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error("Missing SUPABASE_URL / SUPABASE_ANON_KEY");
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Client scoped to the logged-in user (RLS applies)
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsErr } = await supabase.auth.getClaims(token);
    if (claimsErr || !claimsData?.claims) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = claimsData.claims.sub as string;

    const body = await req.json().catch(() => ({}));
    const device_hash = body?.device_hash ?? null;
    const session_id = body?.session_id ?? null;
    const kind: "login" | "heartbeat" =
      body?.kind === "heartbeat" ? "heartbeat" : "login";

    const ip = getIp(req);
    const user_agent = req.headers.get("user-agent");

    // (A) Register login event (only on login, not heartbeat)
    if (kind === "login") {
      await supabase.from("auth_login_events").insert({
        user_id: userId,
        ip,
        user_agent,
        device_hash,
      });
    }

    // (B) Upsert active session
    if (session_id) {
      await supabase.from("user_sessions").upsert(
        {
          user_id: userId,
          session_id,
          device_hash,
          ip,
          user_agent,
          last_seen_at: new Date().toISOString(),
          revoked_at: null,
          revoke_reason: null,
        },
        { onConflict: "session_id" }
      );
    }

    // (C) Limit simultaneous active sessions
    const MAX_ACTIVE = 1;

    const { data: sessions } = await supabase
      .from("user_sessions")
      .select("session_id,last_seen_at,revoked_at")
      .eq("user_id", userId)
      .is("revoked_at", null)
      .order("last_seen_at", { ascending: false });

    const active = sessions ?? [];
    const toRevoke = active.slice(MAX_ACTIVE);

    if (toRevoke.length) {
      const revokeIds = toRevoke.map((s: any) => s.session_id);
      await supabase
        .from("user_sessions")
        .update({
          revoked_at: new Date().toISOString(),
          revoke_reason:
            "Sessão extra detectada (possível compartilhamento)",
        })
        .in("session_id", revokeIds);
    }

    // Check if current session was revoked
    let force_logout = !!(
      session_id && toRevoke.some((s: any) => s.session_id === session_id)
    );

    // (D) Auto-block detection based on 24h metrics
    const THRESHOLD_IPS_24H = 3;
    const THRESHOLD_DEVICES_24H = 3;
    const THRESHOLD_LOGINS_24H = 10;

    // Use service role client for metrics view (no RLS on views)
    const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (SERVICE_ROLE_KEY) {
      const adminClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

      const { data: metrics } = await adminClient
        .from("user_login_metrics_24h")
        .select("logins_24h, ips_24h, devices_24h")
        .eq("user_id", userId)
        .maybeSingle();

      if (metrics) {
        const shouldBlock =
          (metrics.ips_24h ?? 0) >= THRESHOLD_IPS_24H ||
          (metrics.devices_24h ?? 0) >= THRESHOLD_DEVICES_24H ||
          (metrics.logins_24h ?? 0) >= THRESHOLD_LOGINS_24H;

        if (shouldBlock) {
          const reason = `Auto-block: ips_24h=${metrics.ips_24h}, devices_24h=${metrics.devices_24h}, logins_24h=${metrics.logins_24h}`;

          await adminClient.from("user_security").upsert(
            {
              user_id: userId,
              is_blocked: true,
              blocked_reason: reason,
              blocked_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
            { onConflict: "user_id" }
          );

          // Revoke all active sessions
          await adminClient
            .from("user_sessions")
            .update({
              revoked_at: new Date().toISOString(),
              revoke_reason:
                "Bloqueio automático por suspeita de compartilhamento",
            })
            .eq("user_id", userId)
            .is("revoked_at", null);

          return new Response(
            JSON.stringify({
              ok: true,
              force_logout: true,
              blocked: true,
              block_reason: reason,
            }),
            {
              headers: {
                ...corsHeaders,
                "Content-Type": "application/json",
              },
            }
          );
        }
      }
    }

    return new Response(
      JSON.stringify({ ok: true, force_logout, max_active: MAX_ACTIVE }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
