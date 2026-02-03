import { useState } from "react";
import { gokyoData } from "@/data/judoData";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const kyoColors: Record<string, { bg: string; text: string; label: string; kyu: string }> = {
  ikkyo: { bg: 'bg-yellow-500', text: 'text-yellow-400', label: 'Ikkyo (1º)', kyu: '5º Kyu' },
  nikyo: { bg: 'bg-orange-500', text: 'text-orange-400', label: 'Nikyo (2º)', kyu: '4º Kyu' },
  sankyo: { bg: 'bg-green-600', text: 'text-green-400', label: 'Sankyo (3º)', kyu: '3º Kyu' },
  yonkyo: { bg: 'bg-blue-600', text: 'text-blue-400', label: 'Yonkyo (4º)', kyu: '2º Kyu' },
  gokyo: { bg: 'bg-amber-800', text: 'text-amber-600', label: 'Gokyo (5º)', kyu: '1º Kyu' },
};

const GokyoSection = () => {
  const [activeGroup, setActiveGroup] = useState<keyof typeof gokyoData>("ikkyo");

  const groups = Object.entries(gokyoData);
  const currentGroup = gokyoData[activeGroup];
  const currentColor = kyoColors[activeGroup];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">投</span>
        Gokyo no Waza - 五教
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O Go-Kyo (Cinco Ensinos) foi estabelecido por Jigoro Kano em 1895 e revisado em 1920 (Shin-Go-Kyo). 
          Contém 40 técnicas fundamentais de projeção em 5 grupos de 8 técnicas cada.
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
            onClick={() => setActiveGroup(key as keyof typeof gokyoData)}
          >
            <div className={cn("w-3 h-3 rounded-full", color.bg)} />
            <span className={cn("text-xs font-medium", activeGroup === key ? (key === 'ikkyo' ? "text-black" : "text-white") : color.text)}>
              {color.label} - {color.kyu}
            </span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {groups.map(([key, group]) => {
          const color = kyoColors[key];
          return (
            <button
              key={key}
              onClick={() => setActiveGroup(key as keyof typeof gokyoData)}
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
      </div>

      {/* Techniques Grid */}
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
              <span>🎬</span> Vídeo disponível na página Vídeos
            </p>
          </div>
        ))}
      </div>

      {/* Group Legend */}
      <div className="mt-8 p-5 bg-card rounded-xl border border-primary/20">
        <h4 className="text-sm font-semibold text-primary mb-4">Categorias de Técnicas</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { name: "Te-waza", desc: "Técnicas de mão/braço" },
            { name: "Koshi-waza", desc: "Técnicas de quadril" },
            { name: "Ashi-waza", desc: "Técnicas de perna/pé" },
            { name: "Ma-sutemi", desc: "Sacrifício para trás" },
            { name: "Yoko-sutemi", desc: "Sacrifício lateral" },
          ].map((cat, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-primary">{cat.name}</p>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Color Legend Explanation */}
      <div className="mt-6 p-4 bg-muted/30 rounded-xl">
        <h4 className="text-sm font-semibold text-white mb-3">🎨 Sistema de Cores</h4>
        <p className="text-xs text-muted-foreground mb-3">
          As mesmas cores são usadas na seção de Vídeos para facilitar a identificação das técnicas:
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
