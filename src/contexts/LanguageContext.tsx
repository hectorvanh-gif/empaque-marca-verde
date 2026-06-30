import { createContext, useContext, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, Language } from "@/i18n/translations";
import { getAlternatePath } from "@/content/pageRegistry";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  /** Prefija una ruta interna del chrome compartido (header/footer) con el idioma actual */
  localePath: (path: string) => string;
  t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isSpanishPath = (pathname: string) =>
  pathname === "/es" || pathname.startsWith("/es/");

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language: Language = isSpanishPath(location.pathname) ? "es" : "en";

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const localePath = (path: string) => {
    // path siempre en su forma inglesa (la canónica del routing del chrome compartido)
    if (language === "es") return path === "/" ? "/es" : `/es${path}`;
    return path;
  };

  const toggleLanguage = () => {
    const targetLang = language === "en" ? "es" : "en";
    const alternate = getAlternatePath(location.pathname, targetLang);
    navigate(alternate + location.hash);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, localePath, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
