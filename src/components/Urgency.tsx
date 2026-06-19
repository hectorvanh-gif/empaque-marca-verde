import { Clock, MessageCircle, Zap, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Urgency = () => {
  const { t } = useLanguage();
  const whatsappNumber = "5215545925827";
  const whatsappMessage = encodeURIComponent("¡Hola! Me urgen mis bolsas, ¿pueden ayudarme?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-mist rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated icon with glow */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-secondary/30 rounded-full blur-xl animate-pulse scale-150" />
            <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full border-2 border-white/40 backdrop-blur-sm">
              <Zap className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full border border-white/30 mb-6 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium tracking-wide uppercase">
              {t.urgency.badge}
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight drop-shadow-lg">
            {t.urgency.title1}<br />
            <span className="relative">
              {t.urgency.title2}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-white/50"/>
              </svg>
            </span>
          </h2>

          <p className="text-white/95 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            <strong>{t.urgency.textBold}</strong> {t.urgency.textRest}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/15 rounded-lg border border-white/30 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">{t.urgency.feature1}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/15 rounded-lg border border-white/30 backdrop-blur-sm">
              <Truck className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-medium">{t.urgency.feature2}</span>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl text-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <MessageCircle className="w-6 h-6 relative z-10" />
            <span className="relative z-10">{t.urgency.cta}</span>
          </a>

          <p className="mt-6 text-white/80 text-sm flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
            {t.urgency.footnote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
