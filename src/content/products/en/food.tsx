import { ShieldCheck, UtensilsCrossed, Sandwich, ChefHat, Clock } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import foodImg from "@/assets/catalog/bolsa-delivery-restaurante.jpg";

export const foodEn: ProductCategoryContent = {
  helmetTitle: "Paper Bags for Food & Restaurants | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
    { label: "Food", path: "/paper-bags/food" },
  ],
  hero: {
    eyebrow: "Catalog · Food Service",
    h1: "Paper Bags for Food — Wholesale for Restaurants",
    h1Highlight: "Wholesale for Restaurants",
    description:
      "Kraft paper bags sized for takeout, sandwiches and prepared food, manufactured in Mexico. The same one-size delivery line our restaurant customers already order — sturdy enough for a full meal, light enough to carry.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "FSC Certified" }],
    ctaLabel: "Get a Quote",
    waText:
      "Hi, I'd like to get a quote for food paper bags for my restaurant. Estimated volume [quantity] per order, do you handle recurring monthly orders?",
    image: foodImg,
    imageAlt: "Paper bag for food delivery",
  },
  intro: {
    eyebrow: "Built for food service",
    heading: "One Bag, Sized for a Full Order",
    paragraphs: [
      "Our delivery line (30 × 40 × 18 cm, 90–100 g/m²) is the size restaurants and food delivery operators order most — wide enough for takeout containers and bread, with handles rated for the weight of a real order.",
      "Kraft paper holds up better than plastic for hot food and doesn't add the smell or grease residue that thinner bags do. We can also produce in other weights if your menu needs something lighter or heavier.",
    ],
  },
  useCases: {
    eyebrow: "Who orders these",
    heading: "From Single Restaurants to Recurring Accounts",
    items: [
      { icon: UtensilsCrossed, title: "Restaurants & Takeout", description: "Standard delivery-size bags for everyday orders." },
      { icon: Sandwich, title: "Sandwich & Fast-Casual", description: "A bag that fits the order without crushing it." },
      { icon: ChefHat, title: "Ghost Kitchens", description: "Consistent branding across multiple delivery platforms." },
      { icon: Clock, title: "Recurring Monthly Orders", description: "We work with accounts that reorder every month, not just once." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions About Food Bags",
    items: [
      { question: "Is this paper safe for direct food contact?", answer: "Our kraft paper is suitable for food packaging use. If your product has specific food-contact requirements, tell us and we'll confirm the right paper for your case." },
      { question: "What size do most restaurants order?", answer: "Our one-size delivery bag (30 × 40 × 18 cm) covers most takeout orders. Larger or smaller sizes are available — ask us for the full size chart." },
      { question: "Can you handle recurring monthly orders?", answer: "Yes, this is exactly the kind of account we're built for — tell us your expected monthly volume and we'll set up a recurring order schedule." },
      { question: "Can I put my restaurant's logo on the bag?", answer: "Yes, up to 2 colors. Minimum order for printed bags is higher than for plain ones — ask us for both options." },
    ],
  },
  productSchema: {
    name: "Paper Bags for Food",
    description:
      "Kraft paper bags sized for restaurant takeout and food delivery, manufactured in Mexico. One-size delivery line, 90–100 g/m², custom logo printing available.",
    category: "Food packaging",
    additionalProperty: [
      { name: "Size", value: "30 × 40 × 18 cm" },
      { name: "Weight", value: "90–100 g/m²" },
    ],
  },
  dualCta: {
    lang: "en",
    waNewText:
      "Hi, I'd like to get a quote for food paper bags for my restaurant. Estimated volume [quantity] per order, do you handle recurring monthly orders?",
    waCorpText:
      "Hi, I'm a buyer at [restaurant chain]. I need a quote for food delivery bags, estimated monthly volume [quantity]. Could you send me a proposal?",
    emailSubject: "Food bag quote — recurring order",
    emailBody:
      "Hi,\n\nI'm a buyer at [restaurant / chain]. I'd like a quote for food paper bags, estimated monthly volume [quantity].\n\nCould you send me a proposal?\n\nThanks.",
    copy: {
      card1Eyebrow: "First time ordering for your restaurant?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us about your menu and order volume — we'll recommend the right size and weight.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Restaurant chain or recurring buyer?",
      card2Title: "Send us your specification",
      card2Desc: "If you already know the size and monthly volume, we'll send you a formal proposal for an ongoing order.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
