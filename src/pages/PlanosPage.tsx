import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, Crown, ArrowLeft, Smartphone, CreditCard, Loader2 } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import { toast } from "sonner";

const PlanosPage = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const handlePayment = async (type: 'new' | 'renewal', method: 'pix' | 'cartao') => {
    if (!user || !profile) {
      navigate('/cadastro');
      return;
    }

    setIsProcessing(`${type}-${method}`);
    try {
      const { data, error } = await supabase.functions.invoke('mercadopago-checkout', {
        body: {
          type,
          userId: user.id,
          userEmail: profile.email,
          userName: profile.name,
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
      setIsProcessing(null);
    }
  };

  const plans = [
    {
      name: t("plans.renewal"),
      price: t("plans.renewalPrice"),
      originalPrice: null,
      period: t("plans.renewalPeriod"),
      description: t("plans.renewalDescription"),
      icon: Star,
      features: [
        t("plans.renewalFeature1"),
        t("plans.renewalFeature2"),
        t("plans.renewalFeature3"),
        t("plans.renewalFeature4"),
        t("plans.renewalFeature5")
      ],
      highlight: false,
      type: 'renewal' as const,
    },
    {
      name: t("plans.fullAccess"),
      price: t("plans.fullAccessPrice"),
      originalPrice: t("plans.fullAccessOriginal"),
      period: t("plans.fullAccessPeriod"),
      description: t("plans.fullAccessDescription"),
      icon: Crown,
      features: [
        t("plans.fullAccessFeature1"),
        t("plans.fullAccessFeature2"),
        t("plans.fullAccessFeature3"),
        t("plans.fullAccessFeature4"),
        t("plans.fullAccessFeature5"),
        t("plans.fullAccessFeature6"),
        t("plans.fullAccessFeature7"),
        t("plans.fullAccessFeature8")
      ],
      highlight: true,
      type: 'new' as const,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">{t("plans.title")}</h1>
              <p className="text-xs text-foreground/70">{t("plans.subtitle")}</p>
            </div>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("plans.investTitle")} <span className="text-primary">{t("plans.investHighlight")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("plans.description")}</p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.highlight 
                  ? 'card-red border-2 border-primary shadow-2xl shadow-primary/20' 
                  : 'bg-card/50 border-border/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-secondary px-4 py-1 text-sm font-bold rounded-bl-lg">
                  {t("plans.mostPopular")}
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-primary/20' : 'bg-muted'}`}>
                  <plan.icon className={`w-8 h-8 ${plan.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-muted-foreground line-through text-lg mb-1">R$ {plan.originalPrice}</div>
                  )}
                  <div className={`text-4xl font-bold ${plan.highlight ? 'text-primary' : 'text-white'}`}>R$ {plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-primary' : 'text-green-500'}`} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => handlePayment(plan.type, 'cartao')}
                    disabled={isProcessing !== null}
                    className={plan.highlight ? 'btn-gold' : 'bg-muted hover:bg-muted/80'}
                    size="lg"
                  >
                    {isProcessing === `${plan.type}-cartao` ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CreditCard className="w-4 h-4 mr-2" />}
                    {t("payment.payWithCard")}
                  </Button>
                  <Button 
                    onClick={() => handlePayment(plan.type, 'pix')}
                    disabled={isProcessing !== null}
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary hover:text-secondary"
                  >
                    {isProcessing === `${plan.type}-pix` ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Smartphone className="w-4 h-4 mr-2" />}
                    {t("payment.payWithPix")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">{t("plans.faq")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">{t("plans.faqAccess")}</h4>
              <p className="text-sm text-muted-foreground">{t("plans.faqAccessAnswer")}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">{t("plans.faqMobile")}</h4>
              <p className="text-sm text-muted-foreground">{t("plans.faqMobileAnswer")}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">{t("plans.faqExpire")}</h4>
              <p className="text-sm text-muted-foreground">{t("plans.faqExpireAnswer")}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">{t("plans.faqSupport")}</h4>
              <p className="text-sm text-muted-foreground">{t("plans.faqSupportAnswer")}</p>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>
            {t("plans.questions")}{' '}
            <a href="https://wa.me/5561996634944" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              WhatsApp (61) 99663-4944
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default PlanosPage;
