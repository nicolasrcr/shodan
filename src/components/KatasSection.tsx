const KatasSection = () => {
  const outrosKatas = [
    { name: 'Kime-no-Kata', kanji: '極の形', desc: 'Forma de decisão/combate real. 20 técnicas de defesa contra ataques armados e desarmados.' },
    { name: 'Kodokan Goshin-jutsu', kanji: '講道館護身術', desc: 'Forma moderna de defesa pessoal. 21 técnicas contra ataques contemporâneos.' },
    { name: 'Ju-no-Kata', kanji: '柔の形', desc: 'Forma da suavidade. 15 técnicas demonstrando o princípio Ju (ceder).' },
    { name: 'Itsutsu-no-Kata', kanji: '五の形', desc: 'Forma dos cinco princípios. 5 técnicas representando forças da natureza.' },
    { name: 'Koshiki-no-Kata', kanji: '古式の形', desc: 'Forma antiga. 21 técnicas preservadas do Jujutsu clássico.' },
    { name: 'Seiryoku-Zenyo Kokumin-Taiiku', kanji: '精力善用国民体育', desc: 'Exercícios de educação física nacional baseados nos princípios do Judô.' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">形</span>
        Katas - Formas do Judô
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          <strong>Kata</strong> (形) significa "forma" ou "modelo". São sequências pré-determinadas de técnicas 
          executadas entre Tori (quem aplica) e Uke (quem recebe), preservando a tradição e a essência técnica do Judô.
        </p>
      </div>

      {/* Randori-no-Kata */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Randori-no-Kata (Formas de Treinamento Livre)
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="card-red p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl font-serif text-primary">投形</span>
            <div>
              <h4 className="font-semibold text-white">Nage-no-Kata</h4>
              <p className="text-xs text-muted-foreground">Forma das Projeções</p>
            </div>
          </div>
          <p className="text-sm text-foreground/70">
            15 técnicas em 5 grupos: Te-waza, Koshi-waza, Ashi-waza, Ma-sutemi-waza, Yoko-sutemi-waza.
            Criado por Jigoro Kano em 1887.
          </p>
        </div>

        <div className="card-red p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl font-serif text-primary">固形</span>
            <div>
              <h4 className="font-semibold text-white">Katame-no-Kata</h4>
              <p className="text-xs text-muted-foreground">Forma de Domínio</p>
            </div>
          </div>
          <p className="text-sm text-foreground/70">
            15 técnicas em 3 grupos: Osaekomi-waza (imobilizações), Shime-waza (estrangulamentos), 
            Kansetsu-waza (chaves).
          </p>
        </div>
      </div>

      {/* Outros Katas */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📜</span> Outros Katas Oficiais
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {outrosKatas.map((kata, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-white">{kata.name}</h4>
              <span className="text-xs text-primary">{kata.kanji}</span>
            </div>
            <p className="text-xs text-muted-foreground">{kata.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatasSection;
