import registry from "./pageRegistry.json";

export interface PageLocale {
  slug: string;
  h1: string;
  title: string;
  description: string;
}

export interface PageEntry {
  id: string;
  category: string;
  priority: string;
  noEnEquivalent?: boolean;
  enHreflangFallback?: string;
  en?: PageLocale;
  es: PageLocale;
}

export const SITE_URL = registry.site;
export const pages = registry.pages as PageEntry[];

/** Busca la entrada del registro que contiene un slug dado (ES o EN). */
export const findPageBySlug = (slug: string): PageEntry | undefined =>
  pages.find((p) => p.en?.slug === slug || p.es.slug === slug);

/**
 * Dado un path actual, devuelve el path equivalente en el otro idioma.
 * Si no hay equivalente (ej. /es/bolsas-papel/estraza), regresa el fallback o la home del idioma destino.
 */
export const getAlternatePath = (currentPath: string, targetLang: "en" | "es"): string => {
  const entry = findPageBySlug(currentPath);
  if (!entry) return targetLang === "en" ? "/" : "/es";

  if (targetLang === "en") {
    if (entry.en) return entry.en.slug;
    return entry.enHreflangFallback ?? "/";
  }
  return entry.es.slug;
};
