import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Loader2, CheckCircle, ArrowLeft } from "lucide-react";

type PageMode = "request" | "reset" | "request-success" | "reset-success";

const PasswordPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<PageMode>("request");
  
  // Request password reset state
  const [email, setEmail] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestError, setRequestError] = useState("");

  // Reset password state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");

  useEffect(() => {
    // Listen for password recovery event from Supabase
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === "PASSWORD_RECOVERY") {
        // User clicked the recovery link - switch to reset mode
        setMode("reset");
      }
    });

    // Check if we're already in a recovery session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      // If there's a recovery token in the URL hash, Supabase will handle it
      if (window.location.hash.includes('type=recovery')) {
        setMode("reset");
      }
    };
    
    checkSession();

    return () => subscription.unsubscribe();
  }, []);

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestError("");
    setRequestLoading(true);

    const normalizedEmail = email.trim().toLowerCase();

    const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, {
      redirectTo: `${window.location.origin}/senha`,
    });

    if (error) {
      setRequestError("Erro ao enviar email. Verifique se o email está correto.");
      setRequestLoading(false);
      return;
    }

    setMode("request-success");
    setRequestLoading(false);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError("");

    if (password !== confirmPassword) {
      setResetError("As senhas não coincidem.");
      return;
    }

    if (password.length < 6) {
      setResetError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setResetLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password
    });

    if (error) {
      setResetError("Erro ao redefinir senha. Tente solicitar um novo link.");
      setResetLoading(false);
      return;
    }

    setMode("reset-success");
    setResetLoading(false);

    // Redirect to login after 3 seconds
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  // Success state for request
  if (mode === "request-success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-5xl font-serif text-primary">柔道</span>
              <p className="text-sm text-muted-foreground mt-2">Exame Shodan</p>
            </Link>
          </div>

          <Card className="bg-card/80 border-primary/20">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Email Enviado!</h2>
              <p className="text-muted-foreground mb-6">
                Enviamos um link de recuperação para <strong className="text-white">{email}</strong>. 
                Verifique sua caixa de entrada e spam.
              </p>
              <Link to="/login">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary">
                  Voltar para Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Success state for reset
  if (mode === "reset-success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-5xl font-serif text-primary">柔道</span>
              <p className="text-sm text-muted-foreground mt-2">Exame Shodan</p>
            </Link>
          </div>

          <Card className="bg-card/80 border-primary/20">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Senha Redefinida!</h2>
              <p className="text-muted-foreground mb-6">
                Sua senha foi alterada com sucesso. Você será redirecionado para o login...
              </p>
              <Link to="/login">
                <Button className="btn-gold">
                  Ir para Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Reset password form
  if (mode === "reset") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-5xl font-serif text-primary">柔道</span>
              <p className="text-sm text-muted-foreground mt-2">Exame Shodan</p>
            </Link>
          </div>

          <Card className="bg-card/80 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Redefinir Senha</CardTitle>
              <CardDescription>Digite sua nova senha</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleResetPassword} className="space-y-4">
                {resetError && (
                  <Alert variant="destructive">
                    <AlertDescription>{resetError}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Nova Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo 6 caracteres"
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">Confirmar Senha</Label>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Repita a senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-secondary/50 border-primary/20 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={resetLoading}
                  className="w-full btn-gold py-6"
                >
                  {resetLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Salvando...
                    </>
                  ) : (
                    "Salvar Nova Senha"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link to="/login" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para o login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Request password reset form (default mode)
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-5xl font-serif text-primary">柔道</span>
            <p className="text-sm text-muted-foreground mt-2">Exame Shodan</p>
          </Link>
        </div>

        <Card className="bg-card/80 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Recuperar Senha</CardTitle>
            <CardDescription>Digite seu email para receber um link de recuperação</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRequestReset} className="space-y-4">
              {requestError && (
                <Alert variant="destructive">
                  <AlertDescription>{requestError}</AlertDescription>
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

              <Button
                type="submit"
                disabled={requestLoading}
                className="w-full btn-gold py-6"
              >
                {requestLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Link de Recuperação"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Voltar para o login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PasswordPage;
