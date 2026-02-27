// Navigation sections
export const sections = [
  { id: 'home', label: 'Início', labelEn: 'Home', labelJp: '始め', icon: '道' },
  { id: 'historia', label: 'História', labelEn: 'History', labelJp: '歴史', icon: '史' },
  { id: 'principios', label: 'Princípios', labelEn: 'Principles', labelJp: '原則', icon: '心' },
  { id: 'etiqueta', label: 'Etiqueta', labelEn: 'Etiquette', labelJp: '礼儀', icon: '礼' },
  { id: 'nomenclatura', label: 'Nomenclatura', labelEn: 'Nomenclature', labelJp: '用語', icon: '言' },
  { id: 'gokyo', label: 'Gokyo', labelEn: 'Gokyo', labelJp: '五教', icon: '投' },
  { id: 'katameWaza', label: 'Katame-Waza', labelEn: 'Katame-Waza', labelJp: '固技', icon: '固' },
  { id: 'katas', label: 'Katas', labelEn: 'Katas', labelJp: '形', icon: '形' },
  { id: 'nageNoKata', label: 'Nage Kata', labelEn: 'Nage Kata', labelJp: '投の形', icon: '投形' },
  { id: 'katameNoKata', label: 'Katame Kata', labelEn: 'Katame Kata', labelJp: '固の形', icon: '固形' },
  { id: 'treinos', label: 'Treinos', labelEn: 'Training', labelJp: '稽古', icon: '練' },
  { id: 'placar', label: 'Placar', labelEn: 'Scoreboard', labelJp: '得点', icon: '🏆' },
  { id: 'regras', label: 'Regras', labelEn: 'Rules', labelJp: '規則', icon: '則' },
  { id: 'regras2025', label: 'Regras 2025', labelEn: 'Rules 2025', labelJp: '新規則', icon: '新' },
  { id: 'organizacao', label: 'Organização', labelEn: 'Organization', labelJp: '組織', icon: '🏟️' },
  { id: 'escolar', label: 'Escolar', labelEn: 'School Judo', labelJp: '学校', icon: '🎓' },
  { id: 'socorros', label: 'Socorros', labelEn: 'First Aid', labelJp: '救急', icon: '🚑' },
  { id: 'inclusivo', label: 'Inclusivo', labelEn: 'Inclusive', labelJp: '包括', icon: '♿' },
  { id: 'videos', label: 'Vídeos', labelEn: 'Videos', labelJp: '動画', icon: '映' },
  { id: 'flashcardsMenu', label: 'Flashcards', labelEn: 'Flashcards', labelJp: '暗記', icon: '札' },
  { id: 'quizzes', label: 'Quizzes', labelEn: 'Quizzes', labelJp: '問題', icon: '問' },
];

export const homeCards = [
  { title: 'História', desc: 'Jigoro Kano, Kodokan e origens', descEn: 'Jigoro Kano, Kodokan and origins', icon: '史', section: 'historia' },
  { title: 'Princípios', desc: 'Filosofia e código moral', descEn: 'Philosophy and moral code', icon: '心', section: 'principios' },
  { title: 'Etiqueta', desc: 'Condutas, saudações e dojo', descEn: 'Conduct, bowing and dojo', icon: '礼', section: 'etiqueta' },
  { title: 'Nomenclatura', desc: 'Termos japoneses', descEn: 'Japanese terms', icon: '言', section: 'nomenclatura' },
  { title: 'Gokyo', desc: '40 técnicas de projeção', descEn: '40 throwing techniques', icon: '投', section: 'gokyo' },
  { title: 'Katame-Waza', desc: 'Técnicas de solo', descEn: 'Ground techniques', icon: '固', section: 'katameWaza' },
  { title: 'Katas', desc: 'Nage-no-Kata e Katame-no-Kata', descEn: 'Nage-no-Kata and Katame-no-Kata', icon: '形', section: 'katas' },
  { title: 'Nage no Kata', desc: '15 técnicas em 5 grupos', descEn: '15 techniques in 5 groups', icon: '投形', section: 'nageNoKata' },
  { title: 'Katame no Kata', desc: '15 técnicas em 3 grupos', descEn: '15 techniques in 3 groups', icon: '固形', section: 'katameNoKata' },
  { title: 'Treinamentos', desc: 'Uchi-komi, Randori e métodos', descEn: 'Uchi-komi, Randori and methods', icon: '練', section: 'treinos' },
  { title: 'Sistema de Placar', desc: 'Pontuação e penalidades', descEn: 'Scoring and penalties', icon: '🏆', section: 'placar' },
  { title: 'Regras', desc: 'Arbitragem e pontuação', descEn: 'Refereeing and scoring', icon: '則', section: 'regras' },
  { title: 'Regras 2025', desc: 'Novas regras IJF', descEn: 'New IJF rules', icon: '新', section: 'regras2025' },
  { title: 'Organização Desportiva', desc: 'Federações e categorias', descEn: 'Federations and categories', icon: '🏟️', section: 'organizacao' },
  { title: 'Judô Escolar', desc: 'Pedagogia e faixas infantis', descEn: 'Pedagogy and kids belts', icon: '🎓', section: 'escolar' },
  { title: 'Primeiros Socorros', desc: 'Emergências no tatame', descEn: 'Emergencies on tatami', icon: '🚑', section: 'socorros' },
  { title: 'Inclusivo', desc: 'TEA, TDAH e adaptações', descEn: 'ASD, ADHD and adaptations', icon: '♿', section: 'inclusivo' },
  { title: 'Vídeos', desc: 'Playlist de demonstrações', descEn: 'Demo playlist', icon: '映', section: 'videos' },
];

export const searchIndex = [
  { section: 'historia', title: 'Jigoro Kano', titleEn: 'Jigoro Kano', keywords: 'fundador criador pai judo kodokan 1882', keywordsEn: 'founder creator father judo kodokan 1882' },
  { section: 'historia', title: 'Kodokan', titleEn: 'Kodokan', keywords: 'instituto escola fundação história origem', keywordsEn: 'institute school foundation history origin' },
  { section: 'historia', title: 'Olimpíadas', titleEn: 'Olympics', keywords: 'olimpico 1964 toquio jogos medalha', keywordsEn: 'olympic 1964 tokyo games medal' },
  { section: 'historia', title: 'Mitsuyo Maeda', titleEn: 'Mitsuyo Maeda', keywords: 'conde koma brasil gracie belém', keywordsEn: 'count koma brazil gracie belem' },
  { section: 'principios', title: 'Seiryoku Zenyo', titleEn: 'Seiryoku Zenyo', keywords: 'eficiência energia principio filosofia', keywordsEn: 'efficiency energy principle philosophy' },
  { section: 'principios', title: 'Jita Kyoei', titleEn: 'Jita Kyoei', keywords: 'benefício mútuo prosperidade principio', keywordsEn: 'mutual benefit prosperity principle' },
  { section: 'principios', title: 'Código Moral', titleEn: 'Moral Code', keywords: 'cortesia coragem sinceridade honra respeito', keywordsEn: 'courtesy courage sincerity honor respect' },
  { section: 'etiqueta', title: 'Saudações (Rei)', titleEn: 'Greetings (Rei)', keywords: 'ritsu-rei za-rei saudação cumprimento', keywordsEn: 'ritsu-rei za-rei greeting bow' },
  { section: 'etiqueta', title: 'Estrutura do Dojô', titleEn: 'Dojo Structure', keywords: 'kamiza shimoza joseki tatame', keywordsEn: 'kamiza shimoza joseki tatami' },
  { section: 'nomenclatura', title: 'Termos Básicos', titleEn: 'Basic Terms', keywords: 'japonês palavras significado tradução', keywordsEn: 'japanese words meaning translation' },
  { section: 'nomenclatura', title: 'Números', titleEn: 'Numbers', keywords: 'ichi ni san numeros contar japonês', keywordsEn: 'ichi ni san numbers count japanese' },
  { section: 'nomenclatura', title: 'Partes do Corpo', titleEn: 'Body Parts', keywords: 'te ashi koshi mimi', keywordsEn: 'te ashi koshi mimi hand foot hip' },
  { section: 'gokyo', title: 'O-Soto-Gari', titleEn: 'O-Soto-Gari', keywords: 'ceifa externa grande perna projeção', keywordsEn: 'outer reap big leg throw' },
  { section: 'gokyo', title: 'Seoi-Nage', titleEn: 'Seoi-Nage', keywords: 'costas projeção braço ombro', keywordsEn: 'back throw arm shoulder' },
  { section: 'gokyo', title: 'Uchi-Mata', titleEn: 'Uchi-Mata', keywords: 'coxa interna perna projeção', keywordsEn: 'inner thigh leg throw' },
  { section: 'gokyo', title: 'Ippon Seoi-Nage', titleEn: 'Ippon Seoi-Nage', keywords: 'ombro braço único projeção', keywordsEn: 'shoulder arm single throw' },
  { section: 'gokyo', title: 'Harai-Goshi', titleEn: 'Harai-Goshi', keywords: 'quadril varrer projeção', keywordsEn: 'hip sweep throw' },
  { section: 'katameWaza', title: 'Imobilizações', titleEn: 'Pins', keywords: 'osaekomi kesa shiho gatame solo', keywordsEn: 'osaekomi kesa shiho gatame ground' },
  { section: 'katameWaza', title: 'Estrangulamentos', titleEn: 'Chokes', keywords: 'shime jime hadaka sankaku choke', keywordsEn: 'shime jime hadaka sankaku choke strangle' },
  { section: 'katameWaza', title: 'Chaves', titleEn: 'Joint Locks', keywords: 'kansetsu juji garami armlock braço', keywordsEn: 'kansetsu juji garami armlock arm' },
  { section: 'placar', title: 'Pontuação', titleEn: 'Scoring', keywords: 'ippon wazari yuko ponto score placar', keywordsEn: 'ippon wazari yuko point score scoreboard' },
  { section: 'placar', title: 'Penalidades', titleEn: 'Penalties', keywords: 'shido hansoku penalidade falta', keywordsEn: 'shido hansoku penalty foul' },
  { section: 'placar', title: 'Golden Score', titleEn: 'Golden Score', keywords: 'prorrogação empate morte súbita', keywordsEn: 'overtime tie sudden death' },
  { section: 'placar', title: 'Comandos Árbitro', titleEn: 'Referee Commands', keywords: 'hajime matte sore-made osaekomi', keywordsEn: 'hajime matte sore-made osaekomi' },
  { section: 'regras', title: 'Regras Arbitragem', titleEn: 'Refereeing Rules', keywords: 'regras arbitragem competição', keywordsEn: 'rules refereeing competition' },
  { section: 'regras', title: 'Tempo de Luta', titleEn: 'Match Duration', keywords: 'tempo duração minutos golden score', keywordsEn: 'time duration minutes golden score' },
  { section: 'regras2025', title: 'Yuko 2025', titleEn: 'Yuko 2025', keywords: 'novo pontuação mudança regra', keywordsEn: 'new scoring change rule' },
  { section: 'regras2025', title: 'Novas Regras 2025', titleEn: 'New Rules 2025', keywords: 'ijf mudanças atualizações', keywordsEn: 'ijf changes updates' },
  { section: 'nageNoKata', title: 'Nage no Kata', titleEn: 'Nage no Kata', keywords: 'forma projeção kata 15 técnicas', keywordsEn: 'form throwing kata 15 techniques' },
  { section: 'nageNoKata', title: 'Te-Waza', titleEn: 'Te-Waza', keywords: 'técnicas mão braço kata', keywordsEn: 'hand arm techniques kata' },
  { section: 'nageNoKata', title: 'Koshi-Waza', titleEn: 'Koshi-Waza', keywords: 'técnicas quadril kata', keywordsEn: 'hip techniques kata' },
  { section: 'katameNoKata', title: 'Katame no Kata', titleEn: 'Katame no Kata', keywords: 'forma solo kata imobilização', keywordsEn: 'form ground kata pinning' },
  { section: 'katameNoKata', title: 'Osaekomi-Waza', titleEn: 'Osaekomi-Waza', keywords: 'imobilização chão domínio', keywordsEn: 'pinning ground control' },
  { section: 'katas', title: 'Kata', titleEn: 'Kata', keywords: 'forma demonstração sequência técnicas', keywordsEn: 'form demonstration sequence techniques' },
  { section: 'treinos', title: 'Uchi-Komi', titleEn: 'Uchi-Komi', keywords: 'repetição entrada treino', keywordsEn: 'repetition entry training' },
  { section: 'treinos', title: 'Randori', titleEn: 'Randori', keywords: 'treino livre prática', keywordsEn: 'free practice sparring' },
  { section: 'treinos', title: 'Shiai', titleEn: 'Shiai', keywords: 'competição luta torneio', keywordsEn: 'competition fight tournament' },
  { section: 'organizacao', title: 'Federações', titleEn: 'Federations', keywords: 'ijf cbj federação confederação', keywordsEn: 'ijf cbj federation confederation' },
  { section: 'organizacao', title: 'Categorias', titleEn: 'Categories', keywords: 'peso idade cadete junior senior', keywordsEn: 'weight age cadet junior senior' },
  { section: 'escolar', title: 'Faixas Infantis', titleEn: 'Children Belts', keywords: 'cinza azul amarela criança graduação', keywordsEn: 'gray blue yellow child grading' },
  { section: 'escolar', title: 'Pedagogia', titleEn: 'Pedagogy', keywords: 'ensino criança didática infantil', keywordsEn: 'teaching child didactics children' },
  { section: 'socorros', title: 'Emergências', titleEn: 'Emergencies', keywords: 'socorro primeiros contusão desmaio lesão', keywordsEn: 'first aid bruise fainting injury' },
  { section: 'socorros', title: 'Lesões', titleEn: 'Injuries', keywords: 'machucado ferimento trauma', keywordsEn: 'hurt wound trauma' },
  { section: 'inclusivo', title: 'TEA', titleEn: 'ASD', keywords: 'autismo espectro adaptação', keywordsEn: 'autism spectrum adaptation' },
  { section: 'inclusivo', title: 'TDAH', titleEn: 'ADHD', keywords: 'déficit atenção hiperatividade', keywordsEn: 'deficit attention hyperactivity' },
  { section: 'inclusivo', title: 'Adaptações', titleEn: 'Adaptations', keywords: 'inclusão especial adaptado deficiência', keywordsEn: 'inclusion special adapted disability' },
  { section: 'videos', title: 'Vídeos', titleEn: 'Videos', keywords: 'video demonstração técnica assistir youtube', keywordsEn: 'video demonstration technique watch youtube' },
  { section: 'flashcardsMenu', title: 'Flashcards', titleEn: 'Flashcards', keywords: 'estudo cartão revisão memorização', keywordsEn: 'study card review memorization' },
  { section: 'quizMenu', title: 'Quizzes', titleEn: 'Quizzes', keywords: 'teste perguntas avaliação exame', keywordsEn: 'test questions assessment exam' },
  // Extra Gokyo
  { section: 'gokyo', title: 'Extra Gokyo', titleEn: 'Extra Gokyo', keywords: 'extra gokyo habukareta shinmeisho técnicas excluídas', keywordsEn: 'extra gokyo habukareta shinmeisho excluded techniques' },
  { section: 'gokyo', title: 'Habukareta-Waza', titleEn: 'Habukareta-Waza', keywords: 'obi-otoshi hikikomi-gaeshi o-soto-otoshi daki-wakare tawara-gaeshi seoi-otoshi uchi-makikomi yama-arashi excluídas', keywordsEn: 'obi-otoshi hikikomi-gaeshi o-soto-otoshi daki-wakare tawara-gaeshi seoi-otoshi uchi-makikomi yama-arashi excluded' },
  { section: 'gokyo', title: 'Shinmeisho-no-Waza', titleEn: 'Shinmeisho-no-Waza', keywords: 'morote-gari kuchiki-taoshi kibisu-gaeshi uchi-mata-sukashi ippon-seoi-nage kani-basami kawazu-gake novos nomes', keywordsEn: 'morote-gari kuchiki-taoshi kibisu-gaeshi uchi-mata-sukashi ippon-seoi-nage kani-basami kawazu-gake new names' },
  // All Gokyo techniques for search
  { section: 'gokyo', title: 'De-Ashi-Harai', titleEn: 'De-Ashi-Harai', keywords: 'varrer pé avança ikkyo 1 ashi-waza', keywordsEn: 'sweep advancing foot ikkyo 1 ashi-waza' },
  { section: 'gokyo', title: 'Hiza-Guruma', titleEn: 'Hiza-Guruma', keywords: 'roda joelho ikkyo ashi-waza', keywordsEn: 'knee wheel ikkyo ashi-waza' },
  { section: 'gokyo', title: 'Sasae-Tsurikomi-Ashi', titleEn: 'Sasae-Tsurikomi-Ashi', keywords: 'bloqueio pé levantando ikkyo ashi-waza', keywordsEn: 'propping drawing ankle ikkyo ashi-waza' },
  { section: 'gokyo', title: 'Uki-Goshi', titleEn: 'Uki-Goshi', keywords: 'quadril flutuante ikkyo koshi-waza', keywordsEn: 'floating hip ikkyo koshi-waza' },
  { section: 'gokyo', title: 'O-Goshi', titleEn: 'O-Goshi', keywords: 'grande quadril ikkyo koshi-waza', keywordsEn: 'major hip ikkyo koshi-waza' },
  { section: 'gokyo', title: 'Ko-Soto-Gari', titleEn: 'Ko-Soto-Gari', keywords: 'pequena ceifada externa nikyo ashi-waza', keywordsEn: 'minor outer reap nikyo ashi-waza' },
  { section: 'gokyo', title: 'Ko-Uchi-Gari', titleEn: 'Ko-Uchi-Gari', keywords: 'pequena ceifada interna nikyo ashi-waza', keywordsEn: 'minor inner reap nikyo ashi-waza' },
  { section: 'gokyo', title: 'Koshi-Guruma', titleEn: 'Koshi-Guruma', keywords: 'roda quadril nikyo koshi-waza', keywordsEn: 'hip wheel nikyo koshi-waza' },
  { section: 'gokyo', title: 'Tsurikomi-Goshi', titleEn: 'Tsurikomi-Goshi', keywords: 'quadril levantando puxando nikyo koshi-waza', keywordsEn: 'lifting pulling hip nikyo koshi-waza' },
  { section: 'gokyo', title: 'Okuri-Ashi-Harai', titleEn: 'Okuri-Ashi-Harai', keywords: 'varrer pés deslizando nikyo ashi-waza', keywordsEn: 'sliding foot sweep nikyo ashi-waza' },
  { section: 'gokyo', title: 'Tai-Otoshi', titleEn: 'Tai-Otoshi', keywords: 'queda corpo nikyo te-waza', keywordsEn: 'body drop nikyo te-waza' },
  { section: 'gokyo', title: 'Tomoe-Nage', titleEn: 'Tomoe-Nage', keywords: 'projeção círculo sankyo ma-sutemi sacrifício', keywordsEn: 'circle throw sankyo ma-sutemi sacrifice' },
  { section: 'gokyo', title: 'Kata-Guruma', titleEn: 'Kata-Guruma', keywords: 'roda ombros sankyo te-waza', keywordsEn: 'shoulder wheel sankyo te-waza' },
  { section: 'gokyo', title: 'Sumi-Gaeshi', titleEn: 'Sumi-Gaeshi', keywords: 'virada canto yonkyo ma-sutemi', keywordsEn: 'corner reversal yonkyo ma-sutemi' },
  { section: 'gokyo', title: 'Sukui-Nage', titleEn: 'Sukui-Nage', keywords: 'projeção concha yonkyo te-waza', keywordsEn: 'scoop throw yonkyo te-waza' },
  // Video technique search entries
  { section: 'videos', title: 'Seoi-nage (vídeo)', titleEn: 'Seoi-nage (video)', keywords: 'seoi nage costas projeção te-waza ikkyo video', keywordsEn: 'seoi nage back throw te-waza ikkyo video' },
  { section: 'videos', title: 'O-Soto-Gari (vídeo)', titleEn: 'O-Soto-Gari (video)', keywords: 'o-soto-gari ceifa externa ashi-waza ikkyo video', keywordsEn: 'o-soto-gari outer reap ashi-waza ikkyo video' },
  { section: 'videos', title: 'Uchi-Mata (vídeo)', titleEn: 'Uchi-Mata (video)', keywords: 'uchi-mata coxa interna ashi-waza nikyo video', keywordsEn: 'uchi-mata inner thigh ashi-waza nikyo video' },
  { section: 'videos', title: 'Harai-Goshi (vídeo)', titleEn: 'Harai-Goshi (video)', keywords: 'harai-goshi quadril varrer koshi-waza nikyo video', keywordsEn: 'harai-goshi hip sweep koshi-waza nikyo video' },
  { section: 'videos', title: 'Ippon-Seoi-Nage (vídeo)', titleEn: 'Ippon-Seoi-Nage (video)', keywords: 'ippon seoi nage ombro braço te-waza shinmeisho video', keywordsEn: 'ippon seoi nage shoulder arm te-waza shinmeisho video' },
  { section: 'videos', title: 'Tomoe-Nage (vídeo)', titleEn: 'Tomoe-Nage (video)', keywords: 'tomoe nage círculo sacrifício sutemi video', keywordsEn: 'tomoe nage circle sacrifice sutemi video' },
  { section: 'videos', title: 'Kesa-Gatame (vídeo)', titleEn: 'Kesa-Gatame (video)', keywords: 'kesa gatame imobilização osaekomi katame video', keywordsEn: 'kesa gatame pin osaekomi katame video' },
  { section: 'videos', title: 'Juji-Gatame (vídeo)', titleEn: 'Juji-Gatame (video)', keywords: 'juji gatame chave braço cruz kansetsu video', keywordsEn: 'juji gatame armbar cross kansetsu video' },
  { section: 'videos', title: 'Hadaka-Jime (vídeo)', titleEn: 'Hadaka-Jime (video)', keywords: 'hadaka jime estrangulamento nu shime video', keywordsEn: 'hadaka jime naked choke shime video' },
  { section: 'videos', title: 'Sankaku-Jime (vídeo)', titleEn: 'Sankaku-Jime (video)', keywords: 'sankaku jime triângulo estrangulamento shime video', keywordsEn: 'sankaku jime triangle choke shime video' },
  { section: 'videos', title: 'Ukemi (vídeo)', titleEn: 'Ukemi (video)', keywords: 'ukemi queda amortecimento ushiro yoko mae video', keywordsEn: 'ukemi fall breakfall ushiro yoko mae video' },
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
    name: "Ikkyo (1º GOKYO)",
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
    name: "Nikyo (2º GOKYO)",
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
    name: "Sankyo (3º GOKYO)",
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
    name: "Yonkyo (4º GOKYO)",
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
    name: "Gokyo (5º GOKYO)",
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

export const extraGokyoData = {
  habukaretaWaza: {
    name: "Habukareta-Waza",
    description: "Técnicas Excluídas",
    descriptionEn: "Excluded Techniques",
    info: "Conjunto de técnicas que, originalmente, estavam incluídas na primeira versão do Go-Kyo (Kyu-Gokyō), porém foram retiradas em 1920 após uma revisão do Go-Kyo.",
    infoEn: "Set of techniques that were originally included in the first version of the Go-Kyo (Kyu-Gokyō), but were removed in 1920 after a revision of the Go-Kyo.",
    techniques: [
      { num: 1, name: "Obi-Otoshi", kanji: "帯落", translation: "Queda pela faixa", translationEn: "Belt drop", group: "Te-waza", originalGroup: "3º Grupo" },
      { num: 2, name: "Hikikomi-Gaeshi", kanji: "引込返", translation: "Virada puxando", translationEn: "Pulling reversal", group: "Ma-sutemi", originalGroup: "4º Grupo" },
      { num: 3, name: "O-Soto-Otoshi", kanji: "大外落", translation: "Grande queda externa", translationEn: "Large outer drop", group: "Ashi-waza", originalGroup: "4º Grupo" },
      { num: 4, name: "Daki-Wakare", kanji: "抱分", translation: "Separação abraçando", translationEn: "Hugging separation", group: "Yoko-sutemi", originalGroup: "4º Grupo" },
      { num: 5, name: "Tawara-Gaeshi", kanji: "俵返", translation: "Virada do saco de arroz", translationEn: "Rice bag reversal", group: "Ma-sutemi", originalGroup: "4º Grupo" },
      { num: 6, name: "Seoi-Otoshi", kanji: "背負落", translation: "Queda pelas costas", translationEn: "Back drop", group: "Te-waza", originalGroup: "5º Grupo" },
      { num: 7, name: "Uchi-Makikomi", kanji: "内巻込", translation: "Enrolamento interno", translationEn: "Inner winding", group: "Yoko-sutemi", originalGroup: "5º Grupo" },
      { num: 8, name: "Yama-Arashi", kanji: "山嵐", translation: "Tempestade na montanha", translationEn: "Mountain storm", group: "Te-waza", originalGroup: "5º Grupo" },
    ]
  },
  shinmeishoNoWaza: {
    name: "Shinmeisho-no-Waza",
    description: "Técnicas com Novos Nomes",
    descriptionEn: "Newly Named Techniques",
    info: "Técnicas que foram adicionadas ao catálogo oficial do Kodokan após a revisão de 1920, com nomes novos ou reclassificações.",
    infoEn: "Techniques that were added to the official Kodokan catalog after the 1920 revision, with new names or reclassifications.",
    techniques: [
      { num: 1, name: "Morote-Gari", kanji: "双手刈", translation: "Ceifada com duas mãos", translationEn: "Two-hand reap", group: "Te-waza" },
      { num: 2, name: "Kuchiki-Taoshi", kanji: "朽木倒", translation: "Derrubar árvore seca", translationEn: "Dead tree drop", group: "Te-waza" },
      { num: 3, name: "Kibisu-Gaeshi", kanji: "踵返", translation: "Virada pelo calcanhar", translationEn: "Heel reversal", group: "Te-waza" },
      { num: 4, name: "Uchi-Mata-Sukashi", kanji: "内股透", translation: "Esquiva do Uchi-mata", translationEn: "Uchi-mata slip", group: "Ashi-waza" },
      { num: 5, name: "Ko-Uchi-Gaeshi", kanji: "小内返", translation: "Contra do Ko-uchi", translationEn: "Ko-uchi counter", group: "Ashi-waza" },
      { num: 6, name: "Obi-Tori-Gaeshi", kanji: "帯取返", translation: "Virada agarrando a faixa", translationEn: "Belt grab reversal", group: "Te-waza" },
      { num: 7, name: "Sode-Tsurikomi-Goshi", kanji: "袖釣込腰", translation: "Quadril puxando pela manga", translationEn: "Sleeve lifting hip", group: "Koshi-waza" },
      { num: 8, name: "Ippon-Seoi-Nage", kanji: "一本背負投", translation: "Projeção por um braço", translationEn: "One-arm shoulder throw", group: "Te-waza" },
      { num: 9, name: "Tsubame-Gaeshi", kanji: "燕返", translation: "Contra da andorinha", translationEn: "Swallow counter", group: "Ashi-waza" },
      { num: 10, name: "O-Soto-Gaeshi", kanji: "大外返", translation: "Contra do O-soto", translationEn: "O-soto counter", group: "Ashi-waza" },
      { num: 11, name: "O-Uchi-Gaeshi", kanji: "大内返", translation: "Contra do O-uchi", translationEn: "O-uchi counter", group: "Ashi-waza" },
      { num: 12, name: "Hane-Goshi-Gaeshi", kanji: "跳腰返", translation: "Contra do Hane-goshi", translationEn: "Hane-goshi counter", group: "Ashi-waza" },
      { num: 13, name: "Harai-Goshi-Gaeshi", kanji: "払腰返", translation: "Contra do Harai-goshi", translationEn: "Harai-goshi counter", group: "Ashi-waza" },
      { num: 14, name: "Uchi-Mata-Gaeshi", kanji: "内股返", translation: "Contra do Uchi-mata", translationEn: "Uchi-mata counter", group: "Ashi-waza" },
      { num: 15, name: "Kani-Basami", kanji: "蟹挟", translation: "Tesoura de caranguejo", translationEn: "Crab scissors", group: "Yoko-sutemi" },
      { num: 16, name: "Kawazu-Gake", kanji: "河津掛", translation: "Gancho Kawazu", translationEn: "Kawazu hook", group: "Yoko-sutemi" },
      { num: 17, name: "O-Soto-Makikomi", kanji: "大外巻込", translation: "Enrolamento externo grande", translationEn: "Large outer winding", group: "Yoko-sutemi" },
      { num: 18, name: "Uchi-Mata-Makikomi", kanji: "内股巻込", translation: "Enrolamento do Uchi-mata", translationEn: "Uchi-mata winding", group: "Yoko-sutemi" },
      { num: 19, name: "Harai-Makikomi", kanji: "払巻込", translation: "Enrolamento varrendo", translationEn: "Sweeping winding", group: "Yoko-sutemi" },
      { num: 20, name: "Ko-Uchi-Makikomi", kanji: "小内巻込", translation: "Enrolamento interno pequeno", translationEn: "Small inner winding", group: "Yoko-sutemi" },
      { num: 21, name: "Uki-Gatame", kanji: "浮固", translation: "Imobilização flutuante", translationEn: "Floating hold", group: "Osaekomi-waza" },
      { num: 22, name: "Ura-Gatame", kanji: "裏固", translation: "Imobilização por trás", translationEn: "Rear hold", group: "Osaekomi-waza" },
    ]
  }
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
