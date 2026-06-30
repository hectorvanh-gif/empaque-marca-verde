import { ShieldCheck, Bike, ShoppingCart, Truck, Package } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import deliveryImg from "@/assets/catalog/bolsa-delivery.jpg";

export const entregaEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel para Delivery | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Entrega", path: "/es/bolsas-papel/entrega" },
  ],
  hero: {
    eyebrow: "Catálogo · Delivery",
    h1: "Bolsas de Papel para Delivery — Con Tu Logo",
    h1Highlight: "Con Tu Logo",
    description:
      "Pensadas para el trayecto, no solo para el mostrador: asas reforzadas, fuelle amplio para artículos apilados, y tu logo impreso en cada bolsa que sale de tu cocina o almacén.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" }],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero cotizar bolsas de papel para delivery con mi logo. Volumen estimado [cantidad] por mes.",
    image: deliveryImg,
    imageAlt: "Bolsa de papel para delivery",
  },
  intro: {
    eyebrow: "Pensada para el traslado",
    heading: "Una Bolsa que Sobrevive el Viaje",
    paragraphs: [
      "Nuestra línea delivery (30 × 40 × 18 cm, 90–100 g/m²) está dimensionada y pensada para lo que realmente pasa entre tu cocina y la puerta del cliente — una moto, una mochila, varias bolsas apiladas en el asiento.",
      "Cada bolsa puede llevar tu marca, así que la entrega misma se convierte en un punto de contacto, no solo en una transacción.",
    ],
  },
  useCases: {
    eyebrow: "Quién compra",
    heading: "Hechas Para la Economía del Delivery",
    items: [
      { icon: Bike, title: "Delivery de Restaurantes", description: "Equipos de reparto propio y pedidos de plataformas." },
      { icon: ShoppingCart, title: "Ecommerce", description: "Una alternativa de papel para pedidos que no necesitan caja." },
      { icon: Truck, title: "Dark Kitchens", description: "Varias marcas, un solo proveedor confiable de bolsas." },
      { icon: Package, title: "Cajas de Suscripción", description: "Marcas de entrega recurrente que buscan empaque consistente." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Bolsas de Delivery",
    items: [
      { question: "¿Cuánto peso aguantan las asas?", answer: "La línea delivery está construida con asas reforzadas para pedidos de comida y ecommerce del día a día. Cuéntanos el peso típico de tu pedido y confirmamos el gramaje adecuado." },
      { question: "¿Puedo poner mi logo en cada bolsa?", answer: "Sí, hasta 2 tintas. Te mandamos una prueba digital antes de correr la producción." },
      { question: "¿Tienen otras medidas para delivery?", answer: "Nuestra medida estándar de delivery es 30 × 40 × 18 cm. Si tus pedidos necesitan algo más grande o chico, pregúntanos por medidas a la medida." },
      { question: "¿Cuál es el pedido mínimo?", answer: "Varía si la bolsa lleva impresión o no — mándanos tu volumen mensual estimado y te confirmamos en tu cotización." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel para Delivery",
    description: "Bolsas de papel personalizadas para delivery, con asas reforzadas, fabricadas en México. Medida estándar para pedidos de comida y ecommerce.",
    category: "Empaque para delivery",
    additionalProperty: [
      { name: "Medida", value: "30 × 40 × 18 cm" },
      { name: "Gramaje", value: "90–100 g/m²" },
    ],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero cotizar bolsas de papel para delivery con mi logo. Volumen estimado [cantidad] por mes.",
    waCorpText: "Hola, soy comprador de [empresa]. Requiero cotización de bolsas para delivery, volumen mensual estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas de delivery — compra corporativa",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero cotizar bolsas de papel para delivery, volumen mensual estimado [cantidad].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que pides bolsas para delivery?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos del tamaño típico de tu pedido y volumen — nosotros te recomendamos la bolsa ideal.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Comprador recurrente o plataforma de delivery?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya conoces la medida y el volumen mensual, te enviamos propuesta formal para un pedido recurrente.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
