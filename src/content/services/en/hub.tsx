import { Factory, Printer, FileText, Pencil, Truck } from "lucide-react";
import type { HubPageContent } from "@/components/marketing/HubPage";

export const servicesHubEn: HubPageContent = {
  helmetTitle: "Manufacturing Services | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
  ],
  hero: {
    eyebrow: "Services",
    h1: "Paper Bag Manufacturing Services",
    h1Highlight: "Manufacturing Services",
    description:
      "We manufacture directly in Mexico City — no reseller markup, no middleman. Two services: full manufacturing and custom logo printing.",
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to know more about your manufacturing and custom printing services.",
  },
  gridEyebrow: "What we offer",
  gridHeading: "Two Services, One Direct Manufacturer",
  cards: [
    { icon: Factory, title: "Manufacturing", description: "Paper bag production from raw material to finished, quality-checked product.", path: "/services/manufacturing" },
    { icon: Printer, title: "Custom Printing", description: "Logo printing up to 2 colors, applied to any bag in our catalog.", path: "/services/custom-printing" },
  ],
  steps: {
    eyebrow: "How we work",
    heading: "From Quote to Delivery",
    description: "Whether you need one batch or a recurring monthly order, the process is the same.",
    items: [
      { icon: FileText, title: "Request a quote", description: "Tell us your project: quantity, size and customization. We reply within 24 hours." },
      { icon: Pencil, title: "Design & approval", description: "We work with you on the design and send a digital proof before production." },
      { icon: Truck, title: "Production & delivery", description: "We manufacture to spec and deliver on the agreed timeline, nationwide in Mexico." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions About Our Services",
    items: [
      { question: "Are you a manufacturer or a reseller?", answer: "We manufacture directly in Mexico City — there's no reseller markup on your order." },
      { question: "Can you handle recurring monthly orders?", answer: "Yes, we work with businesses that need a consistent monthly supply, not just one-off orders." },
      { question: "Do you offer both plain and printed bags?", answer: "Yes — order any bag from our catalog plain, or add custom logo printing up to 2 colors." },
    ],
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to know more about your manufacturing and custom printing services.",
    waCorpText: "Hi, I'm a buyer at [company]. I'd like more information about your manufacturing services and pricing.",
    emailSubject: "Manufacturing services — information request",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like more information about your manufacturing and custom printing services.\n\nThanks.",
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
