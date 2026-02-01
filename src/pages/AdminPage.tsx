import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Users, Shield, Search, CheckCircle, XCircle, LogOut, RefreshCw, RotateCcw, CreditCard, QrCode } from 'lucide-react';
import StatCard from '@/components/admin/StatCard';

type PaymentMethod = 'pix' | 'cartao' | 'outro' | null;

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  has_paid: boolean;
  created_at: string;
  access_expires_at: string | null;
  payment_method: PaymentMethod;
}

const AdminPage = () => {
  const { user, signOut } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdminCheck();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching users:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os usuários.',
        variant: 'destructive',
      });
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  const togglePaymentStatus = async (userId: string, currentStatus: boolean) => {
    setUpdating(userId);
    
    const { error } = await supabase
      .from('profiles')
      .update({ has_paid: !currentStatus })
      .eq('id', userId);

    if (error) {
      console.error('Error updating payment status:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível atualizar o status do pagamento.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Sucesso',
        description: `Acesso ${!currentStatus ? 'liberado' : 'revogado'} com sucesso!`,
      });
      fetchUsers();
    }
    
    setUpdating(null);
  };

  const renewAccess = async (userId: string) => {
    setUpdating(userId);
    
    const newExpirationDate = new Date();
    newExpirationDate.setFullYear(newExpirationDate.getFullYear() + 1);
    
    const { error } = await supabase
      .from('profiles')
      .update({ access_expires_at: newExpirationDate.toISOString() })
      .eq('id', userId);

    if (error) {
      console.error('Error renewing access:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível renovar o acesso.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Sucesso',
        description: 'Acesso renovado por mais 1 ano!',
      });
      fetchUsers();
    }
    
    setUpdating(null);
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone?.includes(searchTerm)
  );

  const stats = {
    total: users.length,
    paid: users.filter(u => u.has_paid).length,
    unpaid: users.filter(u => !u.has_paid).length,
  };

  // Show loading while checking admin status
  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-card to-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  // Redirect if not admin
  if (!isAdmin) {
    return <Navigate to="/curso" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="border-b border-primary/20 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">Painel Administrativo</h1>
              <p className="text-xs text-muted-foreground">Gerenciamento de Usuários</p>
            </div>
          </div>
          <Button variant="outline" onClick={signOut} className="gap-2">
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards with Glow Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Users className="h-5 w-5" />}
            title="Total de Usuários"
            value={stats.total}
            variant="gold"
          />
          <StatCard
            icon={<CheckCircle className="h-5 w-5" />}
            title="Acessos Liberados"
            value={stats.paid}
            variant="green"
          />
          <StatCard
            icon={<XCircle className="h-5 w-5" />}
            title="Aguardando Pagamento"
            value={stats.unpaid}
            variant="orange"
          />
        </div>

        {/* Users Table */}
        <Card className="border-primary/20 bg-card/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Usuários Cadastrados
              </CardTitle>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nome, email ou telefone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button variant="outline" size="icon" onClick={fetchUsers} disabled={loading}>
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-muted-foreground text-sm">Carregando usuários...</p>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {searchTerm ? 'Nenhum usuário encontrado com essa busca.' : 'Nenhum usuário cadastrado.'}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Telefone</TableHead>
                      <TableHead>Cadastro</TableHead>
                      <TableHead>Expira em</TableHead>
                      <TableHead>Pagamento</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell className="text-muted-foreground">{user.email}</TableCell>
                        <TableCell className="text-muted-foreground">{user.phone}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {new Date(user.created_at).toLocaleDateString('pt-BR')}
                        </TableCell>
                        <TableCell className="text-sm">
                          {(() => {
                            const expirationDate = user.access_expires_at 
                              ? new Date(user.access_expires_at)
                              : (() => {
                                  const d = new Date(user.created_at);
                                  d.setFullYear(d.getFullYear() + 1);
                                  return d;
                                })();
                            const isExpired = expirationDate < new Date();
                            return (
                              <span className={isExpired ? 'text-destructive font-medium' : 'text-muted-foreground'}>
                                {expirationDate.toLocaleDateString('pt-BR')}
                                {isExpired && ' (Expirado)'}
                              </span>
                            );
                          })()}
                        </TableCell>
                        <TableCell>
                          {user.payment_method === 'pix' && (
                            <Badge variant="outline" className="border-primary/50 text-primary">
                              <QrCode className="h-3 w-3 mr-1" />
                              PIX
                            </Badge>
                          )}
                          {user.payment_method === 'cartao' && (
                            <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                              <CreditCard className="h-3 w-3 mr-1" />
                              Cartão
                            </Badge>
                          )}
                          {user.payment_method === 'outro' && (
                            <Badge variant="outline" className="border-muted-foreground/50 text-muted-foreground">
                              Outro
                            </Badge>
                          )}
                          {!user.payment_method && (
                            <span className="text-muted-foreground text-sm">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {user.has_paid ? (
                            <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Liberado
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
                              <XCircle className="h-3 w-3 mr-1" />
                              Pendente
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {(() => {
                              const expirationDate = user.access_expires_at 
                                ? new Date(user.access_expires_at)
                                : (() => {
                                    const d = new Date(user.created_at);
                                    d.setFullYear(d.getFullYear() + 1);
                                    return d;
                                  })();
                              const isExpired = expirationDate < new Date();
                              
                              if (isExpired && user.has_paid) {
                                return (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                                    onClick={() => renewAccess(user.id)}
                                    disabled={updating === user.id}
                                  >
                                    {updating === user.id ? (
                                      <RefreshCw className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <>
                                        <RotateCcw className="h-4 w-4 mr-1" />
                                        Renovar
                                      </>
                                    )}
                                  </Button>
                                );
                              }
                              return null;
                            })()}
                            <Button
                              size="sm"
                              variant={user.has_paid ? 'destructive' : 'default'}
                              onClick={() => togglePaymentStatus(user.id, user.has_paid)}
                              disabled={updating === user.id}
                            >
                              {updating === user.id ? (
                                <RefreshCw className="h-4 w-4 animate-spin" />
                              ) : user.has_paid ? (
                                'Revogar'
                              ) : (
                                'Liberar'
                              )}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8 border-primary/20 bg-card/50">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              Instruções de Uso
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>• <strong>Liberar Acesso:</strong> Clique em "Liberar" para dar acesso ao curso após confirmar pagamento.</p>
            <p>• <strong>Revogar Acesso:</strong> Clique em "Revogar" para remover acesso de um usuário.</p>
            <p>• <strong>Renovar Acesso:</strong> Para usuários com acesso expirado, clique em "Renovar" para estender por mais 1 ano.</p>
            <p>• <strong>Busca:</strong> Use a barra de busca para filtrar por nome, email ou telefone.</p>
            <p>• <strong>Atualizar:</strong> Clique no botão de refresh para recarregar a lista de usuários.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminPage;
