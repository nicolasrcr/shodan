import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, CreditCard, Smartphone, LogOut, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import LanguageToggle from "@/components/LanguageToggle";

const PaymentRequired = () => {
  const navigate = useNavigate();
  const { profile, user, signOut } = useAuth();
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState<'pix' | 'cartao' | null>(null);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handlePayment = async (method: 'pix' | 'cartao') => {
    if (!user || !profile) {
      toast.error(t("common.error"));
      return;
    }

    setIsProcessing(method);
    try {
      const { data, error } = await supabase.functions.invoke('mercadopago-checkout', {
        body: {
          type: 'new',
          preferredMethod: method,
        },
      });

      if (error) throw error;

      if (data?.initPoint) {
        window.location.href = data.initPoint;
      } else {
        throw new Error('Payment link error');
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      toast.error(error.message || t("common.error"));
    } finally {
      setIsProcessing(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">{t("header.title")}</h1>
              <p className="text-xs text-foreground/70">{t("common.hello")}, {profile?.name?.split(' ')[0]}!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button
              onClick={handleSignOut}
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary hover:text-secondary"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t("common.logout")}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Lock Icon */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("payment.accessBlocked")} <span className="text-primary">{t("payment.blocked")}</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("payment.registrationSuccess")}
          </p>
        </div>

        {/* Payment Card */}
        <Card className="card-red rounded-3xl overflow-hidden mb-8">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{t("payment.completeGuide")}</h2>
              <p className="text-muted-foreground mb-6">{t("payment.oneYearAccess")}</p>
              
              <ul className="space-y-2 text-sm text-muted-foreground mb-8 inline-block text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("payment.17modules")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("payment.flashcardsQuizzes")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("payment.demoVideos")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> {t("payment.updatesIncluded")}
                </li>
              </ul>

              <div className="mb-8">
                <div className="text-muted-foreground line-through text-lg mb-1">R$ 397</div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  R$ 197
                </div>
                <p className="text-sm text-muted-foreground">{t("pricing.singlePayment")}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => handlePayment('cartao')}
                  disabled={isProcessing !== null}
                  className="btn-gold text-lg py-6 px-8"
                >
                  {isProcessing === 'cartao' ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <CreditCard className="w-5 h-5 mr-2" />
                  )}
                  {isProcessing === 'cartao' ? t("common.processing") : t("payment.payWithCard")}
                </Button>
                <Button 
                  onClick={() => handlePayment('pix')}
                  disabled={isProcessing !== null}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-secondary text-lg py-6 px-8"
                >
                  {isProcessing === 'pix' ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Smartphone className="w-5 h-5 mr-2" />
                  )}
                  {isProcessing === 'pix' ? t("common.processing") : t("payment.payWithPix")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            {t("payment.paymentProblems")}{' '}
            <a 
              href="https://wa.me/5561996634944" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              WhatsApp (61) 99663-4944
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default PaymentRequired;
