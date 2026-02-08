import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    "header.title": "Exame Shodan",
    "header.subtitle": "Preparação para Faixa Preta",
    "header.login": "Entrar",
    
    // Hero Section
    "hero.badge": "🥋 Curso Completo",
    "hero.title1": "Domine o Conteúdo do",
    "hero.title2": "Exame Shodan",
    "hero.description": "O guia mais completo para sua preparação para a Faixa Preta 1º Dan. Todo o conhecimento teórico que você precisa em um só lugar.",
    "hero.cta": "Quero Me Preparar Agora",
    "hero.details": "Ver Detalhes",
    "hero.firstDan": "Primeiro Dan",
    
    // Benefits Section
    "benefits.title1": "O que você vai",
    "benefits.title2": "encontrar",
    "benefits.content": "17 seções de conteúdo completo",
    "benefits.videos": "Vídeos demonstrativos",
    "benefits.flashcards": "Flashcards para memorização",
    "benefits.quizzes": "Quizzes interativos",
    "benefits.access": "Acesso por 1 ano",
    "benefits.pace": "Estude no seu ritmo",
    
    // Modules Section
    "modules.title1": "Conteúdo",
    "modules.title2": "Completo",
    "modules.subtitle": "Tudo que você precisa saber para o exame teórico, organizado de forma didática",
    "modules.history": "História do Judô e Jigoro Kano",
    "modules.principles": "Princípios e Filosofia",
    "modules.etiquette": "Etiqueta e Conduta no Dojo",
    "modules.nomenclature": "Nomenclatura Japonesa Completa",
    "modules.gokyo": "Gokyo - 40 Técnicas de Projeção",
    "modules.katame": "Katame-Waza - Técnicas de Solo",
    "modules.nagekata": "Nage no Kata - 15 Técnicas",
    "modules.katamekata": "Katame no Kata - 15 Técnicas",
    "modules.rules": "Regras de Arbitragem 2025",
    "modules.organization": "Organização Desportiva",
    "modules.school": "Judô Escolar e Inclusivo",
    "modules.firstaid": "Primeiros Socorros no Tatame",
    
    // Pricing Section
    "pricing.title1": "Investimento",
    "pricing.title2": "Acessível",
    "pricing.subtitle": "Acesso completo por 1 ano por um valor único",
    "pricing.productName": "Guia Completo Exame Shodan",
    "pricing.accessPeriod": "Acesso por 1 ano a todo o conteúdo",
    "pricing.modules": "17 módulos completos",
    "pricing.flashcardsQuizzes": "Flashcards e Quizzes",
    "pricing.updates": "Atualizações incluídas",
    "pricing.singlePayment": "pagamento único",
    "pricing.cardPayment": "💳 Pagar com Cartão",
    "pricing.pixPayment": "📱 Pagar com PIX",
    
    // Quote Section
    "quote.text": "\"O objetivo final do Judô não é a vitória sobre os outros, mas o aperfeiçoamento de si mesmo.\"",
    "quote.author": "— Jigoro Kano",
    
    // Footer
    "footer.links": "Links",
    "footer.resources": "Recursos",
    "footer.plans": "Planos",
    "footer.testimonials": "Depoimentos",
    "footer.privacy": "Política de Privacidade",
    "footer.contact": "Contato",
    "footer.copyright": "© 2026 Shodan EDU. Todos os direitos reservados.",
    "footer.madeWith": "Feito com",
    "footer.forJudo": "para o Judô brasileiro",
    
    // PIX Modal
    "pix.title": "Pagamento via PIX",
    "pix.key": "Chave PIX (CNPJ):",
    "pix.value": "Valor:",
    "pix.whatsapp": "WhatsApp para enviar comprovante:",
    "pix.instructions": "Após o pagamento, envie o comprovante para nosso WhatsApp para liberação do acesso.",
    "pix.close": "Fechar",
    "pix.register": "Fazer Cadastro",
  },
  en: {
    // Header
    "header.title": "Shodan Exam",
    "header.subtitle": "Black Belt Preparation",
    "header.login": "Login",
    
    // Hero Section
    "hero.badge": "🥋 Complete Course",
    "hero.title1": "Master the Content of the",
    "hero.title2": "Shodan Exam",
    "hero.description": "The most complete guide for your 1st Dan Black Belt preparation. All the theoretical knowledge you need in one place.",
    "hero.cta": "I Want to Prepare Now",
    "hero.details": "See Details",
    "hero.firstDan": "First Dan",
    
    // Benefits Section
    "benefits.title1": "What you will",
    "benefits.title2": "find",
    "benefits.content": "17 sections of complete content",
    "benefits.videos": "Demonstration videos",
    "benefits.flashcards": "Flashcards for memorization",
    "benefits.quizzes": "Interactive quizzes",
    "benefits.access": "1-year access",
    "benefits.pace": "Study at your own pace",
    
    // Modules Section
    "modules.title1": "Complete",
    "modules.title2": "Content",
    "modules.subtitle": "Everything you need to know for the theoretical exam, organized didactically",
    "modules.history": "History of Judo and Jigoro Kano",
    "modules.principles": "Principles and Philosophy",
    "modules.etiquette": "Etiquette and Conduct in the Dojo",
    "modules.nomenclature": "Complete Japanese Nomenclature",
    "modules.gokyo": "Gokyo - 40 Throwing Techniques",
    "modules.katame": "Katame-Waza - Ground Techniques",
    "modules.nagekata": "Nage no Kata - 15 Techniques",
    "modules.katamekata": "Katame no Kata - 15 Techniques",
    "modules.rules": "2025 Refereeing Rules",
    "modules.organization": "Sports Organization",
    "modules.school": "School and Inclusive Judo",
    "modules.firstaid": "First Aid on the Mat",
    
    // Pricing Section
    "pricing.title1": "Affordable",
    "pricing.title2": "Investment",
    "pricing.subtitle": "Complete access for 1 year at a single price",
    "pricing.productName": "Complete Shodan Exam Guide",
    "pricing.accessPeriod": "1-year access to all content",
    "pricing.modules": "17 complete modules",
    "pricing.flashcardsQuizzes": "Flashcards and Quizzes",
    "pricing.updates": "Updates included",
    "pricing.singlePayment": "single payment",
    "pricing.cardPayment": "💳 Pay with Card",
    "pricing.pixPayment": "📱 Pay with PIX",
    
    // Quote Section
    "quote.text": "\"The ultimate goal of Judo is not victory over others, but the perfection of oneself.\"",
    "quote.author": "— Jigoro Kano",
    
    // Footer
    "footer.links": "Links",
    "footer.resources": "Resources",
    "footer.plans": "Plans",
    "footer.testimonials": "Testimonials",
    "footer.privacy": "Privacy Policy",
    "footer.contact": "Contact",
    "footer.copyright": "© 2026 Shodan EDU. All rights reserved.",
    "footer.madeWith": "Made with",
    "footer.forJudo": "for Brazilian Judo",
    
    // PIX Modal
    "pix.title": "PIX Payment",
    "pix.key": "PIX Key (CNPJ):",
    "pix.value": "Amount:",
    "pix.whatsapp": "WhatsApp to send receipt:",
    "pix.instructions": "After payment, send the receipt to our WhatsApp for access activation.",
    "pix.close": "Close",
    "pix.register": "Register",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "pt";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "pt" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["pt"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
