import { Package, Users, Clock4, Gift } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import samplesImg from "@/assets/catalog/hero-catalog.jpg";

export const muestrasEs: ProductCategoryContent = {
  helmetTitle: "Solicitar Muestras de Bolsas de Papel | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Muestras", path: "/es/muestras" },
  ],
  hero: {
    eyebrow: "Muestras",
    h1: "Solicitar Muestras de Bolsas de Papel",
    h1Highlight: "de Bolsas de Papel",
    description:
      "Antes de hacer un pedido grande, conoce y toca el papel. Dinos qué líneas te interesan — kraft, blanca, comida, delivery — y te armamos las muestras.",
    ctaLabel: "Solicitar Muestras",
    waText: "Hola, quiero solicitar muestras antes de hacer un pedido al mayoreo. Me interesan bolsas [kraft / blanca / comida / personalizada].",
    image: samplesImg,
    imageAlt: "Catálogo de muestras de bolsas de papel",
  },
  intro: {
    eyebrow: "Por qué pedir muestras",
    heading: "Conoce el Papel Antes de Comprometerte con Volumen",
    paragraphs: [
      "Entendemos que decidir un pedido de cientos o miles de bolsas es más fácil cuando ya tuviste el papel en la mano, revisaste el fuelle y viste cómo se vería tu logo impreso.",
      "Dinos qué líneas quieres conocer — kraft, blanca, una bolsa para comida, o un ejemplo personalizado — y lo armamos por el canal que prefieras.",
    ],
  },
  useCases: {
    eyebrow: "Para quién es esto",
    heading: "Pensado Para la Decisión Antes de Comprar",
    items: [
      { icon: Users, title: "Equipos de Compras", description: "Valida el producto antes de autorizar una orden de compra grande." },
      { icon: Gift, title: "Encargados de Marca", description: "Revisa cómo se ve tu logo y colores sobre el papel real." },
      { icon: Package, title: "Cuentas Nuevas", description: "Compradores primerizos que quieren confirmar calidad antes de comprometerse." },
      { icon: Clock4, title: "Clientes Recurrentes Probando Otra Línea", description: "Clientes existentes evaluando un tipo de bolsa diferente." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Muestras",
    items: [
      { question: "¿Qué incluye una solicitud de muestras?", answer: "Dinos qué líneas te interesan y armamos las muestras correspondientes — kraft, blanca, bolsa para comida o un ejemplo personalizado." },
      { question: "¿Las muestras tienen costo?", answer: "Pregúntanos al solicitarlas — te confirmamos costo y detalles de entrega para tu caso específico." },
      { question: "¿Cuánto tardan en llegar las muestras?", answer: "Te confirmamos un tiempo de entrega una vez que sepamos qué estás solicitando y tu ubicación." },
      { question: "¿Qué pasa después de revisar las muestras?", answer: "Si decides seguir adelante, te guiamos para hacer tu primer pedido — ya sea un pedido grande único o un suministro mensual recurrente." },
    ],
  },
  productSchema: {
    name: "Muestras de Bolsas de Papel",
    description: "Solicitud de muestras de bolsas de papel fabricadas en México — kraft, blancas, para comida y ejemplos personalizados, disponibles antes de hacer un pedido al mayoreo.",
    category: "Solicitud de muestras",
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero solicitar muestras antes de hacer un pedido al mayoreo. Me interesan bolsas [kraft / blanca / comida / personalizada].",
    waCorpText: "Hola, soy comprador de [empresa]. Quiero solicitar muestras para revisión de compras antes de un pedido al mayoreo.",
    emailSubject: "Solicitud de muestras — revisión previa a compra",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero solicitar muestras de [tipo de bolsa(s)] para revisión antes de un pedido al mayoreo.\n\nGracias.",
    copy: {
      card1Eyebrow: "¿No sabes qué línea probar primero?",
      card1Title: "Cuéntanos de tu negocio",
      card1Desc: "Te recomendamos qué muestras tiene más sentido empezar a revisar.",
      card1Cta: "Solicitar Muestras",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Equipo de compras con especificaciones claras?",
      card2Title: "Envíanos tu solicitud",
      card2Desc: "Dinos exactamente qué líneas y cantidades de muestras necesitas.",
      card2CtaEmail: "Solicitar muestras por correo",
      card2CtaWa: "Solicitar Muestras",
    },
  },
};
