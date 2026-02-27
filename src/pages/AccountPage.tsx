import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { getExpirationDate } from "@/lib/access";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogOut, BookOpen, BarChart3, CreditCard, Smartphone, Clock, MessageCircle, Loader2, RotateCcw } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import { toast } from "sonner";

const AccountPage = () => {
  const navigate = useNavigate();
  const { user, profile, loading, signOut } = useAuth();
  const { t, language } = useLanguage();
  const [lastPayment, setLastPayment] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate('/login');
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      supabase
        .from('payments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .then(({ data }) => {
          if (data && data.length > 0) setLastPayment(data[0]);
        });
    }
  }, [user]);

  const handleRenewal = async (method: 'pix' | 'cartao') => {
    if (!user || !profile) return;
    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('mercadopago-checkout', {
        body: {
          type: 'renewal',
          preferredMethod: method,
        },
      });
      if (error) throw error;
      if (data?.initPoint) {
        window.location.href = data.initPoint;
      }
    } catch (error: any) {
      toast.error(error.message || 'Erro ao processar');
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading || !user || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center">
        <span className="text-5xl font-serif text-primary animate-pulse">柔道</span>
      </div>
    );
  }

  const expDate = getExpirationDate(profile);
  const isExpired = expDate < new Date();
  const formatDate = (d: Date) => d.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">{language === 'pt' ? 'Minha Conta' : 'My Account'}</h1>
              <p className="text-xs text-foreground/70">{profile.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button onClick={() => { signOut(); navigate('/'); }} variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-secondary">
              <LogOut className="w-4 h-4 mr-2" />
              {t("common.logout")}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Status Card */}
        <Card className="border-primary/20 bg-card/50">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              {language === 'pt' ? 'Status do Acesso' : 'Access Status'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">{language === 'pt' ? 'Status' : 'Status'}</p>
                <p className={`text-lg font-bold ${profile.has_paid ? (isExpired ? 'text-destructive' : 'text-green-500') : 'text-orange-500'}`}>
                  {profile.has_paid ? (isExpired ? (language === 'pt' ? 'Expirado' : 'Expired') : (language === 'pt' ? 'Ativo' : 'Active')) : (language === 'pt' ? 'Pendente' : 'Pending')}
                </p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">{language === 'pt' ? 'Expira em' : 'Expires on'}</p>
                <p className={`text-lg font-bold ${isExpired ? 'text-destructive' : 'text-white'}`}>
                  {formatDate(expDate)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Last Payment */}
        {lastPayment && (
          <Card className="border-primary/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                {language === 'pt' ? 'Último Pagamento' : 'Last Payment'}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">{language === 'pt' ? 'Valor' : 'Amount'}</p>
                  <p className="text-lg font-bold text-primary">R$ {Number(lastPayment.amount).toFixed(2)}</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">{language === 'pt' ? 'Método' : 'Method'}</p>
                  <p className="text-lg font-bold text-white">{lastPayment.method === 'pix' ? 'PIX' : lastPayment.method === 'cartao' ? (language === 'pt' ? 'Cartão' : 'Card') : 'Outro'}</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">{language === 'pt' ? 'Data' : 'Date'}</p>
                  <p className="text-lg font-bold text-white">{formatDate(new Date(lastPayment.created_at))}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Button onClick={() => navigate('/curso')} className="btn-gold py-6 text-lg">
            <BookOpen className="w-5 h-5 mr-2" />
            {language === 'pt' ? 'Ir para o Curso' : 'Go to Course'}
          </Button>
          <Button onClick={() => navigate('/desempenho')} variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-secondary py-6 text-lg">
            <BarChart3 className="w-5 h-5 mr-2" />
            {language === 'pt' ? 'Meu Desempenho' : 'My Performance'}
          </Button>
        </div>

        {/* Renewal */}
        {profile.has_paid && (
          <Card className="border-primary/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-primary" />
                {language === 'pt' ? 'Renovar Acesso' : 'Renew Access'}
              </h2>
              <p className="text-muted-foreground mb-4">
                {language === 'pt' ? 'Renove por mais 1 ano por apenas R$ 99,90' : 'Renew for 1 more year for only R$ 99.90'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => handleRenewal('cartao')} disabled={isProcessing} className="btn-gold">
                  {isProcessing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CreditCard className="w-4 h-4 mr-2" />}
                  {language === 'pt' ? 'Renovar com Cartão' : 'Renew with Card'}
                </Button>
                <Button onClick={() => handleRenewal('pix')} disabled={isProcessing} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary">
                  {isProcessing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Smartphone className="w-4 h-4 mr-2" />}
                  {language === 'pt' ? 'Renovar com PIX' : 'Renew with PIX'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Support */}
        <Card className="border-primary/20 bg-card/50">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-white mb-2">{language === 'pt' ? 'Suporte' : 'Support'}</h3>
            <a href="https://wa.me/5561996634944" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              WhatsApp (61) 99663-4944
            </a>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AccountPage;
