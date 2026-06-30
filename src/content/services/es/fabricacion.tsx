import { ShieldCheck, Factory, ClipboardCheck, MapPin, Repeat } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import industrialImg from "@/assets/carousel/industrial-1.jpg";

export const fabricacionEs: ProductCategoryContent = {
  helmetTitle: "Fabricante de Bolsas de Papel en México | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Servicios", path: "/es/servicios" },
    { label: "Fabricación", path: "/es/servicios/fabricacion" },
  ],
  hero: {
    eyebrow: "Servicios · Fabricación",
    h1: "Fabricación de Bolsas de Papel en México",
    h1Highlight: "en México",
    description:
      "Más de una década fabricando bolsas de papel personalizadas desde nuestra planta en Ciudad de México. Controlamos materia prima, producción y calidad directamente — sin revendedor de por medio.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" }],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero saber más sobre su proceso de fabricación y armar un pedido recurrente para mi negocio.",
    image: industrialImg,
    imageAlt: "Proceso de fabricación de bolsas de papel",
  },
  intro: {
    eyebrow: "Fabricante directo",
    heading: "Controlamos Todo el Proceso",
    paragraphs: [
      "Desde el abastecimiento de papel kraft certificado FSC y 100% reciclado hasta el formado, la impresión y la revisión de calidad de cada bolsa, manejamos cada paso internamente. Eso es lo que nos permite garantizar consistencia entre tu primer pedido y el número cincuenta.",
      "Más de una década en el negocio nos ha permitido construir procesos que aguantan a escala — no solo para pedidos únicos, sino para negocios que necesitan la misma bolsa, la misma calidad, cada mes.",
    ],
  },
  useCases: {
    eyebrow: "Qué significa esto para ti",
    heading: "Pensado Para Negocios que Reordenan",
    items: [
      { icon: Factory, title: "Producción propia", description: "No subcontratamos la fabricación — sucede en nuestra planta, de principio a fin." },
      { icon: ClipboardCheck, title: "Control de calidad", description: "Cada lote se revisa antes de salir, así que lo que aprobaste es lo que recibes." },
      { icon: Repeat, title: "Pedidos recurrentes", description: "Trabajamos con negocios en suministro mensual, no solo compras únicas." },
      { icon: MapPin, title: "Entrega a todo México", description: "Enviamos a cualquier parte del país desde nuestra planta en CDMX." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Sobre Nuestra Fabricación",
    items: [
      { question: "¿Dónde está su planta?", answer: "Fabricamos desde nuestra planta en Ciudad de México y enviamos a todo el país." },
      { question: "¿Cuánto tiempo llevan fabricando bolsas de papel?", answer: "Más de una década. Hemos trabajado desde boutiques individuales hasta compradores corporativos con pedidos mensuales recurrentes." },
      { question: "¿Pueden armar un suministro mensual recurrente?", answer: "Sí — dinos tu volumen mensual esperado y armamos un calendario de pedidos continuos." },
      { question: "¿Hacen control de calidad antes de enviar?", answer: "Sí, cada lote se revisa para garantizar consistencia antes de salir." },
    ],
  },
  productSchema: {
    name: "Servicio de Fabricación de Bolsas de Papel",
    description: "Servicio de fabricación directa de bolsas de papel en Ciudad de México. Materiales certificados FSC, control de calidad y acuerdos de suministro recurrente.",
    category: "Servicio de manufactura",
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero saber más sobre su proceso de fabricación y armar un pedido recurrente para mi negocio.",
    waCorpText: "Hola, soy comprador de [empresa]. Quiero platicar un acuerdo de suministro mensual recurrente. Volumen estimado [cantidad].",
    emailSubject: "Fabricación — solicitud de suministro recurrente",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero platicar un acuerdo de suministro mensual recurrente, volumen estimado [cantidad].\n\nGracias.",
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
