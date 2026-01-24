// Navigation sections
export const sections = [
  { id: 'home', label: 'Início', icon: '道' },
  { id: 'historia', label: 'História', icon: '史' },
  { id: 'principios', label: 'Princípios', icon: '心' },
  { id: 'etiqueta', label: 'Etiqueta', icon: '礼' },
  { id: 'nomenclatura', label: 'Nomenclatura', icon: '言' },
  { id: 'gokyo', label: 'Gokyo', icon: '投' },
  { id: 'katameWaza', label: 'Katame-Waza', icon: '固' },
  { id: 'katas', label: 'Katas', icon: '形' },
  { id: 'nageNoKata', label: 'Nage Kata', icon: '投形' },
  { id: 'katameNoKata', label: 'Katame Kata', icon: '固形' },
  { id: 'treinos', label: 'Treinos', icon: '練' },
  { id: 'regras', label: 'Regras', icon: '則' },
  { id: 'regras2025', label: 'Regras 2025', icon: '新' },
  { id: 'organizacao', label: 'Organização', icon: '🏟️' },
  { id: 'escolar', label: 'Escolar', icon: '🎓' },
  { id: 'socorros', label: 'Socorros', icon: '🚑' },
  { id: 'inclusivo', label: 'Inclusivo', icon: '♿' },
  { id: 'videos', label: 'Vídeos', icon: '映' },
  { id: 'flashcardsMenu', label: 'Flashcards', icon: '札' },
  { id: 'quizzes', label: 'Quizzes', icon: '問' },
];

export const homeCards = [
  { title: 'História', desc: 'Jigoro Kano, Kodokan e origens', icon: '史', section: 'historia' },
  { title: 'Princípios', desc: 'Filosofia e código moral', icon: '心', section: 'principios' },
  { title: 'Etiqueta', desc: 'Condutas, saudações e dojo', icon: '礼', section: 'etiqueta' },
  { title: 'Nomenclatura', desc: 'Termos japoneses', icon: '言', section: 'nomenclatura' },
  { title: 'Gokyo', desc: '40 técnicas de projeção', icon: '投', section: 'gokyo' },
  { title: 'Katame-Waza', desc: 'Técnicas de solo', icon: '固', section: 'katameWaza' },
  { title: 'Katas', desc: 'Nage-no-Kata e Katame-no-Kata', icon: '形', section: 'katas' },
  { title: 'Nage no Kata', desc: '15 técnicas em 5 grupos', icon: '投形', section: 'nageNoKata' },
  { title: 'Katame no Kata', desc: '15 técnicas em 3 grupos', icon: '固形', section: 'katameNoKata' },
  { title: 'Treinamentos', desc: 'Uchi-komi, Randori e métodos', icon: '練', section: 'treinos' },
  { title: 'Regras', desc: 'Arbitragem e pontuação', icon: '則', section: 'regras' },
  { title: 'Regras 2025', desc: 'Novas regras IJF', icon: '新', section: 'regras2025' },
  { title: 'Organização Desportiva', desc: 'Federações e categorias', icon: '🏟️', section: 'organizacao' },
  { title: 'Judô Escolar', desc: 'Pedagogia e faixas infantis', icon: '🎓', section: 'escolar' },
  { title: 'Primeiros Socorros', desc: 'Emergências no tatame', icon: '🚑', section: 'socorros' },
  { title: 'Inclusivo', desc: 'TEA, TDAH e adaptações', icon: '♿', section: 'inclusivo' },
  { title: 'Vídeos', desc: 'Playlist de demonstrações', icon: '映', section: 'videos' },
];

export const searchIndex = [
  { section: 'historia', title: 'Jigoro Kano', keywords: 'fundador criador pai judo kodokan 1882' },
  { section: 'historia', title: 'Kodokan', keywords: 'instituto escola fundação história origem' },
  { section: 'historia', title: 'Olimpíadas', keywords: 'olimpico 1964 toquio jogos medalha' },
  { section: 'historia', title: 'Mitsuyo Maeda', keywords: 'conde koma brasil gracie belém' },
  { section: 'principios', title: 'Seiryoku Zenyo', keywords: 'eficiência energia principio filosofia' },
  { section: 'principios', title: 'Jita Kyoei', keywords: 'benefício mútuo prosperidade principio' },
  { section: 'principios', title: 'Código Moral', keywords: 'cortesia coragem sinceridade honra respeito' },
  { section: 'etiqueta', title: 'Saudações (Rei)', keywords: 'ritsu-rei za-rei saudação cumprimento' },
  { section: 'etiqueta', title: 'Estrutura do Dojô', keywords: 'kamiza shimoza joseki tatame' },
  { section: 'nomenclatura', title: 'Termos Básicos', keywords: 'japonês palavras significado tradução' },
  { section: 'nomenclatura', title: 'Números', keywords: 'ichi ni san numeros contar japonês' },
  { section: 'nomenclatura', title: 'Partes do Corpo', keywords: 'te ashi koshi mimi' },
  { section: 'gokyo', title: 'O-Soto-Gari', keywords: 'ceifa externa grande perna projeção' },
  { section: 'gokyo', title: 'Seoi-Nage', keywords: 'costas projeção braço ombro' },
  { section: 'gokyo', title: 'Uchi-Mata', keywords: 'coxa interna perna projeção' },
  { section: 'gokyo', title: 'Ippon Seoi-Nage', keywords: 'ombro braço único projeção' },
  { section: 'gokyo', title: 'Harai-Goshi', keywords: 'quadril varrer projeção' },
  { section: 'katameWaza', title: 'Imobilizações', keywords: 'osaekomi kesa shiho gatame solo' },
  { section: 'katameWaza', title: 'Estrangulamentos', keywords: 'shime jime hadaka sankaku choke' },
  { section: 'katameWaza', title: 'Chaves', keywords: 'kansetsu juji garami armlock braço' },
  { section: 'regras', title: 'Pontuação', keywords: 'ippon wazari yuko ponto score' },
  { section: 'regras', title: 'Penalidades', keywords: 'shido hansoku penalidade falta' },
  { section: 'regras', title: 'Tempo de Luta', keywords: 'tempo duração minutos golden score' },
  { section: 'regras2025', title: 'Yuko 2025', keywords: 'novo pontuação mudança regra' },
  { section: 'regras2025', title: 'Novas Regras 2025', keywords: 'ijf mudanças atualizações' },
  { section: 'nageNoKata', title: 'Nage no Kata', keywords: 'forma projeção kata 15 técnicas' },
  { section: 'nageNoKata', title: 'Te-Waza', keywords: 'técnicas mão braço kata' },
  { section: 'nageNoKata', title: 'Koshi-Waza', keywords: 'técnicas quadril kata' },
  { section: 'katameNoKata', title: 'Katame no Kata', keywords: 'forma solo kata imobilização' },
  { section: 'katameNoKata', title: 'Osaekomi-Waza', keywords: 'imobilização chão domínio' },
  { section: 'katas', title: 'Kata', keywords: 'forma demonstração sequência técnicas' },
  { section: 'treinos', title: 'Uchi-Komi', keywords: 'repetição entrada treino' },
  { section: 'treinos', title: 'Randori', keywords: 'treino livre prática' },
  { section: 'treinos', title: 'Shiai', keywords: 'competição luta torneio' },
  { section: 'organizacao', title: 'Federações', keywords: 'ijf cbj federação confederação' },
  { section: 'organizacao', title: 'Categorias', keywords: 'peso idade cadete junior senior' },
  { section: 'escolar', title: 'Faixas Infantis', keywords: 'cinza azul amarela criança graduação' },
  { section: 'escolar', title: 'Pedagogia', keywords: 'ensino criança didática infantil' },
  { section: 'socorros', title: 'Emergências', keywords: 'socorro primeiros contusão desmaio lesão' },
  { section: 'socorros', title: 'Lesões', keywords: 'machucado ferimento trauma' },
  { section: 'inclusivo', title: 'TEA', keywords: 'autismo espectro adaptação' },
  { section: 'inclusivo', title: 'TDAH', keywords: 'déficit atenção hiperatividade' },
  { section: 'inclusivo', title: 'Adaptações', keywords: 'inclusão especial adaptado deficiência' },
  { section: 'videos', title: 'Vídeos', keywords: 'video demonstração técnica assistir youtube' },
  { section: 'flashcardsMenu', title: 'Flashcards', keywords: 'estudo cartão revisão memorização' },
  { section: 'quizMenu', title: 'Quizzes', keywords: 'teste perguntas avaliação exame' },
];

export const historyData = {
  founderFacts: [
    "Fundou o Judô em maio de 1882, criando o Kodokan em Tóquio aos 21 anos",
    "Primeiro asiático membro do Comitê Olímpico Internacional (COI) em 1909",
    "Adaptou técnicas do JUJUTSU tradicional (Tenjin Shin'yō-ryū e Kitō-ryū)",
    "Criou o sistema de graduação por faixas coloridas, adotado por outras artes marciais",
    "Introduziu os princípios Seiryoku Zen'yo e Jita Kyoei",
    "Era poliglota: falava inglês, francês, espanhol e alemão fluentemente",
    "Criou o Judogi, primeiro uniforme moderno de artes marciais",
    "Atuou como professor e diretor de várias escolas no Japão",
    "É considerado o pai do Judô e da Educação Física japonesa",
    "Além de judoca, era educador e reformador do sistema educacional japonês",
  ],
  curiosities: [
    "🗣️ Poliglota fluente em inglês, francês, espanhol e alemão além do japonês",
    "💰 Família rica - pai era dono de empresa de bebidas alcoólicas",
    "😢 Perdeu a mãe muito jovem, o que influenciou sua busca por autodisciplina",
    "📺 Novela 'Judo Ichidai' (95 episódios, 1962-1964) contou sua história",
    "🔍 Google homenageou Kano em 2021 com Doodle especial",
    "🏅 Seleção japonesa visita seu túmulo antes das Olimpíadas",
    "💴 Nome citado em discussões sobre novas cédulas japonesas",
    "👨‍🎓 Tsunejirō Tomita foi seu primeiro aluno (5 de junho de 1882)",
    "📝 Quando nasceu se chamava 'Shinnosuke', mudou para Jigoro posteriormente",
    "🏫 Fundou a escola Kobukan para ensinar estudantes chineses",
  ],
  timeline: [
    { year: "1860", event: "28 de outubro - Nascimento de Jigoro Kano (nome: Shinnosuke) em Mikage, Província de Settsu (atual Hyōgo)" },
    { year: "1877", event: "Kano começa a estudar Jujutsu na escola Tenjin Shin'yō-ryū" },
    { year: "1881", event: "Estuda na escola Kitō-ryū e obtém Menkyo (licença para ensinar)" },
    { year: "1882", event: "Maio - Fundação do Kodokan com 12 tatames (~24m²) em Tóquio" },
    { year: "1882", event: "5 de junho - Tsunejirō Tomita se torna o primeiro aluno oficial" },
    { year: "1886", event: "Vitória decisiva do Kodokan sobre escola tradicional de Jujutsu" },
    { year: "1891", event: "Kano se casa com Sumako Takezoe" },
    { year: "1895", event: "Gokyo no Waza é oficialmente estabelecido (40 técnicas em 5 grupos)" },
    { year: "1906", event: "Kodokan expande para 207 tatames" },
    { year: "1908", event: "Lei torna Judô/Kendô obrigatórios no ensino médio japonês" },
    { year: "1909", event: "Kano se torna primeiro asiático membro do COI" },
    { year: "1920", event: "Revisão do Go-Kyo para a forma atual (Shin-Go-Kyo)" },
    { year: "1938", event: "4 de maio - Falecimento por pneumonia, aos 77 anos, no navio Hikawa Maru" },
    { year: "1951", event: "Fundação da IJF (Federação Internacional de Judô)" },
    { year: "1964", event: "Judô estreia nos Jogos Olímpicos de Tóquio" },
    { year: "1972", event: "Judô se torna esporte olímpico permanente" },
    { year: "1992", event: "Judô feminino entra oficialmente nas Olimpíadas (Barcelona)" },
  ],
  kodokanFacts: [
    "講道館 (Kodokan) = KO (palestra/estudo) + DO (caminho) + KAN (instituto) = 'Instituto para Estudar o Caminho'",
    "Iniciou com apenas 12 tatames (aproximadamente 24m²)",
    "O primeiro dojo foi no templo Eisho-ji (seita budista Jōdo)",
    "Em 1885 já contava com 54 alunos matriculados",
    "Em 1906 expandiu para 207 tatames",
    "Hoje possui 8 andares e mais de 500 tatames",
    "Símbolo: Yata-no-Kagami (espelho sagrado) - significa 'O Espelho 8 Mãos'",
    "É o centro mundial do Judô e referência para todas as federações",
  ],
  origins: [
    { country: "🇨🇳 China", desc: "Tradição marcial milenar. Kung Fu como termo genérico. Registros do século V a.C. sobre Schuai Jiao (luta chinesa)." },
    { country: "🇬🇷 Grécia/Roma", desc: "Pancrácio nos Jogos Olímpicos da Antiguidade. Gladiadores romanos praticavam diversas formas de combate." },
    { country: "🇪🇬 Egito", desc: "Pinturas em túmulos mostram sistema de luta similar ao boxe. Hieróglifos nas pirâmides registram técnicas." },
    { country: "🇮🇳 Índia", desc: "Mallayuddha - forma codificada mais antiga conhecida (5000 anos). Registrada no épico Mahabharata." },
    { country: "🇯🇵 Japão", desc: "Jujutsu desde 238 a.C. Conceito 'ceder para vencer' inspirado no salgueiro. Arte dos samurais." },
  ],
  brazilTimeline: [
    { year: "1910s", event: "Takaharu Saigo ensina Judô em São Paulo para a comunidade japonesa" },
    { year: "1922", event: "Demonstrações para autoridades políticas e militares brasileiras" },
    { year: "1925", event: "Conde Koma (Mitsuyo Maeda) chega ao Pará e ensina a família Gracie" },
    { year: "1931", event: "Primeiro torneio oficial de Judô no Brasil, em Araçatuba-SP" },
    { year: "1936", event: "Ryuzo Ogawa desembarca em Registro-SP, trazendo o Judô tradicional" },
    { year: "1938", event: "Ogawa abre sua academia no bairro da Liberdade em São Paulo" },
    { year: "1969", event: "Chiaki Ishii conquista o primeiro bronze mundial para o Brasil" },
    { year: "1972", event: "Chiaki Ishii ganha bronze olímpico em Munique" },
    { year: "1984", event: "Douglas Vieira conquista prata olímpica em Los Angeles" },
    { year: "2012", event: "Sarah Menezes conquista primeiro ouro olímpico feminino em Londres" },
  ],
};

export const principlesData = {
  mainPrinciples: [
    {
      kanji: "精力善用",
      romaji: "Seiryoku Zen'yo",
      meaning: "Máxima Eficácia com Mínimo Esforço",
      desc: "Melhor uso da energia. Melhora o corpo, vida, utilidade em todos os aspectos. Fundamental para uma vida plena, aplicável na vida diária através da filosofia, não só na luta física."
    },
    {
      kanji: "自他共栄",
      romaji: "Jita Kyoei",
      meaning: "Bem-Estar e Benefícios Mútuos",
      desc: "A solidariedade humana para benefício pessoal e universal. O progresso individual deve estar ligado à ajuda aos outros, tornando seres humanos mais completos através da eficiência e do auxílio mútuo."
    },
    {
      kanji: "柔",
      romaji: "Ju",
      meaning: "Princípio da Suavidade",
      desc: "Ceder à força em vez de resistir é eficaz. Usa o peso e força do oponente contra ele mesmo. CEDER PARA VENCER - como o salgueiro que dobra com o vento."
    }
  ],
  moralCode: [
    { title: "Gentileza", kanji: "礼儀", desc: "Respeitar os outros com cortesia" },
    { title: "Coragem", kanji: "勇気", desc: "Fazer o que é justo" },
    { title: "Sinceridade", kanji: "誠", desc: "Expressar-se sem ocultar" },
    { title: "Honra", kanji: "名誉", desc: "Manter a palavra" },
    { title: "Modéstia", kanji: "謙虚", desc: "Falar de si sem vaidade" },
    { title: "Autocontrole", kanji: "克己", desc: "Dominar as emoções" },
    { title: "Amizade", kanji: "友情", desc: "Cultivar o mais puro sentimento" },
  ],
  ideologies: [
    "Saber cada dia um pouco mais e usá-lo todos os dias para o bem, esse é o caminho dos verdadeiros judocas.",
    "Quem teme perder já está vencido.",
    "Somente se aproxima da perfeição quem a procura com constância, sabedoria e humildade.",
    "Quando verificares com tristeza que não sabes nada, terás feito teu primeiro progresso.",
    "Nunca te orgulhes de haver vencido. A única vitória que perdura é sobre a própria ignorância.",
    "O judoca não se aperfeiçoa para lutar, luta para se aperfeiçoar.",
    "Conhecer-se é dominar-se, dominar-se é triunfar.",
    "Praticar Judô é educar a mente a pensar com velocidade e o corpo a obedecer com justeza.",
  ],
  practiceForms: [
    { kanji: '乱取り', romaji: 'Randori', title: 'Treinamento Livre', desc: 'Método para aprender técnicas de ataque e defesa movimentando-se livremente, sem causar dano ao outro.' },
    { kanji: '形', romaji: 'Kata', title: 'Formas', desc: 'Método de aplicar técnicas pré-estabelecidas. Ex: Nage-no-Kata (Formas de Projeção)' },
    { kanji: '講義', romaji: 'Kogi', title: 'Palestra', desc: 'Aulas orais sobre técnicas de Judô, aspectos espirituais e vida social.' },
    { kanji: '問答', romaji: 'Mondo', title: 'Perguntas e Respostas', desc: 'Aprendizagem através de perguntas e respostas mútuas entre professor e aluno.' },
    { kanji: '試合', romaji: 'Shiai', title: 'Competição', desc: 'Teste de desenvolvimento técnico em situações de combate com pontuação.' },
  ],
  benefits: {
    physical: [
      "Aumento da concentração e pensamento rápido",
      "Noção de espaço e domínio do corpo",
      "Equilíbrio, flexibilidade e força",
      "Mobilidade de articulações",
      "Eliminação de gordura e melhora do condicionamento",
    ],
    moral: [
      "Controle emocional e paciência",
      "Saber ganhar e perder",
      "Senso de responsabilidade e disciplina",
      "Respeito ao próximo e formação de caráter",
      "Redução da timidez e melhora da autoestima",
      "Respeito à hierarquia",
    ]
  }
};

export const gokyoData = {
  ikkyo: {
    name: "Ikkyo (1º Grupo)",
    techniques: [
      { num: 1, name: "De-Ashi-Harai", kanji: "出足払", translation: "Varrer o pé que avança", group: "Ashi-waza" },
      { num: 2, name: "Hiza-Guruma", kanji: "膝車", translation: "Roda do joelho", group: "Ashi-waza" },
      { num: 3, name: "Sasae-Tsurikomi-Ashi", kanji: "支釣込足", translation: "Bloqueio do pé levantando", group: "Ashi-waza" },
      { num: 4, name: "Uki-Goshi", kanji: "浮腰", translation: "Quadril flutuante", group: "Koshi-waza" },
      { num: 5, name: "O-Soto-Gari", kanji: "大外刈", translation: "Grande ceifada externa", group: "Ashi-waza" },
      { num: 6, name: "O-Goshi", kanji: "大腰", translation: "Grande quadril", group: "Koshi-waza" },
      { num: 7, name: "O-Uchi-Gari", kanji: "大内刈", translation: "Grande ceifada interna", group: "Ashi-waza" },
      { num: 8, name: "Seoi-Nage", kanji: "背負投", translation: "Projeção pelas costas", group: "Te-waza" },
    ]
  },
  nikyo: {
    name: "Nikyo (2º Grupo)",
    techniques: [
      { num: 9, name: "Ko-Soto-Gari", kanji: "小外刈", translation: "Pequena ceifada externa", group: "Ashi-waza" },
      { num: 10, name: "Ko-Uchi-Gari", kanji: "小内刈", translation: "Pequena ceifada interna", group: "Ashi-waza" },
      { num: 11, name: "Koshi-Guruma", kanji: "腰車", translation: "Roda de quadril", group: "Koshi-waza" },
      { num: 12, name: "Tsurikomi-Goshi", kanji: "釣込腰", translation: "Quadril levantando e puxando", group: "Koshi-waza" },
      { num: 13, name: "Okuri-Ashi-Harai", kanji: "送足払", translation: "Varrer os pés deslizando", group: "Ashi-waza" },
      { num: 14, name: "Tai-Otoshi", kanji: "体落", translation: "Queda do corpo", group: "Te-waza" },
      { num: 15, name: "Harai-Goshi", kanji: "払腰", translation: "Quadril varrendo", group: "Koshi-waza" },
      { num: 16, name: "Uchi-Mata", kanji: "内股", translation: "Coxa interna", group: "Ashi-waza" },
    ]
  },
  sankyo: {
    name: "Sankyo (3º Grupo)",
    techniques: [
      { num: 17, name: "Ko-Soto-Gake", kanji: "小外掛", translation: "Pequeno gancho externo", group: "Ashi-waza" },
      { num: 18, name: "Tsuri-Goshi", kanji: "釣腰", translation: "Quadril levantando", group: "Koshi-waza" },
      { num: 19, name: "Yoko-Otoshi", kanji: "横落", translation: "Queda lateral", group: "Yoko-sutemi" },
      { num: 20, name: "Ashi-Guruma", kanji: "足車", translation: "Roda da perna", group: "Ashi-waza" },
      { num: 21, name: "Hane-Goshi", kanji: "跳腰", translation: "Quadril saltando", group: "Koshi-waza" },
      { num: 22, name: "Harai-Tsurikomi-Ashi", kanji: "払釣込足", translation: "Varrer o pé levantando", group: "Ashi-waza" },
      { num: 23, name: "Tomoe-Nage", kanji: "巴投", translation: "Projeção em círculo", group: "Ma-sutemi" },
      { num: 24, name: "Kata-Guruma", kanji: "肩車", translation: "Roda sobre os ombros", group: "Te-waza" },
    ]
  },
  yonkyo: {
    name: "Yonkyo (4º Grupo)",
    techniques: [
      { num: 25, name: "Sumi-Gaeshi", kanji: "隅返", translation: "Virada de canto", group: "Ma-sutemi" },
      { num: 26, name: "Tani-Otoshi", kanji: "谷落", translation: "Queda no vale", group: "Yoko-sutemi" },
      { num: 27, name: "Hane-Makikomi", kanji: "跳巻込", translation: "Enrolamento saltando", group: "Yoko-sutemi" },
      { num: 28, name: "Sukui-Nage", kanji: "掬投", translation: "Projeção em concha", group: "Te-waza" },
      { num: 29, name: "Utsuri-Goshi", kanji: "移腰", translation: "Quadril transferindo", group: "Koshi-waza" },
      { num: 30, name: "O-Guruma", kanji: "大車", translation: "Grande roda", group: "Ashi-waza" },
      { num: 31, name: "Soto-Makikomi", kanji: "外巻込", translation: "Enrolamento externo", group: "Yoko-sutemi" },
      { num: 32, name: "Uki-Otoshi", kanji: "浮落", translation: "Queda flutuante", group: "Te-waza" },
    ]
  },
  gokyo: {
    name: "Gokyo (5º Grupo)",
    techniques: [
      { num: 33, name: "O-Soto-Guruma", kanji: "大外車", translation: "Grande roda externa", group: "Ashi-waza" },
      { num: 34, name: "Uki-Waza", kanji: "浮技", translation: "Técnica flutuante", group: "Yoko-sutemi" },
      { num: 35, name: "Yoko-Wakare", kanji: "横分", translation: "Separação lateral", group: "Yoko-sutemi" },
      { num: 36, name: "Yoko-Guruma", kanji: "横車", translation: "Roda lateral", group: "Yoko-sutemi" },
      { num: 37, name: "Ushiro-Goshi", kanji: "後腰", translation: "Quadril para trás", group: "Koshi-waza" },
      { num: 38, name: "Ura-Nage", kanji: "裏投", translation: "Projeção para trás", group: "Ma-sutemi" },
      { num: 39, name: "Sumi-Otoshi", kanji: "隅落", translation: "Queda de canto", group: "Te-waza" },
      { num: 40, name: "Yoko-Gake", kanji: "横掛", translation: "Gancho lateral", group: "Yoko-sutemi" },
    ]
  },
};

export const katameData = {
  osaekomi: {
    title: "固 Osaekomi-Waza (Imobilizações)",
    techniques: [
      { name: "Kesa-Gatame", kanji: "袈裟固", desc: "Imobilização em diagonal" },
      { name: "Kuzure-Kesa-Gatame", kanji: "崩袈裟固", desc: "Variação do Kesa" },
      { name: "Ushiro-Kesa-Gatame", kanji: "後袈裟固", desc: "Kesa por trás" },
      { name: "Kata-Gatame", kanji: "肩固", desc: "Imobilização do ombro" },
      { name: "Yoko-Shiho-Gatame", kanji: "横四方固", desc: "Imobilização lateral em 4 pontos" },
      { name: "Kami-Shiho-Gatame", kanji: "上四方固", desc: "Imobilização superior em 4 pontos" },
      { name: "Kuzure-Kami-Shiho", kanji: "崩上四方固", desc: "Variação do Kami-Shiho" },
      { name: "Tate-Shiho-Gatame", kanji: "縦四方固", desc: "Imobilização montada" },
    ]
  },
  shime: {
    title: "絞 Shime-Waza (Estrangulamentos)",
    techniques: [
      { name: "Nami-Juji-Jime", kanji: "並十字絞", desc: "Estrangulamento cruzado normal" },
      { name: "Gyaku-Juji-Jime", kanji: "逆十字絞", desc: "Estrangulamento cruzado reverso" },
      { name: "Kata-Juji-Jime", kanji: "片十字絞", desc: "Estrangulamento cruzado com uma mão" },
      { name: "Hadaka-Jime", kanji: "裸絞", desc: "Estrangulamento nu (sem lapela)" },
      { name: "Okuri-Eri-Jime", kanji: "送襟絞", desc: "Estrangulamento deslizando a gola" },
      { name: "Kata-Ha-Jime", kanji: "片羽絞", desc: "Estrangulamento com uma asa" },
      { name: "Sode-Guruma-Jime", kanji: "袖車絞", desc: "Estrangulamento roda da manga" },
      { name: "Sankaku-Jime", kanji: "三角絞", desc: "Estrangulamento triangular" },
    ]
  },
  kansetsu: {
    title: "関 Kansetsu-Waza (Chaves de Articulação)",
    techniques: [
      { name: "Ude-Garami", kanji: "腕緘", desc: "Enrolamento do braço (Americana/Kimura)" },
      { name: "Juji-Gatame", kanji: "十字固", desc: "Chave de braço em cruz" },
      { name: "Ude-Hishigi-Ude-Gatame", kanji: "腕挫腕固", desc: "Chave de braço pelo braço" },
      { name: "Ude-Hishigi-Hiza-Gatame", kanji: "腕挫膝固", desc: "Chave de braço pelo joelho" },
      { name: "Ude-Hishigi-Waki-Gatame", kanji: "腕挫脇固", desc: "Chave de braço pela axila" },
      { name: "Ude-Hishigi-Hara-Gatame", kanji: "腕挫腹固", desc: "Chave de braço pelo abdômen" },
      { name: "Ashi-Garami", kanji: "足緘", desc: "Enrolamento da perna (proibido)" },
      { name: "Ude-Hishigi-Ashi-Gatame", kanji: "腕挫足固", desc: "Chave de braço pela perna" },
    ]
  }
};

export const beltSystem = {
  kyu: [
    { color: "#ffffff", name: "Branca", rank: "6º Kyu", age: "Iniciantes" },
    { color: "#f1c40f", name: "Amarela", rank: "5º Kyu", age: "8+ anos" },
    { color: "#e67e22", name: "Laranja", rank: "4º Kyu", age: "10+ anos" },
    { color: "#27ae60", name: "Verde", rank: "3º Kyu", age: "12+ anos" },
    { color: "#9b59b6", name: "Roxa", rank: "2º Kyu", age: "14+ anos" },
    { color: "#8b4513", name: "Marrom", rank: "1º Kyu", age: "15+ anos" },
  ],
  dan: [
    { color: "#1a1a1a", name: "Preta", rank: "1º ao 5º Dan", age: "16+ anos" },
    { color: "linear-gradient(90deg, #8b0000 50%, #ffffff 50%)", name: "Vermelha e Branca", rank: "6º ao 8º Dan", age: "Mestres" },
    { color: "#8b0000", name: "Vermelha", rank: "9º e 10º Dan", age: "Grandes Mestres" },
  ]
};

export const rulesData = {
  scoring: [
    { term: "IPPON", desc: "Ponto completo - Vence a luta", detail: "Queda perfeita, imobilização 20s, finalização", color: "#4ade80" },
    { term: "WAZA-ARI", desc: "Vantagem técnica", detail: "Queda incompleta, imobilização 10-19s", color: "#60a5fa" },
    { term: "YUKO", desc: "Pequena vantagem (2025)", detail: "Queda mínima, imobilização 5-9s", color: "#fbbf24" },
  ],
  commands: [
    { term: "HAJIME", def: "Começar a luta" },
    { term: "MATTE", def: "Parar (pausa)" },
    { term: "SOREMADE", def: "Fim do combate" },
    { term: "OSAEKOMI", def: "Imobilização válida" },
    { term: "TOKETA", def: "Escapou da imobilização" },
    { term: "IPPON", def: "Ponto completo" },
    { term: "WAZA-ARI", def: "Quase Ippon" },
    { term: "SHIDO", def: "Penalidade leve" },
    { term: "HANSOKU-MAKE", def: "Desclassificação" },
  ],
  penalties: [
    { name: "1º Shido", effect: "Advertência" },
    { name: "2º Shido", effect: "Advertência" },
    { name: "3º Shido", effect: "Hansoku-Make (desclassificação)" },
  ]
};
