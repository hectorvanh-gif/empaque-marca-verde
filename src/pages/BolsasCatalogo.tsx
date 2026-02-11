import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import catKraftReciclado from "@/assets/catalog/cat-kraft-reciclado.jpg";
import catPapelModernas from "@/assets/catalog/cat-papel-modernas.jpg";
import catEuropeoListon from "@/assets/catalog/cat-europeo-liston.jpg";
import catKraftEuropeo from "@/assets/catalog/cat-kraft-europeo.jpg";
import catKraftImpresion from "@/assets/catalog/cat-kraft-impresion.jpg";
import catLaminadoMate from "@/assets/catalog/cat-laminado-mate.jpg";
import catAltoBrillo from "@/assets/catalog/cat-alto-brillo.jpg";
import catNavidenas from "@/assets/catalog/cat-navidenas.jpg";

const categories = [
  {
    title: "Bolsas de Papel Kraft Reciclado",
    image: catKraftReciclado,
  },
  {
    title: "Bolsas de Papel Modernas",
    image: catPapelModernas,
  },
  {
    title: "Bolsa Estilo Europeo con Asas de Listón",
    image: catEuropeoListon,
  },
  {
    title: "Bolsas Kraft Estilo Europeo",
    image: catKraftEuropeo,
  },
  {
    title: "Bolsas de Papel Kraft con Impresión",
    image: catKraftImpresion,
  },
  {
    title: "Bolsas de Laminado Mate",
    image: catLaminadoMate,
  },
  {
    title: "Bolsas de Alto Brillo",
    image: catAltoBrillo,
  },
  {
    title: "Bolsas Navideñas Estilo Europeo",
    image: catNavidenas,
  },
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
        {/* HEADER */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-4">
              Catálogo de Bolsas
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explora nuestra línea completa de bolsas de papel para cada necesidad de tu negocio
            </p>
          </div>
        </section>

        {/* GRID DE CATEGORÍAS */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {categories.map((cat) => (
                <a
                  key={cat.title}
                  href="https://wa.me/5215545925827?text=Hola%2C%20me%20interesan%20las%20bolsas%20de%20tipo%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-full aspect-square mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="font-display text-sm md:text-base lg:text-lg text-primary font-semibold leading-tight group-hover:underline underline-offset-4 transition-all">
                    {cat.title}
                  </h2>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-4xl text-primary-foreground mb-6">
              ¿Necesitas bolsas personalizadas?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Todas nuestras bolsas pueden personalizarse con tu logo, colores y medidas especiales.
            </p>
            <a
              href="https://wa.me/5215545925827?text=Hola%2C%20me%20interesa%20cotizar%20bolsas%20personalizadas"
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
