import { Leaf, Target, Factory, Heart } from "lucide-react";
import type { AboutPageContent } from "@/components/marketing/AboutPage";

export const aboutEn: AboutPageContent = {
  helmetTitle: "About Us | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
  ],
  hero: {
    eyebrow: "Who We Are",
    h1: "About BolsasMX — Paper Bag Manufacturer in Mexico",
    h1Highlight: "in Mexico",
    description:
      "BolsasMX (La Bolsa de Tu Marca) has spent over a decade manufacturing custom paper bags from our facility in Mexico City — for boutiques, restaurants, retailers and corporate accounts alike.",
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to learn more about BolsasMX and request a quote.",
  },
  stats: [
    { value: "10+", label: "Years in business" },
    { value: "FSC", label: "Certified paper" },
    { value: "100%", label: "Recycled kraft" },
    { value: "24h", label: "Quote response" },
  ],
  story: {
    eyebrow: "Our story",
    heading: "Manufacturing With a Purpose",
    paragraphs: [
      "We're a Mexican company specialized in custom paper bag manufacturing. From the start, we've worked toward one clear goal: packaging that doesn't just protect a product, but communicates the identity of the brand carrying it.",
      "We believe in a responsible business model where quality, customization and environmental care go hand in hand. Every bag we manufacture is an extension of our clients' identity — from independent boutiques to corporate buyers placing recurring orders.",
    ],
  },
  values: {
    eyebrow: "What we stand for",
    heading: "Our Values",
    items: [
      { icon: Leaf, title: "Sustainability", description: "FSC certified, 100% recycled kraft paper. Our bags are recyclable and biodegradable." },
      { icon: Target, title: "Precision", description: "Every detail counts — we maintain quality control across every stage of production." },
      { icon: Factory, title: "Direct Manufacturing", description: "We control the entire process in-house, with no reseller markup on your order." },
      { icon: Heart, title: "Commitment", description: "Over a decade helping brands communicate their identity through packaging." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About BolsasMX",
    items: [
      { question: "Where are you located?", answer: "We manufacture from our facility in Mexico City and ship nationwide within Mexico." },
      { question: "Are you a manufacturer or a distributor?", answer: "We manufacture directly — there's no reseller markup on your order." },
      { question: "Is your paper actually recyclable?", answer: "Yes, our kraft paper is FSC certified and 100% recycled, and the finished bags are recyclable and biodegradable." },
      { question: "Do you work with both small businesses and large accounts?", answer: "Yes — from individual boutiques to corporate buyers with recurring monthly orders." },
    ],
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to learn more about BolsasMX and request a quote. My business is [type of business].",
    waCorpText: "Hi, I'm a buyer at [company]. I'd like more information about BolsasMX as a potential supplier.",
    emailSubject: "About BolsasMX — supplier inquiry",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like more information about BolsasMX as a potential supplier.\n\nThanks.",
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
