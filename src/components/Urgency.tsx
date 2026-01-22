import { Clock, MessageCircle } from "lucide-react";

const Urgency = () => {
  const whatsappNumber = "5215545925827";
  const whatsappMessage = encodeURIComponent("¡Hola! Me urgen mis bolsas, ¿pueden ayudarme?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/10 rounded-full mb-8">
            <Clock className="w-10 h-10" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            ¿Te Urgen Tus Bolsas?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Nosotros te resolvemos. Contamos con capacidad para pedidos urgentes 
            y tiempos de entrega express.
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-elevated text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Escríbenos Ahora
          </a>
          
          <p className="mt-6 text-primary-foreground/60 text-sm">
            Respuesta inmediata por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
