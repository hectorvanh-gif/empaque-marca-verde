import logo from "@/assets/logo.png";

const HeroMinimal = () => {
  return (
    <section id="inicio" className="min-h-[70vh] flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <img
            src={logo}
            alt="La Bolsa de Tu Marca"
            className="h-20 md:h-24 mb-8"
          />
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Tu publicidad en cada venta
          </h1>
          
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-elevated hover:-translate-y-0.5 text-lg"
          >
            Cotiza tus bolsas personalizadas
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
