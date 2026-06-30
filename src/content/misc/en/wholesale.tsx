import { UtensilsCrossed, Store, Building2, Croissant, ShoppingCart, Repeat } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import wholesaleImg from "@/assets/products-bags.jpg";

export const wholesaleEn: ProductCategoryContent = {
  helmetTitle: "Paper Bags Wholesale Mexico | BolsasMX",
  breadcrumbs: [
    { label: "Home", path: "/" },
    { label: "Wholesale", path: "/wholesale" },
  ],
  hero: {
    eyebrow: "Wholesale",
    h1: "Paper Bags Wholesale — Direct from Factory",
    h1Highlight: "Direct from Factory",
    description:
      "No distributor markup — you order directly from the manufacturer. We work with businesses placing a single bulk order and with accounts that need a recurring monthly supply.",
    ctaLabel: "Get a Quote",
    waText: "Hi, I'd like to place a wholesale order. My business is [type of business], estimated volume [quantity].",
    image: wholesaleImg,
    imageAlt: "Wholesale paper bags",
  },
  intro: {
    eyebrow: "How volume pricing works",
    heading: "The Bigger the Order, the More It Makes Sense to Go Direct",
    paragraphs: [
      "We work across order sizes — from a first bulk order of a few hundred bags to recurring monthly volumes in the thousands. Larger and recurring orders get priority on production scheduling and a dedicated point of contact for reordering.",
      "Tell us your estimated volume and we'll quote it directly — there's no published price list because pricing depends on size, weight, line and whether the bag is printed.",
    ],
  },
  useCases: {
    eyebrow: "Who we supply",
    heading: "Built for Businesses That Reorder",
    items: [
      { icon: UtensilsCrossed, title: "Restaurant Chains", description: "Consistent supply across multiple locations." },
      { icon: Store, title: "Retail & Department Stores", description: "Branded bags at the volume retail requires." },
      { icon: Building2, title: "Hotels", description: "Custom packaging for gift shops, amenities and room service." },
      { icon: Croissant, title: "Bakery Chains", description: "Recurring bread bag supply, sized to your line." },
      { icon: ShoppingCart, title: "Ecommerce & Distributors", description: "Wholesale volume for resale or fulfillment." },
      { icon: Repeat, title: "Recurring Accounts", description: "A dedicated contact for scheduled monthly reorders." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Wholesale Questions",
    items: [
      { question: "Is there a published price list?", answer: "No — pricing depends on size, weight, line and whether the bag is printed. Tell us your specs and volume and we'll send a direct quote." },
      { question: "Do you offer better pricing at higher volumes?", answer: "Generally, yes — larger and recurring orders get more favorable terms. Tell us your estimated volume and we'll quote accordingly." },
      { question: "Can you set up a recurring monthly order?", answer: "Yes, this is exactly the kind of account we're built for. We'll set up a reorder schedule based on your volume." },
      { question: "Do you ship nationwide within Mexico?", answer: "Yes, we ship anywhere in Mexico from our facility in Mexico City." },
      { question: "Can I request a sample before placing a wholesale order?", answer: "Yes — visit our samples page to request a sample kit before committing to a bulk order." },
    ],
  },
  productSchema: {
    name: "Wholesale Paper Bags",
    description: "Wholesale paper bags direct from the manufacturer in Mexico City, for restaurants, retail, hotels, bakeries, and recurring monthly accounts.",
    category: "Wholesale packaging",
  },
  dualCta: {
    lang: "en",
    waNewText: "Hi, I'd like to place a wholesale order. My business is [type of business], estimated volume [quantity]. Do you offer pricing tiers by volume?",
    waCorpText: "Hi, I'm a buyer at [company]. I'd like to discuss a wholesale supply agreement, estimated monthly volume [quantity].",
    emailSubject: "Wholesale paper bags — supply inquiry",
    emailBody: "Hi,\n\nI'm a buyer at [company]. I'd like to discuss a wholesale supply agreement, estimated monthly volume [quantity].\n\nThanks.",
    copy: {
      card1Eyebrow: "First time buying bags wholesale?",
      card1Title: "We'll help you choose",
      card1Desc: "Tell us about your business and approximate size — we'll recommend the ideal line, size, and weight.",
      card1Cta: "Get a Quote",
      card1Note: "We reply within 24h ·",
      or: "or",
      card2Eyebrow: "Corporate buyer or recurring account?",
      card2Title: "Send us your specification",
      card2Desc: "If you already know the size, weight, and volume, we'll send you a formal proposal through your preferred channel.",
      card2CtaEmail: "Request a quote by email",
      card2CtaWa: "Get a Quote",
    },
  },
};
