const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-8">
            Convierte cada bolsa en un anuncio de tu marca
          </h2>
          
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-elevated hover:-translate-y-0.5 text-lg"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
