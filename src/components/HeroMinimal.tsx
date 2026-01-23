import deliveryBags from "@/assets/delivery-bags.jpg";

const HeroMinimal = () => {
  return (
    <section id="inicio" className="min-h-[70vh] flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-snug mb-10 tracking-tight">
              <span className="block">Diseñamos y fabricamos</span>
              <span className="block text-primary">bolsas de papel y bolsas de tela</span>
              <span className="block">personalizadas para que tu marca</span>
              <span className="block font-semibold">venda, destaque y se recuerde.</span>
            </h1>
            
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group w-fit mx-auto lg:mx-0"
            >
              <span>Cotiza tus bolsas personalizadas</span>
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
          
          {/* Image */}
          <div className="relative">
            <img 
              src={deliveryBags} 
              alt="Bolsas de delivery personalizadas sin asas en colores negro con rojo y azul marino" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm shadow-lg">
              Delivery con tu marca
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
