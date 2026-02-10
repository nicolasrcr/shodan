import { useLanguage } from "@/contexts/LanguageContext";

const TreinosSection = () => {
  const { language } = useLanguage();

  const practiceForms = language === 'pt'
    ? [
        { kanji: '乱取り', romaji: 'Randori', title: 'Treinamento Livre', desc: 'Método para aprender técnicas de ataque e defesa movimentando-se livremente, sem causar dano ao outro.' },
        { kanji: '形', romaji: 'Kata', title: 'Formas', desc: 'Método de aplicar técnicas pré-estabelecidas com um parceiro. Preserva a tradição e ensina os princípios fundamentais.' },
        { kanji: '講義', romaji: 'Kogi', title: 'Palestra', desc: 'Aulas orais sobre técnicas de Judô, aspectos espirituais, filosóficos, história e aplicação na vida social.' },
        { kanji: '問答', romaji: 'Mondo', title: 'Perguntas e Respostas', desc: 'Aprendizagem através de perguntas e respostas mútuas entre professor e aluno.' },
        { kanji: '試合', romaji: 'Shiai', title: 'Competição', desc: 'Teste de desenvolvimento técnico em situações de combate real com pontuação.' },
        { kanji: '打ち込み', romaji: 'Uchi-Komi', title: 'Entradas Repetidas', desc: 'Repetição sistemática das entradas das técnicas sem completar a projeção.' },
        { kanji: '投げ込み', romaji: 'Nage-Komi', title: 'Projeções Completas', desc: 'Prática de projeções completas com o parceiro caindo.' },
        { kanji: '回し', romaji: 'Mawashi', title: 'Treinamento Rotativo', desc: 'Troca constante de parceiros durante o randori.' },
      ]
    : [
        { kanji: '乱取り', romaji: 'Randori', title: 'Free Practice', desc: 'Method of learning attack and defense techniques moving freely, without causing harm.' },
        { kanji: '形', romaji: 'Kata', title: 'Forms', desc: 'Method of applying pre-established techniques with a partner. Preserves tradition and teaches fundamental principles.' },
        { kanji: '講義', romaji: 'Kogi', title: 'Lecture', desc: 'Oral classes on Judo techniques, spiritual, philosophical aspects, history and social life application.' },
        { kanji: '問答', romaji: 'Mondo', title: 'Questions and Answers', desc: 'Learning through mutual questions and answers between teacher and student.' },
        { kanji: '試合', romaji: 'Shiai', title: 'Competition', desc: 'Test of technical development in real combat situations with scoring.' },
        { kanji: '打ち込み', romaji: 'Uchi-Komi', title: 'Repeated Entries', desc: 'Systematic repetition of technique entries without completing the throw.' },
        { kanji: '投げ込み', romaji: 'Nage-Komi', title: 'Full Throws', desc: 'Practice of complete throws with partner falling.' },
        { kanji: '回し', romaji: 'Mawashi', title: 'Rotational Training', desc: 'Constant partner switching during randori.' },
      ];

  const ukemiTypes = language === 'pt'
    ? [
        { name: 'Ushiro-Ukemi / Koho-Ukemi', kanji: '後受身', desc: 'Amortecimento de queda para TRÁS', details: 'Queixo no peito, braços batem no tatame a 45°, pernas elevadas.', icon: '⬇️', videoId: 'u4oHFVznIVY' },
        { name: 'Yoko-Ukemi / Sokuho-Ukemi', kanji: '横受身', desc: 'Amortecimento de queda para o LADO', details: 'Queda lateral com um braço batendo no tatame, pernas afastadas.', icon: '↔️', videoId: 'KJFr5FINMIM' },
        { name: 'Mae-Ukemi / Zenpo-Ukemi', kanji: '前受身', desc: 'Amortecimento de queda para FRENTE', details: 'Queda frontal com antebraços e palmas absorvendo o impacto.', icon: '⬆️', videoId: 'ukSj8JM8cvI' },
        { name: 'Zenpo-Kaiten-Ukemi', kanji: '前方回転受身', desc: 'Rolamento para FRENTE', details: 'Rolamento diagonal sobre o ombro, terminando em posição de defesa.', icon: '🔄', videoId: 'BvFpMr1Insw' },
        { name: 'Outen-Ukemi', kanji: '横転受身', desc: 'Rolamento para o LADO', details: 'Rolamento lateral usado em quedas complexas.', icon: '↩️', videoId: 'VoktcQAxEPg' },
      ]
    : [
        { name: 'Ushiro-Ukemi / Koho-Ukemi', kanji: '後受身', desc: 'Backward breakfall', details: 'Chin to chest, arms slap mat at 45°, legs elevated.', icon: '⬇️', videoId: 'u4oHFVznIVY' },
        { name: 'Yoko-Ukemi / Sokuho-Ukemi', kanji: '横受身', desc: 'Side breakfall', details: 'Side fall with one arm slapping the mat, legs apart.', icon: '↔️', videoId: 'KJFr5FINMIM' },
        { name: 'Mae-Ukemi / Zenpo-Ukemi', kanji: '前受身', desc: 'Forward breakfall', details: 'Front fall with forearms and palms absorbing impact.', icon: '⬆️', videoId: 'ukSj8JM8cvI' },
        { name: 'Zenpo-Kaiten-Ukemi', kanji: '前方回転受身', desc: 'Forward roll', details: 'Diagonal roll over shoulder, ending in defense position.', icon: '🔄', videoId: 'BvFpMr1Insw' },
        { name: 'Outen-Ukemi', kanji: '横転受身', desc: 'Side roll', details: 'Side roll used in complex falls.', icon: '↩️', videoId: 'VoktcQAxEPg' },
      ];

  const trainingTips = language === 'pt'
    ? [
        { icon: '🔄', title: 'Aquecimento', desc: 'Sempre inicie com aquecimento geral e específico' },
        { icon: '🎯', title: 'Foco', desc: 'Concentre-se em poucas técnicas por treino' },
        { icon: '🤝', title: 'Parceiro', desc: 'Respeite seu parceiro - ele é essencial' },
        { icon: '📊', title: 'Progressão', desc: 'Evolua gradualmente: básico → avançado' },
        { icon: '🧘', title: 'Ukemi', desc: 'Pratique quedas regularmente' },
        { icon: '💪', title: 'Recuperação', desc: 'Descanse adequadamente entre treinos' },
        { icon: '📝', title: 'Anotações', desc: 'Mantenha um diário de treinos' },
        { icon: '🎥', title: 'Vídeos', desc: 'Grave seus treinos para análise' },
      ]
    : [
        { icon: '🔄', title: 'Warm-up', desc: 'Always start with general and specific warm-up' },
        { icon: '🎯', title: 'Focus', desc: 'Focus on few techniques per session' },
        { icon: '🤝', title: 'Partner', desc: 'Respect your partner - they are essential' },
        { icon: '📊', title: 'Progression', desc: 'Progress gradually: basic → advanced' },
        { icon: '🧘', title: 'Ukemi', desc: 'Practice falls regularly' },
        { icon: '💪', title: 'Recovery', desc: 'Rest adequately between training sessions' },
        { icon: '📝', title: 'Notes', desc: 'Keep a training journal' },
        { icon: '🎥', title: 'Videos', desc: 'Record your training for analysis' },
      ];

  const classStructure = language === 'pt'
    ? [
        { num: 1, title: 'Saudação e Aquecimento', time: '10-15 min', desc: 'Rei, alongamento geral e específico' },
        { num: 2, title: 'Ukemi (Quedas)', time: '10 min', desc: 'Mae-ukemi, ushiro-ukemi, yoko-ukemi, zenpo-kaiten' },
        { num: 3, title: 'Técnica Principal', time: '30-40 min', desc: 'Uchi-komi, Nage-komi, técnicas de solo' },
        { num: 4, title: 'Randori e Encerramento', time: '20-30 min', desc: 'Treino livre, saudação final' },
      ]
    : [
        { num: 1, title: 'Greeting and Warm-up', time: '10-15 min', desc: 'Rei, general and specific stretching' },
        { num: 2, title: 'Ukemi (Breakfalls)', time: '10 min', desc: 'Mae-ukemi, ushiro-ukemi, yoko-ukemi, zenpo-kaiten' },
        { num: 3, title: 'Main Technique', time: '30-40 min', desc: 'Uchi-komi, Nage-komi, ground techniques' },
        { num: 4, title: 'Randori and Closing', time: '20-30 min', desc: 'Free practice, final greeting' },
      ];

  const physicalPreparation = language === 'pt'
    ? [
        { icon: '🏃', title: 'Resistência', desc: 'Corrida, corda, circuitos aeróbicos' },
        { icon: '💪', title: 'Força', desc: 'Musculação funcional, peso corporal' },
        { icon: '🤸', title: 'Flexibilidade', desc: 'Alongamentos dinâmicos e estáticos' },
        { icon: '⚡', title: 'Explosão', desc: 'Pliometria, sprints, movimentos rápidos' },
        { icon: '🧠', title: 'Coordenação', desc: 'Exercícios de agilidade, timing' },
        { icon: '🎯', title: 'Grip', desc: 'Fortalecimento de pegada com gi' },
      ]
    : [
        { icon: '🏃', title: 'Endurance', desc: 'Running, rope, aerobic circuits' },
        { icon: '💪', title: 'Strength', desc: 'Functional weight training, bodyweight' },
        { icon: '🤸', title: 'Flexibility', desc: 'Dynamic and static stretching' },
        { icon: '⚡', title: 'Explosiveness', desc: 'Plyometrics, sprints, fast movements' },
        { icon: '🧠', title: 'Coordination', desc: 'Agility exercises, timing' },
        { icon: '🎯', title: 'Grip', desc: 'Grip strengthening with gi' },
      ];

  const progressionLevels = language === 'pt'
    ? {
        beginner: { title: 'Iniciante', items: ['Ukemi (quedas) - base de tudo', '2-3 técnicas por grupo', 'Movimentação básica', 'Etiqueta e saudações'] },
        intermediate: { title: 'Intermediário', items: ['Gokyo completo', 'Combinações de técnicas', 'Ne-waza (solo)', 'Randori regular'] },
        advanced: { title: 'Avançado', items: ['Tokui-waza (especialização)', 'Renraku-waza (encadeamentos)', 'Katas formais', 'Estratégia competitiva'] },
      }
    : {
        beginner: { title: 'Beginner', items: ['Ukemi (breakfalls) - foundation', '2-3 techniques per group', 'Basic movement', 'Etiquette and greetings'] },
        intermediate: { title: 'Intermediate', items: ['Complete Gokyo', 'Technique combinations', 'Ne-waza (ground)', 'Regular randori'] },
        advanced: { title: 'Advanced', items: ['Tokui-waza (specialization)', 'Renraku-waza (combinations)', 'Formal katas', 'Competitive strategy'] },
      };

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">練</span>
        {language === 'pt' ? 'Treinamentos - Métodos de Prática' : 'Training - Practice Methods'}
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          {language === 'pt'
            ? 'O Judô possui diversos métodos de treinamento, cada um com objetivos específicos. A combinação equilibrada dessas formas desenvolve o judoca completo técnica, física e mentalmente.'
            : 'Judo has various training methods, each with specific objectives. The balanced combination of these forms develops the complete judoka technically, physically and mentally.'}
        </p>
      </div>

      {/* Ukemi */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🤸</span> Ukemi - {language === 'pt' ? 'Técnicas de Queda' : 'Breakfall Techniques'}
      </h3>
      
      <div className="card-judo mb-6">
        <p className="text-sm text-foreground/70 mb-4">
          {language === 'pt'
            ? <><strong>Ukemi</strong> (受身) significa "corpo que recebe". São as técnicas de amortecimento de queda, fundamentais para a segurança no Judô.</>
            : <><strong>Ukemi</strong> (受身) means "receiving body". These are breakfall techniques, fundamental for safety in Judo.</>}
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {ukemiTypes.map((ukemi, index) => (
          <div key={index} className="card-red p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{ukemi.icon}</span>
              <div>
                <h4 className="font-semibold text-white text-sm">{ukemi.name}</h4>
                <p className="text-xs text-primary">{ukemi.kanji}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 mb-2">{ukemi.desc}</p>
            <p className="text-xs text-muted-foreground mb-3">{ukemi.details}</p>
            <a 
              href={`https://www.youtube.com/watch?v=${ukemi.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-primary hover:text-white transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                <span className="text-white text-[8px] ml-0.5">▶</span>
              </span>
              {language === 'pt' ? 'Ver vídeo' : 'Watch video'}
            </a>
          </div>
        ))}
      </div>

      {/* Vídeos de Ukemi */}
      <div className="card-judo p-5 mb-10">
        <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
          <span>🎬</span> {language === 'pt' ? 'Vídeos Demonstrativos de Ukemi' : 'Ukemi Demonstration Videos'}
        </h4>
        <p className="text-sm text-foreground/70 mb-4">
          {language === 'pt' ? 'Clique em cada vídeo para assistir à demonstração detalhada.' : 'Click each video to watch the detailed demonstration.'}
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
          {ukemiTypes.map((ukemi, index) => (
            <a 
              key={index}
              href={`https://www.youtube.com/watch?v=${ukemi.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-border/50 hover:border-primary transition-colors"
            >
              <div className="relative aspect-video bg-background/50">
                <img 
                  src={`https://img.youtube.com/vi/${ukemi.videoId}/hqdefault.jpg`}
                  alt={ukemi.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-xs ml-0.5">▶</span>
                  </div>
                </div>
              </div>
              <div className="p-2 text-center bg-muted/20">
                <p className="text-[10px] font-medium text-white group-hover:text-primary transition-colors truncate">
                  {ukemi.name.split(' / ')[0]}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <span>⚠️</span> {language === 'pt' ? 'Ao clicar, você será redirecionado para o YouTube' : 'Clicking will redirect you to YouTube'}
        </p>
      </div>

      {/* Métodos de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🥋</span> {language === 'pt' ? 'Métodos de Treinamento' : 'Training Methods'}
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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

      {/* Estrutura da Aula */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📋</span> {language === 'pt' ? 'Estrutura Típica de uma Aula' : 'Typical Class Structure'}
      </h3>
      
      <div className="card-red p-6 mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {classStructure.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xl font-bold text-primary">{item.num}</span>
              </div>
              <h4 className="font-semibold text-white text-sm">{item.title}</h4>
              <p className="text-xs text-primary mb-1">{item.time}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Preparação Física */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏋️</span> {language === 'pt' ? 'Preparação Física Específica' : 'Specific Physical Preparation'}
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {physicalPreparation.map((item, index) => (
          <div key={index} className="card-judo flex items-start gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h4 className="font-semibold text-white text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dicas de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>💡</span> {language === 'pt' ? 'Dicas de Treinamento' : 'Training Tips'}
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Progressão de Treino */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>📈</span> {language === 'pt' ? 'Progressão Recomendada' : 'Recommended Progression'}
      </h3>
      
      <div className="card-judo">
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <h4 className="font-semibold text-green-400 mb-2">{progressionLevels.beginner.title}</h4>
            <ul className="text-xs text-foreground/70 space-y-1 text-left">
              {progressionLevels.beginner.items.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="text-center p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <h4 className="font-semibold text-yellow-400 mb-2">{progressionLevels.intermediate.title}</h4>
            <ul className="text-xs text-foreground/70 space-y-1 text-left">
              {progressionLevels.intermediate.items.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <h4 className="font-semibold text-red-400 mb-2">{progressionLevels.advanced.title}</h4>
            <ul className="text-xs text-foreground/70 space-y-1 text-left">
              {progressionLevels.advanced.items.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreinosSection;
