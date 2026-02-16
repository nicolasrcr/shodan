
-- 1) Tabela de sessões ativas
create table if not exists public.user_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  session_id text unique not null,
  device_hash text,
  ip text,
  user_agent text,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  revoked_at timestamptz,
  revoke_reason text
);

alter table public.user_sessions enable row level security;

create policy "Users can read own sessions"
on public.user_sessions for select
using (auth.uid() = user_id);

create policy "Users can insert own sessions"
on public.user_sessions for insert
with check (auth.uid() = user_id);

create policy "Users can update own sessions"
on public.user_sessions for update
using (auth.uid() = user_id);

create policy "Admins can read all sessions"
on public.user_sessions for select
using (public.has_role(auth.uid(), 'admin'));

create index if not exists idx_user_sessions_user_lastseen
on public.user_sessions (user_id, last_seen_at desc);

-- 2) View de métricas 24h (complementar à suspicious_activity_view existente)
create or replace view public.user_login_metrics_24h as
select
  user_id,
  count(*) as logins_24h,
  count(distinct ip) filter (where ip is not null) as ips_24h,
  count(distinct device_hash) filter (where device_hash is not null) as devices_24h,
  max(created_at) as last_login_at
from public.auth_login_events
where created_at >= now() - interval '24 hours'
group by user_id;

grant select on public.user_login_metrics_24h to authenticated;

-- 3) Campo must_reset_password em user_security
alter table public.user_security
add column if not exists must_reset_password boolean not null default false;
