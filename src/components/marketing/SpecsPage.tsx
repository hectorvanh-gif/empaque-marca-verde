import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageSEO from "@/components/seo/PageSEO";
import PageHero from "@/components/marketing/PageHero";
import SpecsTable from "@/components/marketing/SpecsTable";
import DualCTABlock from "@/components/marketing/DualCTABlock";
import { buildBreadcrumbSchema } from "@/lib/schema";

export interface SpecsPageContent {
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
  specs: {
    eyebrow: string;
    heading: string;
    description: string;
    lines: { label: string; rows: { talla: string; medidas: string; gramaje: string; uso: string; std?: boolean }[] }[];
    headers: { linea: string; talla: string; medidas: string; gramaje: string; uso: string };
    standardTag: string;
    note?: string;
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

const SpecsPage = ({ content }: { content: SpecsPageContent }) => {
  const schemas = [buildBreadcrumbSchema(content.breadcrumbs)];

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

        <SpecsTable
          eyebrow={content.specs.eyebrow}
          heading={content.specs.heading}
          description={content.specs.description}
          lines={content.specs.lines}
          headers={content.specs.headers}
          standardTag={content.specs.standardTag}
          note={content.specs.note}
        />

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

export default SpecsPage;
