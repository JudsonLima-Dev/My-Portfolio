import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageLabels } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const flags: Record<Language, string> = {
  en: "🇺🇸",
  pt: "🇧🇷",
  es: "🇪🇸",
};

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{flags[language]}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-elevated py-1 min-w-[140px] z-50">
          {(Object.keys(languageLabels) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false); }}
              className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-muted transition-colors ${
                language === lang ? "text-secondary font-medium" : "text-foreground"
              }`}
            >
              <span>{flags[lang]}</span>
              <span>{languageLabels[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
