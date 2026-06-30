import { ShieldCheck, Croissant, Store, Building2 } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import breadImg from "@/assets/catalog/bolsa-mediana.jpg";

export const breadEn: ProductCategoryContent = {
  helmetTitle: "Paper Bread Bags Wholesale | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "Bread", path: "/paper-bags/bread" },
  ],
  hero: {
    eyebrow: "Catalog · Bakery",
    h1: "Paper Bread Bags — Wholesale for Bakeries",
    h1Highlight: "Wholesale for Bakeries",
    description:
      "Kraft paper bags sized to your bread line — bolillos, baguettes, sandwich loaves or pan dulce — manufactured in Mexico within our standard size range, with or without ventilation.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "FSC Certified" }],
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to get a quote for paper bags for bread. My bakery sells [type of bread], estimated volume [quantity] per month.",
    image: breadImg,
    imageAlt: "Kraft paper bag for bakery products",
  },
  intro: {
    eyebrow: "Built for bakeries",
    heading: "A Bag Sized to Your Bread Line",
    paragraphs: [
      "Every bakery's bread is a different shape — long loaves, round rolls, sliced sandwich bread. Rather than force you into one fixed size, we manufacture within our standard width, height and gusset ranges and confirm the closest fit (or a custom size) once we know what you bake.",
      "We can produce with or without ventilation perforations depending on whether your bread needs to breathe or stay sealed.",
    ],
  },
  useCases: {
    eyebrow: "Who orders these",
    heading: "From Independent Bakeries to Chains",
    items: [
      { icon: Croissant, title: "Independent Bakeries", description: "Branded bags that reinforce your shop on every sale." },
      { icon: Store, title: "Supermarket Bakery Sections", description: "Consistent, food-safe packaging at retail volume." },
      { icon: Building2, title: "Restaurant Bread Service", description: "Bread bags for hotels and restaurants with in-house baking." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Bread Bags",
    items: [
      { question: "What size do I need for my bread?", answer: "Tell us the shape and length of your bread and we'll recommend a size from our production range, or quote a custom size." },
      { question: "Can the bags have ventilation holes?", answer: "Yes, we can produce with or without perforations depending on whether your bread needs airflow." },
      { question: "Is the paper safe for direct contact with bread?", answer: "Our kraft paper is suitable for food packaging use. Let us know your specific requirements and we'll confirm the right paper." },
      { question: "Do you supply supermarket bakery sections?", answer: "Yes, we work with recurring monthly orders for bakery sections and chains — tell us your expected volume." },
    ],
  },
  productSchema: {
    name: "Paper Bread Bags",
    description: "Kraft paper bags for bakeries, manufactured in Mexico within our standard size range, with optional ventilation perforations.",
    category: "Food packaging",
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to get a quote for paper bags for bread. My bakery sells [type of bread], estimated volume [quantity] per month.",
    waCorpText: "Hi, I'm a buyer at [bakery / chain]. I need a quote for bread bags, estimated monthly volume [quantity]. Could you send me a proposal?",
    emailSubject: "Bread bag quote — recurring order",
    emailBody: "Hi,\n\nI'm a buyer at [bakery / chain]. I'd like a quote for paper bread bags, [bread type and estimated volume].\n\nCould you send me a proposal?\n\nThanks.",
    copy: {
      card1Eyebrow: "First time ordering bread bags?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us about your bread and order volume — we'll recommend the right size.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Bakery chain or recurring buyer?",
      card2Title: "Send us your specification",
      card2Desc: "If you already know the size and monthly volume, we'll send a formal proposal for an ongoing order.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
