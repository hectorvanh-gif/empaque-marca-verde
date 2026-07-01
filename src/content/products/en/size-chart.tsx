import type { SpecsPageContent } from "@/components/marketing/SpecsPage";

export const sizeChartEn: SpecsPageContent = {
  helmetTitle: "Paper Bag Size Chart | Measurements | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "Size Chart", path: "/paper-bags/size-chart" },
  ],
  hero: {
    eyebrow: "Standard sizes",
    h1: "Paper Bag Size Chart",
    h1Highlight: "Size Chart",
    description:
      "Standard measurements for all our paper bag lines — handle, delivery, boutique and bottle. All measurements in cm: Width × Height × Gusset. Custom sizes are also available within our production ranges.",
    ctaLabel: "Get a Quote",
    waText:
      "Hi, I'd like a quote for paper bags. The size I need is about [width × height × gusset] cm and I estimate around [quantity] pieces. Can you help me pick the weight?",
  },
  specs: {
    eyebrow: "Standard sizes",
    heading: "Size chart",
    description: "All measurements in cm: Width × Height × Gusset. Base weight can be adjusted based on the content's weight.",
    headers: { linea: "Line", talla: "Size", medidas: "Measurements (cm)", gramaje: "Base weight", uso: "Recommended use" },
    standardTag: "Standard",
    lines: [
      {
        label: "Handle Bags",
        rows: [
          { talla: "Small", medidas: "14.5 × 21.5 × 7.5", gramaje: "70–80 g/m²", uso: "Jewelry, cosmetics, small accessories" },
          { talla: "Medium", medidas: "19 × 26.5 × 8", gramaje: "80–90 g/m²", uso: "Light clothing, small footwear, pharmacy", std: true },
          { talla: "Large", medidas: "30 × 39 × 18", gramaje: "100–120 g/m²", uso: "General retail, footwear, clothing" },
          { talla: "Jumbo", medidas: "33 × 47 × 12", gramaje: "110–130 g/m²", uso: "Boutique, bulky items, garments" },
        ],
      },
      { label: "Delivery", rows: [{ talla: "One size", medidas: "30 × 40 × 18", gramaje: "90–100 g/m²", uso: "Restaurants, food delivery, prepared food" }] },
      {
        label: "Boutique (no handle)",
        rows: [
          { talla: "Small", medidas: "20.5 × 14 × 9", gramaje: "60–70 g/m²", uso: "Jewelry, perfumery, fine items" },
          { talla: "Medium", medidas: "30 × 22 × 12", gramaje: "80–90 g/m²", uso: "Fashion, cosmetics, wine", std: true },
          { talla: "Large", medidas: "33 × 26 × 14.5", gramaje: "90–100 g/m²", uso: "Premium retail, folded clothing" },
        ],
      },
      { label: "Bottle", rows: [{ talla: "One size", medidas: "12 × 35 × 9", gramaje: "100–120 g/m²", uso: "Wine, liquor, gourmet oils — min. 100g recommended" }] },
    ],
    note:
      "Available weights: 60 to 160 g/m². Custom sizes available within width 12–22 cm, height 22.5–47 cm, gusset 6–18 cm — minimum order varies by size and weight, contact us for a quote.",
  },
  dualCta: {
    lang: "en",
    waNewText:
      "Hi, I'd like a quote for paper bags. My business is [type of business or product I sell], the bag I need is about [width × height] cm and I estimate around [quantity] pieces. Can you help me pick the weight?",
    waCorpText:
      "Hi, I'm a buyer at [company]. I need a quote for [size and weight], estimated volume [quantity]. Can you send me a proposal?",
    emailSubject: "Paper bag quote — sizes",
    emailBody:
      "Hi,\n\nI'm a buyer at [company]. I need a quote for [line, size and weight], estimated volume [quantity].\n\nCan you send me a proposal?\n\nThanks.",
    copy: {
      card1Eyebrow: "First time buying bags wholesale?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us about your business and approximate size — we'll recommend the ideal line, size and weight.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Corporate buyer or department store?",
      card2Title: "Send us your specification",
      card2Desc: "If you already know the size, weight and volume, we'll send you a formal proposal through your preferred channel.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
