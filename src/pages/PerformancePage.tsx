import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BarChart3, Trophy, Clock } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";

interface Attempt {
  id: string;
  quiz_id: string;
  score: number;
  total: number;
  duration_seconds: number | null;
  created_at: string;
}

const PerformancePage = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { language } = useLanguage();
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate('/login');
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50)
        .then(({ data }) => {
          setAttempts(data || []);
          setFetching(false);
        });
    }
  }, [user]);

  if (loading || !user) return null;

  const formatDate = (d: string) => new Date(d).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US');
  const formatDuration = (s: number | null) => {
    if (!s) return '-';
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m${sec.toString().padStart(2, '0')}s`;
  };

  const avgScore = attempts.length > 0
    ? Math.round(attempts.reduce((a, t) => a + (t.score / t.total) * 100, 0) / attempts.length)
    : 0;

  const bestScore = attempts.length > 0
    ? Math.round(Math.max(...attempts.map(t => (t.score / t.total) * 100)))
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-white"><ArrowLeft className="w-6 h-6" /></button>
            <span className="text-4xl font-serif text-primary">柔道</span>
            <h1 className="text-lg font-bold text-white">{language === 'pt' ? 'Meu Desempenho' : 'My Performance'}</h1>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-primary/20 bg-card/50">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{attempts.length}</p>
              <p className="text-xs text-muted-foreground">{language === 'pt' ? 'Tentativas' : 'Attempts'}</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/50">
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{bestScore}%</p>
              <p className="text-xs text-muted-foreground">{language === 'pt' ? 'Melhor' : 'Best'}</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/50">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{avgScore}%</p>
              <p className="text-xs text-muted-foreground">{language === 'pt' ? 'Média' : 'Average'}</p>
            </CardContent>
          </Card>
        </div>

        {/* Attempts List */}
        <Card className="border-primary/20 bg-card/50">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-white mb-4">{language === 'pt' ? 'Histórico de Tentativas' : 'Attempt History'}</h2>
            {fetching ? (
              <p className="text-muted-foreground text-center py-8">{language === 'pt' ? 'Carregando...' : 'Loading...'}</p>
            ) : attempts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">{language === 'pt' ? 'Nenhuma tentativa ainda' : 'No attempts yet'}</p>
                <Button onClick={() => navigate('/simulado')} className="btn-gold">{language === 'pt' ? 'Fazer Simulado' : 'Take Mock Exam'}</Button>
              </div>
            ) : (
              <div className="space-y-3">
                {attempts.map(a => {
                  const pct = Math.round((a.score / a.total) * 100);
                  return (
                    <div key={a.id} className="flex items-center gap-4 bg-secondary/30 rounded-lg p-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                        pct >= 70 ? 'bg-green-500/20 text-green-400' : pct >= 50 ? 'bg-orange-500/20 text-orange-400' : 'bg-red-500/20 text-red-400'
                      }`}>{pct}%</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{a.quiz_id === 'simulado' ? (language === 'pt' ? 'Simulado' : 'Mock Exam') : a.quiz_id === 'simulado-retry' ? (language === 'pt' ? 'Revisão Erradas' : 'Retry Wrong') : a.quiz_id}</p>
                        <p className="text-xs text-muted-foreground">{a.score}/{a.total} • {formatDuration(a.duration_seconds)} • {formatDate(a.created_at)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PerformancePage;
