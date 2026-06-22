import { createContext, useContext, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, Language } from "@/i18n/translations";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  /** Prefija una ruta interna con el idioma actual: "/bolsas-catalogo" -> "/en/bolsas-catalogo" en inglés */
  localePath: (path: string) => string;
  t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isEnglishPath = (pathname: string) =>
  pathname === "/en" || pathname.startsWith("/en/");

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language: Language = isEnglishPath(location.pathname) ? "en" : "es";

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const localePath = (path: string) => {
    // path siempre en su forma española (la canónica del routing)
    if (language === "en") return path === "/" ? "/en" : `/en${path}`;
    return path;
  };

  const toggleLanguage = () => {
    const { pathname, hash } = location;
    if (language === "es") {
      navigate((pathname === "/" ? "/en" : `/en${pathname}`) + hash);
    } else {
      const stripped = pathname.replace(/^\/en/, "") || "/";
      navigate(stripped + hash);
    }
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
