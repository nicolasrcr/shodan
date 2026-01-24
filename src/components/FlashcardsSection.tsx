import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from 'lucide-react';

interface Flashcard {
  front: string;
  back: string;
  category: string;
}

const flashcardsData: Record<string, { title: string; icon: string; cards: Flashcard[] }> = {
  nomenclatura: {
    title: 'Nomenclatura Básica',
    icon: '言',
    cards: [
      { front: 'Judô', back: 'Caminho suave / Caminho da flexibilidade', category: 'nomenclatura' },
      { front: 'Judoka', back: 'Praticante de Judô', category: 'nomenclatura' },
      { front: 'Sensei', back: 'Professor / Mestre', category: 'nomenclatura' },
      { front: 'Dojo', back: 'Local de treinamento', category: 'nomenclatura' },
      { front: 'Tatame', back: 'Esteira de treino', category: 'nomenclatura' },
      { front: 'Rei', back: 'Saudação / Reverência', category: 'nomenclatura' },
      { front: 'Hajime', back: 'Começar', category: 'nomenclatura' },
      { front: 'Matte', back: 'Parar', category: 'nomenclatura' },
      { front: 'Ippon', back: 'Ponto completo / Vitória', category: 'nomenclatura' },
      { front: 'Waza-ari', back: 'Técnica existe / Meio ponto', category: 'nomenclatura' },
      { front: 'Tori', back: 'Quem aplica a técnica', category: 'nomenclatura' },
      { front: 'Uke', back: 'Quem recebe a técnica', category: 'nomenclatura' },
      { front: 'Kuzushi', back: 'Desequilíbrio', category: 'nomenclatura' },
      { front: 'Tsukuri', back: 'Preparação / Encaixe', category: 'nomenclatura' },
      { front: 'Kake', back: 'Execução / Projeção', category: 'nomenclatura' },
      { front: 'Randori', back: 'Treino livre', category: 'nomenclatura' },
      { front: 'Kata', back: 'Forma / Exercício formal', category: 'nomenclatura' },
      { front: 'Uchi-komi', back: 'Repetição de entrada', category: 'nomenclatura' },
      { front: 'Nage-komi', back: 'Repetição de projeção', category: 'nomenclatura' },
      { front: 'Shiai', back: 'Competição', category: 'nomenclatura' },
    ]
  },
  partes: {
    title: 'Partes do Corpo',
    icon: '体',
    cards: [
      { front: 'Ashi', back: 'Perna / Pé', category: 'partes' },
      { front: 'Te', back: 'Mão', category: 'partes' },
      { front: 'Koshi', back: 'Quadril', category: 'partes' },
      { front: 'Ude', back: 'Braço', category: 'partes' },
      { front: 'Hiza', back: 'Joelho', category: 'partes' },
      { front: 'Kata', back: 'Ombro', category: 'partes' },
      { front: 'Kubi', back: 'Pescoço', category: 'partes' },
      { front: 'Atama', back: 'Cabeça', category: 'partes' },
      { front: 'Eri', back: 'Gola', category: 'partes' },
      { front: 'Sode', back: 'Manga', category: 'partes' },
      { front: 'Obi', back: 'Faixa', category: 'partes' },
      { front: 'Mune', back: 'Peito', category: 'partes' },
    ]
  },
  direcoes: {
    title: 'Direções e Posições',
    icon: '方',
    cards: [
      { front: 'Mae', back: 'Frente', category: 'direcoes' },
      { front: 'Ushiro', back: 'Trás', category: 'direcoes' },
      { front: 'Yoko', back: 'Lado', category: 'direcoes' },
      { front: 'Uchi', back: 'Por dentro', category: 'direcoes' },
      { front: 'Soto', back: 'Por fora', category: 'direcoes' },
      { front: 'Hidari', back: 'Esquerda', category: 'direcoes' },
      { front: 'Migi', back: 'Direita', category: 'direcoes' },
      { front: 'Kami', back: 'Superior / Acima', category: 'direcoes' },
      { front: 'Shimo', back: 'Inferior / Abaixo', category: 'direcoes' },
      { front: 'Tachi', back: 'Em pé', category: 'direcoes' },
      { front: 'Ne / Newaza', back: 'No solo', category: 'direcoes' },
    ]
  },
  acoes: {
    title: 'Ações e Movimentos',
    icon: '動',
    cards: [
      { front: 'Nage', back: 'Projeção / Arremesso', category: 'acoes' },
      { front: 'Gari', back: 'Ceifar', category: 'acoes' },
      { front: 'Harai', back: 'Varrer', category: 'acoes' },
      { front: 'Guruma', back: 'Roda', category: 'acoes' },
      { front: 'Otoshi', back: 'Queda', category: 'acoes' },
      { front: 'Seoi', back: 'Carregar nas costas', category: 'acoes' },
      { front: 'Gatame', back: 'Imobilizar / Fixar', category: 'acoes' },
      { front: 'Jime / Shime', back: 'Estrangular', category: 'acoes' },
      { front: 'Gaeshi', back: 'Contra-ataque / Reversão', category: 'acoes' },
      { front: 'Makikomi', back: 'Enrolar junto', category: 'acoes' },
      { front: 'Sutemi', back: 'Sacrifício', category: 'acoes' },
      { front: 'Osae', back: 'Pressionar / Controlar', category: 'acoes' },
      { front: 'Hiki', back: 'Puxar', category: 'acoes' },
      { front: 'Tsuri', back: 'Levantar / Pescar', category: 'acoes' },
    ]
  },
  tamanhos: {
    title: 'Tamanhos e Quantidades',
    icon: '大',
    cards: [
      { front: 'O (大)', back: 'Grande', category: 'tamanhos' },
      { front: 'Ko (小)', back: 'Pequeno', category: 'tamanhos' },
      { front: 'Dai', back: 'Grande', category: 'tamanhos' },
      { front: 'Sho', back: 'Pequeno', category: 'tamanhos' },
      { front: 'Ichi', back: 'Um (1)', category: 'tamanhos' },
      { front: 'Ni', back: 'Dois (2)', category: 'tamanhos' },
      { front: 'San', back: 'Três (3)', category: 'tamanhos' },
      { front: 'Shi / Yon', back: 'Quatro (4)', category: 'tamanhos' },
      { front: 'Go', back: 'Cinco (5)', category: 'tamanhos' },
      { front: 'Roku', back: 'Seis (6)', category: 'tamanhos' },
      { front: 'Shichi / Nana', back: 'Sete (7)', category: 'tamanhos' },
      { front: 'Hachi', back: 'Oito (8)', category: 'tamanhos' },
      { front: 'Kyu / Ku', back: 'Nove (9)', category: 'tamanhos' },
      { front: 'Ju', back: 'Dez (10)', category: 'tamanhos' },
    ]
  },
  gokyo: {
    title: 'Gokyo - Técnicas de Projeção',
    icon: '投',
    cards: [
      { front: 'De-ashi-harai', back: 'Varredura do pé que avança (Ikkyo)', category: 'gokyo' },
      { front: 'Hiza-guruma', back: 'Roda do joelho (Ikkyo)', category: 'gokyo' },
      { front: 'Sasae-tsurikomi-ashi', back: 'Bloqueio com elevação do pé (Ikkyo)', category: 'gokyo' },
      { front: 'Uki-goshi', back: 'Quadril flutuante (Ikkyo)', category: 'gokyo' },
      { front: 'O-soto-gari', back: 'Grande ceifada externa (Ikkyo)', category: 'gokyo' },
      { front: 'O-goshi', back: 'Grande arremesso de quadril (Ikkyo)', category: 'gokyo' },
      { front: 'O-uchi-gari', back: 'Grande ceifada interna (Gokyo)', category: 'gokyo' },
      { front: 'Seoi-nage', back: 'Projeção pelas costas (Ikkyo)', category: 'gokyo' },
      { front: 'Ko-soto-gari', back: 'Pequena ceifada externa (Nikyo)', category: 'gokyo' },
      { front: 'Ko-uchi-gari', back: 'Pequena ceifada interna (Sankyo)', category: 'gokyo' },
      { front: 'Harai-goshi', back: 'Varredura de quadril (Nikyo)', category: 'gokyo' },
      { front: 'Tai-otoshi', back: 'Queda de corpo (Nikyo)', category: 'gokyo' },
      { front: 'Uchi-mata', back: 'Varredura interna da coxa (Sankyo)', category: 'gokyo' },
      { front: 'Tomoe-nage', back: 'Projeção em círculo (Yonkyo)', category: 'gokyo' },
      { front: 'Kata-guruma', back: 'Roda sobre os ombros (Sankyo)', category: 'gokyo' },
      { front: 'Sumi-gaeshi', back: 'Reversão de canto (Yonkyo)', category: 'gokyo' },
      { front: 'Tani-otoshi', back: 'Queda no vale (Yonkyo)', category: 'gokyo' },
      { front: 'Hane-goshi', back: 'Quadril saltitante (Nikyo)', category: 'gokyo' },
      { front: 'Ura-nage', back: 'Projeção para trás (Gokyo)', category: 'gokyo' },
      { front: 'Yoko-gake', back: 'Gancho lateral (Gokyo)', category: 'gokyo' },
    ]
  },
  katame: {
    title: 'Katame-Waza - Técnicas de Solo',
    icon: '固',
    cards: [
      { front: 'Kesa-gatame', back: 'Imobilização em forma de cachecol', category: 'katame' },
      { front: 'Kata-gatame', back: 'Imobilização pelo ombro', category: 'katame' },
      { front: 'Kami-shiho-gatame', back: 'Imobilização superior em 4 cantos', category: 'katame' },
      { front: 'Yoko-shiho-gatame', back: 'Imobilização lateral em 4 cantos', category: 'katame' },
      { front: 'Tate-shiho-gatame', back: 'Imobilização montada em 4 cantos', category: 'katame' },
      { front: 'Kuzure-kesa-gatame', back: 'Variação da imobilização cachecol', category: 'katame' },
      { front: 'Ushiro-kesa-gatame', back: 'Imobilização cachecol por trás', category: 'katame' },
      { front: 'Hadaka-jime', back: 'Estrangulamento sem o judogi', category: 'katame' },
      { front: 'Okuri-eri-jime', back: 'Estrangulamento com a gola deslizante', category: 'katame' },
      { front: 'Kata-ha-jime', back: 'Estrangulamento com uma asa', category: 'katame' },
      { front: 'Sankaku-jime', back: 'Estrangulamento triangular (pernas)', category: 'katame' },
      { front: 'Juji-gatame', back: 'Chave de braço em cruz', category: 'katame' },
      { front: 'Ude-garami', back: 'Chave entrelaçada (Americana)', category: 'katame' },
      { front: 'Ude-gatame', back: 'Chave reta de braço', category: 'katame' },
      { front: 'Waki-gatame', back: 'Chave de axila', category: 'katame' },
    ]
  },
  arbitragem: {
    title: 'Comandos de Arbitragem',
    icon: '則',
    cards: [
      { front: 'Hajime', back: 'Começar a luta', category: 'arbitragem' },
      { front: 'Matte', back: 'Parar temporariamente', category: 'arbitragem' },
      { front: 'Sore-made', back: 'Fim da luta', category: 'arbitragem' },
      { front: 'Osaekomi', back: 'Imobilização válida iniciada', category: 'arbitragem' },
      { front: 'Toketa', back: 'Escapou da imobilização', category: 'arbitragem' },
      { front: 'Ippon', back: 'Ponto completo - vitória', category: 'arbitragem' },
      { front: 'Waza-ari', back: 'Técnica existe - meio ponto', category: 'arbitragem' },
      { front: 'Yuko', back: 'Pontuação menor (regras 2025)', category: 'arbitragem' },
      { front: 'Shido', back: 'Penalidade leve', category: 'arbitragem' },
      { front: 'Hansoku-make', back: 'Desqualificação', category: 'arbitragem' },
      { front: 'Hantei', back: 'Decisão dos juízes', category: 'arbitragem' },
      { front: 'Sono-mama', back: 'Não se mova (congelar)', category: 'arbitragem' },
      { front: 'Yoshi', back: 'Continuar após sono-mama', category: 'arbitragem' },
      { front: 'Maitta', back: 'Desistir / Bater', category: 'arbitragem' },
    ]
  },
};

const FlashcardsSection = () => {
  const [currentDeck, setCurrentDeck] = useState<string | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([]);
  const [studied, setStudied] = useState(0);

  useEffect(() => {
    if (currentDeck) {
      const cards = [...flashcardsData[currentDeck].cards];
      setShuffledCards(cards);
      setCardIndex(0);
      setIsFlipped(false);
      setStudied(0);
    }
  }, [currentDeck]);

  const shuffleDeck = () => {
    const cards = [...shuffledCards];
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setShuffledCards(cards);
    setCardIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    if (cardIndex < shuffledCards.length - 1) {
      setCardIndex(prev => prev + 1);
      setIsFlipped(false);
      setStudied(prev => prev + 1);
    }
  };

  const prevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const resetDeck = () => {
    setCardIndex(0);
    setIsFlipped(false);
    setStudied(0);
  };

  if (!currentDeck) {
    return (
      <div className="animate-fade-in">
        <h2 className="section-title">
          <span className="section-title-icon">札</span>
          Flashcards - Estudo de Vocabulário
        </h2>

        <div className="card-judo mb-8">
          <p className="text-sm text-foreground/70">
            Escolha um deck de flashcards para estudar a terminologia japonesa do Judô.
            Clique no card para virar e ver a tradução!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(flashcardsData).map(([key, deck]) => (
            <button
              key={key}
              onClick={() => setCurrentDeck(key)}
              className="card-judo text-left hover:border-primary transition-colors p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-white">{deck.title}</h3>
                  <p className="text-xs text-muted-foreground">{deck.cards.length} cards</p>
                </div>
                <span className="text-3xl text-primary font-serif">{deck.icon}</span>
              </div>
              <div className="flex items-center gap-2 text-primary text-sm">
                <span>Estudar</span>
                <span>→</span>
              </div>
            </button>
          ))}
        </div>

        <div className="card-red p-6 mt-8">
          <h3 className="font-semibold text-white mb-2">💡 Como Estudar</h3>
          <ul className="space-y-1 text-sm text-foreground/70">
            <li>• Clique no card para ver a tradução</li>
            <li>• Use as setas para navegar entre os cards</li>
            <li>• Embaralhe o deck para um estudo aleatório</li>
            <li>• Repita até memorizar todos os termos</li>
          </ul>
        </div>
      </div>
    );
  }

  const deck = flashcardsData[currentDeck];
  const currentCard = shuffledCards[cardIndex];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">{deck.icon}</span>
        {deck.title}
      </h2>

      <div className="card-judo mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setCurrentDeck(null)}
            className="text-sm text-muted-foreground hover:text-white transition-colors"
          >
            ← Voltar aos Decks
          </button>
          <div className="text-sm text-primary">
            {cardIndex + 1} / {shuffledCards.length}
          </div>
        </div>

        <div className="h-2 bg-muted/30 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((cardIndex + 1) / shuffledCards.length) * 100}%` }}
          />
        </div>

        {/* Flashcard */}
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative w-full aspect-[3/2] max-w-lg mx-auto cursor-pointer perspective-1000"
        >
          <div 
            className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front */}
            <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex flex-col items-center justify-center p-8">
              <span className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Japonês</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white text-center">{currentCard?.front}</h3>
              <span className="text-xs text-muted-foreground mt-6">Clique para virar</span>
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/30 flex flex-col items-center justify-center p-8">
              <span className="text-xs text-green-400 uppercase tracking-wide mb-4">Português</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">{currentCard?.back}</h3>
              <span className="text-xs text-muted-foreground mt-6">Clique para virar</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevCard}
            disabled={cardIndex === 0}
            className="p-3 rounded-full bg-muted/30 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted/50 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={resetDeck}
            className="p-3 rounded-full bg-muted/30 text-white hover:bg-muted/50 transition-colors"
            title="Reiniciar deck"
          >
            <RotateCcw size={20} />
          </button>

          <button
            onClick={shuffleDeck}
            className="p-3 rounded-full bg-muted/30 text-white hover:bg-muted/50 transition-colors"
            title="Embaralhar"
          >
            <Shuffle size={20} />
          </button>

          <button
            onClick={nextCard}
            disabled={cardIndex === shuffledCards.length - 1}
            className="p-3 rounded-full bg-muted/30 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted/50 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Cards estudados: <span className="text-primary font-semibold">{studied}</span>
        </div>
      </div>

      {/* Deck completed message */}
      {cardIndex === shuffledCards.length - 1 && isFlipped && (
        <div className="card-red p-6 text-center">
          <span className="text-4xl block mb-3">🎉</span>
          <h3 className="text-lg font-semibold text-white mb-2">Parabéns!</h3>
          <p className="text-sm text-foreground/70 mb-4">Você concluiu todos os cards deste deck!</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetDeck}
              className="px-4 py-2 bg-muted/50 rounded-lg text-white hover:bg-muted transition-colors"
            >
              Reiniciar
            </button>
            <button
              onClick={shuffleDeck}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Embaralhar e Repetir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardsSection;
