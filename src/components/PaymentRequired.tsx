import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, CreditCard, Smartphone, LogOut, Check } from "lucide-react";

const PaymentRequired = () => {
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();
  const [showPixModal, setShowPixModal] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">Exame Shodan</h1>
              <p className="text-xs text-foreground/70">Olá, {profile?.name?.split(' ')[0]}!</p>
            </div>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary hover:text-secondary"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Lock Icon */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Acesso ao Curso <span className="text-primary">Bloqueado</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Seu cadastro foi realizado com sucesso! Para liberar o acesso completo ao conteúdo, 
            finalize o pagamento abaixo.
          </p>
        </div>

        {/* Payment Card */}
        <Card className="card-red rounded-3xl overflow-hidden mb-8">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Guia Completo Exame Shodan</h2>
              <p className="text-muted-foreground mb-6">Acesso por 1 ano a todo o conteúdo</p>
              
              <ul className="space-y-2 text-sm text-muted-foreground mb-8 inline-block text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> 17 módulos completos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Flashcards e Quizzes interativos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Vídeos demonstrativos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" /> Atualizações incluídas
                </li>
              </ul>

              <div className="mb-8">
                <div className="text-muted-foreground line-through text-lg mb-1">R$ 397</div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  R$ 197
                </div>
                <p className="text-sm text-muted-foreground">pagamento único</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    // TODO: Integrate with Stripe for card payment
                    alert('Integração com cartão será implementada com Stripe');
                  }}
                  className="btn-gold text-lg py-6 px-8"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pagar com Cartão
                </Button>
                <Button 
                  onClick={() => setShowPixModal(true)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-secondary text-lg py-6 px-8"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Pagar com PIX
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Problemas com o pagamento? Entre em contato pelo{' '}
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
                <p className="text-sm text-muted-foreground mb-2">Valor:</p>
                <p className="text-2xl font-bold text-primary">R$ 197,00</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Seu email cadastrado:</p>
                <p className="text-white font-mono text-sm">{profile?.email}</p>
              </div>
              <div className="bg-primary/20 border border-primary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">WhatsApp para enviar comprovante:</p>
                <a 
                  href="https://wa.me/5561996634944" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-lg hover:underline"
                >
                  (61) 99663-4944
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                Após o pagamento, envie o comprovante para nosso WhatsApp informando seu email cadastrado. 
                A liberação será feita em até 24 horas.
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

export default PaymentRequired;
