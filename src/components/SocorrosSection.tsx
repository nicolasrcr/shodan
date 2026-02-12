import { useLanguage } from '@/contexts/LanguageContext';

const SocorrosSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Primeiros Socorros no Tatame',
      emergencyAlert: 'Quando Chamar Socorro Imediatamente',
      spineWarning: 'NÃO mova a vítima se houver suspeita de lesão na coluna ou pescoço!',
      spineDetail: 'Mantenha a vítima imóvel e aguarde o socorro especializado.',
      emergencyPhones: 'Telefones de Emergência',
      procedures: 'Procedimentos por Tipo de Lesão',
      prevention: 'Prevenção de Lesões',
      essentialKit: 'Kit Essencial no Dojô',
      kitImportant: 'O kit deve estar sempre acessível, identificado e com materiais dentro da validade. Verifique mensalmente.',
      important: 'Importante:',
      emergencias: [
        'Perda de consciência (desmaio prolongado)', 'Dificuldade respiratória grave',
        'Suspeita de lesão na coluna vertebral', 'Fratura exposta (osso visível)',
        'Sangramento intenso que não para', 'Convulsão',
        'Dor no peito ou falta de ar súbita', 'Suspeita de lesão no pescoço',
      ],
      telefones: [
        { numero: '192', servico: 'SAMU', cor: 'bg-red-500', desc: 'Serviço de Atendimento Móvel de Urgência' },
        { numero: '193', servico: 'Bombeiros', cor: 'bg-orange-500', desc: 'Corpo de Bombeiros Militar' },
        { numero: '190', servico: 'Polícia Militar', cor: 'bg-blue-500', desc: 'Para emergências de segurança' },
      ],
      procedimentos: [
        { titulo: 'Contusões e Hematomas', icone: '🦵', passos: ['Afastar o atleta da área de luta', 'Aplicar gelo ou bolsa térmica por 15-20 minutos', 'Elevar a região afetada acima do coração', 'Comprimir com bandagem elástica se necessário', 'Observar evolução nas próximas 24-48 horas', 'Se piorar, encaminhar ao médico'] },
        { titulo: 'Desmaio por Estrangulamento', icone: '💫', passos: ['Soltar IMEDIATAMENTE a técnica de estrangulamento', 'Deitar o atleta de lado (posição de recuperação)', 'Afrouxar o judogi e a faixa', 'Elevar as pernas levemente (15-30cm)', 'Manter vias aéreas livres', 'Se não acordar em 30 segundos, chamar emergência', 'Monitorar respiração até recuperação completa'] },
        { titulo: 'Luxação e Torção Articular', icone: '🔧', passos: ['Imobilizar a articulação afetada imediatamente', 'NÃO tentar "colocar no lugar" - isso é função médica', 'Aplicar gelo envolto em pano (nunca direto na pele)', 'Manter a região elevada e imóvel', 'Encaminhar ao pronto-socorro para avaliação', 'Não permitir que o atleta volte a treinar'] },
        { titulo: 'Cortes e Escoriações', icone: '🩹', passos: ['Calçar luvas descartáveis (proteção do socorrista)', 'Limpar o ferimento com água limpa ou soro fisiológico', 'Aplicar antisséptico (povidine ou clorexidina)', 'Cobrir com curativo ou gaze estéril', 'Se sangramento intenso, pressionar com gaze', 'Se corte profundo ou extenso, encaminhar ao médico'] },
        { titulo: 'Sangramento Nasal', icone: '👃', passos: ['Sentar o atleta com a cabeça levemente inclinada para frente', 'Apertar as narinas com os dedos por 10 minutos', 'NÃO inclinar a cabeça para trás', 'Aplicar compressa fria na testa/nuca', 'Se não parar em 20 minutos, encaminhar ao médico'] },
        { titulo: 'Suspeita de Fratura', icone: '🦴', passos: ['Imobilizar o membro sem movimentar', 'Não tentar endireitar ou alinhar', 'Aplicar gelo envolto em pano', 'Manter o atleta calmo e imóvel', 'Chamar SAMU (192) imediatamente', 'Se fratura exposta, cobrir com gaze estéril sem pressionar'] },
      ],
      prevencao: [
        { icon: '🧘', titulo: 'Ukemi Regular', desc: 'Quedas bem treinadas previnem 90% das lesões' },
        { icon: '🔥', titulo: 'Aquecimento', desc: 'Nunca iniciar treino sem aquecimento adequado' },
        { icon: '💧', titulo: 'Hidratação', desc: 'Manter hidratação durante todo o treino' },
        { icon: '😴', titulo: 'Descanso', desc: 'Respeitar tempo de recuperação entre treinos' },
        { icon: '🥋', titulo: 'Judogi', desc: 'Manter judogi limpo e em boas condições' },
        { icon: '💅', titulo: 'Higiene', desc: 'Unhas cortadas e cabelo preso' },
      ],
      kit: [
        { icon: '🧊', item: 'Gelo / Bolsa térmica' }, { icon: '🩹', item: 'Curativos variados' },
        { icon: '🧴', item: 'Antisséptico (povidine)' }, { icon: '🩺', item: 'Bandagens elásticas' },
        { icon: '🧤', item: 'Luvas descartáveis' }, { icon: '✂️', item: 'Tesoura sem ponta' },
        { icon: '📋', item: 'Gaze estéril' }, { icon: '💊', item: 'Soro fisiológico' },
        { icon: '🎗️', item: 'Esparadrapo' }, { icon: '📞', item: 'Lista de telefones' },
        { icon: '🩼', item: 'Tala improvisada' }, { icon: '📝', item: 'Ficha de emergência dos alunos' },
      ],
    },
    en: {
      title: 'First Aid on the Mat',
      emergencyAlert: 'When to Call Emergency Help Immediately',
      spineWarning: 'DO NOT move the victim if spinal or neck injury is suspected!',
      spineDetail: 'Keep the victim still and wait for specialized help.',
      emergencyPhones: 'Emergency Numbers',
      procedures: 'Procedures by Injury Type',
      prevention: 'Injury Prevention',
      essentialKit: 'Essential Kit in the Dojo',
      kitImportant: 'The kit must always be accessible, identified and with materials within their expiration date. Check monthly.',
      important: 'Important:',
      emergencias: [
        'Loss of consciousness (prolonged fainting)', 'Severe breathing difficulty',
        'Suspected spinal cord injury', 'Open fracture (bone visible)',
        'Intense bleeding that won\'t stop', 'Seizure',
        'Chest pain or sudden shortness of breath', 'Suspected neck injury',
      ],
      telefones: [
        { numero: '911', servico: 'Emergency', cor: 'bg-red-500', desc: 'Emergency Medical Services' },
        { numero: '911', servico: 'Fire Dept.', cor: 'bg-orange-500', desc: 'Fire Department' },
        { numero: '911', servico: 'Police', cor: 'bg-blue-500', desc: 'For security emergencies' },
      ],
      procedimentos: [
        { titulo: 'Bruises and Hematomas', icone: '🦵', passos: ['Remove athlete from the fighting area', 'Apply ice or cold pack for 15-20 minutes', 'Elevate the affected area above heart level', 'Compress with elastic bandage if necessary', 'Monitor evolution over next 24-48 hours', 'If worsening, refer to doctor'] },
        { titulo: 'Fainting from Choke', icone: '💫', passos: ['Release the choke technique IMMEDIATELY', 'Lay the athlete on their side (recovery position)', 'Loosen the judogi and belt', 'Slightly elevate legs (15-30cm)', 'Keep airways clear', 'If not awake in 30 seconds, call emergency', 'Monitor breathing until full recovery'] },
        { titulo: 'Dislocation and Joint Sprain', icone: '🔧', passos: ['Immobilize the affected joint immediately', 'DO NOT attempt to "put it back" - that\'s a medical function', 'Apply ice wrapped in cloth (never directly on skin)', 'Keep the area elevated and immobile', 'Refer to emergency room for evaluation', 'Do not allow the athlete to return to training'] },
        { titulo: 'Cuts and Abrasions', icone: '🩹', passos: ['Wear disposable gloves (rescuer protection)', 'Clean the wound with clean water or saline', 'Apply antiseptic (povidone or chlorhexidine)', 'Cover with bandage or sterile gauze', 'If intense bleeding, press with gauze', 'If deep or extensive cut, refer to doctor'] },
        { titulo: 'Nosebleed', icone: '👃', passos: ['Sit the athlete with head slightly tilted forward', 'Pinch nostrils with fingers for 10 minutes', 'DO NOT tilt head back', 'Apply cold compress to forehead/nape', 'If not stopping in 20 minutes, refer to doctor'] },
        { titulo: 'Suspected Fracture', icone: '🦴', passos: ['Immobilize the limb without moving it', 'Don\'t try to straighten or align', 'Apply ice wrapped in cloth', 'Keep the athlete calm and still', 'Call Emergency Services (911) immediately', 'If open fracture, cover with sterile gauze without pressing'] },
      ],
      prevencao: [
        { icon: '🧘', titulo: 'Regular Ukemi', desc: 'Well-trained falls prevent 90% of injuries' },
        { icon: '🔥', titulo: 'Warm-up', desc: 'Never start training without proper warm-up' },
        { icon: '💧', titulo: 'Hydration', desc: 'Maintain hydration throughout training' },
        { icon: '😴', titulo: 'Rest', desc: 'Respect recovery time between training sessions' },
        { icon: '🥋', titulo: 'Judogi', desc: 'Keep judogi clean and in good condition' },
        { icon: '💅', titulo: 'Hygiene', desc: 'Trimmed nails and tied-up hair' },
      ],
      kit: [
        { icon: '🧊', item: 'Ice / Cold pack' }, { icon: '🩹', item: 'Assorted bandages' },
        { icon: '🧴', item: 'Antiseptic (povidone)' }, { icon: '🩺', item: 'Elastic bandages' },
        { icon: '🧤', item: 'Disposable gloves' }, { icon: '✂️', item: 'Blunt scissors' },
        { icon: '📋', item: 'Sterile gauze' }, { icon: '💊', item: 'Saline solution' },
        { icon: '🎗️', item: 'Medical tape' }, { icon: '📞', item: 'Phone number list' },
        { icon: '🩼', item: 'Improvised splint' }, { icon: '📝', item: 'Student emergency card' },
      ],
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title"><span className="section-title-icon">🚑</span>{t.title}</h2>

      <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 mb-3"><span>🚨</span> {t.emergencyAlert}</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {t.emergencias.map((sit, index) => (<li key={index} className="text-sm text-foreground/80 flex items-center gap-2"><span className="text-red-400">●</span> {sit}</li>))}
        </ul>
        <div className="mt-4 p-4 bg-red-600/30 rounded-lg">
          <p className="text-sm text-red-300 font-medium">⛔ {t.spineWarning}</p>
          <p className="text-xs text-red-200 mt-1">{t.spineDetail}</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>📞</span> {t.emergencyPhones}</h3>
      <div className="grid grid-cols-3 gap-4 mb-10">
        {t.telefones.map((tel, index) => (<div key={index} className={`${tel.cor} rounded-xl p-4 text-center`}><p className="text-3xl font-bold text-white">{tel.numero}</p><p className="text-sm text-white/90 font-semibold">{tel.servico}</p><p className="text-xs text-white/70 mt-1">{tel.desc}</p></div>))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🏥</span> {t.procedures}</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {t.procedimentos.map((proc, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-3 mb-3 pb-2 border-b border-primary/20"><span className="text-2xl">{proc.icone}</span><h4 className="font-semibold text-white">{proc.titulo}</h4></div>
            <ol className="space-y-2">
              {proc.passos.map((passo, i) => (<li key={i} className="text-sm text-foreground/70 flex items-start gap-2"><span className="text-primary font-bold min-w-[20px]">{i + 1}.</span>{passo}</li>))}
            </ol>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🛡️</span> {t.prevention}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {t.prevencao.map((item, index) => (<div key={index} className="card-judo flex items-start gap-3"><span className="text-2xl">{item.icon}</span><div><h4 className="font-semibold text-white text-sm">{item.titulo}</h4><p className="text-xs text-muted-foreground">{item.desc}</p></div></div>))}
      </div>

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4"><span>🧰</span> {t.essentialKit}</h3>
      <div className="card-red p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.kit.map((item, index) => (<div key={index} className="text-center"><span className="text-2xl block mb-1">{item.icon}</span><p className="text-xs text-foreground/70">{item.item}</p></div>))}
        </div>
        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-foreground/80"><strong className="text-primary">{t.important}</strong> {t.kitImportant}</p>
        </div>
      </div>
    </div>
  );
};

export default SocorrosSection;
