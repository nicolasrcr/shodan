import { useState } from "react";
import { gokyoData, extraGokyoData } from "@/data/judoData";
import { extraGokyoDataEn } from "@/data/judoDataEn";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Ban, Sparkles } from "lucide-react";

const GokyoSection = () => {
  const [activeGroup, setActiveGroup] = useState<string>("ikkyo");
  const { language } = useLanguage();
  const extra = language === 'en' ? extraGokyoDataEn : extraGokyoData;

  const kyoColors: Record<string, { bg: string; text: string; label: string; kyu: string }> = {
    ikkyo: { bg: 'bg-yellow-500', text: 'text-yellow-400', label: 'Ikkyo (1º)', kyu: language === 'pt' ? '5º Kyu' : '5th Kyu' },
    nikyo: { bg: 'bg-orange-500', text: 'text-orange-400', label: 'Nikyo (2º)', kyu: language === 'pt' ? '4º Kyu' : '4th Kyu' },
    sankyo: { bg: 'bg-green-600', text: 'text-green-400', label: 'Sankyo (3º)', kyu: language === 'pt' ? '3º Kyu' : '3rd Kyu' },
    yonkyo: { bg: 'bg-blue-600', text: 'text-blue-400', label: 'Yonkyo (4º)', kyu: language === 'pt' ? '2º Kyu' : '2nd Kyu' },
    gokyo: { bg: 'bg-amber-800', text: 'text-amber-600', label: 'Gokyo (5º)', kyu: language === 'pt' ? '1º Kyu' : '1st Kyu' },
  };

  const groups = Object.entries(gokyoData);
  const isExtraGokyo = activeGroup === 'extraGokyo';
  const isMainGokyo = !isExtraGokyo;
  const currentGroup = isMainGokyo ? gokyoData[activeGroup as keyof typeof gokyoData] : null;
  const currentColor = isMainGokyo ? kyoColors[activeGroup] : null;

  const categories = language === 'pt'
    ? [
        { name: "Te-waza", desc: "Técnicas de mão/braço" },
        { name: "Koshi-waza", desc: "Técnicas de quadril" },
        { name: "Ashi-waza", desc: "Técnicas de perna/pé" },
        { name: "Ma-sutemi", desc: "Sacrifício para trás" },
        { name: "Yoko-sutemi", desc: "Sacrifício lateral" },
      ]
    : [
        { name: "Te-waza", desc: "Hand/arm techniques" },
        { name: "Koshi-waza", desc: "Hip techniques" },
        { name: "Ashi-waza", desc: "Leg/foot techniques" },
        { name: "Ma-sutemi", desc: "Rear sacrifice" },
        { name: "Yoko-sutemi", desc: "Side sacrifice" },
      ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">投</span>
        Gokyo no Waza - 五教
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          {language === 'pt'
            ? 'O Go-Kyo (Cinco Ensinos) foi estabelecido por Jigoro Kano em 1895 e revisado em 1920 (Shin-Go-Kyo). Contém 40 técnicas fundamentais de projeção em 5 grupos de 8 técnicas cada.'
            : 'The Go-Kyo (Five Teachings) was established by Jigoro Kano in 1895 and revised in 1920 (Shin-Go-Kyo). It contains 40 fundamental throwing techniques in 5 groups of 8 techniques each.'}
        </p>
      </div>

      {/* Color Legend */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(kyoColors).map(([key, color]) => (
          <div 
            key={key} 
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all cursor-pointer",
              activeGroup === key 
                ? `${color.bg} border-transparent text-white` 
                : "bg-card border-primary/20 hover:border-primary/40"
            )}
            onClick={() => setActiveGroup(key)}
          >
            <div className={cn("w-3 h-3 rounded-full", color.bg)} />
            <span className={cn("text-xs font-medium", activeGroup === key ? (key === 'ikkyo' ? "text-black" : "text-white") : color.text)}>
              {color.label} - {color.kyu}
            </span>
          </div>
        ))}
        <div 
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all cursor-pointer",
            isExtraGokyo
              ? "bg-red-700 border-transparent text-white"
              : "bg-card border-primary/20 hover:border-primary/40"
          )}
          onClick={() => setActiveGroup('extraGokyo')}
        >
          <Sparkles className="w-3 h-3" />
          <span className={cn("text-xs font-medium", isExtraGokyo ? "text-white" : "text-red-400")}>
            Extra Gokyo
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {groups.map(([key, group]) => {
          const color = kyoColors[key];
          return (
            <button
              key={key}
              onClick={() => setActiveGroup(key)}
              className={cn(
                "px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
                activeGroup === key
                  ? `${color.bg} border-transparent text-white`
                  : "bg-card border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {group.name}
            </button>
          );
        })}
        <button
          onClick={() => setActiveGroup('extraGokyo')}
          className={cn(
            "px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
            isExtraGokyo
              ? "bg-red-700 border-transparent text-white"
              : "bg-card border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground"
          )}
        >
          Extra Gokyo
        </button>
      </div>

      {/* Main Gokyo Techniques Grid */}
      {isMainGokyo && currentGroup && currentColor && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentGroup.techniques.map((technique) => (
            <div key={technique.num} className="technique-card relative">
              <Badge 
                className={cn(
                  "absolute top-2 right-2 text-[10px]",
                  currentColor.bg,
                  activeGroup === 'ikkyo' ? "text-black" : "text-white",
                  "hover:opacity-90"
                )}
              >
                {currentColor.kyu}
              </Badge>
              <div className="flex items-start justify-between mb-2">
                <span className={cn(
                  "w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white",
                  currentColor.bg
                )}>
                  {technique.num}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {technique.group}
                </span>
              </div>
              <h4 className="font-semibold text-white text-sm mb-1">{technique.name}</h4>
              <p className={cn("text-2xl font-serif mb-2", currentColor.text)}>{technique.kanji}</p>
              <p className="text-xs text-muted-foreground mb-2">{technique.translation}</p>
              <p className="text-[10px] text-primary/70 flex items-center gap-1">
                <span>🎬</span> {language === 'pt' ? 'Vídeo disponível na página Vídeos' : 'Video available on Videos page'}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Extra Gokyo Section */}
      {isExtraGokyo && (
        <div className="space-y-10">
          {/* Intro */}
          <div className="card-judo">
            <p className="text-sm text-foreground/70">
              {language === 'pt'
                ? 'No Judô, é comum ouvirmos o termo "Extra-Gokyō", embora ele não faça parte da nomenclatura oficial. Trata-se de uma expressão informal usada para se referir a técnicas que não estão incluídas no Gokyō. As técnicas fora do Gokyō pertencem a outras classificações: Habukareta-Waza e Shinmeisho-no-Waza.'
                : 'In Judo, the term "Extra-Gokyō" is commonly heard, although it is not part of the official nomenclature. It is an informal expression used to refer to techniques not included in the Gokyō. Techniques outside the Gokyō belong to other classifications: Habukareta-Waza and Shinmeisho-no-Waza.'}
            </p>
          </div>

          {/* Habukareta-Waza */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center">
                <Ban className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-400">Habukareta-Waza</h3>
                <p className="text-xs text-muted-foreground">
                  {extra.habukaretaWaza.description}
                </p>
              </div>
            </div>
            <div className="card-judo mb-4">
              <p className="text-sm text-foreground/70">
                {extra.habukaretaWaza.info}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {extra.habukaretaWaza.techniques.map((technique) => (
                <div key={technique.num} className="technique-card relative">
                  <Badge className="absolute top-2 right-2 text-[10px] bg-red-700 text-white hover:opacity-90">
                    {language === 'pt' ? 'Excluída' : 'Excluded'}
                  </Badge>
                  <div className="flex items-start justify-between mb-2">
                    <span className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white bg-red-700">
                      {technique.num}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {technique.group}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{technique.name}</h4>
                  <p className="text-2xl font-serif mb-2 text-red-400">{technique.kanji}</p>
                  <p className="text-xs text-muted-foreground mb-1">
                    {technique.translation}
                  </p>
                  <p className="text-[10px] text-red-400/70">
                    {language === 'pt' ? `Pertencia ao ${technique.originalGroup}` : `Belonged to ${technique.originalGroup}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shinmeisho-no-Waza */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sky-400">Shinmeisho-no-Waza</h3>
                <p className="text-xs text-muted-foreground">
                  {extra.shinmeishoNoWaza.description}
                </p>
              </div>
            </div>
            <div className="card-judo mb-4">
              <p className="text-sm text-foreground/70">
                {extra.shinmeishoNoWaza.info}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {extra.shinmeishoNoWaza.techniques.map((technique) => (
                <div key={technique.num} className="technique-card relative">
                  <Badge className="absolute top-2 right-2 text-[10px] bg-sky-600 text-white hover:opacity-90">
                    Shinmeisho
                  </Badge>
                  <div className="flex items-start justify-between mb-2">
                    <span className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center text-white bg-sky-600">
                      {technique.num}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {technique.group}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{technique.name}</h4>
                  <p className="text-2xl font-serif mb-2 text-sky-400">{technique.kanji}</p>
                  <p className="text-xs text-muted-foreground">
                    {technique.translation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Group Legend */}
      <div className="mt-8 p-5 bg-card rounded-xl border border-primary/20">
        <h4 className="text-sm font-semibold text-primary mb-4">
          {language === 'pt' ? 'Categorias de Técnicas' : 'Technique Categories'}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-primary">{cat.name}</p>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Color Legend Explanation */}
      <div className="mt-6 p-4 bg-muted/30 rounded-xl">
        <h4 className="text-sm font-semibold text-white mb-3">
          {language === 'pt' ? '🎨 Sistema de Cores' : '🎨 Color System'}
        </h4>
        <p className="text-xs text-muted-foreground mb-3">
          {language === 'pt'
            ? 'As mesmas cores são usadas na seção de Vídeos para facilitar a identificação das técnicas:'
            : 'The same colors are used in the Videos section to facilitate technique identification:'}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {Object.entries(kyoColors).map(([key, color]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={cn("w-4 h-4 rounded", color.bg)} />
              <span className="text-xs text-foreground/70">{color.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GokyoSection;
