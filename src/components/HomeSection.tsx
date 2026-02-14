import { homeCards, sections } from "@/data/judoData";
import SearchBar from "./SearchBar";
import { useLanguage } from "@/contexts/LanguageContext";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const homeCardsEn = [
  { desc: 'Jigoro Kano, Kodokan and origins', section: 'historia' },
  { desc: 'Philosophy and moral code', section: 'principios' },
  { desc: 'Conduct, bowing and dojo', section: 'etiqueta' },
  { desc: 'Japanese terms', section: 'nomenclatura' },
  { desc: '40 throwing techniques', section: 'gokyo' },
  { desc: 'Ground techniques', section: 'katameWaza' },
  { desc: 'Nage-no-Kata and Katame-no-Kata', section: 'katas' },
  { desc: '15 techniques in 5 groups', section: 'nageNoKata' },
  { desc: '15 techniques in 3 groups', section: 'katameNoKata' },
  { desc: 'Uchi-komi, Randori and methods', section: 'treinos' },
  { desc: 'Scoring and penalties', section: 'placar' },
  { desc: 'Refereeing and scoring', section: 'regras' },
  { desc: 'New IJF rules', section: 'regras2025' },
  { desc: 'Federations and categories', section: 'organizacao' },
  { desc: 'Pedagogy and kids belts', section: 'escolar' },
  { desc: 'Emergencies on tatami', section: 'socorros' },
  { desc: 'ASD, ADHD and adaptations', section: 'inclusivo' },
  { desc: 'Demo playlist', section: 'videos' },
];

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  const { t, language } = useLanguage();

  const cards = homeCards.map((card) => {
    const sectionData = sections.find(s => s.id === card.section);
    const enData = homeCardsEn.find(e => e.section === card.section);
    return {
      ...card,
      title: language === 'en' && sectionData ? sectionData.labelEn : card.title,
      desc: language === 'en' && enData ? enData.desc : card.desc,
    };
  });

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white p-1 shadow-gold animate-pulse-gold flex items-center justify-center">
          <span className="text-5xl font-serif text-secondary">柔道</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light text-white mb-3">
          {t("hero.title1")} <span className="text-primary font-bold">{t("hero.title2")}</span>
        </h1>
        <p className="text-muted-foreground mb-3">{t("hero.description")}</p>
        <p className="text-primary italic text-sm max-w-xl mx-auto">
          {t("quote.text")}
          <span className="block mt-1 text-muted-foreground not-italic">{t("quote.author")}</span>
        </p>
      </div>

      {/* Search */}
      <SearchBar onNavigate={onNavigate} />

      {/* Cards Grid - 5 columns on xl to match reference design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
        {cards.map((card) => (
          <div
            key={card.section}
            onClick={() => onNavigate(card.section)}
            className="card-judo group cursor-pointer relative overflow-hidden"
          >
            {/* Top gold line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <span className="text-2xl font-serif text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                {card.icon}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="card-red rounded-3xl p-8 md:p-10 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
          {language === 'en' ? "Ready to test your knowledge?" : "Pronto para testar seus conhecimentos?"}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          {language === 'en' ? "Practice with flashcards and quizzes to consolidate your learning" : "Pratique com flashcards e quizzes para consolidar seu aprendizado"}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => onNavigate('flashcardsMenu')} className="btn-gold">
            <span className="mr-2">📚</span> Flashcards
          </button>
          <button onClick={() => onNavigate('quizMenu')} className="btn-outline">
            <span className="mr-2">📝</span> Quizzes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;