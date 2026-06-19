import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/i18n/translations";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return stored === "en" || stored === "es" ? stored : "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
