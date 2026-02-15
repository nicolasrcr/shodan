
-- =========================================
-- 1) Eventos de login
-- =========================================
CREATE TABLE IF NOT EXISTS public.auth_login_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  ip text,
  user_agent text,
  device_hash text,
  city text,
  country text
);

ALTER TABLE public.auth_login_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own login events"
ON public.auth_login_events FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own login events"
ON public.auth_login_events FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can read all login events"
ON public.auth_login_events FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- =========================================
-- 2) Status de segurança (bloqueio)
-- =========================================
CREATE TABLE IF NOT EXISTS public.user_security (
  user_id uuid PRIMARY KEY,
  is_blocked boolean NOT NULL DEFAULT false,
  blocked_reason text DEFAULT '',
  blocked_at timestamptz,
  blocked_by uuid,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.user_security ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage user_security"
ON public.user_security FOR ALL
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can read own security status"
ON public.user_security FOR SELECT
USING (auth.uid() = user_id);

-- =========================================
-- 3) View de atividade suspeita (24h)
-- =========================================
CREATE OR REPLACE VIEW public.suspicious_activity_view
WITH (security_invoker = on) AS
SELECT
  e.user_id,
  count(*) AS total_logins_24h,
  count(DISTINCT coalesce(e.device_hash, 'unknown')) AS devices_24h,
  count(DISTINCT coalesce(e.ip, 'unknown')) AS ips_24h,
  max(e.created_at) AS last_login_at
FROM public.auth_login_events e
WHERE e.created_at > now() - interval '24 hours'
GROUP BY e.user_id
HAVING count(DISTINCT coalesce(e.device_hash, 'unknown')) >= 3
    OR count(DISTINCT coalesce(e.ip, 'unknown')) >= 3
    OR count(*) >= 8;

GRANT SELECT ON public.suspicious_activity_view TO authenticated;

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_login_events_user_created ON public.auth_login_events (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_login_events_created ON public.auth_login_events (created_at DESC);
