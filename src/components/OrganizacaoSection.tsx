import { useLanguage } from '@/contexts/LanguageContext';

const OrganizacaoSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Organização Desportiva',
      federationHierarchy: 'Hierarquia das Federações',
      ageCategories: 'Categorias por Idade',
      weightCategories: 'Categorias por Peso (Sênior Olímpico)',
      male: 'Masculino',
      female: 'Feminino',
      competitions: 'Principais Competições',
      rankingSystems: 'Sistemas de Ranking',
      importantInfo: 'Informações Importantes',
      documentation: 'Documentação para Competir',
      weighIn: 'Pesagem',
      hierarquia: [
        { sigla: 'IJF', nome: 'International Judo Federation', desc: 'Federação Internacional - governa o Judô mundial, sediada em Budapeste' },
        { sigla: 'PJC', nome: 'Confederação Pan-Americana de Judô', desc: 'Organiza o Judô nas Américas (Norte, Central e Sul)' },
        { sigla: 'CBJ', nome: 'Confederação Brasileira de Judô', desc: 'Governa o Judô no Brasil, filiada à IJF e PJC' },
        { sigla: 'Fed.', nome: 'Federações Estaduais', desc: 'Ex: FBJ (Brasília), FPJ (São Paulo), FJERJ (Rio)' },
        { sigla: 'Clubes', nome: 'Academias e Clubes', desc: 'Unidades locais de treinamento, filiadas às federações' },
      ],
      categoriasIdade: [
        { categoria: 'Sub-11', idade: '9-10 anos' }, { categoria: 'Sub-13', idade: '11-12 anos' },
        { categoria: 'Sub-15 (Infantil)', idade: '13-14 anos' }, { categoria: 'Sub-18 (Cadete)', idade: '15-17 anos' },
        { categoria: 'Sub-21 (Júnior)', idade: '18-20 anos' }, { categoria: 'Sênior', idade: '15+ anos' },
        { categoria: 'Masters', idade: '30+ anos' }, { categoria: 'Veteranos', idade: '60+ anos' },
      ],
      pesoMasc: [
        { peso: '-60kg', nome: 'Ligeiro' }, { peso: '-66kg', nome: 'Meio-Leve' }, { peso: '-73kg', nome: 'Leve' },
        { peso: '-81kg', nome: 'Meio-Médio' }, { peso: '-90kg', nome: 'Médio' }, { peso: '-100kg', nome: 'Meio-Pesado' }, { peso: '+100kg', nome: 'Pesado' },
      ],
      pesoFem: [
        { peso: '-48kg', nome: 'Ligeiro' }, { peso: '-52kg', nome: 'Meio-Leve' }, { peso: '-57kg', nome: 'Leve' },
        { peso: '-63kg', nome: 'Meio-Médio' }, { peso: '-70kg', nome: 'Médio' }, { peso: '-78kg', nome: 'Meio-Pesado' }, { peso: '+78kg', nome: 'Pesado' },
      ],
      competicoes: [
        { nome: 'Jogos Olímpicos', freq: 'A cada 4 anos', nivel: 'Mundial', icone: '🏅' },
        { nome: 'Campeonato Mundial', freq: 'Anual', nivel: 'Mundial', icone: '🌍' },
        { nome: 'Grand Slam', freq: 'Várias por ano', nivel: 'Mundial', icone: '🏆' },
        { nome: 'Grand Prix', freq: 'Várias por ano', nivel: 'Internacional', icone: '🥇' },
        { nome: 'Continental Open', freq: 'Várias por ano', nivel: 'Continental', icone: '🎖️' },
        { nome: 'Campeonato Brasileiro', freq: 'Anual', nivel: 'Nacional', icone: '🇧🇷' },
        { nome: 'Campeonatos Estaduais', freq: 'Anual', nivel: 'Regional', icone: '📍' },
        { nome: 'Campeonatos Regionais', freq: 'Várias por ano', nivel: 'Local', icone: '🏟️' },
      ],
      ranking: [
        { sistema: 'WRL (World Ranking List)', desc: 'Ranking mundial oficial da IJF, usado para definir cabeças de chave' },
        { sistema: 'Ranking Nacional CBJ', desc: 'Pontuação baseada em resultados em competições nacionais' },
        { sistema: 'Ranking Estadual', desc: 'Classificação dentro de cada estado/federação' },
      ],
      docs: ['Registro na federação estadual', 'Atestado médico válido', 'Documento de identidade', 'Judogi oficial (azul e branco)', 'Inscrição no evento'],
      pesagem: ['Realizada no dia anterior ou no dia da competição', 'Tolerância: 0g (peso exato da categoria)', 'Atleta acima do peso = desclassificado', 'Pesagem oficial com judogi', 'Segunda pesagem (random) antes das finais'],
    },
    en: {
      title: 'Sports Organization',
      federationHierarchy: 'Federation Hierarchy',
      ageCategories: 'Age Categories',
      weightCategories: 'Weight Categories (Senior Olympic)',
      male: 'Male',
      female: 'Female',
      competitions: 'Main Competitions',
      rankingSystems: 'Ranking Systems',
      importantInfo: 'Important Information',
      documentation: 'Documentation to Compete',
      weighIn: 'Weigh-In',
      hierarquia: [
        { sigla: 'IJF', nome: 'International Judo Federation', desc: 'International Federation - governs world Judo, based in Budapest' },
        { sigla: 'PJC', nome: 'Pan American Judo Confederation', desc: 'Organizes Judo in the Americas (North, Central and South)' },
        { sigla: 'CBJ', nome: 'Brazilian Judo Confederation', desc: 'Governs Judo in Brazil, affiliated with IJF and PJC' },
        { sigla: 'Fed.', nome: 'State Federations', desc: 'E.g.: FBJ (Brasília), FPJ (São Paulo), FJERJ (Rio)' },
        { sigla: 'Clubs', nome: 'Academies and Clubs', desc: 'Local training units, affiliated with federations' },
      ],
      categoriasIdade: [
        { categoria: 'U-11', idade: '9-10 years' }, { categoria: 'U-13', idade: '11-12 years' },
        { categoria: 'U-15 (Infantile)', idade: '13-14 years' }, { categoria: 'U-18 (Cadet)', idade: '15-17 years' },
        { categoria: 'U-21 (Junior)', idade: '18-20 years' }, { categoria: 'Senior', idade: '15+ years' },
        { categoria: 'Masters', idade: '30+ years' }, { categoria: 'Veterans', idade: '60+ years' },
      ],
      pesoMasc: [
        { peso: '-60kg', nome: 'Extra-Light' }, { peso: '-66kg', nome: 'Half-Light' }, { peso: '-73kg', nome: 'Light' },
        { peso: '-81kg', nome: 'Half-Middle' }, { peso: '-90kg', nome: 'Middle' }, { peso: '-100kg', nome: 'Half-Heavy' }, { peso: '+100kg', nome: 'Heavy' },
      ],
      pesoFem: [
        { peso: '-48kg', nome: 'Extra-Light' }, { peso: '-52kg', nome: 'Half-Light' }, { peso: '-57kg', nome: 'Light' },
        { peso: '-63kg', nome: 'Half-Middle' }, { peso: '-70kg', nome: 'Middle' }, { peso: '-78kg', nome: 'Half-Heavy' }, { peso: '+78kg', nome: 'Heavy' },
      ],
      competicoes: [
        { nome: 'Olympic Games', freq: 'Every 4 years', nivel: 'World', icone: '🏅' },
        { nome: 'World Championship', freq: 'Annual', nivel: 'World', icone: '🌍' },
        { nome: 'Grand Slam', freq: 'Several per year', nivel: 'World', icone: '🏆' },
        { nome: 'Grand Prix', freq: 'Several per year', nivel: 'International', icone: '🥇' },
        { nome: 'Continental Open', freq: 'Several per year', nivel: 'Continental', icone: '🎖️' },
        { nome: 'Brazilian Championship', freq: 'Annual', nivel: 'National', icone: '🇧🇷' },
        { nome: 'State Championships', freq: 'Annual', nivel: 'Regional', icone: '📍' },
        { nome: 'Regional Championships', freq: 'Several per year', nivel: 'Local', icone: '🏟️' },
      ],
      ranking: [
        { sistema: 'WRL (World Ranking List)', desc: 'Official IJF world ranking, used to define seedings' },
        { sistema: 'National CBJ Ranking', desc: 'Score based on results in national competitions' },
        { sistema: 'State Ranking', desc: 'Classification within each state/federation' },
      ],
      docs: ['Registration with state federation', 'Valid medical certificate', 'Identity document', 'Official judogi (blue and white)', 'Event registration'],
      pesagem: ['Held the day before or on competition day', 'Tolerance: 0g (exact category weight)', 'Overweight athlete = disqualified', 'Official weigh-in with judogi', 'Second (random) weigh-in before finals'],
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];
  const colors = ['bg-cyan-500/20', 'bg-blue-500/20', 'bg-green-500/20', 'bg-yellow-500/20', 'bg-orange-500/20', 'bg-red-500/20', 'bg-purple-500/20', 'bg-gray-500/20'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title"><span className="section-title-icon">🏟️</span>{t.title}</h2>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🏛️</span> {t.federationHierarchy}</h3>
      <div className="space-y-3 mb-10">
        {t.hierarquia.map((item, index) => (
          <div key={index} className="card-judo flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span className="text-xs font-bold text-primary">{item.sigla}</span></div>
            <div className="flex-grow"><h4 className="font-semibold text-white">{item.nome}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
            {index < t.hierarquia.length - 1 && <div className="hidden sm:block text-primary text-2xl">↓</div>}
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>📅</span> {t.ageCategories}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {t.categoriasIdade.map((cat, index) => (
          <div key={index} className={`card-judo ${colors[index]} border-primary/30`}><h4 className="font-semibold text-white">{cat.categoria}</h4><p className="text-sm text-muted-foreground">{cat.idade}</p></div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>⚖️</span> {t.weightCategories}</h3>
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="card-judo">
          <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2"><span>♂️</span> {t.male}</h4>
          <div className="grid grid-cols-2 gap-2">{t.pesoMasc.map((cat, index) => (<div key={index} className="bg-background/30 rounded-lg p-2 text-center"><p className="font-bold text-white">{cat.peso}</p><p className="text-xs text-muted-foreground">{cat.nome}</p></div>))}</div>
        </div>
        <div className="card-judo">
          <h4 className="font-semibold text-pink-400 mb-4 flex items-center gap-2"><span>♀️</span> {t.female}</h4>
          <div className="grid grid-cols-2 gap-2">{t.pesoFem.map((cat, index) => (<div key={index} className="bg-background/30 rounded-lg p-2 text-center"><p className="font-bold text-white">{cat.peso}</p><p className="text-xs text-muted-foreground">{cat.nome}</p></div>))}</div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🏆</span> {t.competitions}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {t.competicoes.map((comp, index) => (
          <div key={index} className="card-judo text-center"><span className="text-2xl block mb-2">{comp.icone}</span><h4 className="font-semibold text-white text-sm">{comp.nome}</h4><p className="text-xs text-primary">{comp.freq}</p><p className="text-xs text-muted-foreground">{comp.nivel}</p></div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>📊</span> {t.rankingSystems}</h3>
      <div className="card-judo mb-10">
        <div className="space-y-4">
          {t.ranking.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg"><span className="text-primary font-bold">#{index + 1}</span><div><h4 className="font-semibold text-white text-sm">{item.sistema}</h4><p className="text-xs text-muted-foreground">{item.desc}</p></div></div>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>📋</span> {t.importantInfo}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card-judo"><h4 className="font-semibold text-white mb-3">{t.documentation}</h4><ul className="space-y-2 text-sm text-foreground/70">{t.docs.map((d, i) => <li key={i}>• {d}</li>)}</ul></div>
        <div className="card-judo"><h4 className="font-semibold text-white mb-3">{t.weighIn}</h4><ul className="space-y-2 text-sm text-foreground/70">{t.pesagem.map((p, i) => <li key={i}>• {p}</li>)}</ul></div>
      </div>
    </div>
  );
};

export default OrganizacaoSection;
