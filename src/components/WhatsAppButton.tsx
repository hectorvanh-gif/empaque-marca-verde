import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5215554757247?text=Hola,%20me%20interesa%20cotizar%20bolsas%20de%20papel%20personalizadas";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white font-medium rounded-full shadow-elevated hover:shadow-lg hover:scale-105 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">¿Dudas? Escríbenos</span>
    </a>
  );
};

export default WhatsAppButton;
