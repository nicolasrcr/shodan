import { homeCards } from "@/data/judoData";
import SearchBar from "./SearchBar";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white p-1 shadow-gold animate-pulse-gold flex items-center justify-center">
          <span className="text-5xl font-serif text-secondary">柔道</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light text-white mb-3">
          Guia Completo <span className="text-primary font-bold">Exame Shodan</span>
        </h1>
        <p className="text-muted-foreground mb-3">Preparação para o Exame de Faixa Preta - 1º Dan</p>
        <p className="text-primary italic text-sm max-w-xl mx-auto">
          "O objetivo final do Judô não é a vitória sobre os outros, mas o aperfeiçoamento de si mesmo."
          <span className="block mt-1 text-muted-foreground not-italic">— Jigoro Kano</span>
        </p>
      </div>

      {/* Search */}
      <SearchBar onNavigate={onNavigate} />

      {/* Cards Grid - 5 columns on xl to match reference design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
        {homeCards.map((card) => (
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
          Pronto para testar seus conhecimentos?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Pratique com flashcards e quizzes para consolidar seu aprendizado
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
