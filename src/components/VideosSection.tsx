import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface VideoItem {
  name: string;
  id: string;
  category?: string;
  gokyoGroup?: string;
}

const VideoThumbnail = ({ videoId, videoName }: { videoId: string; videoName: string }) => {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.includes("mqdefault")) {
      setImgSrc(`https://img.youtube.com/vi/${videoId}/default.jpg`);
    } else if (imgSrc.includes("default.jpg") && !hasError) {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <span className="text-2xl">🥋</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={videoName}
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      loading="lazy"
      onError={handleError}
    />
  );
};

const VideosSection = () => {
  const { language } = useLanguage();
  const [activeGokyoFilter, setActiveGokyoFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const content = {
    pt: {
      title: "Vídeos - Demonstrações Técnicas",
      warning: "É necessário ter acesso à internet para visualizar os vídeos. Ao clicar, você será redirecionado para o YouTube.",
      attention: "ATENÇÃO:",
      intro: "Playlist completa de vídeos demonstrativos das técnicas oficiais do Kodokan Judô, organizadas por categoria de técnica e grupo de Gokyo. Vídeos do Kodokan oficial e canais de referência mundial.",
      studyTips: "Dicas para Estudo por Vídeo",
      howToStudy: "Como Estudar",
      whatToObserve: "O que Observar",
      studyItems: [
        "Assista em velocidade reduzida (0.5x ou 0.25x)",
        "Pause para analisar posições-chave",
        "Compare com suas próprias gravações",
        "Foque em uma técnica por sessão de estudo",
      ],
      observeItems: [
        "Posição das mãos (kumi-kata)",
        "Direção do desequilíbrio (kuzushi)",
        "Momento da entrada (tsukuri)",
        "Finalização da técnica (kake)",
      ],
      categories: {
        teWaza: "Te-waza — Técnicas de Braço",
        koshiWaza: "Koshi-waza — Técnicas de Quadril",
        ashiWaza: "Ashi-waza — Técnicas de Perna",
        sutemiWaza: "Sutemi-waza — Técnicas de Sacrifício",
        osaekomiWaza: "Osaekomi-waza — Imobilizações",
        shimeWaza: "Shime-waza — Estrangulamentos",
        kansetsuWaza: "Kansetsu-waza — Chaves de Articulação",
        ukemi: "Ukemi — Técnicas de Queda",
      },
      searchPlaceholder: "Buscar técnica...",
    },
    en: {
      title: "Videos - Technical Demonstrations",
      warning: "Internet access is required to view the videos. Clicking will redirect you to YouTube.",
      attention: "ATTENTION:",
      intro: "Complete playlist of demonstration videos of official Kodokan Judo techniques, organized by technique category and Gokyo group. Videos from the official Kodokan and world reference channels.",
      studyTips: "Video Study Tips",
      howToStudy: "How to Study",
      whatToObserve: "What to Observe",
      studyItems: [
        "Watch at reduced speed (0.5x or 0.25x)",
        "Pause to analyze key positions",
        "Compare with your own recordings",
        "Focus on one technique per study session",
      ],
      observeItems: [
        "Hand position (kumi-kata)",
        "Direction of off-balance (kuzushi)",
        "Entry moment (tsukuri)",
        "Technique completion (kake)",
      ],
      categories: {
        teWaza: "Te-waza — Hand Techniques",
        koshiWaza: "Koshi-waza — Hip Techniques",
        ashiWaza: "Ashi-waza — Foot/Leg Techniques",
        sutemiWaza: "Sutemi-waza — Sacrifice Techniques",
        osaekomiWaza: "Osaekomi-waza — Pins",
        shimeWaza: "Shime-waza — Chokes",
        kansetsuWaza: "Kansetsu-waza — Joint Locks",
        ukemi: "Ukemi — Falling Techniques",
      },
      searchPlaceholder: "Search technique...",
    },
  };

  const t = content[language === "en" ? "en" : "pt"];

  const categoryInfo: Record<string, { color: string; textColor: string; emoji: string; icon: string; badge: string }> = {
    teWaza: { color: "bg-blue-600", textColor: "text-white", emoji: "🤲", icon: "手", badge: "Te" },
    koshiWaza: { color: "bg-purple-600", textColor: "text-white", emoji: "🔄", icon: "腰", badge: "Koshi" },
    ashiWaza: { color: "bg-green-600", textColor: "text-white", emoji: "🦶", icon: "足", badge: "Ashi" },
    sutemiWaza: { color: "bg-orange-500", textColor: "text-white", emoji: "⚡", icon: "捨", badge: "Sutemi" },
    osaekomiWaza: { color: "bg-red-600", textColor: "text-white", emoji: "🔒", icon: "固", badge: "Osae" },
    shimeWaza: { color: "bg-rose-700", textColor: "text-white", emoji: "🔗", icon: "絞", badge: "Shime" },
    kansetsuWaza: { color: "bg-amber-700", textColor: "text-white", emoji: "🔧", icon: "関", badge: "Kansetsu" },
    ukemi: { color: "bg-gray-600", textColor: "text-white", emoji: "🎬", icon: "受", badge: "Ukemi" },
  };

  const gokyoGroups = [
    { key: "all", label: language === 'pt' ? "Todos" : "All", color: "bg-primary" },
    { key: "ikkyo", label: "Ikkyo (1º)", color: "bg-yellow-500", textClass: "text-black" },
    { key: "nikyo", label: "Nikyo (2º)", color: "bg-orange-500" },
    { key: "sankyo", label: "Sankyo (3º)", color: "bg-green-600" },
    { key: "yonkyo", label: "Yonkyo (4º)", color: "bg-blue-600" },
    { key: "gokyo5", label: "Gokyo (5º)", color: "bg-amber-800" },
    { key: "extra", label: "Extra Gokyo", color: "bg-red-700" },
    { key: "katame", label: "Katame-waza", color: "bg-rose-700" },
    { key: "ukemi", label: "Ukemi", color: "bg-gray-600" },
  ];

  // Gokyo technique name mapping
  const gokyoTechniqueMap: Record<string, string> = {
    // Ikkyo
    "De-ashi-harai": "ikkyo", "Hiza-guruma": "ikkyo", "Sasae-tsurikomi-ashi": "ikkyo",
    "Uki-goshi": "ikkyo", "O-soto-gari": "ikkyo", "O-goshi": "ikkyo",
    "O-uchi-gari": "ikkyo", "Seoi-nage": "ikkyo",
    // Nikyo
    "Ko-soto-gari": "nikyo", "Ko-uchi-gari": "nikyo", "Koshi-guruma": "nikyo",
    "Tsurikomi-goshi": "nikyo", "Okuri-ashi-harai": "nikyo", "Tai-otoshi": "nikyo",
    "Harai-goshi": "nikyo", "Uchi-mata": "nikyo",
    // Sankyo
    "Ko-soto-gake": "sankyo", "Tsuri-goshi": "sankyo", "Yoko-otoshi": "sankyo",
    "Ashi-guruma": "sankyo", "Hane-goshi": "sankyo", "Harai-tsurikomi-ashi": "sankyo",
    "Tomoe-nage": "sankyo", "Kata-guruma": "sankyo",
    // Yonkyo
    "Sumi-gaeshi": "yonkyo", "Tani-otoshi": "yonkyo", "Hane-makikomi": "yonkyo",
    "Sukui-nage": "yonkyo", "Utsuri-goshi": "yonkyo", "O-guruma": "yonkyo",
    "Soto-makikomi": "yonkyo", "Uki-otoshi": "yonkyo",
    // Gokyo
    "O-soto-guruma": "gokyo5", "Uki-waza": "gokyo5", "Yoko-wakare": "gokyo5",
    "Yoko-guruma": "gokyo5", "Ushiro-goshi": "gokyo5", "Ura-nage": "gokyo5",
    "Sumi-otoshi": "gokyo5", "Yoko-gake": "gokyo5",
    // Extra Gokyo (Habukareta + Shinmeisho)
    "Obi-otoshi": "extra", "Hikikomi-gaeshi": "extra", "O-soto-otoshi": "extra",
    "Daki-wakare": "extra", "Tawara-gaeshi": "extra", "Seoi-otoshi": "extra",
    "Uchi-makikomi": "extra", "Yama-arashi": "extra",
    "Morote-gari": "extra", "Kuchiki-taoshi": "extra", "Kibisu-gaeshi": "extra",
    "Uchi-mata-sukashi": "extra", "Ko-uchi-gaeshi": "extra", "Obi-tori-gaeshi": "extra",
    "Sode-tsurikomi-goshi": "extra", "Ippon-seoi-nage": "extra",
    "Tsubame-gaeshi": "extra", "O-soto-gaeshi": "extra", "O-uchi-gaeshi": "extra",
    "Hane-goshi-gaeshi": "extra", "Harai-goshi-gaeshi": "extra", "Uchi-mata-gaeshi": "extra",
    "Kani-basami": "extra", "Kawazu-gake": "extra",
    "O-soto-makikomi": "extra", "Uchi-mata-makikomi": "extra", "Harai-makikomi": "extra",
    "Ko-uchi-makikomi": "extra",
  };

  const getGokyoGroup = (name: string): string => {
    return gokyoTechniqueMap[name] || "";
  };

  // === NAGE-WAZA: Te-waza ===
  const teWazaVideos: VideoItem[] = [
    { name: "Seoi-nage", id: "zIq0xI0ogxk", category: "teWaza" },
    { name: "Ippon-seoi-nage", id: "FQnOlCxo4oI", category: "teWaza" },
    { name: "Seoi-otoshi", id: "vu1TMVNnq34", category: "teWaza" },
    { name: "Tai-otoshi", id: "4x6S3Q-Ktv8", category: "teWaza" },
    { name: "Kata-guruma", id: "cnHRhSy8yi4", category: "teWaza" },
    { name: "Sukui-nage", id: "vU6aJ2kFxoI", category: "teWaza" },
    { name: "Obi-otoshi", id: "ff8U2TVZIYI", category: "teWaza" },
    { name: "Uki-otoshi", id: "6H5tmncOY4Q", category: "teWaza" },
    { name: "Sumi-otoshi", id: "lLU9wv52ni0", category: "teWaza" },
    { name: "Yama-arashi", id: "MGlyKmSuzdc", category: "teWaza" },
    { name: "Obi-tori-gaeshi", id: "bpc82SrunUU", category: "teWaza" },
    { name: "Morote-gari", id: "BHLQS4K85bs", category: "teWaza" },
    { name: "Kuchiki-taoshi", id: "ZNL47q1aJNY", category: "teWaza" },
    { name: "Kibisu-gaeshi", id: "tJylJYfBliA", category: "teWaza" },
    { name: "Uchi-mata-sukashi", id: "V-RS3uhtVWM", category: "teWaza" },
    { name: "Ko-uchi-gaeshi", id: "_MWAdYi_LC4", category: "teWaza" },
  ];

  const koshiWazaVideos: VideoItem[] = [
    { name: "Uki-goshi", id: "bPKwtB4lyOQ", category: "koshiWaza" },
    { name: "O-goshi", id: "yhu1mfy2vJ4", category: "koshiWaza" },
    { name: "Koshi-guruma", id: "SU7Id6uVJ44", category: "koshiWaza" },
    { name: "Tsurikomi-goshi", id: "McfzA0yRVt4", category: "koshiWaza" },
    { name: "Sode-tsurikomi-goshi", id: "QsmAxpmYLOI", category: "koshiWaza" },
    { name: "Harai-goshi", id: "qTo8HlAAkOo", category: "koshiWaza" },
    { name: "Tsuri-goshi", id: "51Htlp7xEvE", category: "koshiWaza" },
    { name: "Hane-goshi", id: "M9_7De6A1kk", category: "koshiWaza" },
    { name: "Utsuri-goshi", id: "4pQd_bEnlf0", category: "koshiWaza" },
    { name: "Ushiro-goshi", id: "ORIYstuxYT8", category: "koshiWaza" },
  ];

  const ashiWazaVideos: VideoItem[] = [
    { name: "De-ashi-harai", id: "4BUUvqxi_Kk", category: "ashiWaza" },
    { name: "Hiza-guruma", id: "JPJx9-oAVns", category: "ashiWaza" },
    { name: "Sasae-tsurikomi-ashi", id: "699i--pvYmE", category: "ashiWaza" },
    { name: "O-soto-gari", id: "c-A_nP7mKAc", category: "ashiWaza" },
    { name: "O-uchi-gari", id: "0itJFhV9pDQ", category: "ashiWaza" },
    { name: "Ko-soto-gari", id: "jeQ541ScLB4", category: "ashiWaza" },
    { name: "Ko-uchi-gari", id: "3Jb3tZvr9Ng", category: "ashiWaza" },
    { name: "Okuri-ashi-harai", id: "nw1ZdRjrdRI", category: "ashiWaza" },
    { name: "Uchi-mata", id: "iUpSu5J-bgw", category: "ashiWaza" },
    { name: "Ko-soto-gake", id: "8b6kY4s4zH4", category: "ashiWaza" },
    { name: "Ashi-guruma", id: "ROeayhvom9U", category: "ashiWaza" },
    { name: "Harai-tsurikomi-ashi", id: "gGPXvWL8VbE", category: "ashiWaza" },
    { name: "O-guruma", id: "SnZciTAY9vc", category: "ashiWaza" },
    { name: "O-soto-guruma", id: "92KbCm6pQeI", category: "ashiWaza" },
    { name: "O-soto-otoshi", id: "2DsVvDw7b8g", category: "ashiWaza" },
    { name: "Tsubame-gaeshi", id: "GwweWqqFB5g", category: "ashiWaza" },
    { name: "O-soto-gaeshi", id: "8ZjM3X_EANo", category: "ashiWaza" },
    { name: "O-uchi-gaeshi", id: "dCyZTXyjIXE", category: "ashiWaza" },
    { name: "Hane-goshi-gaeshi", id: "9bZAZSBtnGs", category: "ashiWaza" },
    { name: "Harai-goshi-gaeshi", id: "4U3It-7PPsc", category: "ashiWaza" },
    { name: "Uchi-mata-gaeshi", id: "Sy6sLWxkWYw", category: "ashiWaza" },
  ];

  const sutemiWazaVideos: VideoItem[] = [
    { name: "Tomoe-nage", id: "880WbHvHv6A", category: "sutemiWaza" },
    { name: "Sumi-gaeshi", id: "5VhduA5xkbA", category: "sutemiWaza" },
    { name: "Hikikomi-gaeshi", id: "92zUYWBp5N8", category: "sutemiWaza" },
    { name: "Tawara-gaeshi", id: "TmTWgrmViZc", category: "sutemiWaza" },
    { name: "Ura-nage", id: "Fgi9b8DJ5sQ", category: "sutemiWaza" },
    { name: "Yoko-otoshi", id: "MnNG67pF_a0", category: "sutemiWaza" },
    { name: "Tani-otoshi", id: "3b9Me3Fohpk", category: "sutemiWaza" },
    { name: "Hane-makikomi", id: "6CRBGLGz9j8", category: "sutemiWaza" },
    { name: "Soto-makikomi", id: "bWG9O1BVKtQ", category: "sutemiWaza" },
    { name: "Uchi-makikomi", id: "5BowcjduxVc", category: "sutemiWaza" },
    { name: "Uki-waza", id: "weVOpJ63gII", category: "sutemiWaza" },
    { name: "Yoko-wakare", id: "bp1tscHlePI", category: "sutemiWaza" },
    { name: "Yoko-guruma", id: "MehP6I5cY2c", category: "sutemiWaza" },
    { name: "Yoko-gake", id: "tP1Sj1uDfSo", category: "sutemiWaza" },
    { name: "Daki-wakare", id: "Hr0cOMGBDYo", category: "sutemiWaza" },
    { name: "O-soto-makikomi", id: "DGDv2oMwmas", category: "sutemiWaza" },
    { name: "Uchi-mata-makikomi", id: "jZXENTLpJCI", category: "sutemiWaza" },
    { name: "Harai-makikomi", id: "VBaHzKaCXss", category: "sutemiWaza" },
    { name: "Ko-uchi-makikomi", id: "_1eygIXLD_w", category: "sutemiWaza" },
    { name: "Kani-basami", id: "OR-HGHnarYc", category: "sutemiWaza" },
    { name: "Kawazu-gake", id: "w6G57bWACi0", category: "sutemiWaza" },
  ];

  const osaekomiWazaVideos: VideoItem[] = [
    { name: "Kesa-gatame", id: "NDaQuJOFBYk", category: "osaekomiWaza" },
    { name: "Kuzure-kesa-gatame", id: "Q2fb9jaoUFQ", category: "osaekomiWaza" },
    { name: "Ushiro-kesa-gatame", id: "SBapox2M2dE", category: "osaekomiWaza" },
    { name: "Kata-gatame", id: "zQR3IOXxO_Q", category: "osaekomiWaza" },
    { name: "Kami-shiho-gatame", id: "HFuMjOv0WN8", category: "osaekomiWaza" },
    { name: "Kuzure-kami-shiho-gatame", id: "YUrogQWdwiY", category: "osaekomiWaza" },
    { name: "Yoko-shiho-gatame", id: "TT7XJVSEQxA", category: "osaekomiWaza" },
    { name: "Tate-shiho-gatame", id: "55-rFmBx53g", category: "osaekomiWaza" },
    { name: "Uki-gatame", id: "e_lAjik1SUM", category: "osaekomiWaza" },
    { name: "Ura-gatame", id: "eeAHZB0v3XY", category: "osaekomiWaza" },
  ];

  const shimeWazaVideos: VideoItem[] = [
    { name: "Nami-juji-jime", id: "k2cHry9HByQ", category: "shimeWaza" },
    { name: "Gyaku-juji-jime", id: "t3tQriIPdlI", category: "shimeWaza" },
    { name: "Kata-juji-jime", id: "3VZVUAmiMD8", category: "shimeWaza" },
    { name: "Hadaka-jime", id: "9f0n8jez7iA", category: "shimeWaza" },
    { name: "Okuri-eri-jime", id: "EiqyoVcIAi8", category: "shimeWaza" },
    { name: "Kata-ha-jime", id: "yaTGgRjnwB8", category: "shimeWaza" },
    { name: "Katate-jime", id: "cHeIs-fSqwE", category: "shimeWaza" },
    { name: "Ryote-jime", id: "-RHC4V7TQiY", category: "shimeWaza" },
    { name: "Sode-guruma-jime", id: "E3nvQzClcAU", category: "shimeWaza" },
    { name: "Tsukkomi-jime", id: "dKKpnD3eLcY", category: "shimeWaza" },
    { name: "Sankaku-jime", id: "lq1CUBRAm7s", category: "shimeWaza" },
    { name: "Do-jime", id: "D_0fFcoIbvY", category: "shimeWaza" },
  ];

  const kansetsuWazaVideos: VideoItem[] = [
    { name: "Ude-garami", id: "AIlTvZb4RlE", category: "kansetsuWaza" },
    { name: "Ude-hishigi-juji-gatame", id: "OWgSOlCuMXw", category: "kansetsuWaza" },
    { name: "Ude-hishigi-ude-gatame", id: "SBf0aTma1VI", category: "kansetsuWaza" },
    { name: "Ude-hishigi-hiza-gatame", id: "H2HtAJdiJcE", category: "kansetsuWaza" },
    { name: "Ude-hishigi-waki-gatame", id: "8F5p1zuJRG0", category: "kansetsuWaza" },
    { name: "Ude-hishigi-hara-gatame", id: "ZzEycg8R_9M", category: "kansetsuWaza" },
    { name: "Ude-hishigi-ashi-gatame", id: "ClY7g_pX-4s", category: "kansetsuWaza" },
    { name: "Ude-hishigi-te-gatame", id: "6DnvhY0tQVM", category: "kansetsuWaza" },
    { name: "Ude-hishigi-sankaku-gatame", id: "WefAmW4azhk", category: "kansetsuWaza" },
    { name: "Ashi-garami", id: "BWWb0GoAtZw", category: "kansetsuWaza" },
  ];

  const ukemiVideos: VideoItem[] = [
    { name: "Ushiro-ukemi", id: "VoktcQAxEPg&t=21s", category: "ukemi" },
    { name: "Yoko-ukemi", id: "VoktcQAxEPg&t=55s", category: "ukemi" },
    { name: "Mae-ukemi", id: "VoktcQAxEPg&t=1m31s", category: "ukemi" },
    { name: "Mae-mawari-ukemi", id: "VoktcQAxEPg&t=1m43s", category: "ukemi" },
    { name: "Ukemi Completo", id: "VoktcQAxEPg", category: "ukemi" },
  ];

  const videoCategories = [
    { key: "teWaza", title: t.categories.teWaza, videos: teWazaVideos },
    { key: "koshiWaza", title: t.categories.koshiWaza, videos: koshiWazaVideos },
    { key: "ashiWaza", title: t.categories.ashiWaza, videos: ashiWazaVideos },
    { key: "sutemiWaza", title: t.categories.sutemiWaza, videos: sutemiWazaVideos },
    { key: "osaekomiWaza", title: t.categories.osaekomiWaza, videos: osaekomiWazaVideos },
    { key: "shimeWaza", title: t.categories.shimeWaza, videos: shimeWazaVideos },
    { key: "kansetsuWaza", title: t.categories.kansetsuWaza, videos: kansetsuWazaVideos },
    { key: "ukemi", title: t.categories.ukemi, videos: ukemiVideos },
  ];

  const filteredCategories = useMemo(() => {
    return videoCategories.map(cat => {
      let filteredVideos = cat.videos;

      // Filter by gokyo group
      if (activeGokyoFilter !== "all") {
        if (activeGokyoFilter === "katame") {
          // Show only katame-waza categories
          if (!["osaekomiWaza", "shimeWaza", "kansetsuWaza"].includes(cat.key)) {
            return { ...cat, videos: [] };
          }
        } else if (activeGokyoFilter === "ukemi") {
          if (cat.key !== "ukemi") return { ...cat, videos: [] };
        } else {
          // Filter nage-waza by gokyo group
          if (["osaekomiWaza", "shimeWaza", "kansetsuWaza", "ukemi"].includes(cat.key)) {
            return { ...cat, videos: [] };
          }
          filteredVideos = filteredVideos.filter(v => getGokyoGroup(v.name) === activeGokyoFilter);
        }
      }

      // Filter by search
      if (searchQuery.length >= 2) {
        const q = searchQuery.toLowerCase();
        filteredVideos = filteredVideos.filter(v => v.name.toLowerCase().includes(q));
      }

      return { ...cat, videos: filteredVideos };
    }).filter(cat => cat.videos.length > 0);
  }, [activeGokyoFilter, searchQuery, videoCategories]);

  const getGokyoBadge = (videoName: string) => {
    const group = getGokyoGroup(videoName);
    const groupMap: Record<string, { label: string; color: string; textClass?: string }> = {
      ikkyo: { label: "1º", color: "bg-yellow-500", textClass: "text-black" },
      nikyo: { label: "2º", color: "bg-orange-500" },
      sankyo: { label: "3º", color: "bg-green-600" },
      yonkyo: { label: "4º", color: "bg-blue-600" },
      gokyo5: { label: "5º", color: "bg-amber-800" },
      extra: { label: "Extra", color: "bg-red-700" },
    };
    return groupMap[group] || null;
  };

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">映</span>
        {t.title}
      </h2>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="search-input pr-10 text-sm"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
      </div>

      {/* Gokyo Group Filter */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
          {language === 'pt' ? 'Filtrar por Grupo' : 'Filter by Group'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {gokyoGroups.map(g => (
            <button
              key={g.key}
              onClick={() => setActiveGokyoFilter(g.key)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border",
                activeGokyoFilter === g.key
                  ? `${g.color} border-transparent text-white ${g.textClass || ''}`
                  : "bg-card border-primary/20 text-muted-foreground hover:border-primary/40"
              )}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Legend */}
      <div className="card-judo mb-6 p-4">
        <h3 className="text-sm font-semibold text-primary mb-3">
          🎯 {language === "en" ? "Categories by Technique Type" : "Categorias por Tipo de Técnica"}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.entries(categoryInfo)
            .filter(([key]) => key !== "ukemi")
            .map(([key, info]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full ${info.color} flex items-center justify-center text-[10px] text-white font-bold`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-medium text-white">{info.badge}-waza</p>
                  <p className="text-[10px] text-foreground/60">
                    {videoCategories.find((c) => c.key === key)?.videos.length}{" "}
                    {language === "en" ? "techniques" : "técnicas"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="card-red p-4 mb-8">
        <p className="text-sm text-foreground/80 flex items-center gap-2">
          <span>⚠️</span>
          <strong>{t.attention}</strong> {t.warning}
        </p>
      </div>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">{t.intro}</p>
      </div>

      {filteredCategories.map((category) => {
        const info = categoryInfo[category.key];
        return (
          <div key={category.key} className="mb-10">
            <h3 className="text-lg font-semibold flex items-center gap-3 mb-4">
              <span className={`w-7 h-7 rounded flex items-center justify-center text-xs text-white font-bold ${info.color}`}>
                {info.icon}
              </span>
              <span className="text-primary">{category.title}</span>
              <Badge variant="secondary" className="text-[10px] ml-1">
                {category.videos.length}
              </Badge>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.videos.map((video, index) => {
                const gokyoBadge = getGokyoBadge(video.name);
                return (
                  <a
                    key={index}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-judo group overflow-hidden p-0 hover:border-primary transition-colors"
                  >
                    <div className="relative aspect-video bg-background/50">
                      <VideoThumbnail videoId={video.id} videoName={video.name} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-white text-sm ml-0.5">▶</span>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`absolute top-1 right-1 text-[10px] px-1.5 py-0.5 ${info.color} ${info.textColor}`}
                      >
                        {info.badge}
                      </Badge>
                      {gokyoBadge && (
                        <Badge
                          className={`absolute top-1 left-1 text-[10px] px-1.5 py-0.5 ${gokyoBadge.color} ${gokyoBadge.textClass || 'text-white'} border-0`}
                        >
                          {gokyoBadge.label}
                        </Badge>
                      )}
                    </div>
                    <div className="p-2 text-center">
                      <p className="text-xs font-medium text-white group-hover:text-primary transition-colors truncate">
                        {video.name}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {language === 'pt' ? 'Nenhum vídeo encontrado.' : 'No videos found.'}
          </p>
        </div>
      )}

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10">
        <span>💡</span> {t.studyTips}
      </h3>
      <div className="card-judo">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-white mb-2">{t.howToStudy}</h4>
            <ul className="space-y-1 text-sm text-foreground/70">
              {t.studyItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">{t.whatToObserve}</h4>
            <ul className="space-y-1 text-sm text-foreground/70">
              {t.observeItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
