import { Printer, FileImage, CheckCircle2, Palette } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import customImg from "@/assets/catalog/cat-kraft-impresion.jpg";

export const personalizadasEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel Personalizadas con Logo | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Personalizadas", path: "/es/bolsas-papel/personalizadas" },
  ],
  hero: {
    eyebrow: "Catálogo · Personalizadas",
    h1: "Bolsas de Papel Personalizadas con Logo — Al Mayoreo",
    h1Highlight: "Al Mayoreo",
    description:
      "Impresión de logo hasta 2 tintas, aplicable a todo nuestro catálogo — kraft, blancas, comida, delivery y retail. Mismo papel, mismas medidas, con tu marca en cada pieza.",
    badges: [{ icon: <Printer className="w-4 h-4" />, label: "Impresión a 2 tintas" }],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero cotizar bolsas de papel personalizadas con mi logo. Tipo de bolsa [kraft/blanca/comida/delivery], medida [ancho × alto] cm, volumen estimado [cantidad].",
    image: customImg,
    imageAlt: "Logo personalizado impreso en bolsa de papel kraft",
  },
  intro: {
    eyebrow: "Cómo funciona",
    heading: "De Tu Archivo de Logo a una Bolsa Terminada",
    paragraphs: [
      "La impresión personalizada aplica a cualquier bolsa de nuestro catálogo — kraft, blanca, comida, delivery o retail — así que primero eliges la línea y la medida, y después aplicamos tu marca sobre esa base.",
      "Imprimimos hasta 2 tintas y trabajamos con arte vectorial (AI o PDF) para que los bordes queden nítidos y el color sea consistente en todo el tiraje. Verás una prueba digital antes de pasar a producción.",
    ],
  },
  useCases: {
    eyebrow: "Qué necesitamos de ti",
    heading: "Arte y Proceso de Producción",
    items: [
      { icon: FileImage, title: "Arte vectorial", description: "Envía tu logo en AI o PDF, con colores Pantone si los tienes." },
      { icon: Palette, title: "Hasta 2 tintas", description: "Imprimimos hasta 2 colores por diseño para resultados consistentes a volumen." },
      { icon: CheckCircle2, title: "Prueba digital primero", description: "Apruebas una prueba antes de correr el pedido completo." },
      { icon: Printer, title: "Aplica a cualquier línea", description: "Kraft, blanca, comida, delivery o retail — eliges la bolsa base, luego imprimimos." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Impresión Personalizada",
    items: [
      { question: "¿En qué formato necesitan el arte?", answer: "Los archivos vectoriales — AI o PDF — funcionan mejor. Si solo tienes un logo en baja resolución, mándalo de todos modos y te decimos si necesita rehacerse." },
      { question: "¿Hacen prueba antes de producción?", answer: "Sí, mandamos una prueba digital para tu aprobación antes de correr el pedido completo." },
      { question: "¿Pueden igualar mi color exacto?", answer: "Trabajamos con referencias Pantone para acercarnos lo más posible al color de tu marca dentro de una impresión a 2 tintas." },
      { question: "¿Cuál es el mínimo para personalizar?", answer: "Es más alto que para bolsas lisas y varía según la medida — cuéntanos el tipo de bolsa y tu volumen estimado para darte un número exacto." },
      { question: "¿Cuánto tiempo agrega la impresión a la producción?", answer: "Los pedidos impresos tardan más que las bolsas lisas por el paso de la prueba — te damos un tiempo estimado una vez que conocemos los detalles de tu pedido." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel Personalizadas",
    description: "Impresión de logo personalizada, hasta 2 tintas, aplicable a bolsas de papel kraft, blancas, comida, delivery y retail fabricadas en México.",
    category: "Bolsas de papel personalizadas",
    additionalProperty: [{ name: "Impresión", value: "Hasta 2 tintas" }],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero cotizar bolsas de papel personalizadas con mi logo. Tipo de bolsa [kraft/blanca/comida/delivery], medida [ancho × alto] cm, volumen estimado [cantidad].",
    waCorpText: "Hola, soy comprador de [empresa]. Requiero cotización de bolsas personalizadas, [tipo de bolsa, medida y cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas personalizadas — compra corporativa",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero cotizar bolsas de papel personalizadas, [tipo de bolsa, medida y volumen estimado].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que imprimes tu logo en bolsas?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos el tipo de bolsa, medida y tu archivo de logo — te guiamos en el proceso.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Comprador corporativo con arte listo?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya tienes tu archivo de logo, medida y volumen, te enviamos propuesta formal.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
