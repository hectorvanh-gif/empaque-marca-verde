import { ShieldCheck, Store, UtensilsCrossed, Sandwich } from "lucide-react";
import type { ProductCategoryContent } from "@/components/marketing/ProductCategoryPage";
import estrazaImg from "@/assets/catalog/bolsa-chica.jpg";

export const estrazaEs: ProductCategoryContent = {
  helmetTitle: "Bolsas de Papel Estraza al Mayoreo | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Estraza", path: "/es/bolsas-papel/estraza" },
  ],
  hero: {
    eyebrow: "Catálogo · Estraza",
    h1: "Bolsas de Papel Estraza al Mayoreo",
    h1Highlight: "al Mayoreo",
    description:
      "El papel estraza es la opción más sencilla de nuestra familia kraft — textura rústica, sin procesos adicionales, pensada para negocios que necesitan volumen alto sin pagar de más por acabados que no necesitan.",
    badges: [{ icon: <ShieldCheck className="w-4 h-4" />, label: "Certificación FSC" }],
    ctaLabel: "Cotiza Ahora",
    waText: "Hola, quiero cotizar bolsas de papel estraza al mayoreo. Mi negocio es [tipo de negocio], volumen estimado [cantidad] al mes.",
    image: estrazaImg,
    imageAlt: "Bolsa de papel estraza",
  },
  intro: {
    eyebrow: "Qué es estraza",
    heading: "Kraft Sin Procesos Extra, Pensado Para Volumen",
    paragraphs: [
      "El estraza pertenece a la misma familia que nuestro kraft reciclado, pero con un acabado más simple — textura más rústica y sin tratamientos adicionales. Para negocios que compran por volumen y no necesitan un acabado premium, suele ser la opción más eficiente.",
      "Lo fabricamos dentro de los mismos rangos de gramaje que el resto de nuestro catálogo (60 a 160 g/m²). Cuéntanos tu uso y volumen y te recomendamos la medida y el gramaje correcto.",
    ],
  },
  useCases: {
    eyebrow: "Quién compra estraza",
    heading: "Para Negocios de Alto Volumen",
    items: [
      { icon: Store, title: "Mercados y Tianguis", description: "Volumen alto, rotación diaria, costo controlado." },
      { icon: UtensilsCrossed, title: "Fondas y Taquerías", description: "Empaque funcional para comida del día a día." },
      { icon: Sandwich, title: "Tortillerías y Abarrotes", description: "La bolsa de uso cotidiano para negocios de barrio." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    heading: "Dudas Comunes Sobre Bolsas Estraza",
    items: [
      { question: "¿En qué se diferencia el estraza del kraft?", answer: "Ambos vienen de la misma familia de papel — el estraza tiene un acabado más simple y rústico, sin los procesos adicionales del kraft reciclado, lo que lo hace una opción más eficiente para volumen alto." },
      { question: "¿Tienen estraza con impresión?", answer: "Cuéntanos si necesitas tu logo en estraza y te confirmamos viabilidad y mínimo según tu volumen." },
      { question: "¿Cuál es el pedido mínimo para estraza?", answer: "Varía según la medida y el gramaje — dinos tu volumen estimado y te confirmamos el mínimo en tu cotización." },
      { question: "¿Qué gramajes manejan en estraza?", answer: "El mismo rango que el resto de nuestro catálogo, de 60 a 160 g/m², según el uso que le vayas a dar." },
    ],
  },
  productSchema: {
    name: "Bolsas de Papel Estraza",
    description: "Bolsas de papel estraza al mayoreo, fabricadas en México dentro del mismo rango de gramaje que nuestro catálogo kraft (60 a 160 g/m²). Ideal para mercados, fondas y negocios de alto volumen.",
    category: "Bolsas de papel al mayoreo",
  },
  dualCta: {
    lang: "es",
    waNewText: "Hola, quiero cotizar bolsas de papel estraza al mayoreo. Mi negocio es [tipo de negocio], volumen estimado [cantidad] al mes.",
    waCorpText: "Hola, soy comprador de [negocio]. Requiero cotización de bolsas estraza, volumen estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas estraza — al mayoreo",
    emailBody: "Hola,\n\nSoy comprador de [negocio]. Quiero cotizar bolsas de papel estraza, volumen estimado [cantidad].\n\n¿Pueden enviarme propuesta?\n\nGracias.",
    copy: {
      card1Eyebrow: "¿Primera vez que compras estraza al mayoreo?",
      card1Title: "Te ayudamos a elegir",
      card1Desc: "Cuéntanos tu negocio y volumen aproximado — nosotros te recomendamos la medida y el gramaje ideal.",
      card1Cta: "Cotiza Ahora",
      card1Note: "Respondemos en menos de 24 h ·",
      or: "o",
      card2Eyebrow: "¿Comprador de volumen alto?",
      card2Title: "Envíanos tu especificación",
      card2Desc: "Si ya conoces la medida, gramaje y volumen, te enviamos propuesta formal por el canal que prefieras.",
      card2CtaEmail: "Solicitar cotización por correo",
      card2CtaWa: "Cotiza Ahora",
    },
  },
};
