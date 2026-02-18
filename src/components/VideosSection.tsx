import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';

interface VideoItem {
  name: string;
  id: string;
  category: string;
}

const VideoThumbnail = ({ videoId, videoName }: { videoId: string; videoName: string }) => {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.includes('mqdefault')) {
      setImgSrc(`https://img.youtube.com/vi/${videoId}/default.jpg`);
    } else if (imgSrc.includes('default.jpg') && !hasError) {
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
    <img src={imgSrc} alt={videoName} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" onError={handleError} />
  );
};

const CATEGORY_INFO: Record<string, { color: string; textColor: string; emoji: string; icon: string; badge: string }> = {
  teWaza: { color: 'bg-blue-600', textColor: 'text-white', emoji: '🤲', icon: '手', badge: 'Te' },
  koshiWaza: { color: 'bg-purple-600', textColor: 'text-white', emoji: '🔄', icon: '腰', badge: 'Koshi' },
  ashiWaza: { color: 'bg-green-600', textColor: 'text-white', emoji: '🦶', icon: '足', badge: 'Ashi' },
  sutemiWaza: { color: 'bg-orange-500', textColor: 'text-white', emoji: '⚡', icon: '捨', badge: 'Sutemi' },
  osaekomiWaza: { color: 'bg-red-600', textColor: 'text-white', emoji: '🔒', icon: '固', badge: 'Osae' },
  shimeWaza: { color: 'bg-rose-700', textColor: 'text-white', emoji: '🔗', icon: '絞', badge: 'Shime' },
  kansetsuWaza: { color: 'bg-amber-700', textColor: 'text-white', emoji: '🔧', icon: '関', badge: 'Kansetsu' },
  ukemi: { color: 'bg-gray-600', textColor: 'text-white', emoji: '🎬', icon: '受', badge: 'Ukemi' },
};

const ALL_VIDEOS: VideoItem[] = [
  // Te-waza (16)
  { name: 'Seoi-nage', id: 'zIq0xI0ogxk', category: 'teWaza' },
  { name: 'Ippon-seoi-nage', id: 'FQnOlCxo4oI', category: 'teWaza' },
  { name: 'Seoi-otoshi', id: 'vu1TMVNnq34', category: 'teWaza' },
  { name: 'Tai-otoshi', id: '4x6S3Q-Ktv8', category: 'teWaza' },
  { name: 'Kata-guruma', id: 'cnHRhSy8yi4', category: 'teWaza' },
  { name: 'Sukui-nage', id: 'vU6aJ2kFxoI', category: 'teWaza' },
  { name: 'Obi-otoshi', id: 'ff8U2TVZIYI', category: 'teWaza' },
  { name: 'Uki-otoshi', id: '6H5tmncOY4Q', category: 'teWaza' },
  { name: 'Sumi-otoshi', id: 'lLU9wv52ni0', category: 'teWaza' },
  { name: 'Yama-arashi', id: 'MGlyKmSuzdc', category: 'teWaza' },
  { name: 'Obi-tori-gaeshi', id: 'bpc82SrunUU', category: 'teWaza' },
  { name: 'Morote-gari', id: 'BHLQS4K85bs', category: 'teWaza' },
  { name: 'Kuchiki-taoshi', id: 'ZNL47q1aJNY', category: 'teWaza' },
  { name: 'Kibisu-gaeshi', id: 'tJylJYfBliA', category: 'teWaza' },
  { name: 'Uchi-mata-sukashi', id: 'V-RS3uhtVWM', category: 'teWaza' },
  { name: 'Ko-uchi-gaeshi', id: '_MWAdYi_LC4', category: 'teWaza' },
  // Koshi-waza (10)
  { name: 'Uki-goshi', id: 'bPKwtB4lyOQ', category: 'koshiWaza' },
  { name: 'O-goshi', id: 'yhu1mfy2vJ4', category: 'koshiWaza' },
  { name: 'Koshi-guruma', id: 'SU7Id6uVJ44', category: 'koshiWaza' },
  { name: 'Tsurikomi-goshi', id: 'McfzA0yRVt4', category: 'koshiWaza' },
  { name: 'Sode-tsurikomi-goshi', id: 'QsmAxpmYLOI', category: 'koshiWaza' },
  { name: 'Harai-goshi', id: 'qTo8HlAAkOo', category: 'koshiWaza' },
  { name: 'Tsuri-goshi', id: '51Htlp7xEvE', category: 'koshiWaza' },
  { name: 'Hane-goshi', id: 'M9_7De6A1kk', category: 'koshiWaza' },
  { name: 'Utsuri-goshi', id: '4pQd_bEnlf0', category: 'koshiWaza' },
  { name: 'Ushiro-goshi', id: 'ORIYstuxYT8', category: 'koshiWaza' },
  // Ashi-waza (21)
  { name: 'De-ashi-harai', id: '4BUUvqxi_Kk', category: 'ashiWaza' },
  { name: 'Hiza-guruma', id: 'JPJx9-oAVns', category: 'ashiWaza' },
  { name: 'Sasae-tsurikomi-ashi', id: 'z3bP4l4Ofhg', category: 'ashiWaza' },
  { name: 'O-soto-gari', id: 'c-A_nP7mKAc', category: 'ashiWaza' },
  { name: 'O-uchi-gari', id: '0itJFhV9pDQ', category: 'ashiWaza' },
  { name: 'Ko-soto-gari', id: 'jeQ541ScLB4', category: 'ashiWaza' },
  { name: 'Ko-uchi-gari', id: '3Jb3tZvr9Ng', category: 'ashiWaza' },
  { name: 'Okuri-ashi-harai', id: 'nw1ZdRjrdRI', category: 'ashiWaza' },
  { name: 'Uchi-mata', id: 'iUpSu5J-bgw', category: 'ashiWaza' },
  { name: 'Ko-soto-gake', id: '8b6kY4s4zH4', category: 'ashiWaza' },
  { name: 'Ashi-guruma', id: 'ROeayhvom9U', category: 'ashiWaza' },
  { name: 'Harai-tsurikomi-ashi', id: 'gGPXvWL8VbE', category: 'ashiWaza' },
  { name: 'O-guruma', id: 'SnZciTAY9vc', category: 'ashiWaza' },
  { name: 'O-soto-guruma', id: '92KbCm6pQeI', category: 'ashiWaza' },
  { name: 'O-soto-otoshi', id: '2DsVvDw7b8g', category: 'ashiWaza' },
  { name: 'Tsubame-gaeshi', id: 'GwweWqqFB5g', category: 'ashiWaza' },
  { name: 'O-soto-gaeshi', id: '8ZjM3X_EANo', category: 'ashiWaza' },
  { name: 'O-uchi-gaeshi', id: 'dCyZTXyjIXE', category: 'ashiWaza' },
  { name: 'Hane-goshi-gaeshi', id: '9bZAZSBtnGs', category: 'ashiWaza' },
  { name: 'Harai-goshi-gaeshi', id: '4U3It-7PPsc', category: 'ashiWaza' },
  { name: 'Uchi-mata-gaeshi', id: 'Sy6sLWxkWYw', category: 'ashiWaza' },
  // Sutemi-waza (20)
  { name: 'Tomoe-nage', id: '880WbHvHv6A', category: 'sutemiWaza' },
  { name: 'Sumi-gaeshi', id: '5VhduA5xkbA', category: 'sutemiWaza' },
  { name: 'Hikikomi-gaeshi', id: '92zUYWBp5N8', category: 'sutemiWaza' },
  { name: 'Tawara-gaeshi', id: 'TmTWgrmViZc', category: 'sutemiWaza' },
  { name: 'Ura-nage', id: 'Fgi9b8DJ5sQ', category: 'sutemiWaza' },
  { name: 'Yoko-otoshi', id: 'MnNG67pF_a0', category: 'sutemiWaza' },
  { name: 'Tani-otoshi', id: '3b9Me3Fohpk', category: 'sutemiWaza' },
  { name: 'Hane-makikomi', id: '6CRBGLGz9j8', category: 'sutemiWaza' },
  { name: 'Soto-makikomi', id: 'bWG9O1BVKtQ', category: 'sutemiWaza' },
  { name: 'Uki-waza', id: 'weVOpJ63gII', category: 'sutemiWaza' },
  { name: 'Yoko-wakare', id: 'bp1tscHlePI', category: 'sutemiWaza' },
  { name: 'Yoko-guruma', id: 'MehP6I5cY2c', category: 'sutemiWaza' },
  { name: 'Yoko-gake', id: 'tP1Sj1uDfSo', category: 'sutemiWaza' },
  { name: 'Daki-wakare', id: 'Hr0cOMGBDYo', category: 'sutemiWaza' },
  { name: 'O-soto-makikomi', id: 'DGDv2oMwmas', category: 'sutemiWaza' },
  { name: 'Uchi-mata-makikomi', id: 'jZXENTLpJCI', category: 'sutemiWaza' },
  { name: 'Harai-makikomi', id: 'VBaHzKaCXss', category: 'sutemiWaza' },
  { name: 'Ko-uchi-makikomi', id: '_1eygIXLD_w', category: 'sutemiWaza' },
  { name: 'Kani-basami', id: 'OR-HGHnarYc', category: 'sutemiWaza' },
  { name: 'Kawazu-gake', id: 'w6G57bWACi0', category: 'sutemiWaza' },
  // Osaekomi-waza (10)
  { name: 'Kesa-gatame', id: 'KbjpU3bBrzw', category: 'osaekomiWaza' },
  { name: 'Kuzure-kesa-gatame', id: 'XEJL1VvREfY', category: 'osaekomiWaza' },
  { name: 'Ushiro-kesa-gatame', id: '3FRW5DBR3WE', category: 'osaekomiWaza' },
  { name: 'Kata-gatame', id: 'hqb4f5PJRZ4', category: 'osaekomiWaza' },
  { name: 'Kami-shiho-gatame', id: 'jQu8x4dosJk', category: 'osaekomiWaza' },
  { name: 'Kuzure-kami-shiho-gatame', id: 'DkYN1BYEyIE', category: 'osaekomiWaza' },
  { name: 'Yoko-shiho-gatame', id: '4UqGhU1MjnI', category: 'osaekomiWaza' },
  { name: 'Tate-shiho-gatame', id: 'ixMlMbyeBKU', category: 'osaekomiWaza' },
  { name: 'Uki-gatame', id: 'PGZ2e2gsDgA', category: 'osaekomiWaza' },
  { name: 'Ura-gatame', id: '4HiK1laG28A', category: 'osaekomiWaza' },
  // Shime-waza (12)
  { name: 'Nami-juji-jime', id: 'q6a6v9GMnWg', category: 'shimeWaza' },
  { name: 'Gyaku-juji-jime', id: 'GwFKxPBi5f4', category: 'shimeWaza' },
  { name: 'Kata-juji-jime', id: 'IpVtCN-8NYc', category: 'shimeWaza' },
  { name: 'Hadaka-jime', id: 'wAZKLeHJjZ8', category: 'shimeWaza' },
  { name: 'Okuri-eri-jime', id: 'T1UGna5MWIM', category: 'shimeWaza' },
  { name: 'Kata-ha-jime', id: 'kH5s_S8k3GI', category: 'shimeWaza' },
  { name: 'Katate-jime', id: 'PNE-FMMVfuw', category: 'shimeWaza' },
  { name: 'Ryote-jime', id: 'g2mMI2Vz2yE', category: 'shimeWaza' },
  { name: 'Sode-guruma-jime', id: 'S4I-dKJif_U', category: 'shimeWaza' },
  { name: 'Tsukkomi-jime', id: 'Yn_P1YYSGWA', category: 'shimeWaza' },
  { name: 'Sankaku-jime', id: 'hPbkW85PnB0', category: 'shimeWaza' },
  { name: 'Do-jime', id: 'Cd8G7GiRBiw', category: 'shimeWaza' },
  // Kansetsu-waza (10)
  { name: 'Ude-garami', id: 'itvCm51BGPY', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-juji-gatame', id: 'POXoGorkfN4', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-ude-gatame', id: '2i7VMKak5mQ', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-hiza-gatame', id: 'kF3ERbawmB4', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-waki-gatame', id: 'ZLc2G1bLSVk', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-hara-gatame', id: 'xGqm3mfqSxg', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-ashi-gatame', id: 'MvfWOmm-FxA', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-te-gatame', id: 'QxbhCiht5x0', category: 'kansetsuWaza' },
  { name: 'Ude-hishigi-sankaku-gatame', id: 'QS6ifr05Fkk', category: 'kansetsuWaza' },
  { name: 'Ashi-garami', id: 'yXs5YV8pF6A', category: 'kansetsuWaza' },
  // Ukemi (5)
  { name: 'Ushiro-ukemi', id: 'u4oHFVznIVY', category: 'ukemi' },
  { name: 'Yoko-ukemi', id: 'KJFr5FINMIM', category: 'ukemi' },
  { name: 'Mae-ukemi', id: 'ukSj8JM8cvI', category: 'ukemi' },
  { name: 'Zenpo-kaiten-ukemi', id: 'BvFpMr1Insw', category: 'ukemi' },
  { name: 'Ukemi Completo', id: 'VoktcQAxEPg', category: 'ukemi' },
];

const CATEGORY_KEYS = ['teWaza', 'koshiWaza', 'ashiWaza', 'sutemiWaza', 'osaekomiWaza', 'shimeWaza', 'kansetsuWaza', 'ukemi'] as const;

const VideosSection = () => {
  const { language } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const content = {
    pt: {
      title: 'Vídeos - Demonstrações Técnicas',
      warning: 'É necessário ter acesso à internet para visualizar os vídeos. Ao clicar, você será redirecionado para o YouTube.',
      attention: 'ATENÇÃO:',
      intro: 'Playlist completa de vídeos demonstrativos das 100 técnicas oficiais do Kodokan Judô, organizadas por categoria de técnica.',
      searchPlaceholder: 'Buscar técnica por nome... (ex: seoi-nage)',
      totalVideos: 'vídeos',
      noResults: 'Nenhuma técnica encontrada. Tente outro termo.',
      studyTips: 'Dicas para Estudo por Vídeo',
      howToStudy: 'Como Estudar',
      whatToObserve: 'O que Observar',
      studyItems: ['Assista em velocidade reduzida (0.5x ou 0.25x)', 'Pause para analisar posições-chave', 'Compare com suas próprias gravações', 'Foque em uma técnica por sessão de estudo'],
      observeItems: ['Posição das mãos (kumi-kata)', 'Direção do desequilíbrio (kuzushi)', 'Momento da entrada (tsukuri)', 'Finalização da técnica (kake)'],
      categories: {
        teWaza: 'Te-waza — Técnicas de Braço',
        koshiWaza: 'Koshi-waza — Técnicas de Quadril',
        ashiWaza: 'Ashi-waza — Técnicas de Perna',
        sutemiWaza: 'Sutemi-waza — Técnicas de Sacrifício',
        osaekomiWaza: 'Osaekomi-waza — Imobilizações',
        shimeWaza: 'Shime-waza — Estrangulamentos',
        kansetsuWaza: 'Kansetsu-waza — Chaves de Articulação',
        ukemi: 'Ukemi — Técnicas de Queda',
      },
      allCategories: 'Todas',
    },
    en: {
      title: 'Videos - Technical Demonstrations',
      warning: 'Internet access is required to view the videos. Clicking will redirect you to YouTube.',
      attention: 'ATTENTION:',
      intro: 'Complete playlist of demonstration videos of all 100 official Kodokan Judo techniques, organized by technique category.',
      searchPlaceholder: 'Search technique by name... (e.g. seoi-nage)',
      totalVideos: 'videos',
      noResults: 'No techniques found. Try another term.',
      studyTips: 'Video Study Tips',
      howToStudy: 'How to Study',
      whatToObserve: 'What to Observe',
      studyItems: ['Watch at reduced speed (0.5x or 0.25x)', 'Pause to analyze key positions', 'Compare with your own recordings', 'Focus on one technique per study session'],
      observeItems: ['Hand position (kumi-kata)', 'Direction of off-balance (kuzushi)', 'Entry moment (tsukuri)', 'Technique completion (kake)'],
      categories: {
        teWaza: 'Te-waza — Hand Techniques',
        koshiWaza: 'Koshi-waza — Hip Techniques',
        ashiWaza: 'Ashi-waza — Foot/Leg Techniques',
        sutemiWaza: 'Sutemi-waza — Sacrifice Techniques',
        osaekomiWaza: 'Osaekomi-waza — Pins',
        shimeWaza: 'Shime-waza — Chokes',
        kansetsuWaza: 'Kansetsu-waza — Joint Locks',
        ukemi: 'Ukemi — Falling Techniques',
      },
      allCategories: 'All',
    }
  };

  const t = content[language === 'en' ? 'en' : 'pt'];

  const filteredVideos = useMemo(() => {
    let videos = ALL_VIDEOS;
    if (activeFilter) {
      videos = videos.filter(v => v.category === activeFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      videos = videos.filter(v => v.name.toLowerCase().includes(q));
    }
    return videos;
  }, [search, activeFilter]);

  const groupedVideos = useMemo(() => {
    const groups: Record<string, VideoItem[]> = {};
    for (const key of CATEGORY_KEYS) {
      const vids = filteredVideos.filter(v => v.category === key);
      if (vids.length > 0) groups[key] = vids;
    }
    return groups;
  }, [filteredVideos]);

  const totalCount = filteredVideos.length;

  return (
    <div className="animate-fade-in">
      <h2 className="section-title"><span className="section-title-icon">映</span>{t.title}</h2>

      {/* Search & Filter Bar */}
      <div className="card-judo mb-6 p-4 space-y-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">🔍</span>
          <Input
            type="text"
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 bg-background/50 border-border/50 text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeFilter === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
            }`}
          >
            {t.allCategories} ({ALL_VIDEOS.length})
          </button>
          {CATEGORY_KEYS.map(key => {
            const info = CATEGORY_INFO[key];
            const count = ALL_VIDEOS.filter(v => v.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(activeFilter === key ? null : key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeFilter === key
                    ? `${info.color} ${info.textColor}`
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                }`}
              >
                <span className="text-[10px]">{info.icon}</span>
                {info.badge} ({count})
              </button>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground">
          {totalCount} {t.totalVideos} {(search || activeFilter) ? (language === 'pt' ? 'encontrados' : 'found') : ''}
        </p>
      </div>

      <div className="card-red p-4 mb-8">
        <p className="text-sm text-foreground/80 flex items-center gap-2"><span>⚠️</span><strong>{t.attention}</strong> {t.warning}</p>
      </div>

      {totalCount === 0 ? (
        <div className="card-judo p-8 text-center">
          <span className="text-4xl mb-3 block">🔎</span>
          <p className="text-sm text-muted-foreground">{t.noResults}</p>
        </div>
      ) : (
        Object.entries(groupedVideos).map(([key, videos]) => {
          const info = CATEGORY_INFO[key];
          const categoryTitle = t.categories[key as keyof typeof t.categories];
          return (
            <div key={key} className="mb-10">
              <h3 className="text-lg font-semibold flex items-center gap-3 mb-4">
                <span className={`w-7 h-7 rounded flex items-center justify-center text-xs text-white font-bold ${info.color}`}>{info.icon}</span>
                <span className="text-primary">{categoryTitle}</span>
                <Badge variant="secondary" className="text-[10px] ml-1">{videos.length}</Badge>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {videos.map((video, index) => (
                  <a key={index} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="card-judo group overflow-hidden p-0 hover:border-primary transition-colors">
                    <div className="relative aspect-video bg-background/50">
                      <VideoThumbnail videoId={video.id} videoName={video.name} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-white text-sm ml-0.5">▶</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className={`absolute top-1 right-1 text-[10px] px-1.5 py-0.5 ${info.color} ${info.textColor}`}>
                        {info.badge}
                      </Badge>
                    </div>
                    <div className="p-2 text-center">
                      <p className="text-xs font-medium text-white group-hover:text-primary transition-colors truncate">{video.name}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })
      )}

      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4 mt-10"><span>💡</span> {t.studyTips}</h3>
      <div className="card-judo">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><h4 className="font-semibold text-white mb-2">{t.howToStudy}</h4><ul className="space-y-1 text-sm text-foreground/70">{t.studyItems.map((item, i) => <li key={i}>• {item}</li>)}</ul></div>
          <div><h4 className="font-semibold text-white mb-2">{t.whatToObserve}</h4><ul className="space-y-1 text-sm text-foreground/70">{t.observeItems.map((item, i) => <li key={i}>• {item}</li>)}</ul></div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
