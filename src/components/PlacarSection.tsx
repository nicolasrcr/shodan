import { useState } from 'react';
import { Play } from 'lucide-react';
import tecladoPlacarImg from '@/assets/teclado-placar.png';
import { useLanguage } from '@/contexts/LanguageContext';

const PlacarSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Sistema de Placar',
      intro: {
        text: 'O sistema de pontuação do Judô é baseado na qualidade das técnicas executadas. O objetivo é conquistar o',
        ippon: 'Ippon',
        ippnDesc: '(vitória perfeita), mas pontos menores como',
        wazaari: 'Waza-ari',
        and: 'e',
        yuko: 'Yuko',
        yukoDesc: '(retornando em 2025) também decidem lutas. O placar eletrônico exibe as pontuações usando as letras',
        letters: '(Ippon),',
        wLetter: '(Waza-ari) e',
        yLetter: '(Yuko).',
      },
      scoring: 'Pontuações',
      penalties: 'Penalidades',
      refereeCommands: 'Comandos do Árbitro',
      fightDuration: 'Duração das Lutas por Categoria',
      category: 'Categoria',
      regularTime: 'Tempo Regular',
      goldenScoreCol: 'Golden Score',
      scoreboardElements: 'Elementos do Placar Eletrônico',
      white: 'BRANCO',
      blue: 'AZUL',
      athleteA: 'ATLETA A',
      athleteB: 'ATLETA B',
      time: 'Tempo',
      keyboardTitle: 'Teclado de Operação do Placar',
      keyboardDesc: 'O operador do placar utiliza um teclado especial ou teclado padrão com atalhos para registrar pontuações, penalidades e controlar o cronômetro. Conhecer esses comandos é essencial para quem deseja atuar como mesa de arbitragem.',
      whiteScoring: 'Pontuação Branco',
      whiteKeys: 'Teclas',
      whiteFor: 'para Ippon, Waza-ari e Yuko',
      blueScoring: 'Pontuação Azul',
      blueFor: 'para Ippon, Waza-ari e Yuko',
      penaltiesKeys: 'Penalidades',
      penShidoWhite: 'Shido Branco,',
      penShidoBlue: 'Shido Azul',
      timer: 'Cronômetro',
      timerDesc: 'Play/Pause,',
      toketaKey: 'Toketa,',
      osaekomiKey: 'Osaekomi',
      victoryTypes: 'Tipos de Vitória',
      ipponVictory: 'Vitória perfeita',
      ipponDetail: 'Projeção, finalização ou 20s imobilização',
      twoWazaari: 'Dois Waza-ari',
      twoWazaariDetail: 'Soma de duas pontuações W',
      disqualification: 'Desqualificação',
      disqualDetail: '3 Shidos ou falta grave',
      absence: 'Ausência',
      absenceDetail: 'Vitória por WO (oponente não compareceu)',
      withdrawal: 'Desistência',
      withdrawalDetail: 'Vitória por abandono/lesão do oponente',
      superiority: 'Superioridade',
      superiorityDetail: 'Vitória por decisão/pontos',
      goldenScoreTitle: 'Golden Score (GS) - Prorrogação',
      suddenDeath: 'Morte Súbita',
      goldenScoreDesc: 'Se a luta terminar empatada, entra em',
      goldenScoreDesc2: '- uma prorrogação onde o primeiro a pontuar (qualquer pontuação) ou o primeiro a receber uma penalidade (que resulte em diferença) perde/ganha. No teclado, ativa-se com a tecla',
      gsRule1: 'Na categoria Sênior, o Golden Score é ilimitado',
      gsRule2: 'As penalidades acumuladas continuam valendo',
      gsRule3: 'Qualquer pontuação (Yuko, Waza-ari ou Ippon) encerra',
      gsRule4: 'Se um atleta recebe o 3º Shido, perde por Hansoku-Make',
      videoTutorials: 'Vídeos Tutoriais - Sistema de Pontuação',
      recommended: 'RECOMENDADO',
      examTip: 'Dica para o Exame Shodan',
      examTipText: 'Memorize os critérios de Ippon (projeção perfeita, 20s de imobilização, finalização) e saiba diferenciar Waza-ari de Yuko. Entenda que 3 Shidos = Hansoku-Make (desqualificação). Conheça as siglas do placar:',
      examples: 'Exemplos:',
      consequences: 'Consequências:',
      key: 'Tecla:',
      pontuacoes: [
        {
          nome: 'Ippon', kanji: '一本', pontos: 'Vitória direta',
          cor: 'bg-green-500/20 border-green-500/50', icone: '🥇', tecla: 'I',
          descricao: 'Técnica perfeita - encerra a luta imediatamente',
          criterios: [
            'Projeção com força, velocidade e controle, fazendo o oponente cair de costas',
            'Imobilização (Osaekomi) por 20 segundos',
            'Desistência do oponente (batendo 2x no tatame ou no adversário)',
            'Estrangulamento ou chave efetiva (fazendo o oponente desistir ou desmaiar)',
            'Dois Waza-ari acumulados (Waza-ari Awasete Ippon)',
          ]
        },
        {
          nome: 'Waza-ari', kanji: '技あり', pontos: 'Meia vitória',
          cor: 'bg-yellow-500/20 border-yellow-500/50', icone: '🥈', tecla: 'W',
          descricao: 'Técnica quase perfeita ou imobilização entre 10-19 segundos',
          criterios: [
            'Projeção com força mas faltando um elemento (velocidade ou controle)',
            'Oponente cai de lado ou não completamente de costas',
            'Imobilização (Osaekomi) entre 10 e 19 segundos',
            'Dois Waza-ari = Ippon (vitória)',
          ]
        },
        {
          nome: 'Yuko', kanji: '有効', pontos: 'Pontuação (2025)',
          cor: 'bg-blue-500/20 border-blue-500/50', icone: '🥉', tecla: 'Y',
          descricao: 'Retornando em 2025 - técnica parcialmente efetiva',
          criterios: [
            'Projeção com um elemento faltando significativamente',
            'Oponente cai sobre o quadril, joelhos ou nádegas',
            'Imobilização (Osaekomi) entre 5 e 9 segundos',
            'Não há acumulação de Yukos (não viram Waza-ari)',
            'Usado como critério de desempate no Golden Score',
          ]
        },
      ],
      penalidades: [
        {
          nome: 'Shido', kanji: '指導', tipo: 'Penalidade leve',
          cor: 'bg-orange-500/20 border-orange-500/50',
          descricao: 'Advertência por infrações menores',
          exemplos: [
            'Evitar pegada (não atacar) por mais de 45 segundos',
            'Pegada defensiva excessiva',
            'Falso ataque (sem intenção real de projetar)',
            'Postura muito defensiva',
          ],
          consequencias: ['1º Shido = Advertência', '2º Shido = Advertência', '3º Shido = Hansoku-Make (desqualificação)']
        },
        {
          nome: 'Hansoku-Make', kanji: '反則負け', tipo: 'Desqualificação',
          cor: 'bg-red-500/20 border-red-500/50',
          descricao: 'Perda por infração grave ou acúmulo de 3 Shidos',
          exemplos: [
            'Acúmulo de 3 Shidos na mesma luta',
            'Ataque direto às pernas (exceto em combinação)',
            'Ação que possa causar lesão ao oponente',
            'Técnicas proibidas (Kawazu-Gake, Kani-Basami, etc.)',
          ],
          consequencias: ['Perda imediata da luta', 'Se por falha técnica: pode continuar no torneio', 'Se por conduta antidesportiva: eliminado do evento']
        },
      ],
      comandos: [
        { comando: 'Hajime', kanji: '始め', significado: 'Começar', desc: 'Inicia ou reinicia o combate' },
        { comando: 'Matte', kanji: '待て', significado: 'Esperar', desc: 'Interrompe temporariamente a luta' },
        { comando: 'Sore-Made', kanji: 'それまで', significado: 'Acabou', desc: 'Encerra a luta definitivamente' },
        { comando: 'Osaekomi', kanji: '抑え込み', significado: 'Imobilização', desc: 'Cronômetro de imobilização iniciado' },
        { comando: 'Toketa', kanji: '解けた', significado: 'Escapou', desc: 'Imobilização foi desfeita' },
        { comando: 'Yoshi', kanji: 'よし', significado: 'Continue', desc: 'Retoma a luta no solo' },
        { comando: 'Sono-mama', kanji: 'そのまま', significado: 'Não se mova', desc: 'Congelar posição para verificação' },
        { comando: 'Hiki-Wake', kanji: '引き分け', significado: 'Empate', desc: 'Não há vencedor (raro atualmente)' },
        { comando: 'Sogo-Gachi', kanji: '総合勝ち', significado: 'Vitória composta', desc: 'Vitória por combinação de pontos e penalidades' },
      ],
      tempoLuta: [
        { categoria: 'Sub-13', tempo: '3 minutos', golden: '1,5 min (max 2x)' },
        { categoria: 'Sub-15', tempo: '3 minutos', golden: '2 min (max 2x)' },
        { categoria: 'Sub-18 (Cadete)', tempo: '4 minutos', golden: '2 min' },
        { categoria: 'Sub-21 (Júnior)', tempo: '4 minutos', golden: 'Ilimitado' },
        { categoria: 'Sênior', tempo: '4 minutos', golden: 'Ilimitado' },
        { categoria: 'Masters', tempo: '3-4 minutos', golden: 'Variável' },
      ],
      layoutPlacar: [
        { elemento: 'Bandeira/País', desc: 'Identificação do atleta' },
        { elemento: 'Nome do Atleta', desc: 'Nome completo ou sobrenome' },
        { elemento: 'Pontuação', desc: 'Ippon (I), Waza-ari (W), Yuko (Y)' },
        { elemento: 'Shidos', desc: 'Cartões amarelos (até 3)' },
        { elemento: 'Cronômetro Principal', desc: 'Tempo restante da luta' },
        { elemento: 'Cronômetro Osaekomi', desc: 'Tempo de imobilização (0-20s)' },
        { elemento: 'Golden Score (GS)', desc: 'Prorrogação' },
      ],
      videos: [
        { id: 'pgfKasoI5yc', titulo: 'Guia Rápido do Judô', descricao: 'Neil Adams explica as regras de pontuação, penalidades e sistema de competição em 3 minutos', canal: 'IJF', duracao: '3:40', destaque: true },
        { id: 'TtaV_6ZUfTI', titulo: 'As 6 Formas de Marcar Ippon', descricao: 'Demonstração oficial das 6 maneiras de conseguir a pontuação máxima no Judô', canal: 'IJF', duracao: '2:35', destaque: false },
        { id: 'dnEV5yjAsFY', titulo: 'Regras do Judogi - Explicado', descricao: 'Regras oficiais sobre o uniforme de competição', canal: 'IJF', duracao: '2:00', destaque: false },
      ],
    },
    en: {
      title: 'Scoring System',
      intro: {
        text: 'The Judo scoring system is based on the quality of techniques executed. The goal is to score',
        ippon: 'Ippon',
        ippnDesc: '(perfect victory), but smaller scores like',
        wazaari: 'Waza-ari',
        and: 'and',
        yuko: 'Yuko',
        yukoDesc: '(returning in 2025) also decide fights. The electronic scoreboard displays scores using the letters',
        letters: '(Ippon),',
        wLetter: '(Waza-ari) and',
        yLetter: '(Yuko).',
      },
      scoring: 'Scoring',
      penalties: 'Penalties',
      refereeCommands: 'Referee Commands',
      fightDuration: 'Fight Duration by Category',
      category: 'Category',
      regularTime: 'Regular Time',
      goldenScoreCol: 'Golden Score',
      scoreboardElements: 'Electronic Scoreboard Elements',
      white: 'WHITE',
      blue: 'BLUE',
      athleteA: 'ATHLETE A',
      athleteB: 'ATHLETE B',
      time: 'Time',
      keyboardTitle: 'Scoreboard Operation Keyboard',
      keyboardDesc: 'The scoreboard operator uses a special keyboard or standard keyboard with shortcuts to record scores, penalties and control the timer. Knowing these commands is essential for anyone who wants to work at the refereeing table.',
      whiteScoring: 'White Scoring',
      whiteKeys: 'Keys',
      whiteFor: 'for Ippon, Waza-ari and Yuko',
      blueScoring: 'Blue Scoring',
      blueFor: 'for Ippon, Waza-ari and Yuko',
      penaltiesKeys: 'Penalties',
      penShidoWhite: 'White Shido,',
      penShidoBlue: 'Blue Shido',
      timer: 'Timer',
      timerDesc: 'Play/Pause,',
      toketaKey: 'Toketa,',
      osaekomiKey: 'Osaekomi',
      victoryTypes: 'Victory Types',
      ipponVictory: 'Perfect victory',
      ipponDetail: 'Throw, submission or 20s immobilization',
      twoWazaari: 'Two Waza-ari',
      twoWazaariDetail: 'Sum of two W scores',
      disqualification: 'Disqualification',
      disqualDetail: '3 Shidos or grave fault',
      absence: 'Absence',
      absenceDetail: 'Win by walkover (opponent did not show up)',
      withdrawal: 'Withdrawal',
      withdrawalDetail: 'Win by abandonment/injury of opponent',
      superiority: 'Superiority',
      superiorityDetail: 'Win by decision/points',
      goldenScoreTitle: 'Golden Score (GS) - Overtime',
      suddenDeath: 'Sudden Death',
      goldenScoreDesc: 'If the fight ends in a tie, it goes to',
      goldenScoreDesc2: '- an overtime where the first to score (any score) or the first to receive a penalty (that results in a difference) loses/wins. On the keyboard, activated with key',
      gsRule1: 'In the Senior category, Golden Score is unlimited',
      gsRule2: 'Accumulated penalties continue to count',
      gsRule3: 'Any score (Yuko, Waza-ari or Ippon) ends it',
      gsRule4: 'If an athlete receives the 3rd Shido, they lose by Hansoku-Make',
      videoTutorials: 'Video Tutorials - Scoring System',
      recommended: 'RECOMMENDED',
      examTip: 'Tip for the Shodan Exam',
      examTipText: 'Memorize the Ippon criteria (perfect throw, 20s immobilization, submission) and know how to differentiate Waza-ari from Yuko. Understand that 3 Shidos = Hansoku-Make (disqualification). Know the scoreboard abbreviations:',
      examples: 'Examples:',
      consequences: 'Consequences:',
      key: 'Key:',
      pontuacoes: [
        {
          nome: 'Ippon', kanji: '一本', pontos: 'Direct victory',
          cor: 'bg-green-500/20 border-green-500/50', icone: '🥇', tecla: 'I',
          descricao: 'Perfect technique - ends the fight immediately',
          criterios: [
            'Throw with force, speed and control, making opponent land on their back',
            'Immobilization (Osaekomi) for 20 seconds',
            'Opponent submission (tapping 2x on mat or opponent)',
            'Effective choke or armlock (making opponent submit or pass out)',
            'Two accumulated Waza-ari (Waza-ari Awasete Ippon)',
          ]
        },
        {
          nome: 'Waza-ari', kanji: '技あり', pontos: 'Half victory',
          cor: 'bg-yellow-500/20 border-yellow-500/50', icone: '🥈', tecla: 'W',
          descricao: 'Almost perfect technique or immobilization between 10-19 seconds',
          criterios: [
            'Throw with force but lacking one element (speed or control)',
            'Opponent falls on their side or not completely on their back',
            'Immobilization (Osaekomi) between 10 and 19 seconds',
            'Two Waza-ari = Ippon (victory)',
          ]
        },
        {
          nome: 'Yuko', kanji: '有効', pontos: 'Score (2025)',
          cor: 'bg-blue-500/20 border-blue-500/50', icone: '🥉', tecla: 'Y',
          descricao: 'Returning in 2025 - partially effective technique',
          criterios: [
            'Throw with one element significantly lacking',
            'Opponent falls on hip, knees or buttocks',
            'Immobilization (Osaekomi) between 5 and 9 seconds',
            'Yukos do not accumulate (do not become Waza-ari)',
            'Used as tiebreaker criteria in Golden Score',
          ]
        },
      ],
      penalidades: [
        {
          nome: 'Shido', kanji: '指導', tipo: 'Minor penalty',
          cor: 'bg-orange-500/20 border-orange-500/50',
          descricao: 'Warning for minor infractions',
          exemplos: [
            'Avoiding grip (not attacking) for more than 45 seconds',
            'Excessive defensive grip',
            'False attack (no real intention to throw)',
            'Very defensive posture',
          ],
          consequencias: ['1st Shido = Warning', '2nd Shido = Warning', '3rd Shido = Hansoku-Make (disqualification)']
        },
        {
          nome: 'Hansoku-Make', kanji: '反則負け', tipo: 'Disqualification',
          cor: 'bg-red-500/20 border-red-500/50',
          descricao: 'Loss by grave infraction or accumulation of 3 Shidos',
          exemplos: [
            'Accumulation of 3 Shidos in the same fight',
            'Direct leg attack (except in combination)',
            'Action that may cause injury to opponent',
            'Prohibited techniques (Kawazu-Gake, Kani-Basami, etc.)',
          ],
          consequencias: ['Immediate loss of the fight', 'If by technical fault: can continue in tournament', 'If by unsportsmanlike conduct: eliminated from event']
        },
      ],
      comandos: [
        { comando: 'Hajime', kanji: '始め', significado: 'Start', desc: 'Starts or restarts the bout' },
        { comando: 'Matte', kanji: '待て', significado: 'Wait', desc: 'Temporarily stops the fight' },
        { comando: 'Sore-Made', kanji: 'それまで', significado: 'It\'s over', desc: 'Ends the fight definitively' },
        { comando: 'Osaekomi', kanji: '抑え込み', significado: 'Immobilization', desc: 'Immobilization timer started' },
        { comando: 'Toketa', kanji: '解けた', significado: 'Escaped', desc: 'Immobilization was broken' },
        { comando: 'Yoshi', kanji: 'よし', significado: 'Continue', desc: 'Resumes the fight on the ground' },
        { comando: 'Sono-mama', kanji: 'そのまま', significado: 'Don\'t move', desc: 'Freeze position for verification' },
        { comando: 'Hiki-Wake', kanji: '引き分け', significado: 'Draw', desc: 'No winner (rare nowadays)' },
        { comando: 'Sogo-Gachi', kanji: '総合勝ち', significado: 'Compound victory', desc: 'Victory by combination of scores and penalties' },
      ],
      tempoLuta: [
        { categoria: 'U-13', tempo: '3 minutes', golden: '1.5 min (max 2x)' },
        { categoria: 'U-15', tempo: '3 minutes', golden: '2 min (max 2x)' },
        { categoria: 'U-18 (Cadet)', tempo: '4 minutes', golden: '2 min' },
        { categoria: 'U-21 (Junior)', tempo: '4 minutes', golden: 'Unlimited' },
        { categoria: 'Senior', tempo: '4 minutes', golden: 'Unlimited' },
        { categoria: 'Masters', tempo: '3-4 minutes', golden: 'Variable' },
      ],
      layoutPlacar: [
        { elemento: 'Flag/Country', desc: 'Athlete identification' },
        { elemento: 'Athlete Name', desc: 'Full name or surname' },
        { elemento: 'Score', desc: 'Ippon (I), Waza-ari (W), Yuko (Y)' },
        { elemento: 'Shidos', desc: 'Yellow cards (up to 3)' },
        { elemento: 'Main Timer', desc: 'Remaining fight time' },
        { elemento: 'Osaekomi Timer', desc: 'Immobilization time (0-20s)' },
        { elemento: 'Golden Score (GS)', desc: 'Overtime' },
      ],
      videos: [
        { id: 'pgfKasoI5yc', titulo: 'Quick Judo Guide', descricao: 'Neil Adams explains scoring rules, penalties and competition system in 3 minutes', canal: 'IJF', duracao: '3:40', destaque: true },
        { id: 'TtaV_6ZUfTI', titulo: 'The 6 Ways to Score Ippon', descricao: 'Official demonstration of the 6 ways to achieve maximum score in Judo', canal: 'IJF', duracao: '2:35', destaque: false },
        { id: 'dnEV5yjAsFY', titulo: 'Judogi Rules - Explained', descricao: 'Official rules about the competition uniform', canal: 'IJF', duracao: '2:00', destaque: false },
      ],
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  const tecladoControles = [
    { grupo: language === 'en' ? 'Functions (F4-F9)' : 'Funções (F4-F9)', teclas: [
      { tecla: 'F4', funcao: language === 'en' ? 'Update Scoreboard' : 'Atualizar Placar' },
      { tecla: 'F5', funcao: language === 'en' ? 'End Sound' : 'Som Fim' },
      { tecla: 'F6', funcao: language === 'en' ? 'Ippon Sound' : 'Som Ippon' },
      { tecla: 'F7', funcao: language === 'en' ? 'Check Connection' : 'Checar Conexão' },
      { tecla: 'F8', funcao: language === 'en' ? 'Call Referee' : 'Chamar Árbitro' },
      { tecla: 'F9', funcao: language === 'en' ? 'Timer Interval' : 'Intervalo Cronômetro' },
    ]},
    { grupo: language === 'en' ? 'Numeric (1-0)' : 'Numérico (1-0)', teclas: [
      { tecla: '1', funcao: '+1 ' + (language === 'en' ? 'second' : 'segundo') },
      { tecla: '2', funcao: '-1 ' + (language === 'en' ? 'second' : 'segundo') },
      { tecla: '3', funcao: language === 'en' ? 'Switch Tournament' : 'Trocar Torneio' },
      { tecla: '4', funcao: language === 'en' ? 'Switch Area' : 'Trocar Área' },
      { tecla: '5', funcao: language === 'en' ? 'Opening' : 'Abertura' },
      { tecla: '6', funcao: language === 'en' ? 'Presentation' : 'Apresentação' },
      { tecla: '7', funcao: language === 'en' ? 'Double Hansoku-Make' : 'Hansoku-Make Duplo' },
      { tecla: '8', funcao: language === 'en' ? 'Double Shido' : 'Shido Duplo' },
      { tecla: '9', funcao: 'Toketa' },
      { tecla: '0/-', funcao: 'Osaekomi' },
      { tecla: 'DEL', funcao: language === 'en' ? 'Reset Timer' : 'Reset Cronômetro' },
    ]},
    { grupo: language === 'en' ? 'White Athlete (Q-R)' : 'Atleta Branco (Q-R)', teclas: [
      { tecla: 'Q', funcao: language === 'en' ? 'Ippon (I) White' : 'Ippon (I) Branco' },
      { tecla: 'W', funcao: language === 'en' ? 'Waza-ari (W) White' : 'Waza-ari (W) Branco' },
      { tecla: 'E', funcao: language === 'en' ? 'Yuko (Y) White' : 'Yuko (Y) Branco' },
      { tecla: 'R', funcao: language === 'en' ? 'Shido White' : 'Shido Branco' },
    ]},
    { grupo: language === 'en' ? 'Blue Athlete (Y-P)' : 'Atleta Azul (Y-P)', teclas: [
      { tecla: 'Y', funcao: language === 'en' ? 'Ippon (I) Blue' : 'Ippon (I) Azul' },
      { tecla: 'U', funcao: language === 'en' ? 'Waza-ari (W) Blue' : 'Waza-ari (W) Azul' },
      { tecla: 'I', funcao: language === 'en' ? 'Yuko (Y) Blue' : 'Yuko (Y) Azul' },
      { tecla: 'O', funcao: language === 'en' ? 'Shido Blue' : 'Shido Azul' },
    ]},
    { grupo: language === 'en' ? 'Cancel White (A-G)' : 'Cancelamentos (A-G)', teclas: [
      { tecla: 'A', funcao: language === 'en' ? 'Cancel Ippon White' : 'Cancelar Ippon Branco' },
      { tecla: 'S', funcao: language === 'en' ? 'Cancel Waza-ari White' : 'Cancelar Waza-ari Branco' },
      { tecla: 'D', funcao: language === 'en' ? 'Cancel Yuko White' : 'Cancelar Yuko Branco' },
      { tecla: 'F', funcao: language === 'en' ? 'Cancel Shido White' : 'Cancelar Shido Branco' },
    ]},
    { grupo: language === 'en' ? 'Cancel Blue (H-L)' : 'Cancelamentos Azul (H-;)', teclas: [
      { tecla: 'H', funcao: language === 'en' ? 'Cancel Ippon Blue' : 'Cancelar Ippon Azul' },
      { tecla: 'J', funcao: language === 'en' ? 'Cancel Waza-ari Blue' : 'Cancelar Waza-ari Azul' },
      { tecla: 'K', funcao: language === 'en' ? 'Cancel Yuko Blue' : 'Cancelar Yuko Azul' },
      { tecla: 'L', funcao: language === 'en' ? 'Cancel Shido Blue' : 'Cancelar Shido Azul' },
    ]},
    { grupo: language === 'en' ? 'Special' : 'Especiais', teclas: [
      { tecla: 'Z', funcao: language === 'en' ? '+/- (adjust)' : '+/- (ajuste)' },
      { tecla: 'X', funcao: language === 'en' ? 'Misconduct +/-' : 'Indisciplina +/-' },
      { tecla: 'C', funcao: 'FG (Fusen-Gachi) +/-' },
      { tecla: 'V', funcao: 'KG (Kiken-Gachi) +/-' },
      { tecla: 'B', funcao: 'Golden Score (GS)' },
      { tecla: 'SPACE', funcao: language === 'en' ? 'Timer (Play/Pause)' : 'Cronômetro (Play/Pause)' },
    ]},
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🏆</span>
        {t.title}
      </h2>

      {/* Introdução */}
      <div className="card-judo mb-8">
        <p className="text-foreground/80">
          {t.intro.text} <span className="text-primary font-semibold">{t.intro.ippon}</span> {t.intro.ippnDesc} <span className="text-primary font-semibold">{t.intro.wazaari}</span> {t.intro.and}
          <span className="text-primary font-semibold"> {t.intro.yuko}</span> {t.intro.yukoDesc} <span className="text-primary font-bold">I</span> {t.intro.letters}
          <span className="text-primary font-bold"> W</span> {t.intro.wLetter} <span className="text-primary font-bold">Y</span> {t.intro.yLetter}
        </p>
      </div>

      {/* Pontuações */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📊</span> {t.scoring}
      </h3>

      <div className="space-y-4 mb-10">
        {t.pontuacoes.map((pont, index) => (
          <div key={index} className={`card-judo ${pont.cor} border`}>
            <div className="flex items-start gap-4">
              <div className="text-4xl">{pont.icone}</div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h4 className="text-xl font-bold text-white">{pont.nome}</h4>
                  <span className="text-2xl font-serif text-primary">{pont.kanji}</span>
                  <span className="bg-primary/20 px-2 py-0.5 rounded text-primary font-mono font-bold">{t.key} {pont.tecla}</span>
                  <span className="text-sm text-muted-foreground">({pont.pontos})</span>
                </div>
                <p className="text-sm text-foreground/70 mb-3">{pont.descricao}</p>
                <ul className="space-y-1">
                  {pont.criterios.map((crit, i) => (
                    <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {crit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Penalidades */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⚠️</span> {t.penalties}
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {t.penalidades.map((pen, index) => (
          <div key={index} className={`card-judo ${pen.cor} border`}>
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-lg font-bold text-white">{pen.nome}</h4>
              <span className="text-xl font-serif text-primary">{pen.kanji}</span>
            </div>
            <p className="text-sm text-primary mb-2">{pen.tipo}</p>
            <p className="text-sm text-foreground/70 mb-3">{pen.descricao}</p>
            <div className="mb-3">
              <p className="text-xs font-semibold text-white mb-1">{t.examples}</p>
              <ul className="space-y-1">
                {pen.exemplos.map((ex, i) => (
                  <li key={i} className="text-xs text-foreground/60 flex items-start gap-2">
                    <span className="text-orange-400">•</span>{ex}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background/30 rounded-lg p-2">
              <p className="text-xs font-semibold text-white mb-1">{t.consequences}</p>
              {pen.consequencias.map((cons, i) => (
                <p key={i} className="text-xs text-primary">{cons}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Comandos de Arbitragem */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🎤</span> {t.refereeCommands}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {t.comandos.map((cmd, index) => (
          <div key={index} className="card-judo text-center">
            <span className="text-2xl font-serif text-primary block mb-1">{cmd.kanji}</span>
            <h4 className="font-bold text-white">{cmd.comando}</h4>
            <p className="text-xs text-primary">{cmd.significado}</p>
            <p className="text-xs text-muted-foreground mt-1">{cmd.desc}</p>
          </div>
        ))}
      </div>

      {/* Tempo de Luta */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⏱️</span> {t.fightDuration}
      </h3>

      <div className="card-judo mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary/30">
                <th className="text-left py-2 px-3 text-primary">{t.category}</th>
                <th className="text-center py-2 px-3 text-primary">{t.regularTime}</th>
                <th className="text-center py-2 px-3 text-primary">{t.goldenScoreCol}</th>
              </tr>
            </thead>
            <tbody>
              {t.tempoLuta.map((cat, index) => (
                <tr key={index} className="border-b border-primary/10">
                  <td className="py-2 px-3 font-medium text-white">{cat.categoria}</td>
                  <td className="py-2 px-3 text-center text-foreground/70">{cat.tempo}</td>
                  <td className="py-2 px-3 text-center text-foreground/70">{cat.golden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Layout do Placar */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📺</span> {t.scoreboardElements}
      </h3>

      <div className="card-judo mb-10">
        <div className="bg-background/50 rounded-lg p-4 mb-4">
          <div className="flex justify-center gap-4 text-center mb-4">
            <div className="flex-1 max-w-[200px]">
              <div className="bg-white text-secondary text-sm font-bold py-1 rounded-t">{t.white}</div>
              <div className="bg-card border border-primary/30 p-3 rounded-b">
                <p className="text-lg font-bold text-white">{t.athleteA}</p>
                <div className="flex justify-center gap-2 my-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">I</span>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded font-bold">W</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">Y</span>
                </div>
                <div className="flex justify-center gap-1">
                  <span className="w-3 h-3 bg-yellow-400 rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-primary text-secondary font-bold px-4 py-2 rounded text-lg">3:45</div>
              <div className="text-xs text-muted-foreground mt-1">{t.time}</div>
              <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded text-xs mt-2">GS</div>
            </div>
            <div className="flex-1 max-w-[200px]">
              <div className="bg-blue-600 text-white text-sm font-bold py-1 rounded-t">{t.blue}</div>
              <div className="bg-card border border-primary/30 p-3 rounded-b">
                <p className="text-lg font-bold text-white">{t.athleteB}</p>
                <div className="flex justify-center gap-2 my-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">I</span>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded font-bold">W</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-bold">Y</span>
                </div>
                <div className="flex justify-center gap-1">
                  <span className="w-3 h-3 bg-muted rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          {t.layoutPlacar.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span className="text-primary">▸</span>
              <span className="font-medium text-white">{item.elemento}:</span>
              <span className="text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Teclado de Operação */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⌨️</span> {t.keyboardTitle}
      </h3>

      <div className="card-judo mb-10">
        <p className="text-sm text-foreground/70 mb-4">{t.keyboardDesc}</p>
        <div className="bg-white rounded-lg p-4 mb-6">
          <img src={tecladoPlacarImg} alt="Judo scoreboard operation keyboard" className="w-full max-w-4xl mx-auto" />
        </div>
        <div className="space-y-4">
          {tecladoControles.map((grupo, index) => (
            <div key={index} className="bg-background/30 rounded-lg p-3">
              <h4 className="text-sm font-semibold text-primary mb-2">{grupo.grupo}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {grupo.teclas.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <kbd className="bg-card border border-primary/50 px-2 py-1 rounded font-mono text-primary min-w-[40px] text-center">{item.tecla}</kbd>
                    <span className="text-foreground/70">{item.funcao}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
            <p className="text-sm font-semibold text-green-400 mb-1">🟢 {t.whiteScoring}</p>
            <p className="text-xs text-foreground/70">{t.whiteKeys} <kbd className="bg-card px-1 rounded">Q</kbd> <kbd className="bg-card px-1 rounded">W</kbd> <kbd className="bg-card px-1 rounded">E</kbd> {t.whiteFor}</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
            <p className="text-sm font-semibold text-blue-400 mb-1">🔵 {t.blueScoring}</p>
            <p className="text-xs text-foreground/70">{t.whiteKeys} <kbd className="bg-card px-1 rounded">Y</kbd> <kbd className="bg-card px-1 rounded">U</kbd> <kbd className="bg-card px-1 rounded">I</kbd> {t.blueFor}</p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
            <p className="text-sm font-semibold text-yellow-400 mb-1">⚠️ {t.penaltiesKeys}</p>
            <p className="text-xs text-foreground/70"><kbd className="bg-card px-1 rounded">R</kbd> {t.penShidoWhite} <kbd className="bg-card px-1 rounded">O</kbd> {t.penShidoBlue}</p>
          </div>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
            <p className="text-sm font-semibold text-primary mb-1">⏱️ {t.timer}</p>
            <p className="text-xs text-foreground/70"><kbd className="bg-card px-1 rounded">SPACE</kbd> {t.timerDesc} <kbd className="bg-card px-1 rounded">9</kbd> {t.toketaKey} <kbd className="bg-card px-1 rounded">0</kbd> {t.osaekomiKey}</p>
          </div>
        </div>
      </div>

      {/* Vitórias Especiais */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🏅</span> {t.victoryTypes}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        <div className="card-judo text-center"><span className="text-2xl block mb-1">🎯</span><h4 className="font-bold text-white">Ippon</h4><p className="text-xs text-primary">{t.ipponVictory}</p><p className="text-xs text-muted-foreground mt-1">{t.ipponDetail}</p></div>
        <div className="card-judo text-center"><span className="text-2xl block mb-1">⚖️</span><h4 className="font-bold text-white">Waza-ari-awasete-ippon</h4><p className="text-xs text-primary">{t.twoWazaari}</p><p className="text-xs text-muted-foreground mt-1">{t.twoWazaariDetail}</p></div>
        <div className="card-judo text-center"><span className="text-2xl block mb-1">🚫</span><h4 className="font-bold text-white">Hansoku-Make</h4><p className="text-xs text-primary">{t.disqualification}</p><p className="text-xs text-muted-foreground mt-1">{t.disqualDetail}</p></div>
        <div className="card-judo text-center"><span className="text-2xl block mb-1">🏃</span><h4 className="font-bold text-white">Fusen-Gachi (FG)</h4><p className="text-xs text-primary">{t.absence}</p><p className="text-xs text-muted-foreground mt-1">{t.absenceDetail}</p></div>
        <div className="card-judo text-center"><span className="text-2xl block mb-1">🤕</span><h4 className="font-bold text-white">Kiken-Gachi (KG)</h4><p className="text-xs text-primary">{t.withdrawal}</p><p className="text-xs text-muted-foreground mt-1">{t.withdrawalDetail}</p></div>
        <div className="card-judo text-center"><span className="text-2xl block mb-1">📊</span><h4 className="font-bold text-white">Yusei-Gachi</h4><p className="text-xs text-primary">{t.superiority}</p><p className="text-xs text-muted-foreground mt-1">{t.superiorityDetail}</p></div>
      </div>

      {/* Golden Score */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⭐</span> {t.goldenScoreTitle}
      </h3>

      <div className="card-judo bg-gradient-to-r from-yellow-500/10 to-primary/10 border border-yellow-500/30 mb-10">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🥇</span>
          <div>
            <h4 className="text-lg font-bold text-primary mb-2">{t.suddenDeath}</h4>
            <p className="text-foreground/70 mb-3">
              {t.goldenScoreDesc} <span className="text-primary font-semibold">Golden Score</span> {t.goldenScoreDesc2} <kbd className="bg-card px-1 rounded text-primary">B</kbd>.
            </p>
            <ul className="space-y-1 text-sm text-foreground/60">
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span>{t.gsRule1}</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span>{t.gsRule2}</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span>{t.gsRule3}</li>
              <li className="flex items-start gap-2"><span className="text-yellow-400">•</span>{t.gsRule4}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vídeos Tutoriais */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🎬</span> {t.videoTutorials}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {t.videos.map((video) => (
          <div key={video.id} className={`card-judo overflow-hidden ${video.destaque ? 'ring-2 ring-primary' : ''}`}>
            <div className="relative aspect-video bg-secondary cursor-pointer group" onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}>
              {activeVideo === video.id ? (
                <iframe src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={video.titulo} />
              ) : (
                <>
                  <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.titulo} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }} />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-secondary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">{video.duracao}</div>
                  {video.destaque && <div className="absolute top-2 left-2 bg-primary text-secondary text-xs px-2 py-0.5 rounded font-semibold">{t.recommended}</div>}
                </>
              )}
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-white text-sm mb-1 line-clamp-2">{video.titulo}</h4>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{video.descricao}</p>
              <p className="text-xs text-primary">{video.canal}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dica de Estudo */}
      <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
        <p className="text-sm text-primary font-semibold mb-1">💡 {t.examTip}</p>
        <p className="text-xs text-foreground/70">
          {t.examTipText} <strong>I</strong> = Ippon, <strong>W</strong> = Waza-ari, <strong>Y</strong> = Yuko, <strong>GS</strong> = Golden Score, <strong>FG</strong> = Fusen-Gachi, <strong>KG</strong> = Kiken-Gachi.
        </p>
      </div>
    </div>
  );
};

export default PlacarSection;
