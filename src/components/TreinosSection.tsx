const TreinosSection = () => {
  const practiceForms = [
    { 
      kanji: '乱取り', 
      romaji: 'Randori', 
      title: 'Treinamento Livre', 
      desc: 'Método para aprender técnicas de ataque e defesa movimentando-se livremente, sem causar dano ao outro. É a aplicação prática das técnicas em situação dinâmica.' 
    },
    { 
      kanji: '打ち込み', 
      romaji: 'Uchi-Komi', 
      title: 'Entradas Repetidas', 
      desc: 'Repetição sistemática das entradas das técnicas sem completar a projeção. Desenvolve automatismo, velocidade e precisão nos movimentos.' 
    },
    { 
      kanji: '形', 
      romaji: 'Kata', 
      title: 'Formas', 
      desc: 'Método de aplicar técnicas pré-estabelecidas com um parceiro. Preserva a tradição e ensina os princípios fundamentais das técnicas.' 
    },
    { 
      kanji: '投げ込み', 
      romaji: 'Nage-Komi', 
      title: 'Projeções Completas', 
      desc: 'Prática de projeções completas com o parceiro caindo. Desenvolve o timing, kuzushi (desequilíbrio) e a finalização das técnicas.' 
    },
    { 
      kanji: '試合', 
      romaji: 'Shiai', 
      title: 'Competição', 
      desc: 'Teste de desenvolvimento técnico em situações de combate real com pontuação. Aplica tudo que foi aprendido sob pressão.' 
    },
    { 
      kanji: '講義', 
      romaji: 'Kogi', 
      title: 'Palestra', 
      desc: 'Aulas teóricas sobre técnicas de Judô, aspectos filosóficos, história e aplicação na vida social.' 
    },
  ];

  const trainingTips = [
    { icon: '🔄', title: 'Aquecimento', desc: 'Sempre inicie com aquecimento geral e específico para evitar lesões' },
    { icon: '🎯', title: 'Foco', desc: 'Concentre-se em poucas técnicas por treino para melhor absorção' },
    { icon: '🤝', title: 'Parceiro', desc: 'Respeite seu parceiro - ele é essencial para seu desenvolvimento' },
    { icon: '📊', title: 'Progressão', desc: 'Evolua gradualmente: básico → intermediário → avançado' },
    { icon: '🧘', title: 'Ukemi', desc: 'Pratique quedas regularmente - é a base da segurança no Judô' },
    { icon: '💪', title: 'Recuperação', desc: 'Descanse adequadamente entre treinos intensos' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">練</span>
        Treinamentos - Métodos de Prática
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O Judô possui diversos métodos de treinamento, cada um com objetivos específicos. 
          A combinação equilibrada dessas formas desenvolve o judoca completo.
        </p>
      </div>

      {/* Métodos de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Métodos de Treinamento
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {practiceForms.map((form, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-serif text-primary">{form.kanji}</span>
              <div>
                <h4 className="font-semibold text-white">{form.title}</h4>
                <p className="text-xs text-muted-foreground">{form.romaji}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70">{form.desc}</p>
          </div>
        ))}
      </div>

      {/* Dicas de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>💡</span> Dicas de Treinamento
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainingTips.map((tip, index) => (
          <div key={index} className="card-judo flex items-start gap-3">
            <span className="text-2xl">{tip.icon}</span>
            <div>
              <h4 className="font-semibold text-white text-sm">{tip.title}</h4>
              <p className="text-xs text-muted-foreground">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Estrutura da Aula */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>📋</span> Estrutura Típica de uma Aula
      </h3>
      
      <div className="card-red p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">1</span>
            </div>
            <h4 className="font-semibold text-white text-sm">Saudação</h4>
            <p className="text-xs text-muted-foreground">Rei e aquecimento (10-15 min)</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">2</span>
            </div>
            <h4 className="font-semibold text-white text-sm">Ukemi</h4>
            <p className="text-xs text-muted-foreground">Quedas (10 min)</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">3</span>
            </div>
            <h4 className="font-semibold text-white text-sm">Técnica</h4>
            <p className="text-xs text-muted-foreground">Uchi-komi e Nage-komi (30-40 min)</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">4</span>
            </div>
            <h4 className="font-semibold text-white text-sm">Randori</h4>
            <p className="text-xs text-muted-foreground">Treino livre e encerramento (20-30 min)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreinosSection;
