import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import CursoPage from "./pages/CursoPage";
import AdminPage from "./pages/AdminPage";
import PasswordPage from "./pages/PasswordPage";
import PlanosPage from "./pages/PlanosPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";
import AccountPage from "./pages/AccountPage";
import SimuladoPage from "./pages/SimuladoPage";
import PerformancePage from "./pages/PerformancePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/cadastro" element={<AuthPage />} />
              <Route path="/recuperar-senha" element={<PasswordPage />} />
              <Route path="/redefinir-senha" element={<PasswordPage />} />
              <Route path="/senha" element={<PasswordPage />} />
              <Route path="/curso" element={<CursoPage />} />
              <Route path="/planos" element={<PlanosPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/conta" element={<AccountPage />} />
              <Route path="/simulado" element={<SimuladoPage />} />
              <Route path="/desempenho" element={<PerformancePage />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failure" element={<PaymentFailure />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
