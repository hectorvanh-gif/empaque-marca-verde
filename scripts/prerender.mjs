// Post-build: genera un HTML estático por ruta con su title/description/canonical
// correctos en el <head>, para que los buscadores reciban metadatos únicos por
// página (no los de la home). El cuerpo lo sigue hidratando React en el cliente.
//
// Cómo funciona: Vercel sirve archivos del filesystem antes de aplicar los
// rewrites de vercel.json, así que dist/<ruta>/index.html se entrega tal cual
// cuando se pide /<ruta>, mientras el catch-all sigue cubriendo el routing SPA.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const SITE = "https://www.bolsasmx.com";

const base = readFileSync(join(DIST, "index.html"), "utf8");

const routes = {
  "bolsas-catalogo": {
    title: "Catálogo de Bolsas de Papel | BolsasMX",
    description:
      "Catálogo de bolsas de papel: kraft reciclado y tote bags personalizables. Fabricantes directos en México. Cotiza tu pedido al mayoreo.",
  },
  "bolsas-kraft-reciclado": {
    title: "Bolsas de Papel Kraft Reciclado | Medidas y Precios | BolsasMX",
    description:
      "Bolsas de papel kraft reciclado fabricadas en México. Líneas con asa, delivery, boutique y botella. Certificación FSC, impresión a 2 tintas. Solicita cotización.",
  },
};

// Reemplaza el primer match usando una función, para no interpretar `$` del contenido.
const sub = (html, regex, value) => html.replace(regex, (...g) => g[1] + value + g[2]);

for (const [path, meta] of Object.entries(routes)) {
  const url = `${SITE}/${path}`;
  let html = base.replace(/<title>.*?<\/title>/s, () => `<title>${meta.title}</title>`);
  html = sub(html, /(<meta name="description" content=")[^"]*(")/, meta.description);
  html = sub(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  html = sub(html, /(<meta property="og:title" content=")[^"]*(")/, meta.title);
  html = sub(html, /(<meta property="og:description" content=")[^"]*(")/, meta.description);
  html = sub(html, /(<meta property="og:url" content=")[^"]*(")/, url);
  html = sub(html, /(<meta name="twitter:title" content=")[^"]*(")/, meta.title);
  html = sub(html, /(<meta name="twitter:description" content=")[^"]*(")/, meta.description);

  const outDir = join(DIST, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`prerendered  ${path}/index.html`);
}
