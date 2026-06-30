import { ShieldCheck, UtensilsCrossed, Sandwich, ChefHat, Clock } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import foodImg from "@/assets/catalog/bolsa-delivery-restaurante.jpg";

export const comidaEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel para Comida y Restaurantes | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Comida", path: "/es/bolsas-papel/comida" },
  ],
  hero: {
    eyebrow: "Catálogo · Comida y Restaurantes",
    h1: "Bolsas de Papel para Comida y Restaurantes — Al Mayoreo",
    h1Highlight: "Al Mayoreo",
    description:
      "Bolsas kraft pensadas para comida para llevar, restaurantes y delivery, fabricadas en México. La misma línea delivery que ya usan nuestros clientes — resistente para una orden completa, ligera para cargar.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" }],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero cotizar bolsas de papel para comida para mi restaurante. Volumen estimado [cantidad] por pedido, ¿manejan pedidos mensuales recurrentes?",
    image: foodImg,
    imageAlt: "Bolsa de papel para delivery de comida",
  },
  intro: {
    eyebrow: "Pensadas para food service",
    heading: "Una Bolsa para la Orden Completa",
    paragraphs: [
      "Nuestra línea delivery (30 × 40 × 18 cm, 90–100 g/m²) es la medida que más piden restaurantes y operadores de delivery — suficientemente ancha para envases y pan, con asas pensadas para el peso de una orden real.",
      "El papel kraft aguanta mejor que el plástico con comida caliente y no deja olor ni residuo de grasa como las bolsas más delgadas. También fabricamos en otros gramajes si tu menú necesita algo más ligero o más resistente.",
    ],
  },
  useCases: {
    eyebrow: "Quién compra",
    heading: "De Restaurantes Independientes a Cuentas Recurrentes",
    items: [
      { icon: UtensilsCrossed, title: "Restaurantes y Comida para Llevar", description: "Bolsa tamaño delivery para el día a día." },
      { icon: Sandwich, title: "Tortas y Comida Rápida", description: "Una bolsa que cabe la orden sin aplastarla." },
      { icon: ChefHat, title: "Dark Kitchens", description: "Branding consistente en distintas plataformas de delivery." },
      { icon: Clock, title: "Pedidos Mensuales Recurrentes", description: "Trabajamos con cuentas que reordenan cada mes, no solo una vez." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Bolsas para Comida",
    items: [
      { question: "¿El papel es apto para contacto directo con alimentos?", answer: "Nuestro papel kraft es apto para empaque de alimentos. Si tu producto tiene requisitos específicos de contacto con alimentos, cuéntanos y confirmamos el papel adecuado." },
      { question: "¿Qué medida piden la mayoría de los restaurantes?", answer: "Nuestra bolsa delivery de talla única (30 × 40 × 18 cm) cubre la mayoría de las órdenes para llevar. También hay medidas más grandes o chicas — pregúntanos por la tabla completa." },
      { question: "¿Manejan pedidos mensuales recurrentes?", answer: "Sí, este es exactamente el tipo de cuenta para el que estamos preparados — dinos tu volumen mensual esperado y armamos un calendario de pedidos recurrentes." },
      { question: "¿Puedo poner el logo de mi restaurante en la bolsa?", answer: "Sí, hasta 2 tintas. El pedido mínimo para bolsas impresas es más alto que para las lisas — pregúntanos por ambas opciones." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel para Comida",
    description: "Bolsas de papel kraft para comida para llevar y delivery de restaurantes, fabricadas en México. Línea delivery talla única, 90–100 g/m², impresión de logo disponible.",
    category: "Empaque de alimentos",
    additionalProperty: [
      { name: "Medida", value: "30 × 40 × 18 cm" },
      { name: "Gramaje", value: "90–100 g/m²" },
    ],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero cotizar bolsas de papel para comida para mi restaurante. Volumen estimado [cantidad] por pedido, ¿manejan pedidos mensuales recurrentes?",
    waCorpText: "Hola, soy comprador de [restaurante/cadena]. Requiero cotización de bolsas para delivery de comida, volumen mensual estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas para comida — pedido recurrente",
    emailBody: "Hola,\n\nSoy comprador de [restaurante/cadena]. Quiero cotizar bolsas de papel para comida, volumen mensual estimado [cantidad].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que pides para tu restaurante?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos sobre tu menú y volumen de pedidos — nosotros te recomendamos la medida y el gramaje ideal.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Cadena de restaurantes o comprador recurrente?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya conoces la medida y el volumen mensual, te enviamos propuesta formal para un pedido recurrente.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
