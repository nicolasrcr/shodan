export interface Question {
  q: string;
  o: string[];
  c: number;
}

export interface QuizCategory {
  title: string;
  icon: string;
  questions: Question[];
}

// Re-export from QuizzesSection's data - we import and re-export to centralize
// The actual data stays in QuizzesSection for backward compat; this file provides the typed export
export const quizData: Record<string, QuizCategory> = {
  historia: {
    title: 'História do Judô',
    icon: '史',
    questions: [
      { q: 'Em que ano foi fundado o Kodokan?', o: ['1880', '1882', '1884', '1886'], c: 1 },
      { q: 'Quem é o fundador do Judô?', o: ['Mitsuyo Maeda', 'Jigoro Kano', 'Kyuzo Mifune', 'Helio Gracie'], c: 1 },
      { q: 'O que significa Kodokan?', o: ['Casa do Judô', 'Instituto para Estudar o Caminho', 'Escola de Luta', 'Templo Marcial'], c: 1 },
      { q: 'Em que ano o Judô estreou nas Olimpíadas?', o: ['1960', '1964', '1968', '1972'], c: 1 },
      { q: 'Quem foi o primeiro aluno do Kodokan?', o: ['Kyuzo Mifune', 'Tsunejirō Tomita', 'Shiro Saigo', 'Mitsuyo Maeda'], c: 1 },
      { q: 'Onde nasceu Jigoro Kano?', o: ['Tóquio', 'Osaka', 'Mikage (Kobe)', 'Kyoto'], c: 2 },
      { q: 'Qual a data de nascimento de Jigoro Kano?', o: ['28/10/1858', '28/10/1860', '28/10/1862', '28/10/1864'], c: 0 },
      { q: 'Em que ano Kano se tornou membro do COI?', o: ['1900', '1909', '1912', '1920'], c: 1 },
      { q: 'Quantos tatames tinha o primeiro Kodokan?', o: ['6', '12', '20', '30'], c: 1 },
      { q: 'Quem levou o Judô para o Brasil?', o: ['Jigoro Kano', 'Mitsuyo Maeda', 'Kyuzo Mifune', 'Ryuzo Ogawa'], c: 1 },
    ],
  },
  principios: {
    title: 'Princípios e Filosofia',
    icon: '心',
    questions: [
      { q: 'O que significa "Seiryoku Zen\'yo"?', o: ['Prosperidade mútua', 'Máxima eficácia com mínimo esforço', 'Caminho suave', 'Respeito mútuo'], c: 1 },
      { q: 'O que significa "Jita Kyoei"?', o: ['Máxima eficiência', 'Benefícios mútuos e prosperidade', 'Caminho do guerreiro', 'Força interior'], c: 1 },
      { q: 'Quantas virtudes compõem o Código Moral do Judô?', o: ['5', '6', '7', '8'], c: 2 },
      { q: 'O que significa "Ju" em Judô?', o: ['Força', 'Suavidade/Flexibilidade', 'Caminho', 'Técnica'], c: 1 },
      { q: 'O que significa "Do" em Judô?', o: ['Força', 'Arte', 'Caminho', 'Luta'], c: 2 },
      { q: 'O que é Kuzushi?', o: ['Execução', 'Preparação', 'Desequilíbrio', 'Finalização'], c: 2 },
      { q: 'O que é Tsukuri?', o: ['Desequilíbrio', 'Preparação/Encaixe', 'Execução', 'Finalização'], c: 1 },
      { q: 'O que é Kake?', o: ['Desequilíbrio', 'Preparação', 'Execução/Projeção', 'Defesa'], c: 2 },
      { q: 'Quem é Tori?', o: ['Quem recebe a técnica', 'Quem aplica a técnica', 'O árbitro', 'O professor'], c: 1 },
      { q: 'Quem é Uke?', o: ['Quem aplica a técnica', 'Quem recebe a técnica', 'O árbitro', 'O professor'], c: 1 },
    ],
  },
  gokyo: {
    title: 'Gokyo - 40 Técnicas',
    icon: '投',
    questions: [
      { q: 'Quantas técnicas compõem o Gokyo tradicional?', o: ['30', '40', '50', '60'], c: 1 },
      { q: 'O-soto-gari pertence a qual grupo de técnicas?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 2 },
      { q: 'Seoi-nage pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 0 },
      { q: 'O-goshi pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ashi-waza', 'Sutemi-waza'], c: 1 },
      { q: 'Tomoe-nage pertence a qual grupo?', o: ['Te-waza', 'Koshi-waza', 'Ma-sutemi-waza', 'Yoko-sutemi-waza'], c: 2 },
      { q: 'Quantos grupos tem o Gokyo?', o: ['3', '4', '5', '6'], c: 2 },
      { q: 'O-soto-gari está em qual Kyo do Gokyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 0 },
      { q: 'Uchi-mata está em qual Kyo do Gokyo?', o: ['Ikkyo (1º)', 'Nikyo (2º)', 'Sankyo (3º)', 'Yonkyo (4º)'], c: 2 },
      { q: 'Qual técnica é "grande ceifada externa"?', o: ['O-uchi-gari', 'O-soto-gari', 'Ko-soto-gari', 'Ko-uchi-gari'], c: 1 },
      { q: 'Qual técnica é "projeção de quadril"?', o: ['Seoi-nage', 'O-goshi', 'Tai-otoshi', 'Tomoe-nage'], c: 1 },
    ],
  },
  katamewaza: {
    title: 'Katame-Waza (Solo)',
    icon: '固',
    questions: [
      { q: 'O que significa Osaekomi-waza?', o: ['Técnicas de projeção', 'Técnicas de imobilização', 'Técnicas de estrangulamento', 'Técnicas de chave'], c: 1 },
      { q: 'O que significa Shime-waza?', o: ['Imobilização', 'Estrangulamento', 'Chave articular', 'Projeção'], c: 1 },
      { q: 'O que significa Kansetsu-waza?', o: ['Imobilização', 'Estrangulamento', 'Chave articular', 'Projeção'], c: 2 },
      { q: 'Kesa-gatame é uma técnica de que tipo?', o: ['Projeção', 'Imobilização', 'Estrangulamento', 'Chave'], c: 1 },
      { q: 'Juji-gatame ataca qual articulação?', o: ['Ombro', 'Pulso', 'Cotovelo', 'Joelho'], c: 2 },
      { q: 'Hadaka-jime é que tipo de estrangulamento?', o: ['Com o judogi', 'Sem o judogi (nu)', 'Com as pernas', 'Com o braço cruzado'], c: 1 },
      { q: 'Quantas imobilizações são oficiais no Judô?', o: ['5', '7', '10', '12'], c: 2 },
      { q: 'O que é "Ne-waza"?', o: ['Trabalho em pé', 'Trabalho no solo', 'Projeções', 'Quedas'], c: 1 },
      { q: 'Qual técnica é conhecida como "mata-leão"?', o: ['Okuri-eri-jime', 'Hadaka-jime', 'Kata-ha-jime', 'Gyaku-juji-jime'], c: 1 },
      { q: 'Chaves de joelho são permitidas no Judô?', o: ['Sim, sempre', 'Não, são proibidas', 'Só para faixas pretas', 'Só em treinos'], c: 1 },
    ],
  },
  regras: {
    title: 'Regras e Arbitragem',
    icon: '則',
    questions: [
      { q: 'Quanto tempo dura uma luta de Judô para adultos?', o: ['3 minutos', '4 minutos', '5 minutos', '6 minutos'], c: 1 },
      { q: 'O que é Ippon?', o: ['Meia pontuação', 'Pontuação máxima', 'Penalidade', 'Advertência'], c: 1 },
      { q: 'O que é Waza-ari?', o: ['Meia pontuação', 'Pontuação máxima', 'Penalidade', 'Vantagem técnica'], c: 0 },
      { q: 'Quantos Shido levam a Hansoku-make?', o: ['2', '3', '4', '5'], c: 1 },
      { q: 'Quanto tempo de imobilização para Ippon?', o: ['10s', '15s', '20s', '25s'], c: 2 },
      { q: 'Waza-ari-awasete-Ippon existe nas regras 2025?', o: ['Sim', 'Não', 'Só no Golden Score', 'Só para adultos'], c: 0 },
      { q: 'O que é Golden Score?', o: ['Prorrogação', 'Pontuação dupla', 'Penalidade final', 'Decisão dos juízes'], c: 0 },
      { q: 'Quantos árbitros centrais há na área de combate?', o: ['1', '2', '3', '4'], c: 0 },
      { q: 'O que significa Matte?', o: ['Comecem', 'Parem', 'Pontuação', 'Penalidade'], c: 1 },
      { q: 'Qual comando inicia a luta?', o: ['Matte', 'Hajime', 'Sore-made', 'Yoshi'], c: 1 },
    ],
  },
};

// Flatten all questions for simulado
export function getAllQuestions(): (Question & { category: string })[] {
  const all: (Question & { category: string })[] = [];
  for (const [category, data] of Object.entries(quizData)) {
    for (const q of data.questions) {
      all.push({ ...q, category });
    }
  }
  return all;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
