import { sections } from "@/data/judoData";
import { useLanguage } from "@/contexts/LanguageContext";

interface ComingSoonSectionProps {
  section: string;
  onNavigate: (section: string) => void;
}

const ComingSoonSection = ({ section, onNavigate }: ComingSoonSectionProps) => {
  const { t, language } = useLanguage();
  const sectionInfo = sections.find(s => s.id === section);

  const getLabel = (s: typeof sections[0]) => language === 'en' ? s.labelEn : s.label;
  
  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">{sectionInfo?.icon || '📖'}</span>
        {sectionInfo ? getLabel(sectionInfo) : 'Seção'}
      </h2>

      <div className="card-judo text-center py-16">
        <span className="text-6xl mb-6 block">{sectionInfo?.icon || '🥋'}</span>
        <h3 className="text-2xl font-semibold text-white mb-4">
          {t("comingSoon.title")}
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t("comingSoon.description")} {sectionInfo ? getLabel(sectionInfo).toLowerCase() : ''}.
          {t("comingSoon.backSoon")}
        </p>
        <button 
          onClick={() => onNavigate('home')}
          className="btn-gold"
        >
          {t("comingSoon.backToHome")}
        </button>
      </div>

      {/* Quick Navigation */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-primary mb-5">{t("comingSoon.availableSections")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {['historia', 'principios', 'etiqueta', 'gokyo', 'katameWaza', 'regras'].map((id) => {
            const s = sections.find(sec => sec.id === id);
            return s ? (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="p-4 bg-card border border-primary/20 rounded-xl text-left hover:border-primary/50 transition-colors group"
              >
                <span className="text-2xl font-serif text-primary block mb-2">{s.icon}</span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">{getLabel(s)}</span>
              </button>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
