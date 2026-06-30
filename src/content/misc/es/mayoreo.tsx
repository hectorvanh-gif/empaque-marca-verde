import { UtensilsCrossed, Store, Building2, Croissant, ShoppingCart, Repeat } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import wholesaleImg from "@/assets/products-bags.jpg";

export const mayoreoEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel al Mayoreo | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Mayoreo", path: "/es/mayoreo" },
  ],
  hero: {
    eyebrow: "Mayoreo",
    h1: "Bolsas de Papel al Mayoreo — Fabricante Directo",
    h1Highlight: "Fabricante Directo",
    description:
      "Sin margen de distribuidor — compras directo al fabricante. Trabajamos tanto con un primer pedido grande como con cuentas que necesitan suministro mensual recurrente.",
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero hacer un pedido al mayoreo. Mi negocio es [tipo de negocio], volumen estimado [cantidad].",
    image: wholesaleImg,
    imageAlt: "Bolsas de papel al mayoreo",
  },
  intro: {
    eyebrow: "Cómo funciona el precio por volumen",
    heading: "Entre Más Grande el Pedido, Más Sentido Tiene Comprar Directo",
    paragraphs: [
      "Trabajamos con todo tipo de volúmenes — desde un primer pedido de unos cientos de piezas hasta volúmenes mensuales recurrentes en miles. Los pedidos más grandes y recurrentes tienen prioridad en el calendario de producción y un contacto dedicado para reórdenes.",
      "Dinos tu volumen estimado y te cotizamos directo — no manejamos lista de precios publicada porque depende de la medida, gramaje, línea y si la bolsa lleva impresión.",
    ],
  },
  useCases: {
    eyebrow: "A quién surtimos",
    heading: "Pensado Para Negocios que Reordenan",
    items: [
      { icon: UtensilsCrossed, title: "Cadenas de Restaurantes", description: "Suministro consistente en varias sucursales." },
      { icon: Store, title: "Retail y Tiendas Departamentales", description: "Bolsas con marca al volumen que necesita el retail." },
      { icon: Building2, title: "Hoteles", description: "Empaque personalizado para tiendas de regalo, amenidades y room service." },
      { icon: Croissant, title: "Cadenas de Panaderías", description: "Suministro recurrente de bolsas de pan a la medida de tu línea." },
      { icon: ShoppingCart, title: "Ecommerce y Distribuidores", description: "Volumen al mayoreo para reventa o fulfillment." },
      { icon: Repeat, title: "Cuentas Recurrentes", description: "Un contacto dedicado para reórdenes mensuales programadas." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Compras al Mayoreo",
    items: [
      { question: "¿Tienen lista de precios publicada?", answer: "No — el precio depende de la medida, gramaje, línea y si la bolsa lleva impresión. Cuéntanos tus especificaciones y volumen y te mandamos cotización directa." },
      { question: "¿Hay mejor precio a mayor volumen?", answer: "Generalmente sí — los pedidos grandes y recurrentes obtienen condiciones más favorables. Dinos tu volumen estimado y cotizamos en consecuencia." },
      { question: "¿Pueden armar un pedido mensual recurrente?", answer: "Sí, este es exactamente el tipo de cuenta para el que estamos preparados. Armamos un calendario de reórdenes según tu volumen." },
      { question: "¿Hacen envíos a todo México?", answer: "Sí, enviamos a cualquier parte del país desde nuestra planta en Ciudad de México." },
      { question: "¿Puedo pedir una muestra antes de hacer un pedido al mayoreo?", answer: "Sí — visita nuestra página de muestras para solicitar un kit antes de comprometerte con un pedido grande." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel al Mayoreo",
    description: "Bolsas de papel al mayoreo, fabricante directo en Ciudad de México, para restaurantes, retail, hoteles, panaderías y cuentas recurrentes.",
    category: "Empaque al mayoreo",
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero hacer un pedido al mayoreo. Mi negocio es [tipo de negocio], volumen estimado [cantidad]. ¿Manejan precios por volumen?",
    waCorpText: "Hola, soy comprador de [empresa]. Quiero platicar un acuerdo de suministro al mayoreo, volumen mensual estimado [cantidad].",
    emailSubject: "Bolsas de papel al mayoreo — solicitud de suministro",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero platicar un acuerdo de suministro al mayoreo, volumen mensual estimado [cantidad].\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que compras bolsas al mayoreo?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos de tu negocio y el tamaño aproximado — nosotros te recomendamos la línea, talla y gramaje ideal.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Comprador corporativo o cuenta recurrente?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya conoces la medida, gramaje y volumen, te enviamos propuesta formal por el canal que prefieras.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
