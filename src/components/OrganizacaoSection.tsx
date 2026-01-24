const OrganizacaoSection = () => {
  const hierarquia = [
    { sigla: 'IJF', nome: 'International Judo Federation', desc: 'Federação Internacional - governa o Judô mundial' },
    { sigla: 'PJC', nome: 'Confederação Pan-Americana de Judô', desc: 'Organiza o Judô nas Américas' },
    { sigla: 'CBJ', nome: 'Confederação Brasileira de Judô', desc: 'Governa o Judô no Brasil' },
    { sigla: 'Federações', nome: 'Federações Estaduais', desc: 'Ex: FBJ (Federação Brasiliense de Judô)' },
    { sigla: 'Clubes', nome: 'Academias e Clubes', desc: 'Unidades locais de treinamento' },
  ];

  const categoriasIdade = [
    { categoria: 'Sub-13', idade: '11-12 anos', cor: 'bg-blue-500/20' },
    { categoria: 'Sub-15 (Infantil)', idade: '13-14 anos', cor: 'bg-green-500/20' },
    { categoria: 'Sub-18 (Cadete)', idade: '15-17 anos', cor: 'bg-yellow-500/20' },
    { categoria: 'Sub-21 (Júnior)', idade: '18-20 anos', cor: 'bg-orange-500/20' },
    { categoria: 'Sênior', idade: '15+ anos', cor: 'bg-red-500/20' },
    { categoria: 'Masters', idade: '30+ anos', cor: 'bg-purple-500/20' },
  ];

  const categoriasPesoMasc = [
    { peso: '-60kg', nome: 'Ligeiro' },
    { peso: '-66kg', nome: 'Meio-Leve' },
    { peso: '-73kg', nome: 'Leve' },
    { peso: '-81kg', nome: 'Meio-Médio' },
    { peso: '-90kg', nome: 'Médio' },
    { peso: '-100kg', nome: 'Meio-Pesado' },
    { peso: '+100kg', nome: 'Pesado' },
  ];

  const categoriasPesoFem = [
    { peso: '-48kg', nome: 'Ligeiro' },
    { peso: '-52kg', nome: 'Meio-Leve' },
    { peso: '-57kg', nome: 'Leve' },
    { peso: '-63kg', nome: 'Meio-Médio' },
    { peso: '-70kg', nome: 'Médio' },
    { peso: '-78kg', nome: 'Meio-Pesado' },
    { peso: '+78kg', nome: 'Pesado' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🏟️</span>
        Organização Desportiva
      </h2>

      {/* Hierarquia */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏛️</span> Hierarquia das Federações
      </h3>
      
      <div className="space-y-3 mb-10">
        {hierarquia.map((item, index) => (
          <div key={index} className="card-judo flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary">{item.sigla}</span>
            </div>
            <div>
              <h4 className="font-semibold text-white">{item.nome}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
            {index < hierarquia.length - 1 && (
              <div className="hidden sm:block ml-auto text-primary text-2xl">↓</div>
            )}
          </div>
        ))}
      </div>

      {/* Categorias por Idade */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📅</span> Categorias por Idade
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {categoriasIdade.map((cat, index) => (
          <div key={index} className={`card-judo ${cat.cor} border-primary/30`}>
            <h4 className="font-semibold text-white">{cat.categoria}</h4>
            <p className="text-sm text-muted-foreground">{cat.idade}</p>
          </div>
        ))}
      </div>

      {/* Categorias por Peso */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⚖️</span> Categorias por Peso (Sênior)
      </h3>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="card-judo">
          <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
            <span>♂️</span> Masculino
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {categoriasPesoMasc.map((cat, index) => (
              <div key={index} className="bg-background/30 rounded-lg p-2 text-center">
                <p className="font-bold text-white">{cat.peso}</p>
                <p className="text-xs text-muted-foreground">{cat.nome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-judo">
          <h4 className="font-semibold text-pink-400 mb-4 flex items-center gap-2">
            <span>♀️</span> Feminino
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {categoriasPesoFem.map((cat, index) => (
              <div key={index} className="bg-background/30 rounded-lg p-2 text-center">
                <p className="font-bold text-white">{cat.peso}</p>
                <p className="text-xs text-muted-foreground">{cat.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizacaoSection;
