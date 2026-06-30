import { Package, Users, Clock4, Gift } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import samplesImg from "@/assets/catalog/hero-catalog.jpg";

export const samplesEn: ProductCategoryContent = {
  helmetTitle: "Request Paper Bag Samples | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Samples", path: "/samples" },
  ],
  hero: {
    eyebrow: "Samples",
    h1: "Request Paper Bag Samples",
    h1Highlight: "Paper Bag Samples",
    description:
      "Before placing a bulk order, see and feel the paper. Tell us which lines you're interested in — kraft, white, food, delivery — and we'll arrange samples for you.",
    ctaLabel: "Request Samples",
    waText: "Hi, I'd like to request samples before placing a bulk order. I'm interested in [kraft / white / food / custom printed] bags.",
    image: samplesImg,
    imageAlt: "Sample paper bags catalog",
  },
  intro: {
    eyebrow: "Why request samples",
    heading: "See the Paper Before You Commit to Volume",
    paragraphs: [
      "We understand that ordering hundreds or thousands of bags is easier to decide on once you've held the actual paper, checked the gusset, and seen how your logo would print.",
      "Tell us which lines you want to see — kraft, white, a food bag, or a custom printed example — and we'll arrange it through your preferred channel.",
    ],
  },
  useCases: {
    eyebrow: "Who this is for",
    heading: "Built for the Pre-Purchase Decision",
    items: [
      { icon: Users, title: "Procurement Teams", description: "Validate the product before signing off on a bulk purchase order." },
      { icon: Gift, title: "Brand Managers", description: "Check how your logo and colors look on the actual paper." },
      { icon: Package, title: "New Accounts", description: "First-time buyers who want to confirm quality before committing." },
      { icon: Clock4, title: "Recurring Buyers Trying a New Line", description: "Existing customers evaluating a different bag type." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Samples",
    items: [
      { question: "What's included in a sample request?", answer: "Tell us which lines interest you and we'll arrange the relevant samples — kraft, white, food bag, or a custom printed example." },
      { question: "Is there a cost for samples?", answer: "Ask us when you request samples — we'll confirm cost and delivery details for your specific case." },
      { question: "How long does it take to receive samples?", answer: "We'll confirm a delivery timeline once we know what you're requesting and your location." },
      { question: "What happens after I review the samples?", answer: "If you're ready to move forward, we'll walk you through placing your first order — whether it's a bulk order or a recurring monthly supply." },
    ],
  },
  productSchema: {
    name: "Paper Bag Samples",
    description: "Sample request for paper bags manufactured in Mexico — kraft, white, food and custom printed examples available before placing a wholesale order.",
    category: "Sample request",
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to request samples before placing a bulk order. I'm interested in [kraft / white / food / custom printed] bags.",
    waCorpText: "Hi, I'm a buyer at [company]. I'd like to request samples for procurement review before placing a wholesale order.",
    emailSubject: "Sample request — pre-purchase review",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like to request samples of [bag type(s)] for review before placing a wholesale order.\n\nThanks.",
    copy: {
      card1Eyebrow: "Not sure which line to try first?",
      card1Title: "Tell us about your business",
      card1Desc: "We'll recommend which samples make the most sense to start with.",
      card1Cta: "Request Samples",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Procurement team or known specifications?",
      card2Title: "Send us your request",
      card2Desc: "Tell us exactly which lines and quantities of samples you need.",
      card2CtaEmail: "Request samples by email",
      card2CtaWa: "Request Samples",
    },
  },
};
