import { useLanguage } from '@/contexts/LanguageContext';

const InclusivoSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Judô Inclusivo',
      intro: 'O Judô é uma ferramenta poderosa de inclusão social. Seus princípios de respeito mútuo (Jita Kyoei) e máxima eficiência (Seiryoku Zenyo) se aplicam perfeitamente ao trabalho com pessoas com necessidades especiais. O tatame é um espaço de igualdade.',
      objectives: 'Objetivos do Judô Inclusivo',
      strategies: 'Estratégias por Tipo de Necessidade',
      fundamentalPrinciples: 'Princípios Fundamentais',
      parajudo: 'Parajudô',
      visualClassification: 'Classificação Visual',
      specificRules: 'Regras Específicas',
      brazilianHighlights: '🇧🇷 Destaques Brasileiros',
      objetivos: [
        { titulo: 'Social', desc: 'Integração, pertencimento e respeito mútuo', icone: '🤝', cor: 'bg-green-500/20 border-green-500/30' },
        { titulo: 'Cognitivo', desc: 'Concentração, estratégia e tomada de decisão', icone: '🧠', cor: 'bg-blue-500/20 border-blue-500/30' },
        { titulo: 'Motor', desc: 'Coordenação, equilíbrio e consciência corporal', icone: '🏃', cor: 'bg-orange-500/20 border-orange-500/30' },
        { titulo: 'Emocional', desc: 'Autoestima, autocontrole e resiliência', icone: '💚', cor: 'bg-purple-500/20 border-purple-500/30' },
      ],
      abordagens: [
        { tipo: 'TEA', nome: 'Transtorno do Espectro Autista', cor: 'bg-blue-500', estrategias: ['Ambiente estruturado e previsível', 'Rotinas claras e consistentes', 'Uso de pictogramas e comunicação visual', 'Redução de estímulos sensoriais excessivos', 'Instruções curtas e objetivas', 'Tempo de adaptação individual'] },
        { tipo: 'TDAH', nome: 'Déficit de Atenção e Hiperatividade', cor: 'bg-yellow-500', estrategias: ['Atividades dinâmicas e variadas', 'Pausas frequentes entre exercícios', 'Reforço positivo constante', 'Tarefas curtas e objetivas', 'Canalizar energia através do movimento', 'Evitar filas longas de espera'] },
        { tipo: 'AH/SD', nome: 'Altas Habilidades/Superdotação', cor: 'bg-purple-500', estrategias: ['Desafios extras e aprofundamento', 'Papel de liderança e mentoria', 'Aprofundamento técnico e teórico', 'Mentoria de colegas menos experientes', 'Projetos especiais e pesquisas', 'Participação em eventos avançados'] },
        { tipo: 'DV', nome: 'Deficiência Visual', cor: 'bg-gray-500', estrategias: ['Comunicação tátil e verbal detalhada', 'Descrição clara de todos os movimentos', 'Contato físico guiado para ensino', 'Uso de sinais sonoros', 'Ambiente organizado e previsível', 'Identificação verbal ao se aproximar'] },
        { tipo: 'DA', nome: 'Deficiência Auditiva', cor: 'bg-pink-500', estrategias: ['Sinais visuais para comandos', 'Demonstração física das técnicas', 'Posicionamento frontal do professor', 'Uso de LIBRAS quando possível', 'Contato visual antes de falar', 'Repetição através de demonstração'] },
        { tipo: 'DF', nome: 'Deficiência Física', cor: 'bg-teal-500', estrategias: ['Adaptações técnicas individualizadas', 'Foco em técnicas compatíveis', 'Parajudô para atletas elegíveis', 'Equipamentos adaptados se necessário', 'Avaliação médica prévia', 'Objetivos realistas e progressivos'] },
        { tipo: 'DI', nome: 'Deficiência Intelectual', cor: 'bg-amber-500', estrategias: ['Linguagem simples e direta', 'Demonstrações práticas', 'Repetição paciente', 'Fragmentação de técnicas em etapas', 'Reforço positivo frequente', 'Respeito ao tempo individual'] },
        { tipo: 'Down', nome: 'Síndrome de Down', cor: 'bg-cyan-500', estrategias: ['Atenção à hipotonia muscular', 'Fortalecimento progressivo', 'Cuidado com articulações', 'Atividades lúdicas', 'Socialização incentivada', 'Avaliação cardiológica prévia'] },
      ],
      principios: [
        'Respeitar o ritmo individual de cada praticante', 'Adaptar a metodologia, não reduzir expectativas',
        'Promover ambiente acolhedor e sem julgamentos', 'Celebrar pequenas conquistas e progressos',
        'Incluir família no processo de desenvolvimento', 'Capacitar professores para atendimento inclusivo',
        'Usar linguagem respeitosa e pessoa-primeiro', 'Focar nas potencialidades, não nas limitações',
      ],
      parajudoIntro: 'O Parajudô é a modalidade paralímpica do Judô para atletas com deficiência visual. Está presente nos Jogos Paralímpicos desde Seul 1988 (masculino) e Atenas 2004 (feminino).',
      classificacoes: [
        { classe: 'B1', desc: 'Cegueira total ou percepção de luz sem reconhecer formatos' },
        { classe: 'B2', desc: 'Baixa visão severa - até 2/60 ou campo visual de até 5°' },
        { classe: 'B3', desc: 'Baixa visão moderada - até 6/60 ou campo visual de até 20°' },
      ],
      regras: ['Atletas iniciam já com pegada (kumi-kata)', 'Árbitro posiciona os atletas antes do Hajime', 'Tatame com texturas diferentes nas bordas', 'Não há penalização por sair da área', 'Atletas B1 lutam com círculo vermelho no judogi'],
      brasileiros: ['Antonio Tenório - 4x medalhista paralímpico', 'Débora Menezes - Ouro em Tóquio 2020', 'Alana Maldonado - Ouro em Tóquio 2020', 'Wilians Araújo - Medalhista paralímpico'],
    },
    en: {
      title: 'Inclusive Judo',
      intro: 'Judo is a powerful tool for social inclusion. Its principles of mutual respect (Jita Kyoei) and maximum efficiency (Seiryoku Zenyo) apply perfectly to working with people with special needs. The mat is a space of equality.',
      objectives: 'Inclusive Judo Objectives',
      strategies: 'Strategies by Need Type',
      fundamentalPrinciples: 'Fundamental Principles',
      parajudo: 'Para Judo',
      visualClassification: 'Visual Classification',
      specificRules: 'Specific Rules',
      brazilianHighlights: '🇧🇷 Brazilian Highlights',
      objetivos: [
        { titulo: 'Social', desc: 'Integration, belonging and mutual respect', icone: '🤝', cor: 'bg-green-500/20 border-green-500/30' },
        { titulo: 'Cognitive', desc: 'Concentration, strategy and decision-making', icone: '🧠', cor: 'bg-blue-500/20 border-blue-500/30' },
        { titulo: 'Motor', desc: 'Coordination, balance and body awareness', icone: '🏃', cor: 'bg-orange-500/20 border-orange-500/30' },
        { titulo: 'Emotional', desc: 'Self-esteem, self-control and resilience', icone: '💚', cor: 'bg-purple-500/20 border-purple-500/30' },
      ],
      abordagens: [
        { tipo: 'ASD', nome: 'Autism Spectrum Disorder', cor: 'bg-blue-500', estrategias: ['Structured and predictable environment', 'Clear and consistent routines', 'Use of pictograms and visual communication', 'Reduction of excessive sensory stimuli', 'Short and objective instructions', 'Individual adaptation time'] },
        { tipo: 'ADHD', nome: 'Attention Deficit & Hyperactivity', cor: 'bg-yellow-500', estrategias: ['Dynamic and varied activities', 'Frequent breaks between exercises', 'Constant positive reinforcement', 'Short and objective tasks', 'Channel energy through movement', 'Avoid long waiting lines'] },
        { tipo: 'Gifted', nome: 'High Abilities/Giftedness', cor: 'bg-purple-500', estrategias: ['Extra challenges and deepening', 'Leadership and mentoring role', 'Technical and theoretical deepening', 'Mentoring less experienced peers', 'Special projects and research', 'Participation in advanced events'] },
        { tipo: 'VI', nome: 'Visual Impairment', cor: 'bg-gray-500', estrategias: ['Detailed tactile and verbal communication', 'Clear description of all movements', 'Guided physical contact for teaching', 'Use of sound signals', 'Organized and predictable environment', 'Verbal identification when approaching'] },
        { tipo: 'HI', nome: 'Hearing Impairment', cor: 'bg-pink-500', estrategias: ['Visual signals for commands', 'Physical demonstration of techniques', 'Frontal positioning of teacher', 'Use of sign language when possible', 'Eye contact before speaking', 'Repetition through demonstration'] },
        { tipo: 'PD', nome: 'Physical Disability', cor: 'bg-teal-500', estrategias: ['Individualized technical adaptations', 'Focus on compatible techniques', 'Para judo for eligible athletes', 'Adapted equipment if necessary', 'Prior medical evaluation', 'Realistic and progressive goals'] },
        { tipo: 'ID', nome: 'Intellectual Disability', cor: 'bg-amber-500', estrategias: ['Simple and direct language', 'Practical demonstrations', 'Patient repetition', 'Breaking techniques into stages', 'Frequent positive reinforcement', 'Respect for individual pace'] },
        { tipo: 'Down', nome: 'Down Syndrome', cor: 'bg-cyan-500', estrategias: ['Attention to muscle hypotonia', 'Progressive strengthening', 'Joint care', 'Playful activities', 'Encouraged socialization', 'Prior cardiac evaluation'] },
      ],
      principios: [
        'Respect the individual pace of each practitioner', 'Adapt the methodology, don\'t reduce expectations',
        'Promote a welcoming and non-judgmental environment', 'Celebrate small achievements and progress',
        'Include family in the development process', 'Train teachers for inclusive care',
        'Use respectful and person-first language', 'Focus on strengths, not limitations',
      ],
      parajudoIntro: 'Para Judo is the Paralympic Judo modality for visually impaired athletes. It has been present in the Paralympic Games since Seoul 1988 (men) and Athens 2004 (women).',
      classificacoes: [
        { classe: 'B1', desc: 'Total blindness or light perception without recognizing shapes' },
        { classe: 'B2', desc: 'Severe low vision - up to 2/60 or visual field up to 5°' },
        { classe: 'B3', desc: 'Moderate low vision - up to 6/60 or visual field up to 20°' },
      ],
      regras: ['Athletes start already with grip (kumi-kata)', 'Referee positions athletes before Hajime', 'Mat with different textures at borders', 'No penalty for leaving the area', 'B1 athletes fight with red circle on judogi'],
      brasileiros: ['Antonio Tenório - 4x Paralympic medalist', 'Débora Menezes - Gold at Tokyo 2020', 'Alana Maldonado - Gold at Tokyo 2020', 'Wilians Araújo - Paralympic medalist'],
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title"><span className="section-title-icon">♿</span>{t.title}</h2>
      <div className="card-judo mb-8"><p className="text-sm text-foreground/70"><em>{t.intro}</em></p></div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🎯</span> {t.objectives}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {t.objetivos.map((obj, index) => (<div key={index} className={`card-judo ${obj.cor} border`}><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{obj.icone}</span><h4 className="font-semibold text-white">{obj.titulo}</h4></div><p className="text-sm text-muted-foreground">{obj.desc}</p></div>))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>📋</span> {t.strategies}</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {t.abordagens.map((ab, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3"><span className={`${ab.cor} text-white text-xs font-bold px-2 py-1 rounded`}>{ab.tipo}</span><h4 className="font-semibold text-white text-sm">{ab.nome}</h4></div>
            <ul className="space-y-1">{ab.estrategias.map((e, i) => (<li key={i} className="text-xs text-muted-foreground flex items-start gap-2"><span className="text-primary">•</span> {e}</li>))}</ul>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>💡</span> {t.fundamentalPrinciples}</h3>
      <div className="card-red p-6 mb-10">
        <div className="grid sm:grid-cols-2 gap-3">
          {t.principios.map((princ, index) => (<div key={index} className="flex items-start gap-2"><span className="text-primary">✓</span><p className="text-sm text-foreground/80">{princ}</p></div>))}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🏅</span> {t.parajudo}</h3>
      <div className="card-judo mb-6">
        <p className="text-sm text-foreground/70 mb-4">{t.parajudoIntro}</p>
        <h4 className="font-semibold text-white mb-3">{t.visualClassification}</h4>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {t.classificacoes.map((c, index) => (<div key={index} className="bg-background/30 rounded-lg p-3 text-center"><p className="text-primary font-bold text-lg">{c.classe}</p><p className="text-xs text-muted-foreground">{c.desc}</p></div>))}
        </div>
        <h4 className="font-semibold text-white mb-3">{t.specificRules}</h4>
        <ul className="space-y-2 mb-6">{t.regras.map((regra, index) => (<li key={index} className="text-sm text-foreground/70 flex items-start gap-2"><span className="text-primary">•</span> {regra}</li>))}</ul>
        <h4 className="font-semibold text-white mb-3">{t.brazilianHighlights}</h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {t.brasileiros.map((atleta, index) => (<div key={index} className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 text-center"><p className="text-sm text-foreground/80">{atleta}</p></div>))}
        </div>
      </div>
    </div>
  );
};

export default InclusivoSection;
