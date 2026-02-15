import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { ShieldAlert, Eye, Lock, Unlock, Monitor, Clock, RefreshCw, Search } from 'lucide-react';

interface SuspiciousEntry {
  user_id: string;
  total_logins_24h: number;
  devices_24h: number;
  ips_24h: number;
  last_login_at: string;
}

interface LoginEvent {
  id: string;
  user_id: string;
  created_at: string;
  ip: string | null;
  user_agent: string | null;
  device_hash: string | null;
}

interface SecurityStatus {
  user_id: string;
  is_blocked: boolean;
  blocked_reason: string | null;
  blocked_at: string | null;
  blocked_by: string | null;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export default function AdminSecurityTab({ language, users }: { language: string; users: { id: string; name: string; email: string }[] }) {
  const { user: adminUser } = useAuth();
  const [suspicious, setSuspicious] = useState<SuspiciousEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [detailUserId, setDetailUserId] = useState<string | null>(null);
  const [loginEvents, setLoginEvents] = useState<LoginEvent[]>([]);
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus | null>(null);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [blockDialogOpen, setBlockDialogOpen] = useState(false);
  const [blockReason, setBlockReason] = useState('');
  const [blockTargetId, setBlockTargetId] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  const getUserInfo = (userId: string) => users.find(u => u.id === userId);

  const fetchSuspicious = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('suspicious_activity_view')
      .select('*')
      .order('last_login_at', { ascending: false });

    if (!error) setSuspicious((data as SuspiciousEntry[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchSuspicious(); }, []);

  const openDetails = async (userId: string) => {
    setDetailUserId(userId);
    setEventsLoading(true);

    const [eventsRes, secRes] = await Promise.all([
      supabase
        .from('auth_login_events')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(50),
      supabase
        .from('user_security')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle(),
    ]);

    setLoginEvents((eventsRes.data as LoginEvent[]) || []);
    setSecurityStatus((secRes.data as SecurityStatus) || null);
    setEventsLoading(false);
  };

  const handleBlock = async () => {
    if (!blockTargetId || !adminUser) return;
    setActionLoading(true);

    const { error } = await supabase.from('user_security').upsert({
      user_id: blockTargetId,
      is_blocked: true,
      blocked_reason: blockReason,
      blocked_at: new Date().toISOString(),
      blocked_by: adminUser.id,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      toast({ title: 'Erro', description: 'Falha ao bloquear usuário', variant: 'destructive' });
    } else {
      toast({ title: 'Sucesso', description: 'Usuário bloqueado' });
      if (detailUserId === blockTargetId) openDetails(blockTargetId);
    }

    setActionLoading(false);
    setBlockDialogOpen(false);
    setBlockReason('');
    setBlockTargetId(null);
  };

  const handleUnblock = async (userId: string) => {
    if (!adminUser) return;
    setActionLoading(true);

    const { error } = await supabase.from('user_security').upsert({
      user_id: userId,
      is_blocked: false,
      blocked_reason: '',
      blocked_at: null,
      blocked_by: adminUser.id,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      toast({ title: 'Erro', description: 'Falha ao desbloquear', variant: 'destructive' });
    } else {
      toast({ title: 'Sucesso', description: 'Usuário desbloqueado' });
      if (detailUserId === userId) openDetails(userId);
    }

    setActionLoading(false);
  };

  const formatDate = (d: string) => new Date(d).toLocaleString(language === 'pt' ? 'pt-BR' : 'en-US');
  const shortHash = (h: string | null) => h ? h.slice(0, 12) + '…' : '-';

  return (
    <>
      <Card className="border-primary/20 bg-card/50">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              {language === 'pt' ? 'Atividade Suspeita (24h)' : 'Suspicious Activity (24h)'}
            </CardTitle>
            <Button variant="outline" size="icon" onClick={fetchSuspicious} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-2" />
            </div>
          ) : suspicious.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">
              {language === 'pt' ? 'Nenhuma atividade suspeita detectada nas últimas 24h' : 'No suspicious activity in the last 24h'}
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{language === 'pt' ? 'Usuário' : 'User'}</TableHead>
                    <TableHead>Logins</TableHead>
                    <TableHead>{language === 'pt' ? 'Dispositivos' : 'Devices'}</TableHead>
                    <TableHead>IPs</TableHead>
                    <TableHead>{language === 'pt' ? 'Último Login' : 'Last Login'}</TableHead>
                    <TableHead className="text-right">{language === 'pt' ? 'Ações' : 'Actions'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suspicious.map(s => {
                    const info = getUserInfo(s.user_id);
                    return (
                      <TableRow key={s.user_id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{info?.name || '-'}</p>
                            <p className="text-xs text-muted-foreground">{info?.email || s.user_id.slice(0, 8)}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={s.total_logins_24h >= 8 ? 'destructive' : 'secondary'}>{s.total_logins_24h}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={s.devices_24h >= 3 ? 'destructive' : 'secondary'}>{s.devices_24h}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={s.ips_24h >= 3 ? 'destructive' : 'secondary'}>{s.ips_24h}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">{formatDate(s.last_login_at)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button size="sm" variant="outline" onClick={() => openDetails(s.user_id)}>
                              <Eye className="h-4 w-4 mr-1" />{language === 'pt' ? 'Detalhes' : 'Details'}
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => { setBlockTargetId(s.user_id); setBlockDialogOpen(true); }}>
                              <Lock className="h-4 w-4 mr-1" />{language === 'pt' ? 'Bloquear' : 'Block'}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* User Detail Panel */}
      {detailUserId && (
        <Card className="border-primary/20 bg-card/50 mt-4">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                {language === 'pt' ? 'Detalhes de Login' : 'Login Details'} — {getUserInfo(detailUserId)?.email || detailUserId.slice(0, 8)}
              </CardTitle>
              <div className="flex gap-2">
                {securityStatus?.is_blocked ? (
                  <Button size="sm" variant="outline" onClick={() => handleUnblock(detailUserId)} disabled={actionLoading}>
                    <Unlock className="h-4 w-4 mr-1" />{language === 'pt' ? 'Desbloquear' : 'Unblock'}
                  </Button>
                ) : (
                  <Button size="sm" variant="destructive" onClick={() => { setBlockTargetId(detailUserId); setBlockDialogOpen(true); }} disabled={actionLoading}>
                    <Lock className="h-4 w-4 mr-1" />{language === 'pt' ? 'Bloquear' : 'Block'}
                  </Button>
                )}
                <Button size="sm" variant="ghost" onClick={() => setDetailUserId(null)}>✕</Button>
              </div>
            </div>
            {securityStatus?.is_blocked && (
              <Badge variant="destructive" className="mt-2 w-fit">
                {language === 'pt' ? 'BLOQUEADO' : 'BLOCKED'}
                {securityStatus.blocked_reason ? ` — ${securityStatus.blocked_reason}` : ''}
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            {eventsLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary mx-auto" />
              </div>
            ) : loginEvents.length === 0 ? (
              <p className="text-muted-foreground text-sm">{language === 'pt' ? 'Nenhum evento de login registrado.' : 'No login events recorded.'}</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead><Clock className="h-4 w-4 inline mr-1" />{language === 'pt' ? 'Data/Hora' : 'Date/Time'}</TableHead>
                      <TableHead>Device Hash</TableHead>
                      <TableHead>User Agent</TableHead>
                      <TableHead>IP</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loginEvents.map(ev => (
                      <TableRow key={ev.id}>
                        <TableCell className="text-sm whitespace-nowrap">{formatDate(ev.created_at)}</TableCell>
                        <TableCell className="font-mono text-xs">{shortHash(ev.device_hash)}</TableCell>
                        <TableCell className="text-xs text-muted-foreground max-w-[200px] truncate">{ev.user_agent || '-'}</TableCell>
                        <TableCell className="text-sm">{ev.ip || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Block Dialog */}
      <Dialog open={blockDialogOpen} onOpenChange={setBlockDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{language === 'pt' ? 'Bloquear Usuário' : 'Block User'}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            {language === 'pt'
              ? 'O usuário será deslogado e impedido de acessar o app. Informe o motivo (opcional):'
              : 'The user will be signed out and blocked from accessing the app. Provide a reason (optional):'}
          </p>
          <Textarea
            placeholder={language === 'pt' ? 'Motivo do bloqueio...' : 'Reason for blocking...'}
            value={blockReason}
            onChange={(e) => setBlockReason(e.target.value)}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setBlockDialogOpen(false)}>
              {language === 'pt' ? 'Cancelar' : 'Cancel'}
            </Button>
            <Button variant="destructive" onClick={handleBlock} disabled={actionLoading}>
              {actionLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <><Lock className="h-4 w-4 mr-1" />{language === 'pt' ? 'Confirmar Bloqueio' : 'Confirm Block'}</>}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
