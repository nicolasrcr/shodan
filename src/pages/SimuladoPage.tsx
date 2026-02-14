import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { getAllQuestions, shuffleArray, type Question } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Timer, ArrowLeft, RotateCcw, AlertTriangle } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";

const TOTAL_QUESTIONS = 30;
const TIME_LIMIT = 60 * 60; // 60 min in seconds

type SimQuestion = Question & { category: string };

const SimuladoPage = () => {
  const navigate = useNavigate();
  const { user, profile, loading } = useAuth();
  const { language } = useLanguage();

  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<SimQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [finished, setFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [retryWrong, setRetryWrong] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate('/login');
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!started || finished) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, finished]);

  const startExam = () => {
    const all = getAllQuestions();
    const selected = shuffleArray(all).slice(0, TOTAL_QUESTIONS);
    setQuestions(selected);
    setAnswers(new Array(selected.length).fill(null));
    setCurrentIndex(0);
    setTimeLeft(TIME_LIMIT);
    setFinished(false);
    setShowReview(false);
    setRetryWrong(false);
    setStarted(true);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const retryWrongQuestions = () => {
    const wrong = questions.filter((q, i) => answers[i] !== q.c);
    if (wrong.length === 0) return;
    setQuestions(shuffleArray(wrong));
    setAnswers(new Array(wrong.length).fill(null));
    setCurrentIndex(0);
    setTimeLeft(TIME_LIMIT);
    setFinished(false);
    setShowReview(false);
    setRetryWrong(true);
    setStarted(true);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const finishExam = useCallback(async () => {
    setFinished(true);
    if (!user) return;
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.c ? 1 : 0), 0);
    const duration = TIME_LIMIT - timeLeft;
    await supabase.from('quiz_attempts').insert({
      user_id: user.id,
      quiz_id: retryWrong ? 'simulado-retry' : 'simulado',
      score,
      total: questions.length,
      duration_seconds: duration,
      answers: questions.map((q, i) => ({ question: q.q, selected: answers[i], correct: q.c, category: q.category })),
    });
  }, [questions, answers, timeLeft, user, retryWrong]);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowResult(true);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        finishExam();
      }
    }, 1500);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  if (loading || !user) return null;

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
        <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/curso')} className="text-muted-foreground hover:text-white"><ArrowLeft className="w-6 h-6" /></button>
              <span className="text-4xl font-serif text-primary">柔道</span>
              <h1 className="text-lg font-bold text-white">{language === 'pt' ? 'Simulado' : 'Mock Exam'}</h1>
            </div>
            <LanguageToggle />
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Timer className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{language === 'pt' ? 'Simulado Exame Shodan' : 'Shodan Mock Exam'}</h2>
          <p className="text-muted-foreground mb-2">{language === 'pt' ? `${TOTAL_QUESTIONS} questões aleatórias • 60 minutos` : `${TOTAL_QUESTIONS} random questions • 60 minutes`}</p>
          <p className="text-muted-foreground mb-8">{language === 'pt' ? 'Teste seus conhecimentos como em um exame real' : 'Test your knowledge as in a real exam'}</p>
          <Button onClick={startExam} className="btn-gold text-lg py-6 px-10">{language === 'pt' ? 'Iniciar Simulado' : 'Start Exam'}</Button>
        </main>
      </div>
    );
  }

  if (finished) {
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.c ? 1 : 0), 0);
    const pct = Math.round((score / questions.length) * 100);
    const wrongCount = questions.length - score;

    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
        <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-serif text-primary">柔道</span>
              <h1 className="text-lg font-bold text-white">{language === 'pt' ? 'Resultado' : 'Result'}</h1>
            </div>
            <LanguageToggle />
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
          <Card className="border-primary/20 bg-card/50">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">{pct >= 70 ? '🥋' : pct >= 50 ? '💪' : '📖'}</div>
              <h2 className="text-3xl font-bold text-white mb-2">{score}/{questions.length}</h2>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: `conic-gradient(hsl(var(--primary)) ${pct * 3.6}deg, rgba(255,255,255,0.1) 0deg)` }}>
                <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{pct}%</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {pct >= 70 ? (language === 'pt' ? 'Excelente! Você está pronto!' : 'Excellent! You are ready!') :
                 pct >= 50 ? (language === 'pt' ? 'Bom resultado, continue estudando!' : 'Good result, keep studying!') :
                 (language === 'pt' ? 'Continue praticando para melhorar!' : 'Keep practicing to improve!')}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button onClick={startExam} className="btn-gold"><RotateCcw className="w-4 h-4 mr-2" />{language === 'pt' ? 'Novo Simulado' : 'New Exam'}</Button>
                {wrongCount > 0 && (
                  <Button onClick={retryWrongQuestions} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary">
                    <AlertTriangle className="w-4 h-4 mr-2" />{language === 'pt' ? `Refazer ${wrongCount} erradas` : `Retry ${wrongCount} wrong`}
                  </Button>
                )}
                <Button onClick={() => setShowReview(!showReview)} variant="outline" className="border-muted-foreground/50">
                  {showReview ? (language === 'pt' ? 'Ocultar revisão' : 'Hide review') : (language === 'pt' ? 'Revisar erradas' : 'Review wrong')}
                </Button>
                <Button onClick={() => navigate('/curso')} variant="outline" className="border-muted-foreground/50">
                  {language === 'pt' ? 'Voltar ao Curso' : 'Back to Course'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {showReview && (
            <div className="space-y-3">
              {questions.map((q, i) => {
                if (answers[i] === q.c) return null;
                return (
                  <Card key={i} className="border-red-500/30 bg-card/50">
                    <CardContent className="p-4">
                      <p className="text-sm font-semibold text-white mb-2">{i + 1}. {q.q}</p>
                      <p className="text-xs text-red-400">{language === 'pt' ? 'Sua resposta' : 'Your answer'}: {answers[i] !== null ? q.o[answers[i]!] : '-'}</p>
                      <p className="text-xs text-green-400">{language === 'pt' ? 'Correta' : 'Correct'}: {q.o[q.c]}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </main>
      </div>
    );
  }

  // Active exam
  const q = questions[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-serif text-primary">柔道</span>
            <span className="text-sm text-white">{currentIndex + 1}/{questions.length}</span>
          </div>
          <div className={`flex items-center gap-2 text-lg font-mono font-bold ${timeLeft < 300 ? 'text-destructive' : 'text-primary'}`}>
            <Timer className="w-5 h-5" />
            {formatTime(timeLeft)}
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-muted/30">
        <div className="h-full bg-primary transition-all" style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
      </div>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <Card className="border-primary/20 bg-card/50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-6">{q.q}</h3>
            <div className="space-y-3">
              {q.o.map((option, index) => {
                let cls = 'w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ';
                if (showResult) {
                  if (index === q.c) cls += 'bg-green-500/30 border-2 border-green-500 text-white';
                  else if (index === selectedAnswer) cls += 'bg-red-500/30 border-2 border-red-500 text-white';
                  else cls += 'bg-muted/20 border border-muted/30 text-muted-foreground';
                } else {
                  cls += 'bg-muted/20 border border-muted/30 text-white hover:border-primary hover:bg-primary/10';
                }
                return (
                  <button key={index} onClick={() => handleAnswer(index)} disabled={selectedAnswer !== null} className={cls}>
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showResult && index === q.c && <span className="ml-auto text-green-400">✓</span>}
                    {showResult && index === selectedAnswer && index !== q.c && <span className="ml-auto text-red-400">✗</span>}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SimuladoPage;
