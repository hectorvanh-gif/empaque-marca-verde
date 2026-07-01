import type { SpecsPageContent } from "@/components/marketing/SpecsPage";

export const tablaTamanosEs: SpecsPageContent = {
  helmetTitle: "Tabla de Tamaños de Bolsas de Papel | Medidas | BolsasMX",
  breadcrumbs: [
    { label: "Inicio", path: "/es" },
    { label: "Bolsas de Papel", path: "/es/bolsas-papel" },
    { label: "Tabla de Tamaños", path: "/es/bolsas-papel/tabla-de-tamanos" },
  ],
  hero: {
    eyebrow: "Medidas estándar",
    h1: "Tabla de Tamaños de Bolsas de Papel",
    h1Highlight: "Bolsas de Papel",
    description:
      "Consulta las medidas estándar de todas nuestras líneas de bolsas de papel — con asa, delivery, boutique y botella. Todas las medidas en cm: Ancho × Alto × Fuelle. También fabricamos a la medida dentro de nuestros rangos de producción.",
    ctaLabel: "Cotiza Ahora",
    waText:
      "Hola, quiero cotizar bolsas de papel. La medida que necesito es de aproximadamente [ancho × alto × fuelle] cm y calculo unas [cantidad] piezas. ¿Me pueden ayudar a elegir el gramaje?",
  },
  specs: {
    eyebrow: "Medidas estándar",
    heading: "Tabla de tamaños",
    description: "Todas las medidas en cm: Ancho × Alto × Fuelle. El gramaje base puede ajustarse según el peso del contenido.",
    headers: { linea: "Línea", talla: "Talla", medidas: "Medidas (cm)", gramaje: "Gramaje base", uso: "Uso recomendado" },
    standardTag: "Estándar",
    lines: [
      {
        label: "Bolsas con Asa",
        rows: [
          { talla: "Chica", medidas: "14.5 × 21.5 × 7.5", gramaje: "70–80 g/m²", uso: "Joyería, cosméticos, accesorios pequeños" },
          { talla: "Mediana", medidas: "19 × 26.5 × 8", gramaje: "80–90 g/m²", uso: "Ropa ligera, calzado chico, farmacia", std: true },
          { talla: "Grande", medidas: "30 × 39 × 18", gramaje: "100–120 g/m²", uso: "Retail general, calzado adulto, ropa" },
          { talla: "Jumbo", medidas: "33 × 47 × 12", gramaje: "110–130 g/m²", uso: "Boutique, artículos voluminosos, prendas" },
        ],
      },
      { label: "Delivery", rows: [{ talla: "Única", medidas: "30 × 40 × 18", gramaje: "90–100 g/m²", uso: "Restaurantes, food delivery, alimentos preparados" }] },
      {
        label: "Boutique (sin asa)",
        rows: [
          { talla: "Chica", medidas: "20.5 × 14 × 9", gramaje: "60–70 g/m²", uso: "Joyería, perfumería, detalle" },
          { talla: "Mediana", medidas: "30 × 22 × 12", gramaje: "80–90 g/m²", uso: "Moda, cosmética, vinos", std: true },
          { talla: "Grande", medidas: "33 × 26 × 14.5", gramaje: "90–100 g/m²", uso: "Retail premium, ropa doblada" },
        ],
      },
      { label: "Botella", rows: [{ talla: "Única", medidas: "12 × 35 × 9", gramaje: "100–120 g/m²", uso: "Vinos, licores, aceites gourmet — mín. 100g recomendado" }] },
    ],
    note:
      "Gramajes disponibles: 60 a 160 g/m². Fabricamos a la medida dentro de los rangos: ancho 12–22 cm, alto 22.5–47 cm, fuelle 6–18 cm — el pedido mínimo varía según la medida y el gramaje, contáctanos para cotizar.",
  },
  dualCta: {
    lang: "es",
    waNewText:
      "Hola, quiero cotizar bolsas de papel. Mi negocio es [tipo de negocio o producto que vendo], la bolsa que necesito es de aproximadamente [ancho × alto] cm y calculo unas [cantidad] piezas. ¿Me pueden ayudar a elegir el gramaje?",
    waCorpText:
      "Hola, soy comprador de [empresa]. Requiero cotización de [medida y gramaje], volumen estimado [cantidad]. ¿Pueden enviarme propuesta?",
    emailSubject: "Cotización bolsas de papel — medidas",
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
