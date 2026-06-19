import { useLanguage } from "@/contexts/LanguageContext";

const WA_NEW = "https://wa.me/525545925827?text=Hola%2C%20quiero%20cotizar%20bolsas%20de%20papel%20kraft.%20Mi%20negocio%20es%20%5Btipo%20de%20negocio%20o%20producto%20que%20vendo%5D%2C%20la%20bolsa%20que%20necesito%20es%20de%20aproximadamente%20%5Bancho%20%C3%97%20alto%5D%20cm%20y%20calculo%20unas%20%5Bcantidad%5D%20piezas.%20%C2%BFMe%20pueden%20ayudar%20a%20elegir%20el%20gramaje%3F";
const WA_B2B = "https://wa.me/525545925827?text=Hola%2C%20soy%20comprador%20de%20%5Bempresa%5D.%20Requiero%20cotizaci%C3%B3n%20de%20%5Bmedida%20y%20gramaje%5D%2C%20volumen%20estimado%20%5Bcantidad%5D.%20%C2%BFPueden%20enviarme%20propuesta%3F";
const EMAIL  = "mailto:labolsadetumarca@gmail.com?subject=Cotizaci%C3%B3n%20bolsas%20kraft%20%E2%80%94%20compra%20corporativa&body=Hola%2C%0A%0ASoy%20comprador%20de%20%5Bempresa%5D.%20Requiero%20cotizaci%C3%B3n%20de%20%5Bl%C3%ADnea%2C%20medida%20y%20gramaje%5D%2C%20volumen%20estimado%20%5Bcantidad%5D.%0A%0A%C2%BFPueden%20enviarme%20propuesta%3F%0A%0AGracias.";

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

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight">
              {t.finalCta.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 items-center">

            {/* Minorista / cliente nuevo */}
            <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center flex flex-col items-center border border-primary-foreground/20">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-2">
                {t.finalCta.card1.eyebrow}
              </p>
              <h3 className="font-display text-2xl text-primary-foreground mb-3">
                {t.finalCta.card1.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
                {t.finalCta.card1.desc}
              </p>
              <a
                href={WA_NEW}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                <IconWA />
                {t.finalCta.card1.cta}
              </a>
              <p className="text-xs text-primary-foreground/50 mt-3">
                {t.finalCta.card1.note} <strong className="text-primary-foreground/70">55 4592 5827</strong>
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:flex flex-col items-center gap-3 text-primary-foreground/30 text-xs px-6">
              <div className="w-px h-16 bg-primary-foreground/20" />
              <span>{t.finalCta.card2.or}</span>
              <div className="w-px h-16 bg-primary-foreground/20" />
            </div>
            <div className="md:hidden flex items-center gap-3 text-primary-foreground/30 text-xs my-4">
              <div className="h-px flex-1 bg-primary-foreground/20" />
              <span>{t.finalCta.card2.or}</span>
              <div className="h-px flex-1 bg-primary-foreground/20" />
            </div>

            {/* Corporativo */}
            <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center flex flex-col items-center border border-primary-foreground/20">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-2">
                {t.finalCta.card2.eyebrow}
              </p>
              <h3 className="font-display text-2xl text-primary-foreground mb-3">
                {t.finalCta.card2.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
                {t.finalCta.card2.desc}
              </p>
              <a
                href={EMAIL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground text-primary font-semibold rounded-full hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm mb-3"
              >
                <IconMail />
                {t.finalCta.card2.ctaEmail}
              </a>
              <p className="text-xs text-primary-foreground/50 mb-3">
                labolsadetumarca@gmail.com
              </p>
              <span className="text-xs text-primary-foreground/30 mb-3">{t.finalCta.card2.or}</span>
              <a
                href={WA_B2B}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-primary-foreground font-semibold rounded-full border-2 border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <IconWA />
                {t.finalCta.card2.ctaWa}
              </a>
              <p className="text-xs text-primary-foreground/50 mt-3">
                <strong className="text-primary-foreground/70">55 4592 5827</strong>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
