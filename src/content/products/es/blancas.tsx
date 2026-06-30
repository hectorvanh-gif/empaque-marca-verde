import { ShieldCheck, Printer, Gem, Shirt, Gift, Sparkles } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import whiteImg from "@/assets/catalog/bolsa-blanca-grande.jpg";

export const blancasEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel Blancas con Logo | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Blancas", path: "/es/bolsas-papel/blancas" },
  ],
  hero: {
    eyebrow: "Catálogo · Bolsas Blancas",
    h1: "Bolsas de Papel Blancas con Logo — Al Mayoreo",
    h1Highlight: "Al Mayoreo",
    description:
      "La bolsa blanca es la imagen de marca premium que usan tiendas departamentales y boutiques. Mismo papel certificado FSC, mismas líneas con asa y boutique que nuestro kraft — en acabado blanco.",
    badges: [
      { icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" },
      { icon: <Printer className="w-4 h-4" />, label: "Impresión a 2 tintas" },
    ],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero cotizar bolsas de papel blancas con mi logo. Mi negocio es [tipo de negocio], medida aproximada [ancho × alto] cm, unas [cantidad] piezas.",
    image: whiteImg,
    imageAlt: "Bolsa de papel blanca con asa",
  },
  intro: {
    eyebrow: "Por qué blanca",
    heading: "Imagen Premium Para Marcas de Retail",
    paragraphs: [
      "La bolsa blanca comunica un nivel de marca distinto al kraft — es la que usan tiendas departamentales, boutiques y marcas de cosmética cuando la bolsa misma forma parte de la experiencia de compra.",
      "Se fabrica sobre las mismas líneas con asa y boutique de nuestro catálogo kraft, así que las mismas medidas aplican — consulta la tabla completa en nuestra página de kraft. La diferencia es el acabado: una superficie blanca que resalta tu logo y colores.",
    ],
  },
  useCases: {
    eyebrow: "Ideal para",
    heading: "Marcas que Venden la Experiencia de Unboxing",
    items: [
      { icon: Shirt, title: "Moda y Retail", description: "Ropa doblada y accesorios en una bolsa limpia, enfocada en marca." },
      { icon: Gem, title: "Cosmética y Joyería", description: "Tallas chica y mediana para compras de alto margen." },
      { icon: Gift, title: "Tiendas de Regalo", description: "Una bolsa blanca se lee como regalo antes de abrirla." },
      { icon: Sparkles, title: "Tiendas Departamentales", description: "Calidad consistente al volumen que necesitan las grandes tiendas." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Bolsas Blancas",
    items: [
      { question: "¿Qué medidas hay disponibles en blanco?", answer: "Las mismas tallas de las líneas con asa y boutique disponibles en kraft — consulta la tabla completa en nuestra página de kraft. Dinos la medida que necesitas y confirmamos disponibilidad." },
      { question: "¿Pueden imprimir a color sobre blanco?", answer: "Imprimimos hasta 2 tintas con referencia Pantone. Para diseños más complejos, cuéntanos qué necesitas y vemos qué es viable según tu volumen." },
      { question: "¿El papel blanco también es FSC?", answer: "Sí, todo nuestro papel — kraft o blanco — proviene de fuentes certificadas FSC y 100% recicladas." },
      { question: "¿Cuál es el pedido mínimo para bolsas blancas?", answer: "Depende de la medida y si necesitas impresión. Envíanos tus especificaciones y te cotizamos en menos de 24 horas." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel Blancas",
    description: "Bolsas de papel blancas personalizadas, fabricadas en México sobre papel certificado FSC y 100% reciclado. Disponibles en líneas con asa y boutique, personalizables con impresión a 2 tintas.",
    category: "Bolsas de papel personalizadas",
    additionalProperty: [
      { name: "Certificación", value: "FSC" },
      { name: "Impresión", value: "2 tintas" },
    ],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero cotizar bolsas de papel blancas con mi logo. Mi negocio es [tipo de negocio], medida aproximada [ancho × alto] cm, unas [cantidad] piezas.",
    waCorpText: "Hola, soy comprador de [empresa]. Requiero cotización de bolsas blancas, [medida], volumen estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas blancas — compra corporativa",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Requiero cotización de bolsas de papel blancas, [medida y cantidad].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
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
