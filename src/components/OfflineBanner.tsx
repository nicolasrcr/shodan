import { WifiOff } from "lucide-react";
import { useOfflineStatus } from "@/hooks/useOfflineStatus";
import { useLanguage } from "@/contexts/LanguageContext";

const OfflineBanner = () => {
  const isOffline = useOfflineStatus();
  const { language } = useLanguage();

  if (!isOffline) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] bg-destructive text-destructive-foreground px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium animate-in slide-in-from-bottom-4">
      <WifiOff className="w-4 h-4" />
      {language === "pt" ? "Você está offline" : "You are offline"}
    </div>
  );
};

export default OfflineBanner;
