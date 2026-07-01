import { Package, Sparkles, UtensilsCrossed, Bike, Store, Croissant, Printer, Leaf, Ruler, FileText, Pencil, Truck } from "lucide-react";
import type { HubPageContent } from "@/components/marketing/HubPage";

export const pillarEs: HubPageContent = {
  helmetTitle: "Bolsas de Papel al Mayoreo | Todos los Tipos | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
  ],
  hero: {
    eyebrow: "Catálogo completo",
    h1: "Bolsas de Papel al Mayoreo — Todos los Tipos, Cualquier Volumen",
    h1Highlight: "Cualquier Volumen",
    description:
      "Somos fabricantes, no revendedores. Papel kraft 100% reciclado, certificación FSC, fabricado en Ciudad de México. Elige tu línea abajo — todas se pueden personalizar con tu logo.",
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero ver su catálogo completo de bolsas de papel y cotizar al mayoreo.",
  },
  featured: {
    icon: Ruler,
    eyebrow: "Aplican a cualquier tipo de bolsa",
    title: "Medidas y Tabla de Tamaños",
    description: "Consulta todas las medidas estándar y gramajes. Sirven para cualquiera de nuestras líneas de bolsas de papel.",
    ctaLabel: "Ver medidas",
    path: "/es/bolsas-papel/tabla-de-tamanos",
  },
  gridEyebrow: "Explora por tipo",
  gridHeading: "Bolsas de Papel para Cada Tipo de Negocio",
  cards: [
    { icon: Package, title: "Kraft", description: "Nuestra línea principal — con asa, delivery, boutique y botella.", path: "/es/bolsas-papel/kraft" },
    { icon: Sparkles, title: "Blancas", description: "Acabado premium para retail y empaque de regalo.", path: "/es/bolsas-papel/blancas" },
    { icon: UtensilsCrossed, title: "Comida", description: "Pensadas para comida para llevar y delivery de restaurantes.", path: "/es/bolsas-papel/comida" },
    { icon: Bike, title: "Entrega", description: "Asas reforzadas para ecommerce y pedidos a domicilio.", path: "/es/bolsas-papel/entrega" },
    { icon: Store, title: "Menudeo", description: "Bolsas personalizadas para boutiques, moda y tiendas departamentales.", path: "/es/bolsas-papel/menudeo" },
    { icon: Croissant, title: "Para Pan", description: "Bolsas de panadería a la medida de tu línea de pan.", path: "/es/bolsas-papel/para-pan" },
    { icon: Leaf, title: "Estraza", description: "La opción más económica al mayoreo para alto volumen.", path: "/es/bolsas-papel/estraza" },
    { icon: Printer, title: "Personalizadas", description: "Impresión de logo hasta 2 tintas, aplicable a cualquier línea.", path: "/es/bolsas-papel/personalizadas" },
  ],
  steps: {
    eyebrow: "Cómo funciona",
    heading: "De la Cotización a la Entrega",
    description: "Conseguir tus bolsas personalizadas es sencillo. Tres pasos, sin intermediarios.",
    items: [
      { icon: FileText, title: "Solicita tu cotización", description: "Cuéntanos sobre tu proyecto: cantidad, tamaño y tipo de personalización. Te respondemos en menos de 24 horas." },
      { icon: Pencil, title: "Diseño y aprobación", description: "Trabajamos contigo para crear el diseño perfecto. Recibirás una prueba digital antes de la producción." },
      { icon: Truck, title: "Producción y entrega", description: "Fabricamos tus bolsas con los más altos estándares y te las entregamos en el tiempo acordado." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Sobre Nuestro Catálogo de Bolsas",
    items: [
      { question: "¿Cuál es el pedido mínimo?", answer: "Varía según la línea, medida y si la bolsa lleva impresión o no. Cuéntanos tus especificaciones y te confirmamos el mínimo en tu cotización." },
      { question: "¿Hacen entregas fuera de Ciudad de México?", answer: "Sí, enviamos a todo México. Para envíos fuera del país, contáctanos para platicar tu caso particular." },
      { question: "¿Cuánto tarda la producción?", answer: "Depende del tamaño del pedido y si incluye impresión personalizada. Te damos un tiempo estimado como parte de tu cotización." },
      { question: "¿Puedo ver una muestra antes de ordenar?", answer: "Sí, puedes solicitar muestras antes de hacer tu pedido al mayoreo — visita nuestra página de muestras." },
    ],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero ver su catálogo completo de bolsas de papel y cotizar al mayoreo. Mi negocio es [tipo de negocio].",
    waCorpText: "Hola, soy comprador de [empresa]. Quiero catálogo y precios de bolsas de papel al mayoreo, volumen estimado [cantidad].",
    emailSubject: "Bolsas de papel al mayoreo — solicitud de catálogo",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero solicitar su catálogo y precios de bolsas de papel al mayoreo.\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que compras bolsas al mayoreo?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos de tu negocio y el tamaño aproximado — nosotros te recomendamos la línea, talla y gramaje ideal.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Comprador corporativo o tienda departamental?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya conoces la medida, gramaje y volumen, te enviamos propuesta formal por el canal que prefieras.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
