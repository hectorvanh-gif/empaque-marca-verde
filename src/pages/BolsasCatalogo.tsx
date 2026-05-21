import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import catKraftReciclado from "@/assets/catalog/cat-kraft-reciclado.jpg";
import catPapelModernas from "@/assets/catalog/cat-papel-modernas.jpg";
import catKraftEuropeo from "@/assets/catalog/cat-kraft-europeo.jpg";
import catKraftImpresion from "@/assets/catalog/cat-kraft-impresion.jpg";
import catToteBags from "@/assets/catalog/cat-tote-bags.jpg";

const categories = [
  { title: "Bolsas de Papel Kraft Reciclado", image: catKraftReciclado },
  { title: "Bolsas de Papel para Retail", image: catPapelModernas },
  { title: "Bolsas Kraft Estilo Europeo", image: catKraftEuropeo },
  { title: "Bolsas de Papel Kraft con Impresión", image: catKraftImpresion },
  { title: "Tote Bags", image: catToteBags },
];

const BolsasCatalogo = () => {
  return (
    <>
      <Helmet>
        <title>Catálogo de Bolsas | BolsasMX</title>
        <meta
          name="description"
          content="Catálogo completo de bolsas de papel: kraft reciclado, modernas, estilo europeo, laminado mate, alto brillo y más. Fabricantes directos en México."
        />
        <link rel="canonical" href="https://www.bolsasmx.com/bolsas-catalogo" />
      </Helmet>
      <Header />

      <main className="min-h-screen bg-background">
        {/* HERO - estilo HeroMinimal */}
        <section className="min-h-[50vh] flex items-center justify-center bg-background pt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-snug mb-6 max-w-5xl tracking-tight">
                <span className="block">
                  Nuestro <span className="text-primary">catálogo</span> de bolsas
                </span>
                <span className="block font-semibold">para cada necesidad de tu marca</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10">
                Explora nuestra línea completa de bolsas de papel personalizables. Fabricantes directos.
              </p>
              <a
                href="#categorias"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
              >
                <span>Ver catálogo</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* GRID DE CATEGORÍAS */}
        <section id="categorias" className="py-20 md:py-28 bg-gradient-sage">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Línea completa
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Categorías de bolsas
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {categories.map((cat) => (
                <a
                  key={cat.title}
                  href={`https://wa.me/5215545925827?text=Hola%2C%20me%20interesan%20las%20${encodeURIComponent(cat.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-full aspect-square mb-5 flex items-center justify-center overflow-hidden bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 group-hover:-translate-y-1 border border-border/10 p-4">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-sm md:text-base lg:text-lg text-foreground font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                    {cat.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* PERSONALIZACIÓN */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Personalización
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Hazla tuya
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Todas nuestras bolsas pueden personalizarse con tu logo, colores, medidas
              especiales y asas. Convierte cada entrega en una experiencia de marca.
            </p>
            <a
              href="https://wa.me/5215545925827?text=Hola%2C%20me%20interesa%20cotizar%20bolsas%20personalizadas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
            >
              <span>Solicitar cotización</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
