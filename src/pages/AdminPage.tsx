import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { Users, Shield, Search, CheckCircle, XCircle, LogOut, RefreshCw, RotateCcw, CreditCard, QrCode, TrendingUp, Receipt, ShieldAlert } from 'lucide-react';
import StatCard from '@/components/admin/StatCard';
import AdminSecurityTab from '@/components/admin/AdminSecurityTab';
import LanguageToggle from '@/components/LanguageToggle';

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

interface PaymentRecord {
  id: string;
  user_id: string;
  mp_payment_id: string;
  status: string;
  method: PaymentMethod;
  amount: number;
  currency: string;
  created_at: string;
}

const AdminPage = () => {
  const { signOut } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdminCheck();
  const { t, language } = useLanguage();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [paymentsLoading, setPaymentsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentSearch, setPaymentSearch] = useState('');
  const [updating, setUpdating] = useState<string | null>(null);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US');
  };

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({ title: t('common.error'), description: t('admin.errorLoadingUsers'), variant: 'destructive' });
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  };

  const fetchPayments = async () => {
    setPaymentsLoading(true);
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);

    if (!error) setPayments(data || []);
    setPaymentsLoading(false);
  };

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
      fetchPayments();
    }
  }, [isAdmin]);

  const togglePaymentStatus = async (userId: string, currentStatus: boolean) => {
    setUpdating(userId);
    const { error } = await supabase.from('profiles').update({ has_paid: !currentStatus }).eq('id', userId);
    if (error) {
      toast({ title: t('common.error'), description: t('admin.errorUpdatingStatus'), variant: 'destructive' });
    } else {
      const status = !currentStatus ? t('admin.accessReleased') : t('admin.accessRevoked');
      toast({ title: t('common.success'), description: t('admin.accessSuccessMessage').replace('{status}', status) });
      fetchUsers();
    }
    setUpdating(null);
  };

  const renewAccess = async (userId: string) => {
    setUpdating(userId);
    const newExpirationDate = new Date();
    newExpirationDate.setFullYear(newExpirationDate.getFullYear() + 1);
    const { error } = await supabase.from('profiles').update({ access_expires_at: newExpirationDate.toISOString() }).eq('id', userId);
    if (error) {
      toast({ title: t('common.error'), description: t('admin.errorRenewing'), variant: 'destructive' });
    } else {
      toast({ title: t('common.success'), description: t('admin.renewedSuccess') });
      fetchUsers();
    }
    setUpdating(null);
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone?.includes(searchTerm)
  );

  // Join user emails for payments display
  const getUserEmail = (userId: string) => users.find(u => u.id === userId)?.email || userId;

  const filteredPayments = payments.filter(p => {
    if (!paymentSearch) return true;
    const term = paymentSearch.toLowerCase();
    return getUserEmail(p.user_id).toLowerCase().includes(term) ||
      p.mp_payment_id.includes(term) ||
      (p.method || '').includes(term) ||
      p.status.includes(term);
  });

  const stats = {
    total: users.length,
    paid: users.filter(u => u.has_paid).length,
    unpaid: users.filter(u => !u.has_paid).length,
    pix: users.filter(u => u.payment_method === 'pix').length,
    cartao: users.filter(u => u.payment_method === 'cartao').length,
    conversionRate: users.length > 0 ? Math.round((users.filter(u => u.has_paid).length / users.length) * 100) : 0,
  };

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-card to-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">{t('admin.verifyingPermissions')}</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) return <Navigate to="/curso" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <header className="border-b border-primary/20 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">{t('admin.title')}</h1>
              <p className="text-xs text-muted-foreground">{t('admin.userManagement')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button variant="outline" onClick={signOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              {t('common.logout')}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <StatCard icon={<Users className="h-5 w-5" />} title={t('admin.totalUsers')} value={stats.total} variant="gold" />
          <StatCard icon={<CheckCircle className="h-5 w-5" />} title={t('admin.accessGranted')} value={stats.paid} variant="green" />
          <StatCard icon={<XCircle className="h-5 w-5" />} title={t('admin.awaitingPayment')} value={stats.unpaid} variant="orange" />
          <StatCard icon={<QrCode className="h-5 w-5" />} title={t('admin.pixPayment')} value={stats.pix} variant="gold" />
          <StatCard icon={<CreditCard className="h-5 w-5" />} title={t('admin.cardPayment')} value={stats.cartao} variant="blue" />
          <StatCard icon={<TrendingUp className="h-5 w-5" />} title={t('admin.conversionRate')} value={`${stats.conversionRate}%`} variant="green" />
        </div>

        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users" className="gap-2"><Users className="h-4 w-4" />{language === 'pt' ? 'Usuários' : 'Users'}</TabsTrigger>
            <TabsTrigger value="payments" className="gap-2"><Receipt className="h-4 w-4" />{language === 'pt' ? 'Pagamentos' : 'Payments'}</TabsTrigger>
            <TabsTrigger value="security" className="gap-2"><ShieldAlert className="h-4 w-4" />{language === 'pt' ? 'Segurança' : 'Security'}</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card className="border-primary/20 bg-card/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {t('admin.registeredUsers')}
                  </CardTitle>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder={t('admin.searchPlaceholder')} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9" />
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
                    <p className="text-muted-foreground text-sm">{t('admin.loadingUsers')}</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{t('admin.name')}</TableHead>
                          <TableHead>{t('admin.email')}</TableHead>
                          <TableHead>{t('admin.phone')}</TableHead>
                          <TableHead>{t('admin.registration')}</TableHead>
                          <TableHead>{t('admin.expiresOn')}</TableHead>
                          <TableHead>{t('admin.payment')}</TableHead>
                          <TableHead>{t('admin.status')}</TableHead>
                          <TableHead className="text-right">{t('admin.actions')}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.map((user) => {
                          const expirationDate = user.access_expires_at ? new Date(user.access_expires_at) : (() => { const d = new Date(user.created_at); d.setFullYear(d.getFullYear() + 1); return d; })();
                          const isExpired = expirationDate < new Date();
                          return (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name}</TableCell>
                              <TableCell className="text-muted-foreground">{user.email}</TableCell>
                              <TableCell className="text-muted-foreground">{user.phone}</TableCell>
                              <TableCell className="text-muted-foreground text-sm">{formatDate(user.created_at)}</TableCell>
                              <TableCell className="text-sm">
                                <span className={isExpired ? 'text-destructive font-medium' : 'text-muted-foreground'}>
                                  {formatDate(expirationDate.toISOString())}
                                  {isExpired && ` (${t('admin.expired')})`}
                                </span>
                              </TableCell>
                              <TableCell>
                                {user.payment_method === 'pix' && <Badge variant="outline" className="border-primary/50 text-primary"><QrCode className="h-3 w-3 mr-1" />PIX</Badge>}
                                {user.payment_method === 'cartao' && <Badge variant="outline" className="border-blue-500/50 text-blue-400"><CreditCard className="h-3 w-3 mr-1" />{language === 'pt' ? 'Cartão' : 'Card'}</Badge>}
                                {!user.payment_method && <span className="text-muted-foreground text-sm">-</span>}
                              </TableCell>
                              <TableCell>
                                {user.has_paid ? (
                                  <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30"><CheckCircle className="h-3 w-3 mr-1" />{t('admin.released')}</Badge>
                                ) : (
                                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-500"><XCircle className="h-3 w-3 mr-1" />{t('admin.pending')}</Badge>
                                )}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                  {isExpired && user.has_paid && (
                                    <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white" onClick={() => renewAccess(user.id)} disabled={updating === user.id}>
                                      {updating === user.id ? <RefreshCw className="h-4 w-4 animate-spin" /> : <><RotateCcw className="h-4 w-4 mr-1" />{t('admin.renew')}</>}
                                    </Button>
                                  )}
                                  <Button size="sm" variant={user.has_paid ? 'destructive' : 'default'} onClick={() => togglePaymentStatus(user.id, user.has_paid)} disabled={updating === user.id}>
                                    {updating === user.id ? <RefreshCw className="h-4 w-4 animate-spin" /> : user.has_paid ? t('admin.revoke') : t('admin.release')}
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
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card className="border-primary/20 bg-card/50">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Receipt className="h-5 w-5 text-primary" />
                    {language === 'pt' ? 'Histórico de Pagamentos' : 'Payment History'}
                  </CardTitle>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder={language === 'pt' ? 'Buscar por email, ID...' : 'Search by email, ID...'} value={paymentSearch} onChange={(e) => setPaymentSearch(e.target.value)} className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon" onClick={fetchPayments} disabled={paymentsLoading}>
                      <RefreshCw className={`h-4 w-4 ${paymentsLoading ? 'animate-spin' : ''}`} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {paymentsLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-2"></div>
                  </div>
                ) : filteredPayments.length === 0 ? (
                  <p className="text-center py-8 text-muted-foreground">{language === 'pt' ? 'Nenhum pagamento encontrado' : 'No payments found'}</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Email</TableHead>
                          <TableHead>MP ID</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>{language === 'pt' ? 'Método' : 'Method'}</TableHead>
                          <TableHead>{language === 'pt' ? 'Valor' : 'Amount'}</TableHead>
                          <TableHead>{language === 'pt' ? 'Data' : 'Date'}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPayments.map(p => (
                          <TableRow key={p.id}>
                            <TableCell className="text-muted-foreground text-sm">{getUserEmail(p.user_id)}</TableCell>
                            <TableCell className="font-mono text-xs text-muted-foreground">{p.mp_payment_id}</TableCell>
                            <TableCell>
                              <Badge className={p.status === 'approved' ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'}>{p.status}</Badge>
                            </TableCell>
                            <TableCell>
                              {p.method === 'pix' && <Badge variant="outline" className="border-primary/50 text-primary">PIX</Badge>}
                              {p.method === 'cartao' && <Badge variant="outline" className="border-blue-500/50 text-blue-400">{language === 'pt' ? 'Cartão' : 'Card'}</Badge>}
                              {(!p.method || p.method === 'outro') && <span className="text-muted-foreground text-sm">-</span>}
                            </TableCell>
                            <TableCell className="text-white font-medium">R$ {Number(p.amount).toFixed(2)}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{formatDate(p.created_at)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <AdminSecurityTab language={language} users={users.map(u => ({ id: u.id, name: u.name, email: u.email }))} />
          </TabsContent>
        </Tabs>

        {/* Instructions */}
        <Card className="mt-8 border-primary/20 bg-card/50">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              {t('admin.instructions')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>• <strong>{t('admin.release')}:</strong> {t('admin.instructionRelease')}</p>
            <p>• <strong>{t('admin.revoke')}:</strong> {t('admin.instructionRevoke')}</p>
            <p>• <strong>{t('admin.renew')}:</strong> {t('admin.instructionRenew')}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminPage;
