import { Factory, Printer, FileText, Pencil, Truck } from "lucide-react";
import type { HubPageContent } from "@/components/marketing/HubPage";

export const servicesHubEs: HubPageContent = {
  helmetTitle: "Servicios de Fabricación | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Servicios", path: "/es/servicios" },
  ],
  hero: {
    eyebrow: "Servicios",
    h1: "Servicios de Fabricación de Bolsas de Papel",
    h1Highlight: "de Bolsas de Papel",
    description:
      "Fabricamos directo en Ciudad de México — sin margen de revendedor, sin intermediarios. Dos servicios: fabricación completa e impresión de logo personalizado.",
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero saber más sobre sus servicios de fabricación e impresión personalizada.",
  },
  gridEyebrow: "Lo que ofrecemos",
  gridHeading: "Dos Servicios, Un Fabricante Directo",
  cards: [
    { icon: Factory, title: "Fabricación", description: "Producción de bolsas de papel desde la materia prima hasta el producto terminado y revisado.", path: "/es/servicios/fabricacion" },
    { icon: Printer, title: "Logo Personalizado", description: "Impresión de logo hasta 2 tintas, aplicable a cualquier bolsa de nuestro catálogo.", path: "/es/servicios/logo-personalizado" },
  ],
  steps: {
    eyebrow: "Cómo trabajamos",
    heading: "De la Cotización a la Entrega",
    description: "Ya sea un solo pedido o un suministro mensual recurrente, el proceso es el mismo.",
    items: [
      { icon: FileText, title: "Solicita tu cotización", description: "Cuéntanos sobre tu proyecto: cantidad, tamaño y personalización. Te respondemos en menos de 24 horas." },
      { icon: Pencil, title: "Diseño y aprobación", description: "Trabajamos contigo en el diseño y te mandamos una prueba digital antes de producción." },
      { icon: Truck, title: "Producción y entrega", description: "Fabricamos según tu especificación y entregamos en el tiempo acordado, a todo México." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Sobre Nuestros Servicios",
    items: [
      { question: "¿Son fabricantes o revendedores?", answer: "Fabricamos directo en Ciudad de México — no hay margen de revendedor sobre tu pedido." },
      { question: "¿Manejan pedidos mensuales recurrentes?", answer: "Sí, trabajamos con negocios que necesitan un suministro mensual consistente, no solo pedidos únicos." },
      { question: "¿Ofrecen bolsas lisas e impresas?", answer: "Sí — pide cualquier bolsa de nuestro catálogo lisa, o agrega impresión de logo personalizado hasta 2 tintas." },
    ],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero saber más sobre sus servicios de fabricación e impresión personalizada.",
    waCorpText: "Hola, soy comprador de [empresa]. Quiero más información sobre sus servicios de fabricación y precios.",
    emailSubject: "Servicios de fabricación — solicitud de información",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero más información sobre sus servicios de fabricación e impresión personalizada.\n\nGracias.",
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
