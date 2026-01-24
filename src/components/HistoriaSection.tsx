import { historyData } from "@/data/judoData";

const HistoriaSection = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">史</span>
        História do Judô
      </h2>

      {/* Founder Section */}
      <div className="grid md:grid-cols-[220px_1fr] gap-7 mb-10">
        <div className="card-red flex flex-col items-center justify-center py-8 px-6 text-center">
          <span className="text-6xl font-serif text-primary mb-3">嘉納</span>
          <h3 className="text-lg font-semibold text-white">Jigoro Kano</h3>
          <p className="text-sm text-muted-foreground mt-1">1860 - 1938</p>
        </div>

        <div className="card-judo">
          <h3 className="text-xl font-semibold text-white mb-1">Jigoro Kano</h3>
          <p className="text-primary text-sm mb-4">嘉納 治五郎 (かのう じごろう)</p>
          
          <div className="grid gap-2 mb-5 text-sm text-foreground/80">
            <p>📍 <strong>Nascimento:</strong> 28 de outubro de 1860, Mikage (atual Kobe)</p>
            <p>🏛️ <strong>Formação:</strong> Universidade Imperial de Tóquio</p>
            <p>💪 <strong>Físico:</strong> 1,57m / 50kg - frágil, sofria bullying</p>
            <p>📚 <strong>Estudou:</strong> Tenjin Shin'yō-ryū e Kitō-ryū (Jujutsu)</p>
          </div>

          <div className="space-y-2">
            {historyData.founderFacts.map((fact, index) => (
              <div key={index} className="p-3 bg-primary/10 rounded-lg border-l-3 border-primary text-sm text-foreground/80">
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curiosities Grid */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-8">
        <span>💡</span> Curiosidades sobre Kano
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {historyData.curiosities.map((curiosity, index) => (
          <div 
            key={index} 
            className="p-4 bg-card/80 rounded-xl border-l-4 border-primary transition-all hover:translate-x-1 hover:bg-secondary/20"
          >
            <p className="text-sm text-foreground/80 leading-relaxed">{curiosity}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-8">
        <span>📅</span> Linha do Tempo
      </h3>
      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-primary/20" />
        <div className="space-y-0">
          {historyData.timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="text-primary font-bold text-sm">{item.year}</span>
              <p className="text-foreground/80 text-sm mt-1">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kodokan */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>🏛️</span> Kodokan - Instituto do Caminho
      </h3>
      <div className="card-judo">
        <div className="space-y-3">
          {historyData.kodokanFacts.map((fact, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-black/20 rounded-lg">
              <span className="text-primary text-sm mt-0.5">◆</span>
              <p className="text-sm text-foreground/80">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* World Origins */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>🌍</span> Origens das Artes Marciais
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {historyData.origins.map((origin, index) => (
          <div key={index} className="card-red p-5 hover:border-primary transition-all hover:-translate-y-1">
            <h4 className="text-primary font-bold text-lg mb-2">{origin.country}</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">{origin.desc}</p>
          </div>
        ))}
      </div>

      {/* Brazil Timeline */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>🇧🇷</span> Judô no Brasil
      </h3>
      <div className="relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-green-500 to-green-500/20" />
        <div className="space-y-0">
          {historyData.brazilTimeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <span className="text-green-400 font-bold text-sm">{item.year}</span>
              <p className="text-foreground/80 text-sm mt-1">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoriaSection;
