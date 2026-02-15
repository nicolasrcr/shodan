import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useUserSecurity } from '@/hooks/useUserSecurity';
import { ShieldX } from 'lucide-react';

export default function BlockedPage() {
  const { reason } = useUserSecurity();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md w-full border border-border rounded-xl p-8 shadow-lg text-center">
        <ShieldX className="h-12 w-12 text-destructive mx-auto mb-4" />
        <h1 className="text-xl font-bold mb-2">Acesso bloqueado</h1>
        <p className="text-sm text-muted-foreground mb-4">
          Seu acesso foi bloqueado pela equipe de administração.
        </p>

        {reason && (
          <div className="text-sm bg-muted rounded-lg p-3 mb-4 text-left">
            <strong>Motivo:</strong> {reason}
          </div>
        )}

        <Button className="w-full" onClick={() => supabase.auth.signOut()}>
          Sair
        </Button>
      </div>
    </div>
  );
}
