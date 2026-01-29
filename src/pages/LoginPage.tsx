import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [needsEmailConfirm, setNeedsEmailConfirm] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSent, setResendSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResendSent(false);
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      const code = (error as unknown as { code?: string })?.code;
      const msg = (error.message || "").toLowerCase();
      const isEmailNotConfirmed =
        code === "email_not_confirmed" ||
        msg.includes("email not confirmed") ||
        msg.includes("email_not_confirmed");

      if (isEmailNotConfirmed) {
        setNeedsEmailConfirm(true);
        setError(
          "Seu email ainda não foi confirmado. Verifique sua caixa de entrada e o spam (lixo eletrônico)."
        );
      } else {
        setNeedsEmailConfirm(false);
        setError("Email ou senha incorretos. Tente novamente.");
      }
      setLoading(false);
      return;
    }

    setNeedsEmailConfirm(false);
    navigate('/curso');
  };

  const handleResendConfirmation = async () => {
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setResendLoading(true);
    setResendSent(false);
    setError("");

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: normalizedEmail,
    });

    if (error) {
      setError(
        "Não foi possível reenviar o email agora. Aguarde alguns minutos e tente novamente."
      );
      setResendLoading(false);
      return;
    }

    setResendSent(true);
    setResendLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-5xl font-serif text-primary">柔道</span>
            <p className="text-sm text-muted-foreground mt-2">Exame Shodan</p>
          </Link>
        </div>

        <Card className="bg-card/80 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Entrar</CardTitle>
            <CardDescription>Acesse sua conta para continuar estudando</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white">Senha</Label>
                  <Link 
                    to="/recuperar-senha" 
                    className="text-xs text-primary hover:underline"
                  >
                    Esqueci a senha
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-secondary/50 border-primary/20 focus:border-primary pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-gold py-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>

              {needsEmailConfirm && (
                <div className="space-y-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    disabled={resendLoading || !email.trim()}
                    onClick={handleResendConfirmation}
                    className="w-full border-primary/50 text-primary hover:bg-primary hover:text-secondary"
                  >
                    {resendLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Reenviando...
                      </>
                    ) : (
                      "Reenviar email de confirmação"
                    )}
                  </Button>
                  {resendSent && (
                    <p className="text-xs text-muted-foreground text-center">
                      Email reenviado! Confira sua caixa de entrada e o spam.
                    </p>
                  )}
                </div>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Link to="/cadastro" className="text-primary hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                ← Voltar para a página inicial
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
