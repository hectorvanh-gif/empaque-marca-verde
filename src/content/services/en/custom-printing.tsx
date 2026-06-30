import { FileImage, Palette, CheckCircle2, Clock4 } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import printImg from "@/assets/carousel/detail-1.jpg";

export const customPrintingEn: ProductCategoryContent = {
  helmetTitle: "Custom Paper Bag Printing | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Custom Printing", path: "/services/custom-printing" },
  ],
  hero: {
    eyebrow: "Services · Custom Printing",
    h1: "Custom Logo Printing on Paper Bags",
    h1Highlight: "on Paper Bags",
    description:
      "Up to 2 colors, applied to any bag in our catalog. We work from your vector artwork and send a digital proof before running your full order — so there are no surprises at delivery.",
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to know more about your custom printing process. I have my logo ready and want to discuss specs and pricing.",
    image: printImg,
    imageAlt: "Custom printing detail on paper bag",
  },
  intro: {
    eyebrow: "What you need to send us",
    heading: "Artwork Requirements",
    paragraphs: [
      "Vector files (AI or PDF) print cleanest at any size. If you only have a low-resolution logo, send it anyway — we'll tell you if it needs to be redrawn before we can print it.",
      "If you have Pantone references for your brand colors, include them. We print up to 2 colors per design, and matching to Pantone gets us as close as possible to your exact brand color.",
    ],
  },
  useCases: {
    eyebrow: "The process",
    heading: "From Artwork to Finished Bag",
    items: [
      { icon: FileImage, title: "Send your artwork", description: "Vector file, AI or PDF, with Pantone colors if available." },
      { icon: Palette, title: "We set up the print", description: "Up to 2 colors, positioned on the bag size you've chosen." },
      { icon: CheckCircle2, title: "You approve a proof", description: "A digital proof goes out before we run the full order." },
      { icon: Clock4, title: "Production & delivery", description: "Printed orders take longer than plain bags — we'll confirm your timeline upfront." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions About Custom Printing",
    items: [
      { question: "What file format works best?", answer: "Vector files — AI or PDF. They scale cleanly to any bag size without losing quality." },
      { question: "How many colors can you print?", answer: "Up to 2 colors per design. We use Pantone references to match your brand colors as closely as possible." },
      { question: "Do you charge extra for first-time setup?", answer: "Tell us about your order and we'll lay out the full pricing — including any setup involved for a new design — in your quote." },
      { question: "Can the same design be reused for reorders?", answer: "Yes, once we have your design approved and set up, reorders go faster since the design work is already done." },
      { question: "Which bag types can be printed?", answer: "Any bag in our catalog — kraft, white, food, delivery or retail. Choose the base bag first, then we apply your printing." },
    ],
  },
  productSchema: {
    name: "Custom Paper Bag Printing Service",
    description: "Custom logo printing service for paper bags, up to 2 colors, manufactured in Mexico. Works with vector artwork and Pantone color matching.",
    category: "Printing service",
    additionalProperty: [{ name: "Printing", value: "Up to 2 colors" }],
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to know more about your custom printing process. I have my logo ready and want to discuss specs and pricing.",
    waCorpText: "Hi, I'm a buyer at [company]. I have artwork ready and need a quote for custom printed bags, [bag type, size and volume].",
    emailSubject: "Custom printing service — quote request",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I have artwork ready and need a quote for custom printed bags, [bag type, size and volume].\n\nThanks.",
    copy: {
      card1Eyebrow: "First time printing your logo on bags?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us the bag type, size and your logo file — we'll walk you through the process.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Corporate buyer with artwork ready?",
      card2Title: "Send us your specification",
      card2Desc: "If you already have your logo file, size and volume, we'll send a formal proposal.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
