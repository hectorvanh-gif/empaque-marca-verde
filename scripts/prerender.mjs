// Post-build: genera un HTML estático por ruta E IDIOMA con su title/description/
// canonical correctos y las anotaciones hreflang que enlazan las versiones ES/EN.
// El cuerpo lo sigue hidratando React (que detecta el idioma por la URL: /en/...).
//
// Vercel sirve archivos del filesystem antes de aplicar el rewrite SPA, así que
// dist/<ruta>/index.html y dist/en/<ruta>/index.html se entregan tal cual.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const SITE = "https://www.bolsasmx.com";
const base = readFileSync(join(DIST, "index.html"), "utf8");

// Cada "página lógica" con su ruta y metadatos por idioma.
const pages = [
  {
    esPath: "/",
    enPath: "/en",
    es: {
      title: "La Bolsa de Tu Marca | Bolsas de Papel Personalizadas en México",
      desc: "Fabricamos bolsas de papel personalizadas y ecológicas en México. Empaque sustentable para retail, restaurantes y marcas corporativas. Cotiza ahora.",
    },
    en: {
      title: "La Bolsa de Tu Marca | Custom Paper Bags Made in Mexico",
      desc: "We manufacture custom, eco-friendly paper bags in Mexico. Sustainable packaging for retail, restaurants and corporate brands. Get a quote.",
    },
  },
  {
    esPath: "/bolsas-catalogo",
    enPath: "/en/bolsas-catalogo",
    es: {
      title: "Catálogo de Bolsas de Papel | BolsasMX",
      desc: "Catálogo de bolsas de papel: kraft reciclado y tote bags personalizables. Fabricantes directos en México. Cotiza tu pedido al mayoreo.",
    },
    en: {
      title: "Paper Bag Catalog | BolsasMX",
      desc: "Catalog of paper bags: recycled kraft and customizable tote bags. Direct manufacturers in Mexico. Get a wholesale quote.",
    },
  },
  {
    esPath: "/bolsas-kraft-reciclado",
    enPath: "/en/bolsas-kraft-reciclado",
    es: {
      title: "Bolsas de Papel Kraft Reciclado | Medidas y Precios | BolsasMX",
      desc: "Bolsas de papel kraft reciclado fabricadas en México. Líneas con asa, delivery, boutique y botella. Certificación FSC, impresión a 2 tintas. Solicita cotización.",
    },
    en: {
      title: "Recycled Kraft Paper Bags | Sizes & Quotes | BolsasMX",
      desc: "Recycled kraft paper bags made in Mexico. Handle, delivery, boutique and bottle lines. FSC certified, 2-color printing. Request a quote.",
    },
  },
];

const url = (path) => SITE + (path === "/" ? "/" : path);

// Reemplaza el primer match usando función, para no interpretar `$` del contenido.
const sub = (html, regex, value) => html.replace(regex, (...g) => g[1] + value + g[2]);

function buildHtml(meta, { lang, title, desc, canonical, ogLocale, esURL, enURL }) {
  let html = meta;
  if (lang === "en") html = html.replace('<html lang="es">', '<html lang="en">');
  html = html.replace(/<title>.*?<\/title>/s, () => `<title>${title}</title>`);
  html = sub(html, /(<meta name="description" content=")[^"]*(")/, desc);
  html = sub(html, /(<link rel="canonical" href=")[^"]*(")/, canonical);
  html = sub(html, /(<meta property="og:title" content=")[^"]*(")/, title);
  html = sub(html, /(<meta property="og:description" content=")[^"]*(")/, desc);
  html = sub(html, /(<meta property="og:url" content=")[^"]*(")/, canonical);
  html = sub(html, /(<meta property="og:locale" content=")[^"]*(")/, ogLocale);
  html = sub(html, /(<meta name="twitter:title" content=")[^"]*(")/, title);
  html = sub(html, /(<meta name="twitter:description" content=")[^"]*(")/, desc);

  const hreflang = [
    `<link rel="alternate" hreflang="es-MX" href="${esURL}" />`,
    `<link rel="alternate" hreflang="en" href="${enURL}" />`,
    `<link rel="alternate" hreflang="x-default" href="${esURL}" />`,
  ].join("\n    ");
  html = html.replace(/(<link rel="canonical"[^>]*>)/, (m) => `${m}\n    ${hreflang}`);
  return html;
}

const write = (path, html) => {
  const outDir = path === "/" ? DIST : join(DIST, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`prerendered  ${path === "/" ? "" : path}/index.html`);
};

for (const p of pages) {
  const esURL = url(p.esPath);
  const enURL = url(p.enPath);

  write(
    p.esPath,
    buildHtml(base, {
      lang: "es", title: p.es.title, desc: p.es.desc,
      canonical: esURL, ogLocale: "es_MX", esURL, enURL,
    })
  );
  write(
    p.enPath,
    buildHtml(base, {
      lang: "en", title: p.en.title, desc: p.en.desc,
      canonical: enURL, ogLocale: "en_US", esURL, enURL,
    })
  );
}
