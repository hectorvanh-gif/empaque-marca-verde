import { Package, Sparkles, UtensilsCrossed, Bike, Store, Croissant, Printer, FileText, Pencil, Truck } from "lucide-react";
import type { HubPageContent } from "@/components/marketing/HubPage";

export const pillarEn: HubPageContent = {
  helmetTitle: "Wholesale Paper Bags | All Types | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Paper Bags", path: "/paper-bags" },
  ],
  hero: {
    eyebrow: "Full Catalog",
    h1: "Wholesale Paper Bags — Direct from Manufacturer",
    h1Highlight: "Direct from Manufacturer",
    description:
      "We manufacture, we don't resell. FSC certified, 100% recycled kraft paper, made in Mexico City. Choose your line below — every one can be customized with your logo.",
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to see your full catalog of paper bags and get a wholesale quote.",
  },
  gridEyebrow: "Browse by type",
  gridHeading: "Paper Bags for Every Type of Business",
  cards: [
    { icon: Package, title: "Kraft", description: "Our core line — handle, delivery, boutique and bottle formats.", path: "/paper-bags/kraft" },
    { icon: Sparkles, title: "White", description: "A premium finish for retail and gift packaging.", path: "/paper-bags/white" },
    { icon: UtensilsCrossed, title: "Food", description: "Sized for restaurant takeout and food delivery.", path: "/paper-bags/food" },
    { icon: Bike, title: "Delivery", description: "Reinforced handles for ecommerce and delivery orders.", path: "/paper-bags/delivery" },
    { icon: Store, title: "Retail", description: "Branded bags for boutiques, fashion and department stores.", path: "/paper-bags/retail" },
    { icon: Croissant, title: "Bread", description: "Bakery bags sized to your bread line, with or without ventilation.", path: "/paper-bags/bread" },
    { icon: Printer, title: "Custom Printed", description: "Logo printing up to 2 colors, applied to any line in our catalog.", path: "/paper-bags/custom" },
  ],
  steps: {
    eyebrow: "How it works",
    heading: "From Quote to Delivery",
    description: "Getting your custom bags is straightforward. Three steps, no middleman.",
    items: [
      { icon: FileText, title: "Request a quote", description: "Tell us about your project: quantity, size and customization. We reply within 24 hours." },
      { icon: Pencil, title: "Design & approval", description: "We work with you on the design and send a digital proof before production." },
      { icon: Truck, title: "Production & delivery", description: "We manufacture your bags to spec and deliver on the agreed timeline." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Questions About Our Paper Bag Catalog",
    items: [
      { question: "What's the minimum order quantity?", answer: "It varies by line, size and whether the bag is printed or plain. Tell us your specs and we'll confirm the minimum in your quote." },
      { question: "Do you ship outside of Mexico City?", answer: "Yes, we ship nationwide within Mexico. For shipping outside Mexico, contact us to discuss your specific case." },
      { question: "How long does production take?", answer: "It depends on the order size and whether it includes custom printing. We'll give you a timeline as part of your quote." },
      { question: "Can you match our brand colors on any bag type?", answer: "Yes, custom printing (up to 2 colors) applies across our entire catalog — kraft, white, food, delivery and retail." },
    ],
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to see your full catalog of paper bags and get a wholesale quote. My business is [type of business].",
    waCorpText: "Hi, I'm a buyer at [company]. I'd like a catalog and pricing for wholesale paper bags, estimated volume [quantity].",
    emailSubject: "Wholesale paper bags — catalog request",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like to request your catalog and pricing for wholesale paper bags.\n\nThanks.",
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
