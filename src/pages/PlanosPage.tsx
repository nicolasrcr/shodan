import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, Crown, ArrowLeft, Smartphone, CreditCard } from "lucide-react";

const PlanosPage = () => {
  const navigate = useNavigate();
  const [showPixModal, setShowPixModal] = useState(false);

  const plans = [
    {
      name: "Renovação",
      price: "99,90",
      originalPrice: null,
      period: "por ano",
      description: "Para quem já é aluno e quer continuar estudando",
      icon: Star,
      features: [
        "Renovação por mais 1 ano",
        "Acesso a todo conteúdo atualizado",
        "Novas regras 2025 inclusas",
        "Quizzes e Flashcards",
        "Suporte via WhatsApp"
      ],
      highlight: false,
      cta: "Renovar Acesso"
    },
    {
      name: "Acesso Completo",
      price: "197",
      originalPrice: "397",
      period: "pagamento único",
      description: "Ideal para quem vai fazer o exame de Shodan",
      icon: Crown,
      features: [
        "Acesso por 1 ano completo",
        "17 módulos de conteúdo",
        "Flashcards interativos",
        "Quizzes com 175+ perguntas",
        "Vídeos demonstrativos",
        "Sistema de Placar e Regras 2025",
        "Suporte prioritário via WhatsApp",
        "Atualizações durante o período"
      ],
      highlight: true,
      cta: "Começar Agora"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">Planos e Preços</h1>
              <p className="text-xs text-foreground/70">Escolha o melhor para você</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Invista no seu <span className="text-primary">futuro no Judô</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua jornada rumo à faixa preta. 
            Todo o conhecimento que você precisa para o exame de Shodan.
          </p>
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
                  MAIS POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  plan.highlight ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-muted-foreground line-through text-lg mb-1">
                      R$ {plan.originalPrice}
                    </div>
                  )}
                  <div className={`text-4xl font-bold ${plan.highlight ? 'text-primary' : 'text-white'}`}>
                    R$ {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? 'text-primary' : 'text-green-500'
                      }`} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => navigate('/cadastro')}
                    className={plan.highlight ? 'btn-gold' : 'bg-muted hover:bg-muted/80'}
                    size="lg"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    {plan.cta}
                  </Button>
                  <Button 
                    onClick={() => setShowPixModal(true)}
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary hover:text-secondary"
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Pagar com PIX
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Como funciona o acesso?</h4>
              <p className="text-sm text-muted-foreground">
                Após o pagamento confirmado, você terá acesso imediato a todo o conteúdo por 1 ano completo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Posso acessar pelo celular?</h4>
              <p className="text-sm text-muted-foreground">
                Sim! O curso é 100% responsivo e funciona em qualquer dispositivo com internet.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">E se meu acesso expirar?</h4>
              <p className="text-sm text-muted-foreground">
                Você pode renovar por apenas R$ 99,90/ano e continuar estudando com as atualizações.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Tem suporte?</h4>
              <p className="text-sm text-muted-foreground">
                Sim! Suporte via WhatsApp (61) 99663-4944 para dúvidas sobre conteúdo ou acesso.
              </p>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>
            Dúvidas? Fale conosco pelo{' '}
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

      {/* PIX Modal */}
      {showPixModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full bg-card border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Pagamento via PIX</h3>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Chave PIX (CNPJ):</p>
                <p className="text-primary font-mono break-all">62.333.509/0001-03</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Valores:</p>
                <p className="text-lg text-white">Acesso Completo: <span className="text-primary font-bold">R$ 197,00</span></p>
                <p className="text-lg text-white">Renovação: <span className="text-primary font-bold">R$ 99,90</span></p>
              </div>
              <div className="bg-primary/20 border border-primary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Após o pagamento, envie o comprovante:</p>
                <a 
                  href="https://wa.me/5561996634944" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-lg hover:underline"
                >
                  WhatsApp (61) 99663-4944
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Informe seu nome e email cadastrado. A liberação será feita em até 24 horas.
              </p>
              <Button 
                onClick={() => setShowPixModal(false)}
                className="w-full btn-gold"
              >
                Entendido
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PlanosPage;
