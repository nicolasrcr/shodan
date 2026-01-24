import { useState } from "react";
import Header from "@/components/Header";
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
import OrganizacaoSection from "@/components/OrganizacaoSection";
import EscolarSection from "@/components/EscolarSection";
import SocorrosSection from "@/components/SocorrosSection";
import InclusivoSection from "@/components/InclusivoSection";
import VideosSection from "@/components/VideosSection";
import QuizzesSection from "@/components/QuizzesSection";
import FlashcardsSection from "@/components/FlashcardsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <Header onNavigate={handleNavigate} />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {renderSection()}
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

export default Index;
