import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { searchIndex, sections } from "@/data/judoData";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface SearchBarProps {
  onNavigate: (section: string) => void;
}

const SearchBar = ({ onNavigate }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<typeof searchIndex>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 8));
    setIsOpen(true);
  }, [query]);

  const handleSelect = (sectionId: string) => {
    setQuery("");
    setIsOpen(false);
    onNavigate(sectionId);
  };

  const getSectionLabel = (id: string) => {
    const s = sections.find((sec) => sec.id === id);
    if (!s) return id;
    return language === 'en' ? s.labelEn : s.label;
  };

  const placeholder = language === 'en' 
    ? "Search techniques, terms, history..." 
    : "Pesquisar técnicas, termos, história...";

  const noResults = language === 'en'
    ? "No results found"
    : "Nenhum resultado encontrado";

  return (
    <div className="relative max-w-xl mx-auto mb-10">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          className="search-input pr-12"
        />
        <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card/98 border border-primary rounded-xl overflow-hidden z-50 shadow-lg animate-fade-in">
          {results.map((result, index) => (
            <div
              key={index}
              onClick={() => handleSelect(result.section)}
              className={cn(
                "px-5 py-3 cursor-pointer transition-colors hover:bg-secondary/30",
                index !== results.length - 1 && "border-b border-primary/10"
              )}
            >
              <div className="text-xs text-primary mb-1">
                {getSectionLabel(result.section)}
              </div>
              <div className="text-foreground text-sm font-medium">
                {result.title}
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card/98 border border-primary rounded-xl p-5 text-center text-muted-foreground z-50">
          {noResults}
        </div>
      )}
    </div>
  );
};

export default SearchBar;