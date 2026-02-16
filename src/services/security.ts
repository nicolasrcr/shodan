import { supabase } from '@/integrations/supabase/client';
import { getDeviceHash } from '@/utils/device';

function getOrCreateSessionId() {
  const key = "shodan_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export async function registerLogin(kind: "login" | "heartbeat" = "login") {
  const device_hash = await getDeviceHash();
  const session_id = getOrCreateSessionId();

  const { data, error } = await supabase.functions.invoke("log-login", {
    body: { device_hash, session_id, kind },
  });

  if (error) throw error;
  return data as { ok: boolean; force_logout: boolean; max_active?: number; blocked?: boolean; block_reason?: string };
}

export function clearSessionId() {
  localStorage.removeItem("shodan_session_id");
}
