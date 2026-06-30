import { ShieldCheck, Factory, ClipboardCheck, MapPin, Repeat } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import industrialImg from "@/assets/carousel/industrial-1.jpg";

export const manufacturingEn: ProductCategoryContent = {
  helmetTitle: "Paper Bag Manufacturer Mexico | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Manufacturing", path: "/services/manufacturing" },
  ],
  hero: {
    eyebrow: "Services · Manufacturing",
    h1: "Paper Bag Manufacturing in Mexico",
    h1Highlight: "in Mexico",
    description:
      "Over a decade manufacturing custom paper bags from our facility in Mexico City. We control raw material, production and quality directly — no reseller in between.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "FSC Certified" }],
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to know more about your manufacturing process and set up a recurring order for my business.",
    image: industrialImg,
    imageAlt: "Paper bag manufacturing process",
  },
  intro: {
    eyebrow: "Direct manufacturer",
    heading: "We Control the Whole Process",
    paragraphs: [
      "From sourcing FSC certified, 100% recycled kraft paper to forming, printing and quality-checking each bag, we manage every step in-house. That's what lets us guarantee consistency between your first order and your fiftieth.",
      "Over a decade in business has meant building processes that hold up at scale — not just for single orders, but for businesses that need the same bag, the same quality, every month.",
    ],
  },
  useCases: {
    eyebrow: "What this means for you",
    heading: "Built for Businesses That Order Again",
    items: [
      { icon: Factory, title: "In-house production", description: "We don't outsource manufacturing — it happens at our facility, start to finish." },
      { icon: ClipboardCheck, title: "Quality control", description: "Every batch is checked before it ships, so what you approved is what you get." },
      { icon: Repeat, title: "Recurring orders", description: "We work with businesses on monthly supply, not just one-time purchases." },
      { icon: MapPin, title: "Nationwide delivery", description: "Shipping anywhere in Mexico from our Mexico City facility." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions About Our Manufacturing",
    items: [
      { question: "Where is your facility located?", answer: "We manufacture from our facility in Mexico City and ship nationwide." },
      { question: "How long have you been manufacturing paper bags?", answer: "Over a decade. We've worked with everything from individual boutiques to corporate buyers placing recurring monthly orders." },
      { question: "Can you set up a recurring monthly supply?", answer: "Yes — tell us your expected monthly volume and we'll set up an ongoing order schedule." },
      { question: "Do you handle quality control before shipping?", answer: "Yes, every batch is checked for consistency before it ships." },
    ],
  },
  productSchema: {
    name: "Paper Bag Manufacturing Service",
    description: "Direct paper bag manufacturing service in Mexico City. FSC certified materials, quality control, and recurring supply agreements for businesses.",
    category: "Manufacturing service",
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to know more about your manufacturing process and set up a recurring order for my business.",
    waCorpText: "Hi, I'm a buyer at [company]. I'd like to discuss a recurring monthly supply agreement. Estimated volume [quantity].",
    emailSubject: "Manufacturing — recurring supply inquiry",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like to discuss setting up a recurring monthly supply agreement, estimated volume [quantity].\n\nThanks.",
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
