import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Wifi, WifiOff, RefreshCw, Trash2, AlertTriangle } from 'lucide-react';

interface UserSession {
  id: string;
  session_id: string;
  user_id: string;
  device_hash: string | null;
  ip: string | null;
  user_agent: string | null;
  created_at: string;
  last_seen_at: string;
  revoked_at: string | null;
  revoke_reason: string | null;
}

interface Props {
  userId: string;
  language: string;
}

export default function AdminSessionsPanel({ userId, language }: Props) {
  const [sessions, setSessions] = useState<UserSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [revokingId, setRevokingId] = useState<string | null>(null);

  const fetchSessions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('user_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('last_seen_at', { ascending: false })
      .limit(30);

    if (!error) setSessions((data as UserSession[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchSessions(); }, [userId]);

  const sendRevocationNotification = async (targetUserId: string, revokedAll: boolean, reason?: string) => {
    try {
      await supabase.functions.invoke('notify-session-revoked', {
        body: { userId: targetUserId, reason, revokedAll },
      });
    } catch (e) {
      if (import.meta.env.DEV) console.error('Failed to send revocation email:', e);
    }
  };

  const handleRevoke = async (sessionId: string, dbId: string) => {
    setRevokingId(dbId);
    const { error } = await supabase
      .from('user_sessions')
      .update({
        revoked_at: new Date().toISOString(),
        revoke_reason: 'Revogado pelo admin',
      })
      .eq('id', dbId);

    if (error) {
      toast({ title: 'Erro', description: language === 'pt' ? 'Falha ao revogar sessão' : 'Failed to revoke session', variant: 'destructive' });
    } else {
      toast({ title: language === 'pt' ? 'Sessão revogada' : 'Session revoked' });
      sendRevocationNotification(userId, false, 'Revogado pelo admin');
      fetchSessions();
    }
    setRevokingId(null);
  };

  const handleRevokeAll = async () => {
    setRevokingId('all');
    const { error } = await supabase
      .from('user_sessions')
      .update({
        revoked_at: new Date().toISOString(),
        revoke_reason: 'Todas revogadas pelo admin',
      })
      .eq('user_id', userId)
      .is('revoked_at', null);

    if (error) {
      toast({ title: 'Erro', description: language === 'pt' ? 'Falha ao revogar sessões' : 'Failed to revoke sessions', variant: 'destructive' });
    } else {
      toast({ title: language === 'pt' ? 'Todas as sessões revogadas' : 'All sessions revoked' });
      sendRevocationNotification(userId, true, 'Todas revogadas pelo admin');
      fetchSessions();
    }
    setRevokingId(null);
  };

  const formatDate = (d: string) => new Date(d).toLocaleString(language === 'pt' ? 'pt-BR' : 'en-US');
  const shortHash = (h: string | null) => h ? h.slice(0, 12) + '…' : '-';
  const activeSessions = sessions.filter(s => !s.revoked_at);
  const hasConcurrent = activeSessions.length > 1;

  // Count unique IPs and devices among active sessions
  const uniqueIps = new Set(activeSessions.map(s => s.ip).filter(Boolean)).size;
  const uniqueDevices = new Set(activeSessions.map(s => s.device_hash).filter(Boolean)).size;

  return (
    <Card className="border-primary/20 bg-card/50 mt-4">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Wifi className="h-5 w-5 text-primary" />
            {language === 'pt' ? 'Sessões' : 'Sessions'}
            <Badge variant="secondary" className="ml-1">{activeSessions.length} {language === 'pt' ? 'ativas' : 'active'}</Badge>
            {hasConcurrent && (
              <Badge variant="destructive" className="ml-1 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                {language === 'pt' ? 'Simultâneas!' : 'Concurrent!'}
              </Badge>
            )}
          </CardTitle>
          <div className="flex gap-2">
            {activeSessions.length > 0 && (
              <Button size="sm" variant="destructive" onClick={handleRevokeAll} disabled={revokingId === 'all'}>
                {revokingId === 'all' ? <RefreshCw className="h-4 w-4 animate-spin mr-1" /> : <Trash2 className="h-4 w-4 mr-1" />}
                {language === 'pt' ? 'Revogar Todas' : 'Revoke All'}
              </Button>
            )}
            <Button size="sm" variant="outline" size-icon onClick={fetchSessions} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {hasConcurrent && (
          <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-sm">
            <div className="flex items-center gap-2 font-semibold text-destructive mb-1">
              <AlertTriangle className="h-4 w-4" />
              {language === 'pt' ? 'Sessões simultâneas detectadas' : 'Concurrent sessions detected'}
            </div>
            <p className="text-muted-foreground">
              {language === 'pt'
                ? `${activeSessions.length} sessões ativas • ${uniqueIps} IP(s) distintos • ${uniqueDevices} dispositivo(s) distinto(s)`
                : `${activeSessions.length} active sessions • ${uniqueIps} unique IP(s) • ${uniqueDevices} unique device(s)`}
            </p>
          </div>
        )}
        {loading ? (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary mx-auto" />
          </div>
        ) : sessions.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            {language === 'pt' ? 'Nenhuma sessão registrada.' : 'No sessions recorded.'}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>{language === 'pt' ? 'Última Atividade' : 'Last Activity'}</TableHead>
                  <TableHead>{language === 'pt' ? 'Criada em' : 'Created'}</TableHead>
                  <TableHead>Device Hash</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead className="text-right">{language === 'pt' ? 'Ações' : 'Actions'}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions.map(s => {
                  const isActive = !s.revoked_at;
                  return (
                    <TableRow key={s.id} className={!isActive ? 'opacity-50' : ''}>
                      <TableCell>
                        {isActive ? (
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                            <Wifi className="h-3 w-3 mr-1" />{language === 'pt' ? 'Ativa' : 'Active'}
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <WifiOff className="h-3 w-3 mr-1" />{language === 'pt' ? 'Revogada' : 'Revoked'}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm whitespace-nowrap">{formatDate(s.last_seen_at)}</TableCell>
                      <TableCell className="text-sm whitespace-nowrap">{formatDate(s.created_at)}</TableCell>
                      <TableCell className="font-mono text-xs">{shortHash(s.device_hash)}</TableCell>
                      <TableCell className="text-sm">{s.ip || '-'}</TableCell>
                      <TableCell className="text-right">
                        {isActive ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-destructive border-destructive/30 hover:bg-destructive/10"
                            onClick={() => handleRevoke(s.session_id, s.id)}
                            disabled={revokingId === s.id}
                          >
                            {revokingId === s.id ? <RefreshCw className="h-3 w-3 animate-spin" /> : <WifiOff className="h-3 w-3 mr-1" />}
                            {language === 'pt' ? 'Revogar' : 'Revoke'}
                          </Button>
                        ) : (
                          <span className="text-xs text-muted-foreground">{s.revoke_reason || '-'}</span>
                        )}
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
  );
}
