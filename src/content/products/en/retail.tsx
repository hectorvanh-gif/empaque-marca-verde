import { ShieldCheck, Printer, Shirt, Footprints, Store, Gift } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import retailImg from "@/assets/catalog/bolsa-color-grande.jpg";

export const retailEn: ProductCategoryContent = {
  helmetTitle: "Retail Paper Bags Wholesale | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "Retail", path: "/paper-bags/retail" },
  ],
  hero: {
    eyebrow: "Catalog · Retail",
    h1: "Retail Paper Bags — Custom Branded",
    h1Highlight: "Custom Branded",
    description:
      "From small format jewelry bags to jumbo-size bags for bulky garments, our handle and boutique lines cover what a retail floor actually needs — branded, consistent and ready to reorder.",
    badges: [
      { icon: <ShieldCheck className="w-4 h-4" />, label: "FSC Certified" },
      { icon: <Printer className="w-4 h-4" />, label: "2-color printing" },
    ],
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to get a quote for retail paper bags with my logo. My store sells [product type], approximate size [width × height] cm.",
    image: retailImg,
    imageAlt: "Branded retail paper bag",
  },
  intro: {
    eyebrow: "Built for the sales floor",
    heading: "A Bag for Every Store Format",
    paragraphs: [
      "Handle bags from small (14.5 × 21.5 cm) to jumbo (33 × 47 cm) cover jewelry counters, shoe stores, clothing racks and bulky garment purchases — all on the same paper, same print process, same supplier.",
      "Our boutique (no-handle) line adds a more compact, gift-ready format for fashion and premium retail. See the full size chart on our kraft page — all sizes apply across kraft and white finishes.",
    ],
  },
  useCases: {
    eyebrow: "Ideal for",
    heading: "Across the Retail Floor",
    items: [
      { icon: Shirt, title: "Clothing & Fashion", description: "Jumbo and large sizes for folded or hung garments." },
      { icon: Footprints, title: "Footwear", description: "Medium and large sizes sized for shoe boxes." },
      { icon: Store, title: "General Retail & Franchises", description: "Consistent branding across multiple locations." },
      { icon: Gift, title: "Gift & Specialty Stores", description: "Boutique-format bags for a more premium feel." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Retail Bags",
    items: [
      { question: "What size is right for my store?", answer: "It depends on what you sell — tell us your typical product size and we'll recommend a line and size from the full chart." },
      { question: "Can you match our brand colors?", answer: "We print up to 2 colors with Pantone matching to get as close as possible to your brand colors." },
      { question: "Do you supply multiple store locations?", answer: "Yes, we work with franchises and multi-location retailers on recurring orders with consistent branding across every batch." },
      { question: "What's the minimum order for printed retail bags?", answer: "It varies by size — send us your specs and estimated volume and we'll confirm the minimum in your quote." },
    ],
  },
  productSchema: {
    name: "Retail Paper Bags",
    description: "Custom branded retail paper bags manufactured in Mexico, available in handle and boutique lines from small to jumbo sizes.",
    category: "Retail packaging",
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to get a quote for retail paper bags with my logo. My store sells [product type], approximate size [width × height] cm.",
    waCorpText: "Hi, I'm a buyer at [retail chain]. I need a quote for retail bags, estimated volume [quantity]. Could you send me a proposal?",
    emailSubject: "Retail bag quote — corporate purchase",
    emailBody: "Hi,\n\nI'm a buyer at [retail chain]. I'd like a quote for retail paper bags, [size and quantity].\n\nCould you send me a proposal?\n\nThanks.",
    copy: {
      card1Eyebrow: "First time buying bags wholesale?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us about your store and the products you sell — we'll recommend the right line and size.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Retail chain or franchise buyer?",
      card2Title: "Send us your specification",
      card2Desc: "If you already know the size and volume, we'll send a formal proposal for your stores.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
