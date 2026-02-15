import { supabase } from '@/integrations/supabase/client';
import { getDeviceHash } from '@/utils/device';

export async function logLoginEvent(userId: string) {
  const device_hash = await getDeviceHash();

  await supabase.from('auth_login_events').insert({
    user_id: userId,
    user_agent: navigator.userAgent,
    device_hash,
  });
}
