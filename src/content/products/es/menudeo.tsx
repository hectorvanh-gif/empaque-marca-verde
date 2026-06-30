import { ShieldCheck, Printer, Shirt, Footprints, Store, Gift } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import retailImg from "@/assets/catalog/bolsa-color-grande.jpg";

export const menudeoEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel para Tiendas y Menudeo | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Menudeo", path: "/es/bolsas-papel/menudeo" },
  ],
  hero: {
    eyebrow: "Catálogo · Menudeo",
    h1: "Bolsas de Papel para Tiendas de Menudeo — Al Mayoreo",
    h1Highlight: "Al Mayoreo",
    description:
      "Desde bolsas chicas para joyería hasta talla jumbo para prendas voluminosas, nuestras líneas con asa y boutique cubren lo que realmente necesita un piso de venta — personalizadas y listas para reordenar.",
    badges: [
      { icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" },
      { icon: <Printer className="w-4 h-4" />, label: "Impresión a 2 tintas" },
    ],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero cotizar bolsas de papel para mi tienda con mi logo. Vendo [tipo de producto], medida aproximada [ancho × alto] cm.",
    image: retailImg,
    imageAlt: "Bolsa de papel personalizada para retail",
  },
  intro: {
    eyebrow: "Pensadas para el piso de venta",
    heading: "Una Bolsa Para Cada Formato de Tienda",
    paragraphs: [
      "Bolsas con asa desde chica (14.5 × 21.5 cm) hasta jumbo (33 × 47 cm) cubren mostradores de joyería, zapaterías, perchas de ropa y compras voluminosas — todo en el mismo papel, el mismo proceso de impresión, el mismo proveedor.",
      "Nuestra línea boutique (sin asa) suma un formato más compacto y de regalo para moda y retail premium. Consulta la tabla completa en nuestra página de kraft — todas las medidas aplican en acabado kraft y blanco.",
    ],
  },
  useCases: {
    eyebrow: "Ideal para",
    heading: "En Todo el Piso de Venta",
    items: [
      { icon: Shirt, title: "Ropa y Moda", description: "Tallas jumbo y grande para prendas dobladas o colgadas." },
      { icon: Footprints, title: "Calzado", description: "Tallas mediana y grande dimensionadas para cajas de zapatos." },
      { icon: Store, title: "Retail General y Franquicias", description: "Branding consistente en varias sucursales." },
      { icon: Gift, title: "Tiendas de Regalo y Especialidad", description: "Formato boutique para una sensación más premium." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Bolsas de Menudeo",
    items: [
      { question: "¿Qué medida es la correcta para mi tienda?", answer: "Depende de lo que vendas — cuéntanos el tamaño típico de tu producto y te recomendamos una línea y medida de la tabla completa." },
      { question: "¿Pueden igualar los colores de mi marca?", answer: "Imprimimos hasta 2 tintas con referencia Pantone para acercarnos lo más posible a los colores de tu marca." },
      { question: "¿Surten a varias sucursales?", answer: "Sí, trabajamos con franquicias y cadenas de retail con pedidos recurrentes y branding consistente lote tras lote." },
      { question: "¿Cuál es el pedido mínimo para bolsas de retail impresas?", answer: "Varía según la medida — envíanos tus especificaciones y volumen estimado y te confirmamos el mínimo en tu cotización." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel para Menudeo",
    description: "Bolsas de papel personalizadas para tiendas de menudeo, fabricadas en México, disponibles en líneas con asa y boutique de talla chica a jumbo.",
    category: "Empaque retail",
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero cotizar bolsas de papel para mi tienda con mi logo. Vendo [tipo de producto], medida aproximada [ancho × alto] cm.",
    waCorpText: "Hola, soy comprador de [cadena de tiendas]. Requiero cotización de bolsas de retail, volumen estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas de retail — compra corporativa",
    emailBody: "Hola,\n\nSoy comprador de [cadena de tiendas]. Quiero cotizar bolsas de papel para retail, [medida y cantidad].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que compras bolsas al mayoreo?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos sobre tu tienda y los productos que vendes — nosotros te recomendamos la línea y medida ideal.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Cadena de tiendas o comprador de franquicia?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya conoces la medida y el volumen, te enviamos propuesta formal para tus sucursales.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
