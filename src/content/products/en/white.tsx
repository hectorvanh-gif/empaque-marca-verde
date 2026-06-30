import { ShieldCheck, Printer, Gem, Shirt, Gift, Sparkles } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import whiteImg from "@/assets/catalog/bolsa-blanca-grande.jpg";

export const whiteEn: ProductCategoryContent = {
  helmetTitle: "White Paper Bags Wholesale | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "White", path: "/paper-bags/white" },
  ],
  hero: {
    eyebrow: "Catalog · White Bags",
    h1: "White Paper Bags — Custom Branded for Retail",
    h1Highlight: "Custom Branded",
    description:
      "White paper bags built for brands that want a premium first impression. Same FSC certified paper, same handle and boutique lines as our kraft range — finished in white for a cleaner, retail-ready look.",
    badges: [
      { icon: <ShieldCheck className="w-4 h-4" />, label: "FSC Certified" },
      { icon: <Printer className="w-4 h-4" />, label: "2-color printing" },
    ],
    ctaLabel: "Get a Quote",
    waText:
      "Hi, I'd like to get a quote for white paper bags with my logo. My business is [type of business], approximate size [width × height] cm, around [quantity] pieces.",
    image: whiteImg,
    imageAlt: "White paper bag with handle",
  },
  intro: {
    eyebrow: "Why white",
    heading: "A Premium Tier for Retail Brands",
    paragraphs: [
      "White paper bags signal a different price point than kraft — they're what department stores, boutiques and cosmetics brands reach for when the bag itself is part of the unboxing experience.",
      "They're built on the same handle and boutique lines available in our kraft catalog, so the same size range applies — see the full chart on our kraft page. The difference is the finish: a clean white surface that makes your logo and colors stand out.",
    ],
  },
  useCases: {
    eyebrow: "Ideal for",
    heading: "Brands That Sell the Unboxing",
    items: [
      { icon: Shirt, title: "Fashion Retail", description: "Folded clothing and accessories in a clean, brand-forward bag." },
      { icon: Gem, title: "Cosmetics & Jewelry", description: "Small to medium sizes for high-margin, gift-style purchases." },
      { icon: Gift, title: "Gift Shops", description: "A white bag reads as a gift before the customer even opens it." },
      { icon: Sparkles, title: "Department Stores", description: "Consistent quality at the volume large retailers need." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About White Bags",
    items: [
      { question: "What sizes are available in white?", answer: "The same handle and boutique line sizes available in kraft — see our full size chart on the kraft page. Tell us the size you need and we'll confirm availability." },
      { question: "Can you print full color on white?", answer: "We print up to 2 colors with Pantone color matching. For more complex designs, talk to us about what's achievable at your volume." },
      { question: "Is white paper also FSC certified?", answer: "Yes, all our paper — kraft or white — comes from FSC certified, 100% recycled sources." },
      { question: "What's the minimum order for white bags?", answer: "It depends on size and whether you need printing. Send us your specs for a quote within 24 hours." },
    ],
  },
  productSchema: {
    name: "White Paper Bags",
    description:
      "Custom white paper bags manufactured in Mexico on FSC certified, 100% recycled paper. Available in handle and boutique lines, customizable with 2-color logo printing.",
    category: "Custom paper bags",
    additionalProperty: [
      { name: "Certification", value: "FSC" },
      { name: "Printing", value: "2-color" },
    ],
  },
  dualCta: {
    lang: "en",
    waNewText:
      "Hi, I'd like to get a quote for white paper bags with my logo. My business is [type of business], approximate size [width × height] cm, around [quantity] pieces.",
    waCorpText:
      "Hi, I'm a buyer at [company]. I need a quote for white bags, [size], estimated volume [quantity]. Could you send me a proposal?",
    emailSubject: "White bag quote — corporate purchase",
    emailBody:
      "Hi,\n\nI'm a buyer at [company]. I need a quote for white paper bags, [size and quantity].\n\nCould you send me a proposal?\n\nThanks.",
    copy: {
      card1Eyebrow: "First time buying bags wholesale?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us about your business and approximate size — we'll recommend the ideal line, size, and weight.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Corporate buyer or department store?",
      card2Title: "Send us your specification",
      card2Desc: "If you already know the size, weight, and volume, we'll send you a formal proposal through your preferred channel.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
