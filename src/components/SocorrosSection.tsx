const SocorrosSection = () => {
  const emergencias = {
    situacoes: [
      'Perda de consciência',
      'Dificuldade respiratória grave',
      'Suspeita de lesão na coluna',
      'Fratura exposta',
      'Sangramento intenso',
    ],
  };

  const procedimentos = [
    { 
      titulo: 'Contusões', 
      icone: '🦵', 
      passos: [
        'Afastar o atleta da área de luta',
        'Aplicar gelo por 15-20 minutos',
        'Elevar a região afetada',
        'Comprimir com bandagem se necessário',
        'Observar evolução nas próximas horas',
      ]
    },
    { 
      titulo: 'Desmaio por Estrangulamento', 
      icone: '💫', 
      passos: [
        'Soltar imediatamente a técnica',
        'Deitar o atleta de lado',
        'Elevar as pernas levemente',
        'Afrouxar o judogi',
        'Se não acordar em 30s, chamar emergência',
      ]
    },
    { 
      titulo: 'Luxação/Torção', 
      icone: '🔧', 
      passos: [
        'Imobilizar a articulação afetada',
        'Não tentar "colocar no lugar"',
        'Aplicar gelo',
        'Encaminhar ao médico',
      ]
    },
    { 
      titulo: 'Cortes/Escoriações', 
      icone: '🩹', 
      passos: [
        'Limpar o ferimento com água limpa',
        'Aplicar antisséptico',
        'Cobrir com curativo',
        'Se profundo, encaminhar ao médico',
      ]
    },
  ];

  const telefones = [
    { numero: '192', servico: 'SAMU', cor: 'bg-red-500' },
    { numero: '193', servico: 'Bombeiros', cor: 'bg-orange-500' },
    { numero: '190', servico: 'Polícia Militar', cor: 'bg-blue-500' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🚑</span>
        Primeiros Socorros no Tatame
      </h2>

      {/* Alerta Principal */}
      <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 mb-3">
          <span>⚠️</span> Quando Chamar Socorro Imediatamente
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {emergencias.situacoes.map((sit, index) => (
            <li key={index} className="text-sm text-foreground/80 flex items-center gap-2">
              <span className="text-red-400">●</span> {sit}
            </li>
          ))}
        </ul>
        <p className="text-sm text-red-300 mt-4 font-medium">
          ⛔ NÃO mova a vítima se houver suspeita de lesão na coluna!
        </p>
      </div>

      {/* Telefones de Emergência */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📞</span> Telefones de Emergência
      </h3>
      
      <div className="grid grid-cols-3 gap-4 mb-10">
        {telefones.map((tel, index) => (
          <div key={index} className={`${tel.cor} rounded-xl p-4 text-center`}>
            <p className="text-3xl font-bold text-white">{tel.numero}</p>
            <p className="text-sm text-white/80">{tel.servico}</p>
          </div>
        ))}
      </div>

      {/* Procedimentos */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏥</span> Procedimentos Básicos
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {procedimentos.map((proc, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3 pb-2 border-b border-primary/20">
              <span className="text-2xl">{proc.icone}</span>
              <h4 className="font-semibold text-white">{proc.titulo}</h4>
            </div>
            <ol className="space-y-2">
              {proc.passos.map((passo, i) => (
                <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                  <span className="text-primary font-bold">{i + 1}.</span>
                  {passo}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Kit de Primeiros Socorros */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>🧰</span> Kit Essencial no Dojô
      </h3>
      
      <div className="card-red p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: '🧊', item: 'Gelo/Bolsa térmica' },
            { icon: '🩹', item: 'Curativos' },
            { icon: '🧴', item: 'Antisséptico' },
            { icon: '🩺', item: 'Bandagens' },
            { icon: '🧤', item: 'Luvas descartáveis' },
            { icon: '✂️', item: 'Tesoura' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="text-xs text-foreground/70">{item.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocorrosSection;
