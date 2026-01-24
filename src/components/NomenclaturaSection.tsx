const NomenclaturaSection = () => {
  const positions = [
    { name: 'Ritsui', desc: 'Em pé' },
    { name: 'Seiza', desc: 'Ajoelhado (formal)' },
    { name: 'Anza', desc: 'Pernas cruzadas (informal)' },
    { name: 'Chū-Goshi', desc: 'Agachado' },
    { name: 'Kyoshi', desc: 'Ajoelhado com 1 joelho' },
    { name: 'Zai', desc: 'Sentado' },
    { name: 'Aomuke', desc: 'Deitado de costas' },
  ];

  const terminology = [
    { term: 'Matte', def: 'Parar' }, { term: 'Hajime', def: 'Começar' },
    { term: 'Sensei', def: 'Professor' }, { term: 'Judô', def: 'Caminho Suave' },
    { term: 'Migi', def: 'Direita' }, { term: 'Hidari', def: 'Esquerda' },
    { term: 'Dojô', def: 'Área de Treinamento' }, { term: 'Uchi-Komi', def: 'Entradas de técnicas' },
    { term: 'Obi', def: 'Faixa' }, { term: 'Judogi', def: 'Uniforme do Judô' },
    { term: 'Kiotsuke', def: 'Atenção' }, { term: 'Randori', def: 'Treinamento livre' },
    { term: 'Uke', def: 'Quem recebe a técnica' }, { term: 'Tori', def: 'Quem aplica a técnica' },
    { term: 'Kuzushi', def: 'Desequilíbrio' }, { term: 'Tsukuri', def: 'Preparação/Entrada' },
    { term: 'Kake', def: 'Aplicar/Executar' }, { term: 'Kime', def: 'Decidir/Conclusão' },
  ];

  const bodyParts = [
    { jp: 'Atama', pt: 'Cabeça' }, { jp: 'Kubi', pt: 'Pescoço' }, { jp: 'Kata', pt: 'Ombro' },
    { jp: 'Mune', pt: 'Peito' }, { jp: 'Senaka', pt: 'Costas' }, { jp: 'Waki', pt: 'Axila' },
    { jp: 'Hara', pt: 'Barriga' }, { jp: 'Koshi', pt: 'Quadril' }, { jp: 'Mata', pt: 'Virilha' },
    { jp: 'Hiza', pt: 'Joelho' }, { jp: 'Ashi', pt: 'Pé/Perna' }, { jp: 'Kakato', pt: 'Calcanhar' },
    { jp: 'Te', pt: 'Mão' }, { jp: 'Ude', pt: 'Braço' }, { jp: 'Yubi', pt: 'Dedo' },
  ];

  const nageNomenclatura = {
    parteCorpo: [
      { term: 'MATA', def: 'Virilha' }, { term: 'HIZA', def: 'Joelho' },
      { term: 'ASHI', def: 'Pé/Perna' }, { term: 'KATA', def: 'Ombro' },
      { term: 'SEOI', def: 'Pelas costas' }, { term: 'GOSHI/KOSHI', def: 'Quadril' },
      { term: 'SODE', def: 'Manga' }, { term: 'OBI', def: 'Faixa' },
      { term: 'ERI', def: 'Gola' }, { term: 'TE', def: 'Mão' }, { term: 'UDE', def: 'Braço' },
    ],
    direcao: [
      { term: 'SOTO', def: 'Por fora' }, { term: 'UCHI', def: 'Por dentro' },
      { term: 'YOKO', def: 'Lado/Lateral' }, { term: 'SUMI', def: 'Diagonal/Canto' },
      { term: 'MAE', def: 'Frente' }, { term: 'USHIRO', def: 'Trás' },
    ],
    tamanho: [
      { term: 'O (大)', def: 'Grande' }, { term: 'KO (小)', def: 'Pequeno' },
    ],
    acao: [
      { term: 'GAKE', def: 'Trava/Gancho' }, { term: 'GARI', def: 'Ceifada (cortar raiz)' },
      { term: 'HARAI/BARAI', def: 'Varrida leve' }, { term: 'SASAE', def: 'Bloquear' },
      { term: 'NAGE', def: 'Projeção' }, { term: 'GAESHI', def: 'Inversão/Reversão' },
      { term: 'OTOSHI', def: 'Queda (cima p/ baixo)' }, { term: 'MAKIKOMI', def: 'Enrolando/Caindo junto' },
      { term: 'GURUMA', def: 'Roda/Girar' }, { term: 'TSURI-KOMI', def: 'Levantar e puxar' },
      { term: 'SUTEMI', def: 'Sacrifício' },
    ],
  };

  const neNomenclatura = [
    { term: 'GATAME', def: 'Imobilizar/Fixar' }, { term: 'JIME/SHIME', def: 'Estrangular' },
    { term: 'GARAMI', def: 'Torcer/Entrelaçar' }, { term: 'HISHIGI', def: 'Esmagar/Hiperestender' },
    { term: 'KESA', def: 'Deitado/Diagonal' }, { term: 'SHIHO', def: 'Quatro apoios/Ajoelhado' },
    { term: 'KAMI', def: 'Por cima/Pela cabeça' }, { term: 'YOKO', def: 'Lado/Lateral' },
    { term: 'TATE', def: 'Montada/Vertical' }, { term: 'KUZURE', def: 'Variação/Modificado' },
    { term: 'JUJI', def: 'Cruzado (cruz)' }, { term: 'SANKAKU', def: 'Triângulo' },
    { term: 'HADAKA', def: 'Nu (sem usar gola)' }, { term: 'OKURI', def: 'Deslizar' },
    { term: 'URA', def: 'Invertido/Por trás' }, { term: 'NAMI', def: 'Normal' },
    { term: 'GYAKU', def: 'Invertido/Reverso' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">言</span>
        Nomenclatura Japonesa
      </h2>

      {/* Posições e Posturas */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🧘</span> Posições e Posturas
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
        {positions.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Termos Básicos */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📚</span> Termos Básicos
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-10">
        {terminology.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.term}</p>
            <p className="text-xs text-muted-foreground">{item.def}</p>
          </div>
        ))}
      </div>

      {/* Partes do Corpo */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🦵</span> Partes do Corpo
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-10">
        {bodyParts.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.jp}</p>
            <p className="text-xs text-muted-foreground">{item.pt}</p>
          </div>
        ))}
      </div>

      {/* Nomenclatura Nage-Waza */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> Nomenclatura Nage-Waza
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">Partes do Corpo</h4>
          <div className="space-y-2">
            {nageNomenclatura.parteCorpo.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">Direção</h4>
          <div className="space-y-2">
            {nageNomenclatura.direcao.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">Tamanho</h4>
          <div className="space-y-2">
            {nageNomenclatura.tamanho.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="text-sm font-semibold text-white mb-3">Ação</h4>
          <div className="space-y-2">
            {nageNomenclatura.acao.map((item, i) => (
              <div key={i} className="flex justify-between text-xs">
                <span className="text-primary font-medium">{item.term}</span>
                <span className="text-muted-foreground">{item.def}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nomenclatura Ne-Waza */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-8">
        <span>🤼</span> Nomenclatura Ne-Waza (Solo)
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {neNomenclatura.map((item, i) => (
          <div key={i} className="card-judo text-center p-3">
            <p className="text-primary font-semibold text-sm">{item.term}</p>
            <p className="text-xs text-muted-foreground">{item.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NomenclaturaSection;
