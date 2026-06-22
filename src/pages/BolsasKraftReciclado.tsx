import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import catKraftReciclado from "@/assets/catalog/cat-kraft-reciclado.jpg";

// ── Medidas y gramajes (universales, no requieren traducción) ──────────────
const measurements = [
  {
    id: "asa",
    sizes: [
      { medidas: "14.5 × 21.5 × 7.5", gramaje: "70–80 g/m²" },
      { medidas: "19 × 26.5 × 8", gramaje: "80–90 g/m²", std: true },
      { medidas: "30 × 39 × 18", gramaje: "100–120 g/m²" },
      { medidas: "33 × 47 × 12", gramaje: "110–130 g/m²" },
    ],
  },
  { id: "delivery", sizes: [{ medidas: "30 × 40 × 18", gramaje: "90–100 g/m²" }] },
  {
    id: "boutique",
    sizes: [
      { medidas: "20.5 × 14 × 9", gramaje: "60–70 g/m²" },
      { medidas: "30 × 22 × 12", gramaje: "80–90 g/m²", std: true },
      { medidas: "33 × 26 × 14.5", gramaje: "90–100 g/m²" },
    ],
  },
  { id: "botella", sizes: [{ medidas: "12 × 35 × 9", gramaje: "100–120 g/m²" }] },
];

const WA_BASE = "https://wa.me/525545925827";
const waNew  = `${WA_BASE}?text=Hola%2C%20quiero%20cotizar%20bolsas%20de%20papel%20kraft.%20Mi%20negocio%20es%20%5Btipo%20de%20negocio%20o%20producto%20que%20vendo%5D%2C%20la%20bolsa%20que%20necesito%20es%20de%20aproximadamente%20%5Bancho%20%C3%97%20alto%5D%20cm%20y%20calculo%20unas%20%5Bcantidad%5D%20piezas.%20%C2%BFMe%20pueden%20ayudar%20a%20elegir%20el%20gramaje%3F`;
const waB2B  = `${WA_BASE}?text=Hola%2C%20soy%20comprador%20de%20%5Bempresa%5D.%20Requiero%20cotizaci%C3%B3n%20de%20%5Bmedida%20y%20gramaje%5D%2C%20volumen%20estimado%20%5Bcantidad%5D.%20%C2%BFPueden%20enviarme%20propuesta%3F`;
const EMAIL  = "mailto:labolsadetumarca@gmail.com?subject=Cotizaci%C3%B3n%20bolsas%20kraft%20%E2%80%94%20compra%20corporativa&body=Hola%2C%0A%0ASoy%20comprador%20de%20%5Bempresa%5D.%20Requiero%20cotizaci%C3%B3n%20de%20%5Bl%C3%ADnea%2C%20medida%20y%20gramaje%5D%2C%20volumen%20estimado%20%5Bcantidad%5D.%0A%0A%C2%BFPueden%20enviarme%20propuesta%3F%0A%0AGracias.";

// ── Iconos SVG inline ───────────────────────────────────────────────────────
const IconShield = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconPrint = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9"/>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
    <rect x="6" y="14" width="12" height="8"/>
  </svg>
);
const IconWA = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.43l-.38-.22-3.67.96.98-3.58-.25-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H8.1c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
  </svg>
);
const IconMail = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

// ── Componente principal ────────────────────────────────────────────────────
const BolsasKraftReciclado = () => {
  const { t } = useLanguage();

  const lines = measurements.map((m, lineIdx) => ({
    id: m.id,
    label: t.bolsasKraft.lines[lineIdx].label,
    sizes: m.sizes.map((s, sizeIdx) => ({
      ...s,
      talla: t.bolsasKraft.lines[lineIdx].sizes[sizeIdx].talla,
      uso: t.bolsasKraft.lines[lineIdx].sizes[sizeIdx].uso,
    })),
  }));

  const ranges = [
    { label: t.bolsasKraft.ranges.ancho, value: "12 a 22 cm" },
    { label: t.bolsasKraft.ranges.alto, value: "22.5 a 47 cm" },
    { label: t.bolsasKraft.ranges.fuelle, value: "6 a 18 cm" },
    { label: t.bolsasKraft.ranges.gramaje, value: "60 a 160 g/m²" },
  ];

  return (
    <>
      <Helmet>
        {/* description y canonical se inyectan por ruta en scripts/prerender.mjs
            (HTML estático) para evitar tags duplicados al hidratar */}
        <title>Bolsas de Papel Kraft Reciclado | Medidas y Precios | BolsasMX</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bolsas de Papel Kraft Reciclado",
            "image": "https://www.bolsasmx.com/og-image.png",
            "description":
              "Bolsas de papel kraft 100% reciclado fabricadas en México. Disponibles en líneas con asa, delivery, boutique y botella, en tallas chica a jumbo y gramajes de 60 a 160 g/m². Personalizables con impresión a 2 tintas y medidas a la medida.",
            "brand": {
              "@type": "Brand",
              "name": "La Bolsa de Tu Marca",
            },
            "material": "Papel kraft reciclado",
            "category": "Bolsas de papel personalizadas",
            "manufacturer": {
              "@type": "Organization",
              "name": "La Bolsa de Tu Marca",
              "url": "https://www.bolsasmx.com",
            },
            "additionalProperty": [
              { "@type": "PropertyValue", "name": "Gramaje", "value": "60 a 160 g/m²" },
              { "@type": "PropertyValue", "name": "Certificación", "value": "FSC" },
              { "@type": "PropertyValue", "name": "Impresión", "value": "2 tintas" },
            ],
          })}
        </script>
      </Helmet>
      <Header />

      <main className="min-h-screen bg-background">

        {/* ── HERO ── */}
        <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-sage">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                  {t.bolsasKraft.eyebrow}
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
                  {t.bolsasKraft.title1}{" "}
                  <span className="text-primary">{t.bolsasKraft.titleHighlight}</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {t.bolsasKraft.desc}
                </p>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border bg-green-50 text-green-800 border-green-200">
                    <IconShield /> {t.bolsasKraft.badge1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border bg-blue-50 text-blue-800 border-blue-200">
                    <IconPrint /> {t.bolsasKraft.badge2}
                  </span>
                </div>
                <a
                  href={waNew}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base"
                >
                  <IconWA />
                  {t.bolsasKraft.cta}
                </a>
              </div>
              <div className="aspect-square bg-card rounded-2xl shadow-card overflow-hidden p-6 flex items-center justify-center">
                <img
                  src={catKraftReciclado}
                  alt="Bolsas de papel kraft reciclado"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── TABLA DE MEDIDAS ── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                {t.bolsasKraft.sizesEyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                {t.bolsasKraft.sizesHeading}
              </h2>
              <p className="text-muted-foreground">
                {t.bolsasKraft.sizesDesc}
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-hidden rounded-2xl shadow-card border border-border/20">
              <table className="w-full text-left">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-5 py-4 font-display font-semibold">{t.bolsasKraft.tableHeaders.linea}</th>
                    <th className="px-5 py-4 font-display font-semibold">{t.bolsasKraft.tableHeaders.talla}</th>
                    <th className="px-5 py-4 font-display font-semibold">{t.bolsasKraft.tableHeaders.medidas}</th>
                    <th className="px-5 py-4 font-display font-semibold">{t.bolsasKraft.tableHeaders.gramaje}</th>
                    <th className="px-5 py-4 font-display font-semibold">{t.bolsasKraft.tableHeaders.uso}</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  {lines.map((line) =>
                    line.sizes.map((s, i) => (
                      <tr
                        key={`${line.id}-${s.talla}`}
                        className={`border-t border-border/20 ${i % 2 === 1 ? "bg-secondary/30" : ""} hover:bg-secondary/50 transition-colors`}
                      >
                        {i === 0 && (
                          <td
                            className="px-5 py-4 font-semibold text-primary text-sm align-top"
                            rowSpan={line.sizes.length}
                          >
                            {line.label}
                          </td>
                        )}
                        <td className="px-5 py-4 text-foreground font-medium">{s.talla}</td>
                        <td className="px-5 py-4 font-mono text-sm text-foreground">{s.medidas}</td>
                        <td className="px-5 py-4 text-foreground text-sm">
                          {s.gramaje}
                          {s.std && (
                            <span className="ml-2 text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              {t.bolsasKraft.standardTag}
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground text-sm">{s.uso}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-6">
              {lines.map((line) => (
                <div key={line.id}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 px-1">
                    {line.label}
                  </h3>
                  <div className="grid gap-3">
                    {line.sizes.map((s) => (
                      <div
                        key={s.talla}
                        className="bg-card rounded-xl shadow-card border border-border/20 p-4"
                      >
                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/20">
                          <p className="font-display text-lg text-primary font-semibold">{s.talla}</p>
                          {s.std && (
                            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                              {t.bolsasKraft.standardTag}
                            </span>
                          )}
                        </div>
                        <dl className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <dt className="text-muted-foreground text-xs">{t.bolsasKraft.tableHeaders.medidas}</dt>
                            <dd className="font-mono text-foreground">{s.medidas}</dd>
                          </div>
                          <div>
                            <dt className="text-muted-foreground text-xs">{t.bolsasKraft.tableHeaders.gramaje}</dt>
                            <dd className="text-foreground">{s.gramaje}</dd>
                          </div>
                          <div className="col-span-2">
                            <dt className="text-muted-foreground text-xs">{t.bolsasKraft.tableHeaders.uso}</dt>
                            <dd className="text-foreground">{s.uso}</dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Gramaje note */}
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm text-blue-800 leading-relaxed">
              {t.bolsasKraft.gramajeNote}
            </div>
          </div>
        </section>

        {/* ── MEDIDAS ESPECIALES ── */}
        <section className="py-16 md:py-20 bg-gradient-sage">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-card rounded-2xl shadow-card border border-border/20 p-8 md:p-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                {t.bolsasKraft.customEyebrow}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                {t.bolsasKraft.customHeading}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.bolsasKraft.customDesc}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {ranges.map((r) => (
                  <div key={r.label} className="rounded-xl bg-secondary/40 border border-border/30 p-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{r.label}</p>
                    <p className="font-display text-base font-semibold text-primary">{r.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                {t.bolsasKraft.customNote}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA DUAL ── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-6 items-center bg-card rounded-2xl shadow-card border border-border/20 overflow-hidden">

              {/* Cliente nuevo */}
              <div className="p-8 md:p-10 text-center flex flex-col items-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {t.finalCta.card1.eyebrow}
                </p>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {t.finalCta.card1.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                  {t.finalCta.card1.desc}
                </p>
                <a
                  href={waNew}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  <IconWA />
                  {t.finalCta.card1.cta}
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  {t.finalCta.card1.note} <strong>55 4592 5827</strong>
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:flex flex-col items-center gap-3 text-muted-foreground text-xs py-8">
                <div className="w-px h-16 bg-border" />
                <span>{t.finalCta.card2.or}</span>
                <div className="w-px h-16 bg-border" />
              </div>
              <div className="md:hidden flex items-center gap-3 text-muted-foreground text-xs px-8">
                <div className="h-px flex-1 bg-border" />
                <span>{t.finalCta.card2.or}</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Comprador corporativo */}
              <div className="p-8 md:p-10 text-center flex flex-col items-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {t.finalCta.card2.eyebrow}
                </p>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {t.finalCta.card2.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                  {t.finalCta.card2.desc}
                </p>
                <a
                  href={EMAIL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm mb-3"
                >
                  <IconMail />
                  {t.finalCta.card2.ctaEmail}
                </a>
                <p className="text-xs text-muted-foreground mb-3">
                  labolsadetumarca@gmail.com
                </p>
                <span className="text-xs text-muted-foreground mb-2">{t.finalCta.card2.or}</span>
                <a
                  href={waB2B}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 border-2 border-[#25D366] shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  <IconWA />
                  {t.finalCta.card2.ctaWa}
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  <strong>55 4592 5827</strong>
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BolsasKraftReciclado;
