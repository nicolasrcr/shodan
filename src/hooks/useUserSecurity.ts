import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export function useUserSecurity() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const [reason, setReason] = useState('');

  useEffect(() => {
    const check = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from('user_security')
        .select('is_blocked, blocked_reason')
        .eq('user_id', user.id)
        .maybeSingle();

      setIsBlocked(Boolean(data?.is_blocked));
      setReason(data?.blocked_reason || '');
      setLoading(false);
    };

    check();
  }, [user?.id]);

  return { loading, isBlocked, reason };
}
