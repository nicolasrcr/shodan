import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Star, Shield, Clock, Award, Users, BookOpen, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import shodanImage from "@/assets/shodan-hero.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showPixModal, setShowPixModal] = useState(false);

  const benefits = [
    { icon: BookOpen, text: "17 seções de conteúdo completo" },
    { icon: Video, text: "Vídeos demonstrativos" },
    { icon: Award, text: "Flashcards para memorização" },
    { icon: Users, text: "Quizzes interativos" },
    { icon: Shield, text: "Acesso por 1 ano" },
    { icon: Clock, text: "Estude no seu ritmo" },
  ];

  const modules = [
    "História do Judô e Jigoro Kano",
    "Princípios e Filosofia",
    "Etiqueta e Conduta no Dojo",
    "Nomenclatura Japonesa Completa",
    "Gokyo - 40 Técnicas de Projeção",
    "Katame-Waza - Técnicas de Solo",
    "Nage no Kata - 15 Técnicas",
    "Katame no Kata - 15 Técnicas",
    "Regras de Arbitragem 2025",
    "Organização Desportiva",
    "Judô Escolar e Inclusivo",
    "Primeiros Socorros no Tatame",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">Exame Shodan</h1>
              <p className="text-xs text-foreground/70">Preparação para Faixa Preta</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/login')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-secondary"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                <span className="text-primary text-sm font-semibold">🥋 Curso Completo</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Domine o Conteúdo do
                <span className="text-primary block">Exame Shodan</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                O guia mais completo para sua preparação para a Faixa Preta 1º Dan. 
                Todo o conhecimento teórico que você precisa em um só lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/cadastro')}
                  className="btn-gold text-lg px-8 py-6"
                >
                  Quero Me Preparar Agora
                </Button>
                <Button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6"
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-primary/30 shadow-gold">
                <img 
                  src={shodanImage} 
                  alt="Shodan - Exame Faixa Preta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-xl p-4 shadow-lg">
                <p className="text-primary font-serif text-2xl">初段</p>
                <p className="text-xs text-muted-foreground">Primeiro Dan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            O que você vai <span className="text-primary">encontrar</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-judo group">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Conteúdo <span className="text-primary">Completo</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Tudo que você precisa saber para o exame teórico, organizado de forma didática
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-primary/10">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Investimento <span className="text-primary">Acessível</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Acesso completo por 1 ano por um valor único
          </p>
          
          <Card className="card-red rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Guia Completo Exame Shodan</h3>
                  <p className="text-muted-foreground mb-4">Acesso por 1 ano a todo o conteúdo</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> 17 módulos completos
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> Flashcards e Quizzes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" /> Atualizações incluídas
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="mb-2">
                    <span className="text-muted-foreground line-through text-lg">R$ 397</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    R$ 197
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    pagamento único
                  </p>
                  <div className="space-y-3">
                    <Button 
                      onClick={() => navigate('/cadastro')}
                      className="btn-gold w-full text-lg py-6"
                    >
                      💳 Pagar com Cartão
                    </Button>
                    <Button 
                      onClick={() => setShowPixModal(true)}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-secondary py-6"
                    >
                      📱 Pagar com PIX
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-primary italic mb-4">
            "O objetivo final do Judô não é a vitória sobre os outros, mas o aperfeiçoamento de si mesmo."
          </p>
          <p className="text-muted-foreground">— Jigoro Kano</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-3xl font-serif text-primary mb-3">柔道</p>
          <p className="text-sm text-muted-foreground mb-2">
            "Máxima eficiência com mínimo esforço. Prosperidade e benefícios mútuos."
          </p>
          <p className="text-xs text-muted-foreground/60 mb-4">
            Guia de Preparação para Exame Shodan - Faixa Preta 1º Dan
          </p>
          <a 
            href="https://wa.me/5561996634944" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            <span>📱</span> WhatsApp: (61) 99663-4944
          </a>
        </div>
      </footer>

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
                Após o pagamento, envie o comprovante para nosso WhatsApp para liberação do acesso.
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => setShowPixModal(false)}
                  variant="outline"
                  className="flex-1 border-primary/50 text-primary"
                >
                  Fechar
                </Button>
                <Button 
                  onClick={() => navigate('/cadastro')}
                  className="flex-1 btn-gold"
                >
                  Fazer Cadastro
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
