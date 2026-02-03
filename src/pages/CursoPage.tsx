import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import HistoriaSection from "@/components/HistoriaSection";
import PrincipiosSection from "@/components/PrincipiosSection";
import EtiquetaSection from "@/components/EtiquetaSection";
import GokyoSection from "@/components/GokyoSection";
import KatameWazaSection from "@/components/KatameWazaSection";
import RegrasSection from "@/components/RegrasSection";
import Regras2025Section from "@/components/Regras2025Section";
import ComingSoonSection from "@/components/ComingSoonSection";
import NomenclaturaSection from "@/components/NomenclaturaSection";
import KatasSection from "@/components/KatasSection";
import NageNoKataSection from "@/components/NageNoKataSection";
import KatameNoKataSection from "@/components/KatameNoKataSection";
import TreinosSection from "@/components/TreinosSection";
import PlacarSection from "@/components/PlacarSection";
import OrganizacaoSection from "@/components/OrganizacaoSection";
import EscolarSection from "@/components/EscolarSection";
import SocorrosSection from "@/components/SocorrosSection";
import InclusivoSection from "@/components/InclusivoSection";
import VideosSection from "@/components/VideosSection";
import QuizzesSection from "@/components/QuizzesSection";
import FlashcardsSection from "@/components/FlashcardsSection";
import PaymentRequired from "@/components/PaymentRequired";
import AccessExpired from "@/components/AccessExpired";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

const CursoPage = () => {
  const navigate = useNavigate();
  const { user, profile, loading, signOut } = useAuth();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center">
        <div className="text-center">
          <span className="text-5xl font-serif text-primary animate-pulse">柔道</span>
          <p className="text-muted-foreground mt-4">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Check if user has paid
  if (!profile?.has_paid) {
    return <PaymentRequired />;
  }

  // Check if access has expired using access_expires_at column
  const expirationDate = profile.access_expires_at 
    ? new Date(profile.access_expires_at)
    : (() => {
        const d = new Date(profile.created_at);
        d.setFullYear(d.getFullYear() + 1);
        return d;
      })();
  
  if (expirationDate < new Date()) {
    return <AccessExpired expirationDate={expirationDate} />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onNavigate={handleNavigate} />;
      case "historia":
        return <HistoriaSection />;
      case "principios":
        return <PrincipiosSection />;
      case "etiqueta":
        return <EtiquetaSection />;
      case "nomenclatura":
        return <NomenclaturaSection />;
      case "gokyo":
        return <GokyoSection />;
      case "katameWaza":
        return <KatameWazaSection />;
      case "katas":
        return <KatasSection />;
      case "nageNoKata":
        return <NageNoKataSection />;
      case "katameNoKata":
        return <KatameNoKataSection />;
      case "treinos":
        return <TreinosSection />;
      case "placar":
        return <PlacarSection />;
      case "regras":
        return <RegrasSection />;
      case "regras2025":
        return <Regras2025Section />;
      case "organizacao":
        return <OrganizacaoSection />;
      case "escolar":
        return <EscolarSection />;
      case "socorros":
        return <SocorrosSection />;
      case "inclusivo":
        return <InclusivoSection />;
      case "videos":
        return <VideosSection />;
      case "quizzes":
        return <QuizzesSection />;
      case "flashcardsMenu":
        return <FlashcardsSection />;
      default:
        return <ComingSoonSection section={activeSection} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Custom Header with User Info */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => handleNavigate('home')}
            >
              <span className="text-4xl md:text-5xl font-serif text-primary transition-transform group-hover:scale-105">
                柔道
              </span>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white">Exame Shodan</h1>
                <p className="text-xs text-foreground/70">Preparação para Faixa Preta</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{profile?.name?.split(' ')[0]}</span>
              </div>
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary hover:text-secondary"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <PageTransition activeKey={activeSection}>
          {renderSection()}
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-3xl font-serif text-primary mb-3">柔道</p>
          <p className="text-sm text-muted-foreground mb-2">
            "Máxima eficiência com mínimo esforço. Prosperidade e benefícios mútuos."
          </p>
          <p className="text-xs text-muted-foreground/60">
            Guia de Preparação para Exame Shodan - Faixa Preta 1º Dan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CursoPage;
