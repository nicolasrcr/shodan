const InclusivoSection = () => {
  const objetivos = [
    { titulo: 'Social', desc: 'Integração e respeito mútuo', icone: '🤝', cor: 'bg-green-500/20 border-green-500/30' },
    { titulo: 'Cognitivo', desc: 'Concentração e estratégia', icone: '🧠', cor: 'bg-blue-500/20 border-blue-500/30' },
    { titulo: 'Motor', desc: 'Coordenação e equilíbrio', icone: '🏃', cor: 'bg-orange-500/20 border-orange-500/30' },
  ];

  const abordagens = [
    { 
      tipo: 'TEA', 
      nome: 'Transtorno do Espectro Autista',
      cor: 'bg-blue-500',
      desc: 'Ambiente estruturado, rotinas claras, pictogramas, comunicação visual, redução de estímulos sensoriais' 
    },
    { 
      tipo: 'TDAH', 
      nome: 'Déficit de Atenção e Hiperatividade',
      cor: 'bg-yellow-500',
      desc: 'Atividades dinâmicas, pausas frequentes, reforço positivo, tarefas curtas e objetivas' 
    },
    { 
      tipo: 'AH/SD', 
      nome: 'Altas Habilidades/Superdotação',
      cor: 'bg-purple-500',
      desc: 'Desafios extras, papel de liderança, aprofundamento técnico, mentoria de colegas' 
    },
    { 
      tipo: 'DV', 
      nome: 'Deficiência Visual',
      cor: 'bg-gray-500',
      desc: 'Comunicação tátil e verbal, descrição detalhada dos movimentos, contato físico guiado' 
    },
    { 
      tipo: 'DA', 
      nome: 'Deficiência Auditiva',
      cor: 'bg-pink-500',
      desc: 'Sinais visuais, demonstração física, posicionamento frontal do professor, uso de LIBRAS' 
    },
    { 
      tipo: 'DF', 
      nome: 'Deficiência Física',
      cor: 'bg-teal-500',
      desc: 'Adaptações técnicas, foco em técnicas compatíveis, modalidade paralímpica (Parajudô)' 
    },
  ];

  const principios = [
    'Respeitar o ritmo individual de cada praticante',
    'Adaptar a metodologia, não reduzir expectativas',
    'Promover ambiente acolhedor e sem julgamentos',
    'Celebrar pequenas conquistas e progressos',
    'Incluir família no processo de desenvolvimento',
    'Capacitar professores para atendimento inclusivo',
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">♿</span>
        Judô Inclusivo
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O Judô é uma ferramenta poderosa de inclusão social. Seus princípios de respeito mútuo (<em>Jita Kyoei</em>) 
          e máxima eficiência (<em>Seiryoku Zenyo</em>) se aplicam perfeitamente ao trabalho com pessoas 
          com necessidades especiais.
        </p>
      </div>

      {/* Objetivos */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🎯</span> Objetivos do Judô Inclusivo
      </h3>
      
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {objetivos.map((obj, index) => (
          <div key={index} className={`card-judo ${obj.cor} border`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{obj.icone}</span>
              <h4 className="font-semibold text-white">{obj.titulo}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{obj.desc}</p>
          </div>
        ))}
      </div>

      {/* Abordagens Específicas */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📋</span> Abordagens por Tipo de Necessidade
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {abordagens.map((ab, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3">
              <span className={`${ab.cor} text-white text-xs font-bold px-2 py-1 rounded`}>
                {ab.tipo}
              </span>
              <h4 className="font-semibold text-white text-sm">{ab.nome}</h4>
            </div>
            <p className="text-xs text-muted-foreground">{ab.desc}</p>
          </div>
        ))}
      </div>

      {/* Princípios */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>💡</span> Princípios Fundamentais
      </h3>
      
      <div className="card-red p-6">
        <div className="grid sm:grid-cols-2 gap-3">
          {principios.map((princ, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <p className="text-sm text-foreground/80">{princ}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Parajudô */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>🏅</span> Parajudô
      </h3>
      
      <div className="card-judo">
        <p className="text-sm text-foreground/70 mb-4">
          O <strong>Parajudô</strong> é a modalidade paralímpica do Judô para atletas com deficiência visual. 
          Está presente nos Jogos Paralímpicos desde Seul 1988 (masculino) e Atenas 2004 (feminino).
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-background/30 rounded-lg p-3 text-center">
            <p className="text-primary font-bold">B1</p>
            <p className="text-xs text-muted-foreground">Cegueira total</p>
          </div>
          <div className="bg-background/30 rounded-lg p-3 text-center">
            <p className="text-primary font-bold">B2</p>
            <p className="text-xs text-muted-foreground">Baixa visão severa</p>
          </div>
          <div className="bg-background/30 rounded-lg p-3 text-center">
            <p className="text-primary font-bold">B3</p>
            <p className="text-xs text-muted-foreground">Baixa visão moderada</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InclusivoSection;
