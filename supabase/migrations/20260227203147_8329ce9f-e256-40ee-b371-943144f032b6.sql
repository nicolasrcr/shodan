-- Recreate views with SECURITY INVOKER to fix security definer warning

DROP VIEW IF EXISTS public.suspicious_activity_view;
CREATE VIEW public.suspicious_activity_view
WITH (security_invoker = true)
AS
SELECT user_id,
    count(*) AS total_logins_24h,
    count(DISTINCT COALESCE(device_hash, 'unknown'::text)) AS devices_24h,
    count(DISTINCT COALESCE(ip, 'unknown'::text)) AS ips_24h,
    max(created_at) AS last_login_at
   FROM auth_login_events e
  WHERE (created_at > (now() - '24:00:00'::interval))
  GROUP BY user_id
 HAVING ((count(DISTINCT COALESCE(device_hash, 'unknown'::text)) >= 3) OR (count(DISTINCT COALESCE(ip, 'unknown'::text)) >= 3) OR (count(*) >= 8));

DROP VIEW IF EXISTS public.user_login_metrics_24h;
CREATE VIEW public.user_login_metrics_24h
WITH (security_invoker = true)
AS
SELECT user_id,
    count(*) AS logins_24h,
    count(DISTINCT ip) FILTER (WHERE (ip IS NOT NULL)) AS ips_24h,
    count(DISTINCT device_hash) FILTER (WHERE (device_hash IS NOT NULL)) AS devices_24h,
    max(created_at) AS last_login_at
   FROM auth_login_events
  WHERE (created_at >= (now() - '24:00:00'::interval))
  GROUP BY user_id;