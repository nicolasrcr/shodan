const EscolarSection = () => {
  const faixas = [
    { cor: 'bg-white', titulo: 'Faixa Branca', emoji: '⬜', idade: 'Iniciantes', conteudo: 'Ukemi básico, etiqueta do dojô, primeiros contatos' },
    { cor: 'bg-gray-400', titulo: 'Faixa Cinza', emoji: '🔘', idade: '4-6 anos', conteudo: 'Jogos educativos, primeira técnica, lateralidade' },
    { cor: 'bg-blue-600', titulo: 'Faixa Azul', emoji: '🔵', idade: '7-9 anos', conteudo: 'Técnicas básicas de projeção e imobilização' },
    { cor: 'bg-yellow-400', titulo: 'Faixa Amarela', emoji: '🟡', idade: '10-12 anos', conteudo: 'Ampliação do repertório técnico, combinações' },
    { cor: 'bg-orange-500', titulo: 'Faixa Laranja', emoji: '🟠', idade: '13-14 anos', conteudo: 'Introdução à competição, estratégias básicas' },
    { cor: 'bg-green-500', titulo: 'Faixa Verde', emoji: '🟢', idade: '15-16 anos', conteudo: 'Preparação para graduação adulta, técnicas avançadas' },
  ];

  const pedagogia = [
    { 
      titulo: 'Ludicidade', 
      icon: '🎮',
      desc: 'O ensino para crianças (4-12 anos) deve priorizar jogos e brincadeiras, desenvolvendo funções executivas e psicomotoras de forma natural e prazerosa.' 
    },
    { 
      titulo: 'Progressão', 
      icon: '📈',
      desc: 'Idade 7-10 anos é ideal para introdução de movimentos simples. O sistema Gokyo e técnicas de solo devem ser introduzidos gradualmente.' 
    },
    { 
      titulo: 'Valores', 
      icon: '💎',
      desc: 'Ênfase nos valores morais do judô: cortesia, coragem, sinceridade, honra, modéstia, respeito, autocontrole e amizade.' 
    },
    { 
      titulo: 'Segurança', 
      icon: '🛡️',
      desc: 'Ukemi (quedas) deve ser a base do treinamento infantil. Competições devem ser adaptadas à idade.' 
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🎓</span>
        Judô Escolar
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O judô escolar desenvolve aspectos <strong>físicos, cognitivos, sociais e emocionais</strong> através 
          dos princípios de respeito, disciplina e cooperação. É uma ferramenta poderosa de formação do caráter.
        </p>
      </div>

      {/* Faixas Infantis */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Sistema de Faixas Infantis
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {faixas.map((faixa, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-3 rounded-full ${faixa.cor}`}></div>
              <div>
                <h4 className="font-semibold text-white text-sm">{faixa.emoji} {faixa.titulo}</h4>
                <p className="text-xs text-primary">{faixa.idade}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{faixa.conteudo}</p>
          </div>
        ))}
      </div>

      {/* Pedagogia */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📚</span> Princípios Pedagógicos
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {pedagogia.map((item, index) => (
          <div key={index} className="card-red p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="font-semibold text-white">{item.titulo}</h4>
            </div>
            <p className="text-sm text-foreground/70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Benefícios */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>✨</span> Benefícios do Judô para Crianças
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: '🧠', text: 'Concentração e foco' },
          { icon: '🤝', text: 'Socialização' },
          { icon: '💪', text: 'Coordenação motora' },
          { icon: '😊', text: 'Autoconfiança' },
          { icon: '🎯', text: 'Disciplina' },
          { icon: '🏃', text: 'Condicionamento físico' },
          { icon: '🙏', text: 'Respeito aos outros' },
          { icon: '🌟', text: 'Superação de limites' },
        ].map((item, index) => (
          <div key={index} className="card-judo text-center p-4">
            <span className="text-2xl block mb-2">{item.icon}</span>
            <p className="text-sm text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EscolarSection;
