import { ShieldCheck, Printer, ShoppingBag, Wine, Store, Truck } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import catKraft from "@/assets/catalog/cat-kraft-reciclado.jpg";

export const kraftEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel Kraft al Mayoreo | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Kraft", path: "/es/bolsas-papel/kraft" },
  ],
  hero: {
    eyebrow: "Catálogo · Bolsas Kraft",
    h1: "Bolsas de Papel Kraft al Mayoreo — Fabricante Directo",
    h1Highlight: "Fabricante Directo",
    description:
      "Bolsas de papel kraft 100% recicladas, certificación FSC, fabricadas en Ciudad de México. Cuatro líneas: con asa, delivery, boutique y botella — con o sin impresión de tu logo.",
    badges: [
      { icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" },
      { icon: <Printer className="w-4 h-4" />, label: "Impresión a 2 tintas" },
    ],
    ctaLabel: "Cotiza Ahora",
    waText:
      "Hola, quiero cotizar bolsas de papel kraft. Mi negocio es [tipo de negocio], la bolsa que necesito es de aproximadamente [ancho × alto] cm y calculo unas [cantidad] piezas.",
    image: catKraft,
    imageAlt: "Bolsas de papel kraft reciclado",
  },
  useCases: {
    eyebrow: "Quién compra kraft",
    heading: "Kraft al Mayoreo, Para Cada Tipo de Negocio",
    items: [
      { icon: ShoppingBag, title: "Boutiques y Moda", description: "Bolsas con asa personalizadas que se convierten en publicidad ambulante." },
      { icon: Truck, title: "Restaurantes y Delivery", description: "Kraft resistente para comida para llevar y pedidos a domicilio." },
      { icon: Store, title: "Tiendas Departamentales", description: "Pedidos de gran volumen con calidad consistente lote tras lote." },
      { icon: Wine, title: "Vinaterías y Gourmet", description: "Formato botella para vinos, licores y aceites gourmet." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Bolsas Kraft",
    items: [
      { question: "¿Pueden imprimir mi logo en kraft?", answer: "Sí, imprimimos hasta 2 tintas directo sobre papel kraft. Envíanos tu logo y te mandamos una prueba digital antes de producción." },
      { question: "¿Cuál es el pedido mínimo?", answer: "Varía según la medida, el gramaje y si la bolsa lleva impresión o no. Cuéntanos tus especificaciones y volumen estimado y te confirmamos el mínimo en tu cotización." },
      { question: "¿Tienen kraft en diferentes medidas?", answer: "Sí, cuatro líneas (con asa, delivery, boutique y botella) en tallas de chica a jumbo, además de medidas a la medida dentro de nuestro rango de producción." },
      { question: "¿El papel kraft es reciclable?", answer: "Sí, nuestro papel kraft es 100% reciclado y cuenta con certificación FSC. Las bolsas son reciclables y biodegradables." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel Kraft Reciclado",
    description:
      "Bolsas de papel kraft 100% reciclado fabricadas en México. Disponibles en líneas con asa, delivery, boutique y botella, en tallas chica a jumbo y gramajes de 60 a 160 g/m². Personalizables con impresión a 2 tintas.",
    category: "Bolsas de papel personalizadas",
    additionalProperty: [
      { name: "Gramaje", value: "60 a 160 g/m²" },
      { name: "Certificación", value: "FSC" },
      { name: "Impresión", value: "2 tintas" },
    ],
  },
  dualCta: {
    lang: "es",
    waNewText:
      "Hola, quiero cotizar bolsas de papel kraft. Mi negocio es [tipo de negocio o producto que vendo], la bolsa que necesito es de aproximadamente [ancho × alto] cm y calculo unas [cantidad] piezas. ¿Me pueden ayudar a elegir el gramaje?",
    waCorpText:
      "Hola, soy comprador de [empresa]. Requiero cotización de [medida y gramaje], volumen estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas kraft — compra corporativa",
    emailBody:
      "Hola,\n\nSoy comprador de [empresa]. Requiero cotización de [línea, medida y gramaje], volumen estimado [cantidad].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
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
