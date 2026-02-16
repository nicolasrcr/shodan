import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { registerLogin, clearSessionId } from '@/services/security';
import { toast } from '@/hooks/use-toast';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  has_paid: boolean;
  created_at: string;
  access_expires_at: string | null;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string, phone: string, paymentMethod?: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const heartbeatRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const normalizeEmail = (email: string) => email.trim().toLowerCase();

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();
    
    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
    return data as UserProfile | null;
  };

  const refreshProfile = async () => {
    if (user) {
      const profileData = await fetchProfile(user.id);
      setProfile(profileData);
    }
  };

  // Heartbeat: detect concurrent sessions and force logout
  useEffect(() => {
    if (heartbeatRef.current) {
      clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    }

    if (!user) return;

    heartbeatRef.current = setInterval(async () => {
      try {
        const res = await registerLogin("heartbeat");
        if (res?.force_logout) {
          clearSessionId();
          await supabase.auth.signOut();
          toast({
            title: "Você foi desconectado",
            description: res.blocked
              ? (res.block_reason || "Sua conta foi bloqueada por segurança.")
              : "Sua conta está ativa em outro dispositivo.",
            variant: "destructive",
          });
        }
      } catch (e) {
        console.error("heartbeat error", e);
      }
    }, 60_000); // every 60s

    return () => {
      if (heartbeatRef.current) {
        clearInterval(heartbeatRef.current);
        heartbeatRef.current = null;
      }
    };
  }, [user?.id]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          setTimeout(async () => {
            const profileData = await fetchProfile(session.user.id);
            setProfile(profileData);
            setLoading(false);
          }, 0);
        } else {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchProfile(session.user.id).then((profileData) => {
          setProfile(profileData);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, name: string, phone: string, paymentMethod?: string) => {
    const normalizedEmail = normalizeEmail(email);
    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          name,
          phone,
          payment_method: paymentMethod || null
        }
      }
    });

    if (error) {
      return { error };
    }

    return { error: null };
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizeEmail(email),
      password
    });

    if (error) return { error };

    // Register login via edge function (captures IP, manages sessions)
    try {
      const res = await registerLogin("login");
      if (res?.force_logout) {
        clearSessionId();
        await supabase.auth.signOut();
        toast({
          title: res.blocked ? "Acesso bloqueado" : "Sessão encerrada",
          description: res.blocked
            ? (res.block_reason || "Sua conta foi bloqueada por segurança.")
            : "Detectamos uso da conta em outro dispositivo.",
          variant: "destructive",
        });
        return { error: new Error(res.blocked ? "Conta bloqueada" : "Sessão encerrada") };
      }
    } catch (e) {
      console.error("registerLogin failed", e);
    }

    // Check if user is blocked
    if (data.user) {
      const { data: sec } = await supabase
        .from("user_security")
        .select("is_blocked, blocked_reason, must_reset_password")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (sec?.is_blocked) {
        await supabase.auth.signOut();
        toast({
          title: "Acesso bloqueado",
          description: sec.blocked_reason || "Sua conta foi bloqueada por segurança.",
          variant: "destructive",
        });
        return { error: new Error("Conta bloqueada") };
      }

      if (sec?.must_reset_password) {
        toast({
          title: "Segurança",
          description: "Detectamos atividade incomum. Troque sua senha para continuar.",
          variant: "destructive",
        });
        // User will be redirected to password page by the calling component
      }
    }

    return { error: null };
  };

  const signOut = async () => {
    clearSessionId();
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      profile,
      loading,
      signUp,
      signIn,
      signOut,
      refreshProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
