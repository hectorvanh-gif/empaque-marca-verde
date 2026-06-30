const IconWA = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.43l-.38-.22-3.67.96.98-3.58-.25-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H8.1c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
  </svg>
);
const IconMail = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WA_BASE = "https://wa.me/525545925827";

interface DualCTABlockProps {
  lang: "en" | "es";
  /** Texto del mensaje precargado de WhatsApp para comprador nuevo (sin codificar) */
  waNewText: string;
  /** Texto del mensaje precargado de WhatsApp para comprador corporativo */
  waCorpText: string;
  emailSubject: string;
  emailBody: string;
  copy: {
    card1Eyebrow: string;
    card1Title: string;
    card1Desc: string;
    card1Cta: string;
    card1Note: string;
    or: string;
    card2Eyebrow: string;
    card2Title: string;
    card2Desc: string;
    card2CtaEmail: string;
    card2CtaWa: string;
  };
}

const DualCTABlock = ({ waNewText, waCorpText, emailSubject, emailBody, copy }: DualCTABlockProps) => {
  const waNew = `${WA_BASE}?text=${encodeURIComponent(waNewText)}`;
  const waCorp = `${WA_BASE}?text=${encodeURIComponent(waCorpText)}`;
  const email = `mailto:labolsadetumarca@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-6 items-center bg-card rounded-2xl shadow-card border border-border/20 overflow-hidden">
          <div className="p-8 md:p-10 text-center flex flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{copy.card1Eyebrow}</p>
            <h3 className="font-display text-2xl text-foreground mb-3">{copy.card1Title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">{copy.card1Desc}</p>
            <a
              href={waNew}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              <IconWA />
              {copy.card1Cta}
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              {copy.card1Note} <strong>55 4592 5827</strong>
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center gap-3 text-muted-foreground text-xs py-8">
            <div className="w-px h-16 bg-border" />
            <span>{copy.or}</span>
            <div className="w-px h-16 bg-border" />
          </div>
          <div className="md:hidden flex items-center gap-3 text-muted-foreground text-xs px-8">
            <div className="h-px flex-1 bg-border" />
            <span>{copy.or}</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="p-8 md:p-10 text-center flex flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{copy.card2Eyebrow}</p>
            <h3 className="font-display text-2xl text-foreground mb-3">{copy.card2Title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">{copy.card2Desc}</p>
            <a
              href={email}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm mb-3"
            >
              <IconMail />
              {copy.card2CtaEmail}
            </a>
            <p className="text-xs text-muted-foreground mb-3">labolsadetumarca@gmail.com</p>
            <span className="text-xs text-muted-foreground mb-2">{copy.or}</span>
            <a
              href={waCorp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 border-2 border-[#25D366] shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              <IconWA />
              {copy.card2CtaWa}
            </a>
            <p className="text-xs text-muted-foreground mt-3">
              <strong>55 4592 5827</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTABlock;
