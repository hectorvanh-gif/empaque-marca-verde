import { ShieldCheck, Croissant, Store, Building2 } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import breadImg from "@/assets/catalog/bolsa-mediana.jpg";

export const paraPanEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel para Pan | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Para Pan", path: "/es/bolsas-papel/para-pan" },
  ],
  hero: {
    eyebrow: "Catálogo · Panaderías",
    h1: "Bolsas de Papel para Pan — Panaderías al Mayoreo",
    h1Highlight: "al Mayoreo",
    description:
      "Bolsas kraft a la medida de tu línea de pan — bolillos, baguettes, pan de caja o pan dulce — fabricadas en México dentro de nuestro rango estándar, con o sin ventilación.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" }],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero cotizar bolsas de papel para pan. Mi panadería vende [tipo de pan], volumen estimado [cantidad] al mes.",
    image: breadImg,
    imageAlt: "Bolsa de papel kraft para panadería",
  },
  intro: {
    eyebrow: "Pensadas para panaderías",
    heading: "Una Bolsa a la Medida de tu Pan",
    paragraphs: [
      "Cada panadería tiene un pan distinto — piezas largas, bolillos redondos, pan de caja rebanado. En lugar de forzarte a una sola medida, fabricamos dentro de nuestros rangos de ancho, alto y fuelle y confirmamos la medida más cercana (o una a la medida) una vez que sabemos qué horneas.",
      "Podemos fabricar con o sin perforaciones de ventilación según si tu pan necesita respirar o mantenerse sellado.",
    ],
  },
  useCases: {
    eyebrow: "Quién compra",
    heading: "De Panaderías Independientes a Cadenas",
    items: [
      { icon: Croissant, title: "Panaderías Independientes", description: "Bolsas con tu marca que refuerzan tu negocio en cada venta." },
      { icon: Store, title: "Panadería de Supermercado", description: "Empaque consistente y apto para alimentos al volumen de retail." },
      { icon: Building2, title: "Servicio de Pan en Restaurantes", description: "Bolsas de pan para hoteles y restaurantes con horneado propio." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Bolsas para Pan",
    items: [
      { question: "¿Qué medida necesito para mi pan?", answer: "Cuéntanos la forma y el largo de tu pan y te recomendamos una medida dentro de nuestro rango de producción, o cotizamos una medida a la medida." },
      { question: "¿Las bolsas pueden tener orificios de ventilación?", answer: "Sí, podemos fabricar con o sin perforaciones según si tu pan necesita ventilación." },
      { question: "¿El papel es apto para contacto directo con pan?", answer: "Nuestro papel kraft es apto para empaque de alimentos. Cuéntanos tus requisitos específicos y confirmamos el papel adecuado." },
      { question: "¿Surten a panaderías de supermercado?", answer: "Sí, trabajamos con pedidos mensuales recurrentes para secciones de panadería y cadenas — cuéntanos tu volumen esperado." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel para Pan",
    description: "Bolsas de papel kraft para panaderías, fabricadas en México dentro de nuestro rango estándar de medidas, con perforaciones de ventilación opcionales.",
    category: "Empaque de alimentos",
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero cotizar bolsas de papel para pan. Mi panadería vende [tipo de pan], volumen estimado [cantidad] al mes.",
    waCorpText: "Hola, soy comprador de [panadería/cadena]. Requiero cotización de bolsas para pan, volumen mensual estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas para pan — pedido recurrente",
    emailBody: "Hola,\n\nSoy comprador de [panadería/cadena]. Quiero cotizar bolsas de papel para pan, [tipo de pan y volumen estimado].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que pides bolsas para pan?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos sobre tu pan y volumen de pedido — nosotros te recomendamos la medida ideal.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Cadena de panaderías o comprador recurrente?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya conoces la medida y el volumen mensual, te enviamos propuesta formal para un pedido recurrente.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
