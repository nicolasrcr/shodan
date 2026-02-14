import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { isAccessActive, getExpirationDate } from "@/lib/access";
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
import LanguageToggle from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import { LogOut, User, CheckCircle, Circle, Play } from "lucide-react";

const CursoPage = () => {
  const navigate = useNavigate();
  const { user, profile, loading, signOut } = useAuth();
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const { markSeen, toggleCompleted, getLastSeenSection, progressStats, isSectionCompleted } = useCourseProgress();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    markSeen(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleContinue = () => {
    const lastSeen = getLastSeenSection();
    if (lastSeen) handleNavigate(lastSeen);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center">
        <div className="text-center">
          <span className="text-5xl font-serif text-primary animate-pulse">柔道</span>
          <p className="text-muted-foreground mt-4">{t("common.loading")}</p>
        </div>
      </div>
    );
  }

  if (!user) return null;
  if (!profile?.has_paid) return <PaymentRequired />;

  const expirationDate = getExpirationDate(profile);
  if (expirationDate < new Date()) {
    return <AccessExpired expirationDate={expirationDate} />;
  }

  const stats = progressStats();

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <HomeSection onNavigate={handleNavigate} />;
      case "historia": return <HistoriaSection />;
      case "principios": return <PrincipiosSection />;
      case "etiqueta": return <EtiquetaSection />;
      case "nomenclatura": return <NomenclaturaSection />;
      case "gokyo": return <GokyoSection />;
      case "katameWaza": return <KatameWazaSection />;
      case "katas": return <KatasSection />;
      case "nageNoKata": return <NageNoKataSection />;
      case "katameNoKata": return <KatameNoKataSection />;
      case "treinos": return <TreinosSection />;
      case "placar": return <PlacarSection />;
      case "regras": return <RegrasSection />;
      case "regras2025": return <Regras2025Section />;
      case "organizacao": return <OrganizacaoSection />;
      case "escolar": return <EscolarSection />;
      case "socorros": return <SocorrosSection />;
      case "inclusivo": return <InclusivoSection />;
      case "videos": return <VideosSection />;
      case "quizzes": return <QuizzesSection />;
      case "flashcardsMenu": return <FlashcardsSection />;
      default: return <ComingSoonSection section={activeSection} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => handleNavigate('home')}>
              <span className="text-4xl md:text-5xl font-serif text-primary transition-transform group-hover:scale-105">柔道</span>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white">{t("header.title")}</h1>
                <p className="text-xs text-foreground/70">{t("header.subtitle")}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <button onClick={() => navigate('/conta')} className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <User className="w-4 h-4" />
                <span>{profile?.name?.split(' ')[0]}</span>
              </button>
              <Button onClick={handleSignOut} variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-secondary">
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{t("common.logout")}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Progress bar + Continue */}
        {activeSection === 'home' && (
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">{language === 'pt' ? 'Progresso' : 'Progress'}: {stats.completed}/{stats.total}</span>
                <span className="text-xs font-bold text-primary">{stats.percentage}%</span>
              </div>
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${stats.percentage}%` }} />
              </div>
            </div>
            {getLastSeenSection() && (
              <Button onClick={handleContinue} size="sm" className="btn-gold whitespace-nowrap">
                <Play className="w-4 h-4 mr-1" />
                {language === 'pt' ? 'Continuar' : 'Continue'}
              </Button>
            )}
          </div>
        )}

        <PageTransition activeKey={activeSection}>
          {renderSection()}
        </PageTransition>

        {/* Mark complete button for content sections */}
        {activeSection !== 'home' && activeSection !== 'quizzes' && activeSection !== 'flashcardsMenu' && (
          <div className="mt-8 text-center">
            <Button
              onClick={() => toggleCompleted(activeSection)}
              variant="outline"
              className={`gap-2 ${isSectionCompleted(activeSection) ? 'border-green-500/50 text-green-500' : 'border-primary/50 text-primary'}`}
            >
              {isSectionCompleted(activeSection) ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              {isSectionCompleted(activeSection)
                ? (language === 'pt' ? 'Concluído ✓' : 'Completed ✓')
                : (language === 'pt' ? 'Marcar como concluído' : 'Mark as completed')}
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-3xl font-serif text-primary mb-3">柔道</p>
          <p className="text-sm text-muted-foreground mb-2">"{t("footer.quote")}"</p>
          <p className="text-xs text-muted-foreground/60">{t("footer.courseDescription")}</p>
        </div>
      </footer>
    </div>
  );
};

export default CursoPage;
