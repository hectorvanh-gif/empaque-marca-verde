import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Check, Gift, Truck, ShoppingBag, Paintbrush, Palette, Shirt } from "lucide-react";

import heroCatalog from "@/assets/catalog/hero-catalog.jpg";
import bolsaChica from "@/assets/catalog/bolsa-chica.jpg";
import bolsaMediana from "@/assets/catalog/bolsa-delivery-restaurante.jpg";
import bolsaGrande from "@/assets/catalog/bolsa-grande.jpg";
import bolsaBlancaGrande from "@/assets/catalog/bolsa-blanca-grande.jpg";
import bolsaTela from "@/assets/catalog/bolsa-tela.jpg";
import bolsaColorGrande from "@/assets/catalog/bolsa-color-grande.jpg";

const products = [
  {
    title: "Bolsa Chica – Ideal para Regalo",
    size: "21 × 15 × 8 cm",
    description:
      "Pequeña en tamaño, enorme en intención. Perfecta para regalos, boutiques y detalles especiales.",
    bullets: [
      "Uso: Regalos, artículos pequeños, experiencias premium",
      "Material: Papel kraft resistente",
      "Sensación de marca: Cercanía y cuidado",
    ],
    image: bolsaChica,
    icon: Gift,
  },
  {
    title: "Bolsa Mediana – Ideal para Delivery",
    size: "26 × 12 × 34 cm",
    description:
      "La más versátil. Diseñada para restaurantes, cafeterías y negocios con alto flujo de pedidos.",
    bullets: [
      "Uso: Delivery y take away",
      "Material: Papel kraft reforzado",
      "Sensación de marca: Confianza y practicidad",
    ],
    image: bolsaMediana,
    icon: Truck,
  },
  {
    title: "Bolsa Grande – Ideal para Retail",
    size: "32 × 12 × 41 cm",
    description:
      "Cuando tu producto necesita presencia. Ideal para retail, ropa y compras grandes.",
    bullets: [
      "Uso: Retail y compras voluminosas",
      "Material: Papel kraft grueso y resistente",
      "Sensación de marca: Solidez y profesionalismo",
    ],
    image: bolsaGrande,
    icon: ShoppingBag,
  },
  {
    title: "Bolsa Blanca Grande – Retail Premium",
    size: "41 × 18 × 46 cm",
    description:
      "Elegancia en cada entrega. Bolsa blanca de papel grueso ideal para boutiques, joyerías y tiendas premium.",
    bullets: [
      "Uso: Retail premium, boutiques y tiendas de lujo",
      "Material: Papel blanco grueso y resistente",
      "Sensación de marca: Elegancia y sofisticación",
    ],
    image: bolsaBlancaGrande,
    icon: ShoppingBag,
  },
  {
    title: "Bolsa de Tela – Reutilizable",
    size: "41 × 18 × 46 cm",
    description:
      "Sustentable y duradera. Bolsa de tela de algodón perfecta para marcas eco-conscientes que buscan impacto duradero.",
    bullets: [
      "Uso: Retail sustentable y promocional",
      "Material: Tela de algodón resistente",
      "Sensación de marca: Sustentabilidad y calidad",
    ],
    image: bolsaTela,
    icon: Shirt,
  },
  {
    title: "Bolsa de Color Grande – Retail",
    size: "41 × 18 × 46 cm",
    description:
      "Dale color a tu marca. Bolsa grande disponible en múltiples colores vibrantes para destacar en cada compra.",
    bullets: [
      "Uso: Retail, tiendas de ropa y accesorios",
      "Material: Papel de color grueso con asas",
      "Sensación de marca: Energía y personalidad",
    ],
    image: bolsaColorGrande,
    icon: Palette,
  },
];

const BolsasCatalogo = () => {
  return (
    <>
      <Helmet>
        <title>Catálogo de Bolsas Estándar | BolsasMX</title>
        <meta name="description" content="Catálogo de bolsas de papel kraft estándar para regalo, delivery y retail. Personalizables con tu logo. Fabricantes directos en México." />
        <link rel="canonical" href="https://www.bolsasmx.com/bolsas-catalogo" />
        <meta property="og:title" content="Catálogo de Bolsas Estándar | BolsasMX" />
        <meta property="og:description" content="Bolsas de papel kraft personalizadas para regalo, delivery y retail. Solicita tu cotización." />
        <meta property="og:url" content="https://www.bolsasmx.com/bolsas-catalogo" />
      </Helmet>
      <Header />

      <main className="min-h-screen">
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroCatalog}
              alt="Catálogo de bolsas de papel kraft personalizadas"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
          </div>
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold leading-tight mb-6">
              Bolsas que cuentan la historia de tu marca
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Catálogo de bolsas de papel estándar diseñadas para regalo, delivery y retail
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-full shadow-elevated hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
            >
              Cotiza ahora
            </a>
          </div>
        </section>

        {/* CATÁLOGO */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">
              Nuestro Catálogo
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
              Encuentra la bolsa perfecta para cada necesidad de tu negocio
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <article
                    key={product.title}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border border-border/10"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 w-11 h-11 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="p-6 lg:p-8">
                      <h3 className="font-display text-xl lg:text-2xl text-foreground mb-1">
                        {product.title}
                      </h3>
                      <span className="inline-block text-xs font-semibold tracking-wide text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                        📐 {product.size}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {product.description}
                      </p>
                      <ul className="space-y-2.5">
                        {product.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-sm text-foreground/80"
                          >
                            <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PERSONALIZACIÓN */}
        <section className="py-20 md:py-28 bg-gradient-sage">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Paintbrush className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Hazla tuya
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Todas nuestras bolsas pueden personalizarse con tu logo, colores, medidas
              especiales y asas. Convierte cada entrega en una experiencia de marca.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-8">
              Cotiza tus bolsas personalizadas hoy
            </h2>
            <a
              href="https://wa.me/5215545925827?text=Hola%2C%20me%20interesa%20cotizar%20bolsas%20personalizadas%20del%20cat%C3%A1logo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-full shadow-elevated hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-lg"
            >
              Solicitar cotización
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BolsasCatalogo;
