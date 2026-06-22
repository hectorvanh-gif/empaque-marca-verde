import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

import catKraftReciclado from "@/assets/catalog/cat-kraft-reciclado.jpg";
import catToteBags from "@/assets/catalog/cat-tote-bags.jpg";

const BolsasCatalogo = () => {
  const { t } = useLanguage();

  const categories = [
    { title: t.bolsasCatalogo.categories.kraft, image: catKraftReciclado, href: "/bolsas-kraft-reciclado" },
    { title: t.bolsasCatalogo.categories.tote, image: catToteBags },
  ];

  return (
    <>
      <Helmet>
        {/* description y canonical se inyectan por ruta en scripts/prerender.mjs
            (HTML estático) para evitar tags duplicados al hidratar */}
        <title>Catálogo de Bolsas de Papel | BolsasMX</title>
      </Helmet>
      <Header />

      <main className="min-h-screen bg-background">
        {/* HERO - estilo HeroMinimal */}
        <section className="min-h-[50vh] flex items-center justify-center bg-background pt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-snug mb-6 max-w-5xl tracking-tight">
                <span className="block">
                  {t.bolsasCatalogo.title1} <span className="text-primary">{t.bolsasCatalogo.titleHighlight}</span> {t.bolsasCatalogo.title1Suffix}
                </span>
                <span className="block font-semibold">{t.bolsasCatalogo.title2}</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10">
                {t.bolsasCatalogo.desc}
              </p>
              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
              >
                <span>{t.bolsasCatalogo.cta}</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* GRID DE CATEGORÍAS */}
        <section id="categorias" className="py-20 md:py-28 bg-gradient-sage">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                {t.bolsasCatalogo.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                {t.bolsasCatalogo.heading}
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {categories.map((cat) => {
                const content = (
                  <>
                    <div className="w-full aspect-square mb-5 flex items-center justify-center overflow-hidden bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 group-hover:-translate-y-1 border border-border/10 p-4">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-display text-sm md:text-base lg:text-lg text-foreground font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                      {cat.title}
                    </h3>
                  </>
                );
                return cat.href ? (
                  <a key={cat.title} href={cat.href} className="group flex flex-col items-center text-center w-56 md:w-64">
                    {content}
                  </a>
                ) : (
                  <a
                    key={cat.title}
                    href={`https://wa.me/5215545925827?text=Hola%2C%20me%20interesan%20las%20${encodeURIComponent(cat.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center w-56 md:w-64"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* PERSONALIZACIÓN + CTA DUAL */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                {t.bolsasCatalogo.customEyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {t.bolsasCatalogo.customHeading}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                {t.bolsasCatalogo.customDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-6 items-center bg-card rounded-2xl shadow-card border border-border/20 overflow-hidden">

              {/* Minorista / cliente nuevo */}
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
                  href="https://wa.me/525545925827?text=Hola%2C%20quiero%20cotizar%20bolsas%20de%20papel%20kraft.%20Mi%20negocio%20es%20%5Btipo%20de%20negocio%20o%20producto%20que%20vendo%5D%2C%20la%20bolsa%20que%20necesito%20es%20de%20aproximadamente%20%5Bancho%20%C3%97%20alto%5D%20cm%20y%20calculo%20unas%20%5Bcantidad%5D%20piezas.%20%C2%BFMe%20pueden%20ayudar%20a%20elegir%20el%20gramaje%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.43l-.38-.22-3.67.96.98-3.58-.25-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H8.1c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                  </svg>
                  {t.finalCta.card1.cta}
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  {t.finalCta.card1.note} <strong>55 4592 5827</strong>
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:flex flex-col items-center gap-3 text-muted-foreground text-xs">
                <div className="w-px h-16 bg-border" />
                <span>{t.finalCta.card2.or}</span>
                <div className="w-px h-16 bg-border" />
              </div>
              <div className="md:hidden flex items-center gap-3 text-muted-foreground text-xs px-8">
                <div className="h-px flex-1 bg-border" />
                <span>{t.finalCta.card2.or}</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Corporativo */}
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
                  href="mailto:labolsadetumarca@gmail.com?subject=Cotizaci%C3%B3n%20bolsas%20kraft%20%E2%80%94%20compra%20corporativa&body=Hola%2C%0A%0ASoy%20comprador%20de%20%5Bempresa%5D.%20Requiero%20cotizaci%C3%B3n%20de%20%5Bl%C3%ADnea%2C%20medida%20y%20gramaje%5D%2C%20volumen%20estimado%20%5Bcantidad%5D.%0A%0A%C2%BFPueden%20enviarme%20propuesta%3F%0A%0AGracias."
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm mb-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {t.finalCta.card2.ctaEmail}
                </a>
                <p className="text-xs text-muted-foreground mb-3">labolsadetumarca@gmail.com</p>
                <span className="text-xs text-muted-foreground mb-3">{t.finalCta.card2.or}</span>
                <a
                  href="https://wa.me/525545925827?text=Hola%2C%20soy%20comprador%20de%20%5Bempresa%5D.%20Requiero%20cotizaci%C3%B3n%20de%20%5Bmedida%20y%20gramaje%5D%2C%20volumen%20estimado%20%5Bcantidad%5D.%20%C2%BFPueden%20enviarme%20propuesta%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-full border-2 border-[#25D366] hover:bg-foreground/80 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.43l-.38-.22-3.67.96.98-3.58-.25-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H8.1c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                  </svg>
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

export default BolsasCatalogo;
