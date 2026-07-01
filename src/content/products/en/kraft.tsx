import { ShieldCheck, Printer, ShoppingBag, Wine, Store, Truck } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import catKraft from "@/assets/catalog/cat-kraft-reciclado.jpg";

export const kraftEn: ProductCategoryContent = {
  helmetTitle: "Kraft Paper Bags Wholesale | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "Kraft", path: "/paper-bags/kraft" },
  ],
  hero: {
    eyebrow: "Catalog · Kraft Bags",
    h1: "Kraft Paper Bags — Wholesale, Made in Mexico",
    h1Highlight: "Made in Mexico",
    description:
      "100% recycled kraft paper bags, FSC certified, manufactured in Mexico City. Four product lines — handle, delivery, boutique and bottle — with or without your logo printed.",
    badges: [
      { icon: <ShieldCheck className="w-4 h-4" />, label: "FSC Certified" },
      { icon: <Printer className="w-4 h-4" />, label: "2-color printing" },
    ],
    ctaLabel: "Get a Quote",
    waText:
      "Hi, I'd like to get a quote for kraft paper bags. My business is [type of business], the bag I need is approximately [width × height] cm and I estimate around [quantity] pieces.",
    image: catKraft,
    imageAlt: "Recycled kraft paper bags",
  },
  useCases: {
    eyebrow: "Who uses kraft",
    heading: "Built for Every Type of Retail",
    items: [
      { icon: ShoppingBag, title: "Boutiques & Fashion", description: "Branded handle bags that double as a take-home ad for your store." },
      { icon: Truck, title: "Restaurants & Delivery", description: "Grease-resistant kraft for takeout and food delivery orders." },
      { icon: Store, title: "Department & Retail Stores", description: "Large-volume orders with consistent quality across every batch." },
      { icon: Wine, title: "Wine & Gourmet Shops", description: "Bottle-format bags sized for wine, liquor and gourmet oils." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Kraft Bags",
    items: [
      { question: "Can you print my logo on kraft paper?", answer: "Yes. We print up to 2 colors directly on kraft paper. Send us your logo file and we'll send a digital proof before production." },
      { question: "What's the minimum order quantity?", answer: "It varies by size, weight and whether the bag is printed or plain. Tell us your specs and estimated volume and we'll confirm the minimum in your quote." },
      { question: "Do you carry kraft in different sizes?", answer: "Yes — four lines (handle, delivery, boutique, bottle) across small to jumbo sizes, plus custom sizing within our standard production range." },
      { question: "Is kraft paper recyclable?", answer: "Yes, our kraft paper is 100% recycled and FSC certified, and the bags themselves are recyclable and biodegradable." },
    ],
  },
  productSchema: {
    name: "Kraft Paper Bags",
    description:
      "100% recycled kraft paper bags manufactured in Mexico. Available in handle, delivery, boutique and bottle lines, in small to jumbo sizes, weights from 60 to 160 g/m². Customizable with 2-color logo printing and custom sizing.",
    category: "Custom paper bags",
    additionalProperty: [
      { name: "Weight range", value: "60 to 160 g/m²" },
      { name: "Certification", value: "FSC" },
      { name: "Printing", value: "2-color" },
    ],
  },
  dualCta: {
    lang: "en",
    waNewText:
      "Hi, I'd like to get a quote for kraft paper bags. My business is [type of business], the bag I need is approximately [width × height] cm and I estimate around [quantity] pieces. Can you help me choose the right weight?",
    waCorpText:
      "Hi, I'm a buyer at [company]. I need a quote for [size and weight], estimated volume [quantity]. Could you send me a proposal?",
    emailSubject: "Kraft bag quote — corporate purchase",
    emailBody:
      "Hi,\n\nI'm a buyer at [company]. I need a quote for [line, size and weight], estimated volume [quantity].\n\nCould you send me a proposal?\n\nThanks.",
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
