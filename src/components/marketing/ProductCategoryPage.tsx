import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageSEO from "@/components/seo/PageSEO";
import PageHero from "@/components/marketing/PageHero";
import SpecsTable from "@/components/marketing/SpecsTable";
import UseCasesGrid from "@/components/marketing/UseCasesGrid";
import FAQAccordion from "@/components/marketing/FAQAccordion";
import ContentSection from "@/components/marketing/ContentSection";
import DualCTABlock from "@/components/marketing/DualCTABlock";
import { buildProductSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { LucideIcon } from "lucide-react";

export interface ProductCategoryContent {
  helmetTitle: string;
  breadcrumbs: { label: string; path: string }[];
  hero: {
    eyebrow: string;
    h1: string;
    h1Highlight?: string;
    description: string;
    badges?: { icon: ReactNode; label: string }[];
    ctaLabel: string;
    waText: string;
    image?: string;
    imageAlt?: string;
  };
  intro?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  specs?: {
    eyebrow: string;
    heading: string;
    description: string;
    lines: { label: string; rows: { talla: string; medidas: string; gramaje: string; uso: string; std?: boolean }[] }[];
    headers: { linea: string; talla: string; medidas: string; gramaje: string; uso: string };
    standardTag: string;
    note?: string;
  };
  useCases?: {
    eyebrow: string;
    heading: string;
    items: { icon: LucideIcon; title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { question: string; answer: string }[];
  };
  productSchema: {
    name: string;
    description: string;
    category: string;
    additionalProperty?: { name: string; value: string }[];
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

const ProductCategoryPage = ({ content }: { content: ProductCategoryContent }) => {
  const schemas = [
    buildProductSchema(content.productSchema),
    buildFAQSchema(content.faq.items),
    buildBreadcrumbSchema(content.breadcrumbs),
  ];

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
          badges={content.hero.badges}
          ctaHref={`${WA_BASE}?text=${encodeURIComponent(content.hero.waText)}`}
          ctaLabel={content.hero.ctaLabel}
          image={content.hero.image}
          imageAlt={content.hero.imageAlt}
        />

        {content.intro && (
          <ContentSection
            eyebrow={content.intro.eyebrow}
            heading={content.intro.heading}
            paragraphs={content.intro.paragraphs}
          />
        )}

        {content.specs && (
          <SpecsTable
            eyebrow={content.specs.eyebrow}
            heading={content.specs.heading}
            description={content.specs.description}
            lines={content.specs.lines}
            headers={content.specs.headers}
            standardTag={content.specs.standardTag}
            note={content.specs.note}
          />
        )}

        {content.useCases && (
          <UseCasesGrid eyebrow={content.useCases.eyebrow} heading={content.useCases.heading} items={content.useCases.items} />
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

export default ProductCategoryPage;
