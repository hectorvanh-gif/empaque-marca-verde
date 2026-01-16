import { MessageCircle } from "lucide-react";
import heroBags from "@/assets/hero-bags.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/5255547572447?text=Hola,%20me%20interesa%20cotizar%20bolsas%20de%20papel%20personalizadas";

  return (
    <section id="inicio" className="relative min-h-screen h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBags}
          alt="Bolsas de papel personalizadas de alta calidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-primary-foreground/90 text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-primary-foreground/20">
            Fabricación en México 🇲🇽
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Bolsas de Papel Personalizadas para Tu Marca
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-xl">
            Diseñamos y fabricamos empaques ecológicos que comunican la identidad de tu marca. 
            Personalización total, calidad premium y compromiso sustentable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-elevated hover:-translate-y-0.5"
            >
              Cotiza Tus Bolsas
            </a>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-wrap gap-8 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Material 100% reciclable
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Producción nacional
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Personalización total
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
