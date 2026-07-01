import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LucideIcon, Ruler, ArrowRight } from "lucide-react";
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

  // Muestra el acceso a la tabla de medidas solo en páginas de bolsas de papel.
  const isEs = content.dualCta.lang === "es";
  const showSizes = content.breadcrumbs.some(
    (b) => b.path.includes("bolsas-papel") || b.path.includes("paper-bags")
  );
  const sizesPath = isEs ? "/es/bolsas-papel/tabla-de-tamanos" : "/paper-bags/size-chart";
  const sizesCopy = isEs
    ? {
        eyebrow: "Aplican a cualquier tipo de bolsa",
        title: "¿Buscas las medidas?",
        desc: "Consulta la tabla de tamaños y gramajes estándar — sirven para todas nuestras líneas de bolsas.",
        cta: "Ver medidas",
      }
    : {
        eyebrow: "Applies to any type of bag",
        title: "Looking for sizes?",
        desc: "Check the standard size and weight chart — it applies to all our bag lines.",
        cta: "View sizes",
      };

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

        {showSizes && (
          <section className="pt-8 md:pt-10 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
              <Link
                to={sizesPath}
                className="group flex flex-col sm:flex-row items-center gap-5 p-6 md:p-7 bg-primary/5 border-2 border-primary/20 rounded-2xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <div className="w-14 h-14 shrink-0 bg-primary rounded-xl flex items-center justify-center">
                  <Ruler className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-1">
                    {sizesCopy.eyebrow}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl text-foreground mb-1">{sizesCopy.title}</h2>
                  <p className="text-muted-foreground text-sm">{sizesCopy.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full group-hover:gap-3 transition-all whitespace-nowrap">
                  {sizesCopy.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>
        )}

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
