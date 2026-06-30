// Post-build: genera un HTML estático por ruta E IDIOMA con su title/description/
// canonical correctos y las anotaciones hreflang que enlazan las versiones EN/ES.
// El cuerpo lo sigue hidratando React (que detecta el idioma por la URL: /es/...).
//
// Fuente única de verdad: src/content/pageRegistry.json — el mismo archivo que
// usa la app de React para las rutas. También genera public/sitemap.xml a partir
// de este registro para que nunca queden desincronizados.
//
// Vercel sirve archivos del filesystem antes de aplicar el rewrite SPA, así que
// dist/<ruta>/index.html se entrega tal cual.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const registry = JSON.parse(readFileSync("src/content/pageRegistry.json", "utf8"));
const SITE = registry.site;
const base = readFileSync(join(DIST, "index.html"), "utf8");

const url = (path) => SITE + (path === "/" ? "/" : path);

// Reemplaza el primer match usando función, para no interpretar `$` del contenido.
const sub = (html, regex, value) => html.replace(regex, (...g) => g[1] + value + g[2]);

function buildHtml(meta, { lang, title, desc, canonical, ogLocale, enURL, esURL }) {
  let html = meta;
  if (lang === "es") html = html.replace('<html lang="en">', '<html lang="es">');
  html = html.replace(/<title>.*?<\/title>/s, () => `<title>${title}</title>`);
  html = sub(html, /(<meta name="description" content=")[^"]*(")/, desc);
  html = sub(html, /(<link rel="canonical" href=")[^"]*(")/, canonical);
  html = sub(html, /(<meta property="og:title" content=")[^"]*(")/, title);
  html = sub(html, /(<meta property="og:description" content=")[^"]*(")/, desc);
  html = sub(html, /(<meta property="og:url" content=")[^"]*(")/, canonical);
  html = sub(html, /(<meta property="og:locale" content=")[^"]*(")/, ogLocale);
  html = sub(html, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  html = sub(html, /(<meta name="twitter:description" content=")[^"]*(")/, desc);

  const hreflangTags = [`<link rel="alternate" hreflang="en" href="${enURL}" />`];
  if (esURL) hreflangTags.push(`<link rel="alternate" hreflang="es-MX" href="${esURL}" />`);
  hreflangTags.push(`<link rel="alternate" hreflang="x-default" href="${enURL}" />`);

  html = html.replace(/(<link rel="canonical"[^>]*>)/, (m) => `${m}\n    ${hreflangTags.join("\n    ")}`);
  return html;
}

const write = (path, html) => {
  const outDir = path === "/" ? DIST : join(DIST, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`prerendered  ${path === "/" ? "" : path}/index.html`);
};

const sitemapEntries = [];

for (const page of registry.pages) {
  const enSlug = page.en?.slug ?? page.enHreflangFallback ?? "/";
  const enURL = url(enSlug);
  const esURL = page.es ? url(page.es.slug) : undefined;

  if (page.en) {
    write(
      page.en.slug,
      buildHtml(base, {
        lang: "en", title: page.en.title, desc: page.en.description,
        canonical: enURL, ogLocale: "en_US", enURL, esURL,
      })
    );
    sitemapEntries.push({ loc: enURL, alt: esURL, priority: page.priority });
  }

  if (page.es) {
    write(
      page.es.slug,
      buildHtml(base, {
        lang: "es", title: page.es.title, desc: page.es.description,
        canonical: url(page.es.slug), ogLocale: "es_MX", enURL, esURL: url(page.es.slug),
      })
    );
    sitemapEntries.push({ loc: url(page.es.slug), alt: page.en ? enURL : undefined, priority: page.priority });
  }
}

// ── Sitemap ──────────────────────────────────────────────────────────────────
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>${e.alt ? `\n    <xhtml:link rel="alternate" hreflang="${e.loc.includes("/es") ? "en" : "es-MX"}" href="${e.alt}"/>` : ""}
    <changefreq>weekly</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
writeFileSync("public/sitemap.xml", sitemapXml);
writeFileSync(join(DIST, "sitemap.xml"), sitemapXml);
console.log(`sitemap.xml — ${sitemapEntries.length} URLs`);
