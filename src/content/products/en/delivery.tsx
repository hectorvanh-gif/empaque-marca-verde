import { ShieldCheck, Bike, ShoppingCart, Truck, Package } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import deliveryImg from "@/assets/catalog/bolsa-delivery.jpg";

export const deliveryEn: ProductCategoryContent = {
  helmetTitle: "Paper Delivery Bags Wholesale | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "Delivery", path: "/paper-bags/delivery" },
  ],
  hero: {
    eyebrow: "Catalog · Delivery",
    h1: "Paper Delivery Bags — Branded, Bulk",
    h1Highlight: "Branded, Bulk",
    description:
      "Built for the trip, not just the counter: reinforced handles, a wide gusset for stacked items, and your logo printed on every bag that leaves your kitchen or warehouse.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "FSC Certified" }],
    ctaLabel: "Get a Quote",
    waText:
      "Hi, I'd like to get a quote for delivery paper bags with my logo. Estimated volume [quantity] per month.",
    image: deliveryImg,
    imageAlt: "Paper delivery bag",
  },
  intro: {
    eyebrow: "Built for transit",
    heading: "A Bag That Survives the Ride",
    paragraphs: [
      "Our delivery line (30 × 40 × 18 cm, 90–100 g/m²) is sized and weighted for what actually happens between your kitchen and the customer's door — a moped, a backpack, a stack of bags on a passenger seat.",
      "Every bag can carry your branding, so the delivery itself becomes a touchpoint, not just a transaction.",
    ],
  },
  useCases: {
    eyebrow: "Who orders these",
    heading: "Built for the Delivery Economy",
    items: [
      { icon: Bike, title: "Restaurant Delivery", description: "In-house delivery teams and third-party platform orders." },
      { icon: ShoppingCart, title: "Ecommerce", description: "A paper alternative for orders that don't need a box." },
      { icon: Truck, title: "Dark Kitchens", description: "Multiple brands, one reliable bag supplier." },
      { icon: Package, title: "Subscription Boxes", description: "Recurring delivery brands that want consistent packaging." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Delivery Bags",
    items: [
      { question: "How much weight can the handles hold?", answer: "The delivery line is built with reinforced handles for everyday food and ecommerce orders. Tell us your typical order weight and we'll confirm the right paper weight." },
      { question: "Can I get my logo on every bag?", answer: "Yes, up to 2 colors. We'll send a digital proof before running production." },
      { question: "Do you offer different sizes for delivery?", answer: "Our standard delivery size is 30 × 40 × 18 cm. If your orders need something larger or smaller, ask us about custom sizing." },
      { question: "What's the minimum order?", answer: "It varies by whether the bag is printed or plain — send us your estimated monthly volume and we'll confirm in your quote." },
    ],
  },
  productSchema: {
    name: "Paper Delivery Bags",
    description: "Branded paper delivery bags with reinforced handles, manufactured in Mexico. Sized for food delivery and ecommerce orders.",
    category: "Delivery packaging",
    additionalProperty: [
      { name: "Size", value: "30 × 40 × 18 cm" },
      { name: "Weight", value: "90–100 g/m²" },
    ],
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to get a quote for delivery paper bags with my logo. Estimated volume [quantity] per month.",
    waCorpText: "Hi, I'm a buyer at [company]. I need a quote for delivery bags, estimated monthly volume [quantity]. Could you send me a proposal?",
    emailSubject: "Delivery bag quote — corporate purchase",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like a quote for delivery paper bags, estimated monthly volume [quantity].\n\nCould you send me a proposal?\n\nThanks.",
    copy: {
      card1Eyebrow: "First time ordering delivery bags?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us about your typical order size and volume — we'll recommend the right bag.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Recurring buyer or delivery platform?",
      card2Title: "Send us your specification",
      card2Desc: "If you already know the size and monthly volume, we'll send you a formal proposal for an ongoing order.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
