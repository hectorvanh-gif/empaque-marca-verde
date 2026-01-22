import { Clock, MessageCircle, Zap, Truck } from "lucide-react";

const Urgency = () => {
  const whatsappNumber = "5215545925827";
  const whatsappMessage = encodeURIComponent("¡Hola! Me urgen mis bolsas, ¿pueden ayudarme?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-foreground rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-foreground rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated icon with glow */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-primary-foreground/20 rounded-full blur-xl animate-pulse scale-150" />
            <div className="relative inline-flex items-center justify-center w-24 h-24 bg-primary-foreground/20 rounded-full border-2 border-primary-foreground/30 backdrop-blur-sm">
              <Zap className="w-12 h-12 text-primary-foreground animate-pulse" />
            </div>
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 mb-6 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium tracking-wide uppercase">
              Fabricación Express
            </span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-primary-foreground leading-tight">
            ¿Te Urgen<br />
            <span className="relative">
              Tus Bolsas?
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-foreground/40"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            <strong>Nosotros te resolvemos.</strong> Contamos con capacidad para pedidos urgentes 
            y tiempos de entrega express.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">Producción Rápida</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 backdrop-blur-sm">
              <Truck className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">Envío a Todo México</span>
            </div>
          </div>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary-foreground text-primary font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl text-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <MessageCircle className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Escríbenos Ahora</span>
          </a>
          
          <p className="mt-6 text-primary-foreground/70 text-sm flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Respuesta inmediata por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
