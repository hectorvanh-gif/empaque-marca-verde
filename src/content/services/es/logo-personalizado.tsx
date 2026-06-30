import { FileImage, Palette, CheckCircle2, Clock4 } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import printImg from "@/assets/carousel/detail-1.jpg";

export const logoPersonalizadoEs: ProductCategoryContent = {
  helmetTitle: "Impresión de Logo en Bolsas de Papel | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Servicios", path: "/es/servicios" },
    { label: "Logo Personalizado", path: "/es/servicios/logo-personalizado" },
  ],
  hero: {
    eyebrow: "Servicios · Logo Personalizado",
    h1: "Impresión de Logo en Bolsas de Papel",
    h1Highlight: "en Bolsas de Papel",
    description:
      "Hasta 2 tintas, aplicable a cualquier bolsa de nuestro catálogo. Trabajamos con tu arte vectorial y mandamos una prueba digital antes de correr tu pedido completo — sin sorpresas en la entrega.",
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero saber más sobre su proceso de impresión personalizada. Ya tengo mi logo listo y quiero platicar especificaciones y precio.",
    image: printImg,
    imageAlt: "Detalle de impresión personalizada en bolsa de papel",
  },
  intro: {
    eyebrow: "Qué necesitamos de ti",
    heading: "Requisitos del Arte",
    paragraphs: [
      "Los archivos vectoriales (AI o PDF) imprimen más limpio a cualquier tamaño. Si solo tienes un logo en baja resolución, mándalo de todos modos — te decimos si necesita rehacerse antes de imprimir.",
      "Si tienes referencias Pantone de los colores de tu marca, inclúyelas. Imprimimos hasta 2 colores por diseño, y la referencia Pantone nos acerca lo más posible a tu color exacto.",
    ],
  },
  useCases: {
    eyebrow: "El proceso",
    heading: "De Tu Arte a la Bolsa Terminada",
    items: [
      { icon: FileImage, title: "Envía tu arte", description: "Archivo vectorial, AI o PDF, con colores Pantone si los tienes." },
      { icon: Palette, title: "Configuramos la impresión", description: "Hasta 2 tintas, posicionadas en la medida de bolsa que elegiste." },
      { icon: CheckCircle2, title: "Apruebas una prueba", description: "Mandamos una prueba digital antes de correr el pedido completo." },
      { icon: Clock4, title: "Producción y entrega", description: "Los pedidos impresos tardan más que las bolsas lisas — te confirmamos el tiempo desde el inicio." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Sobre la Impresión Personalizada",
    items: [
      { question: "¿Qué formato de archivo funciona mejor?", answer: "Archivos vectoriales — AI o PDF. Escalan limpio a cualquier tamaño de bolsa sin perder calidad." },
      { question: "¿Cuántos colores pueden imprimir?", answer: "Hasta 2 tintas por diseño. Usamos referencias Pantone para acercarnos lo más posible a los colores de tu marca." },
      { question: "¿Cobran extra por la configuración inicial?", answer: "Cuéntanos sobre tu pedido y te detallamos el precio completo — incluyendo cualquier configuración para un diseño nuevo — en tu cotización." },
      { question: "¿Puedo reutilizar el mismo diseño para reórdenes?", answer: "Sí, una vez que tu diseño está aprobado y configurado, las reórdenes son más rápidas porque el trabajo de diseño ya está hecho." },
      { question: "¿Qué tipos de bolsa se pueden imprimir?", answer: "Cualquier bolsa de nuestro catálogo — kraft, blanca, comida, delivery o retail. Eliges la bolsa base primero y después aplicamos tu impresión." },
    ],
  },
  productSchema: {
    name: "Servicio de Impresión de Logo en Bolsas de Papel",
    description: "Servicio de impresión de logo personalizado para bolsas de papel, hasta 2 tintas, fabricado en México. Trabaja con arte vectorial y referencias Pantone.",
    category: "Servicio de impresión",
    additionalProperty: [{ name: "Impresión", value: "Hasta 2 tintas" }],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero saber más sobre su proceso de impresión personalizada. Ya tengo mi logo listo y quiero platicar especificaciones y precio.",
    waCorpText: "Hola, soy comprador de [empresa]. Tengo mi arte listo y necesito cotización de bolsas personalizadas, [tipo de bolsa, medida y volumen].",
    emailSubject: "Servicio de impresión personalizada — solicitud de cotización",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Tengo mi arte listo y necesito cotización de bolsas personalizadas, [tipo de bolsa, medida y volumen].\n\nGracias.",
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
