import { LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageSEO from "@/components/seo/PageSEO";
import PageHero from "@/components/marketing/PageHero";
import ContentSection from "@/components/marketing/ContentSection";
import UseCasesGrid from "@/components/marketing/UseCasesGrid";
import StatsBar from "@/components/marketing/StatsBar";
import FAQAccordion from "@/components/marketing/FAQAccordion";
import DualCTABlock from "@/components/marketing/DualCTABlock";
import { buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";

export interface AboutPageContent {
  helmetTitle: string;
  breadcrumbs: { label: string; path: string }[];
  hero: { eyebrow: string; h1: string; h1Highlight?: string; description: string; ctaLabel: string; waText: string };
  stats: { value: string; label: string }[];
  story: { eyebrow: string; heading: string; paragraphs: string[] };
  values: { eyebrow: string; heading: string; items: { icon: LucideIcon; title: string; description: string }[] };
  faq: { eyebrow: string; heading: string; items: { question: string; answer: string }[] };
  dualCta: {
    lang: "en" | "es";
    waNewText: string;
    waCorpText: string;
    emailSubject: string;
    emailBody: string;
    copy: {
      card1Eyebrow: string; card1Title: string; card1Desc: string; card1Cta: string; card1Note: string; or: string;
      card2Eyebrow: string; card2Title: string; card2Desc: string; card2CtaEmail: string; card2CtaWa: string;
    };
  };
}

const WA_BASE = "https://wa.me/525545925827";

const AboutPage = ({ content }: { content: AboutPageContent }) => {
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
        <StatsBar stats={content.stats} />
        <ContentSection eyebrow={content.story.eyebrow} heading={content.story.heading} paragraphs={content.story.paragraphs} />
        <UseCasesGrid eyebrow={content.values.eyebrow} heading={content.values.heading} items={content.values.items} />
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

export default AboutPage;
