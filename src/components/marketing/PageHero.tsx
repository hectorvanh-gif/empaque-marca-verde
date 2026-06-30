import { ReactNode } from "react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

interface PageHeroProps {
  breadcrumbs: { label: string; path: string }[];
  eyebrow: string;
  h1: string;
  h1Highlight?: string;
  description: string;
  badges?: { icon: ReactNode; label: string }[];
  ctaHref: string;
  ctaLabel: string;
  image?: string;
  imageAlt?: string;
}

const IconWA = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.43l-.38-.22-3.67.96.98-3.58-.25-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51H8.1c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
  </svg>
);

const PageHero = ({
  breadcrumbs,
  eyebrow,
  h1,
  h1Highlight,
  description,
  badges,
  ctaHref,
  ctaLabel,
  image,
  imageAlt,
}: PageHeroProps) => (
  <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-sage">
    <div className="container mx-auto px-6">
      <Breadcrumbs items={breadcrumbs} />
      <div className={`grid gap-10 items-center max-w-6xl mx-auto ${image ? "md:grid-cols-2" : ""}`}>
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            {eyebrow}
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
            {h1Highlight ? (
              <>
                {h1.replace(h1Highlight, "").trimEnd()} <span className="text-primary">{h1Highlight}</span>
              </>
            ) : (
              h1
            )}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border bg-green-50 text-green-800 border-green-200"
                >
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          )}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base"
          >
            <IconWA />
            {ctaLabel}
          </a>
        </div>
        {image && (
          <div className="aspect-square bg-card rounded-2xl shadow-card overflow-hidden p-6 flex items-center justify-center">
            <img src={image} alt={imageAlt ?? h1} className="max-w-full max-h-full object-contain" />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
