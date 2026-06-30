import { Leaf, Target, Factory, Heart } from "lucide-react";
import type { AboutPageContent } from "@/components/marketing/AboutPage";

export const nosotrosEs: AboutPageContent = {
  helmetTitle: "Nosotros | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Nosotros", path: "/es/nosotros" },
  ],
  hero: {
    eyebrow: "Quiénes Somos",
    h1: "Somos Fabricantes de Bolsas de Papel en México",
    h1Highlight: "en México",
    description:
      "BolsasMX (La Bolsa de Tu Marca) lleva más de una década fabricando bolsas de papel personalizadas desde nuestra planta en Ciudad de México — para boutiques, restaurantes, retail y cuentas corporativas.",
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero conocer más sobre BolsasMX y solicitar una cotización.",
  },
  stats: [
    { value: "10+", label: "Años en el negocio" },
    { value: "FSC", label: "Papel certificado" },
    { value: "100%", label: "Kraft reciclado" },
    { value: "24h", label: "Respuesta a cotización" },
  ],
  story: {
    eyebrow: "Nuestra historia",
    heading: "Fabricación con un Propósito",
    paragraphs: [
      "Somos una empresa mexicana especializada en la fabricación de bolsas de papel personalizadas. Desde nuestros inicios, hemos trabajado con un propósito claro: ofrecer empaques que no solo protejan productos, sino que comuniquen la esencia de cada marca.",
      "Creemos en un modelo de negocio responsable donde la calidad, la personalización y el respeto al medio ambiente van de la mano. Cada bolsa que fabricamos es una extensión de la identidad de nuestros clientes — desde boutiques independientes hasta compradores corporativos con pedidos recurrentes.",
    ],
  },
  values: {
    eyebrow: "Lo que nos define",
    heading: "Nuestros Valores",
    items: [
      { icon: Leaf, title: "Sostenibilidad", description: "Papel kraft certificado FSC, 100% reciclado. Nuestras bolsas son reciclables y biodegradables." },
      { icon: Target, title: "Precisión", description: "Cada detalle cuenta — cuidamos la calidad en cada etapa del proceso de fabricación." },
      { icon: Factory, title: "Fabricación Directa", description: "Controlamos todo el proceso internamente, sin margen de revendedor sobre tu pedido." },
      { icon: Heart, title: "Compromiso", description: "Más de una década ayudando a marcas mexicanas a comunicar su identidad." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre BolsasMX",
    items: [
      { question: "¿Dónde están ubicados?", answer: "Fabricamos desde nuestra planta en Ciudad de México y enviamos a todo el país." },
      { question: "¿Son fabricantes o distribuidores?", answer: "Fabricamos directo — no hay margen de revendedor sobre tu pedido." },
      { question: "¿Su papel realmente es reciclable?", answer: "Sí, nuestro papel kraft está certificado FSC y es 100% reciclado, y las bolsas terminadas son reciclables y biodegradables." },
      { question: "¿Trabajan con negocios pequeños y cuentas grandes?", answer: "Sí — desde boutiques individuales hasta compradores corporativos con pedidos mensuales recurrentes." },
    ],
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero conocer más sobre BolsasMX y solicitar una cotización. Mi negocio es [tipo de negocio].",
    waCorpText: "Hola, soy comprador de [empresa]. Quiero más información sobre BolsasMX como posible proveedor.",
    emailSubject: "Sobre BolsasMX — consulta de proveedor",
    emailBody: "Hola,\n\nSoy comprador de [empresa]. Quiero más información sobre BolsasMX como posible proveedor.\n\nGracias.",
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
