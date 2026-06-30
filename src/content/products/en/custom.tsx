import { Printer, FileImage, CheckCircle2, Palette } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import customImg from "@/assets/catalog/cat-kraft-impresion.jpg";

export const customEn: ProductCategoryContent = {
  helmetTitle: "Custom Printed Paper Bags | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "Custom Printed", path: "/paper-bags/custom" },
  ],
  hero: {
    eyebrow: "Catalog · Custom Printed",
    h1: "Custom Printed Paper Bags — Your Logo, Any Volume",
    h1Highlight: "Your Logo, Any Volume",
    description:
      "Logo printing up to 2 colors, applied across our full catalog — kraft, white, food, delivery and retail bags. Same paper, same sizes, with your brand on every piece.",
    badges: [{ icon: <Printer className="w-4 h-4" />, label: "2-color printing" }],
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to get a quote for custom printed paper bags with my logo. Bag type [kraft/white/food/delivery], size [width × height] cm, estimated volume [quantity].",
    image: customImg,
    imageAlt: "Custom logo printed on kraft paper bag",
  },
  intro: {
    eyebrow: "How it works",
    heading: "From Your Logo File to a Finished Bag",
    paragraphs: [
      "Custom printing applies to any bag in our catalog — kraft, white, food, delivery or retail — so you choose the line and size first, then we apply your branding to it.",
      "We print up to 2 colors and work from vector artwork (AI or PDF) to keep edges sharp and colors consistent across the full run. You'll see a digital proof before we go to production.",
    ],
  },
  useCases: {
    eyebrow: "What we need from you",
    heading: "Artwork & Production Process",
    items: [
      { icon: FileImage, title: "Vector artwork", description: "Send your logo as AI or PDF, with Pantone colors if you have them." },
      { icon: Palette, title: "Up to 2 colors", description: "We print up to 2 colors per design for consistent results at volume." },
      { icon: CheckCircle2, title: "Digital proof first", description: "You approve a proof before we run the full order." },
      { icon: Printer, title: "Applies to any line", description: "Kraft, white, food, delivery or retail bags — pick the base bag, then print." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Custom Printing",
    items: [
      { question: "What file format do you need?", answer: "Vector files — AI or PDF — work best. If you only have a low-resolution logo, send it anyway and we'll let you know if it needs to be redrawn." },
      { question: "Do I see a proof before production?", answer: "Yes, we send a digital proof for approval before running the full order." },
      { question: "Can you match our exact brand color?", answer: "We work with Pantone references to get as close as possible to your brand color within a 2-color print." },
      { question: "What's the minimum order for custom printed bags?", answer: "It's higher than for plain bags and varies by size — tell us the bag type and your estimated volume for an exact number." },
      { question: "How much longer does printing add to production time?", answer: "Printed orders take longer than plain bags because of the proofing step — ask us for a timeline once we know your order details." },
    ],
  },
  productSchema: {
    name: "Custom Printed Paper Bags",
    description: "Custom logo printing, up to 2 colors, applied across kraft, white, food, delivery and retail paper bags manufactured in Mexico.",
    category: "Custom paper bags",
    additionalProperty: [{ name: "Printing", value: "Up to 2 colors" }],
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to get a quote for custom printed paper bags with my logo. Bag type [kraft/white/food/delivery], size [width × height] cm, estimated volume [quantity].",
    waCorpText: "Hi, I'm a buyer at [company]. I need a quote for custom printed bags, [bag type, size and quantity]. Could you send me a proposal?",
    emailSubject: "Custom printed bag quote — corporate purchase",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like a quote for custom printed paper bags, [bag type, size and estimated volume].\n\nCould you send me a proposal?\n\nThanks.",
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
