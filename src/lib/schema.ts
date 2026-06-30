import { SITE_URL } from "@/content/pageRegistry";

const ORG = {
  "@type": "Organization",
  name: "La Bolsa de Tu Marca",
  url: SITE_URL,
};

export const buildProductSchema = (opts: {
  name: string;
  description: string;
  category: string;
  additionalProperty?: { name: string; value: string }[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: opts.name,
  image: `${SITE_URL}/og-image.png`,
  description: opts.description,
  brand: { "@type": "Brand", name: "La Bolsa de Tu Marca" },
  material: "Papel kraft reciclado",
  category: opts.category,
  manufacturer: ORG,
  additionalProperty: (opts.additionalProperty ?? []).map((p) => ({
    "@type": "PropertyValue",
    name: p.name,
    value: p.value,
  })),
});

export const buildFAQSchema = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export const buildBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});
