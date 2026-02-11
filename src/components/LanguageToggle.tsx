import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-primary/30">
      <button
        onClick={() => setLanguage("pt")}
        className={cn(
          "px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
          language === "pt"
            ? "bg-primary text-secondary shadow-md"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        )}
        aria-label="Português"
      >
        <span>🇵🇹</span>
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5",
          language === "en"
            ? "bg-primary text-secondary shadow-md"
            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
        )}
        aria-label="English"
      >
        <span>🇬🇧</span>
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
