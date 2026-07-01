import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageSEO from "@/components/seo/PageSEO";
import PageHero from "@/components/marketing/PageHero";
import FAQAccordion from "@/components/marketing/FAQAccordion";
import StepsList from "@/components/marketing/StepsList";
import DualCTABlock from "@/components/marketing/DualCTABlock";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";

export interface HubCard {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
}

export interface HubPageContent {
  helmetTitle: string;
  breadcrumbs: { label: string; path: string }[];
  hero: {
    eyebrow: string;
    h1: string;
    h1Highlight?: string;
    description: string;
    ctaLabel: string;
    waText: string;
  };
  featured?: {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    path: string;
  };
  gridEyebrow: string;
  gridHeading: string;
  cards: HubCard[];
  steps?: {
    eyebrow: string;
    heading: string;
    description: string;
    items: { icon: LucideIcon; title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { question: string; answer: string }[];
  };
  dualCta: {
    lang: "en" | "es";
    waNewText: string;
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
  };
}

const WA_BASE = "https://wa.me/525545925827";

const HubPage = ({ content }: { content: HubPageContent }) => {
  const schemas = [buildFAQSchema(content.faq.items), buildBreadcrumbSchema(content.breadcrumbs)];

  return (
    <>
      <PageSEO title={content.helmetTitle} schemas={schemas} />
      <Header />
      <main className="min-h-screen bg-background">
        <PageHero
          breadcrumbs={content.breadcrumbs}
          eyebrow={content.hero.eyebrow}
          h1={content.hero.h1}
          h1Highlight={content.hero.h1Highlight}
          description={content.hero.description}
          ctaHref={`${WA_BASE}?text=${encodeURIComponent(content.hero.waText)}`}
          ctaLabel={content.hero.ctaLabel}
        />

        {content.featured && (
          <section className="pt-8 md:pt-10 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
              <Link
                to={content.featured.path}
                className="group flex flex-col sm:flex-row items-center gap-5 p-6 md:p-7 bg-primary/5 border-2 border-primary/20 rounded-2xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <div className="w-14 h-14 shrink-0 bg-primary rounded-xl flex items-center justify-center">
                  <content.featured.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-1">
                    {content.featured.eyebrow}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl text-foreground mb-1">{content.featured.title}</h2>
                  <p className="text-muted-foreground text-sm">{content.featured.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full group-hover:gap-3 transition-all whitespace-nowrap">
                  {content.featured.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                {content.gridEyebrow}
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">{content.gridHeading}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {content.cards.map((card) => (
                <Link
                  key={card.path}
                  to={card.path}
                  className="group flex flex-col gap-4 p-6 bg-card rounded-xl shadow-card border border-border/20 hover:shadow-elevated hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-secondary rounded-lg flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-foreground mb-1">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {content.steps && (
          <StepsList
            eyebrow={content.steps.eyebrow}
            heading={content.steps.heading}
            description={content.steps.description}
            steps={content.steps.items}
          />
        )}

        <FAQAccordion eyebrow={content.faq.eyebrow} heading={content.faq.heading} items={content.faq.items} />

        <DualCTABlock
          lang={content.dualCta.lang}
          waNewText={content.dualCta.waNewText}
          waCorpText={content.dualCta.waCorpText}
          emailSubject={content.dualCta.emailSubject}
          emailBody={content.dualCta.emailBody}
          copy={content.dualCta.copy}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HubPage;
