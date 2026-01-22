import { FileText, Pencil, Truck } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Solicita tu cotización",
      description: "Cuéntanos sobre tu proyecto: cantidad, tamaño y tipo de personalización. Te respondemos en menos de 24 horas.",
    },
    {
      number: "02",
      icon: Pencil,
      title: "Diseño y aprobación",
      description: "Trabajamos contigo para crear el diseño perfecto. Recibirás una prueba digital antes de la producción.",
    },
    {
      number: "03",
      icon: Truck,
      title: "Producción y entrega",
      description: "Fabricamos tus bolsas con los más altos estándares y te las entregamos en el tiempo acordado.",
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Proceso Simple
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            ¿Cómo Funciona?
          </h2>
          <p className="text-muted-foreground text-lg">
            Obtener tus bolsas personalizadas es fácil. Sigue estos tres pasos y tendrás 
            el empaque perfecto para tu marca.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-secondary" />
              )}

              <div className="relative text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-accent-foreground font-display text-lg font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 p-8 bg-secondary/30 rounded-2xl text-center">
          <h4 className="font-display text-xl text-foreground mb-3">
            ¿Tienes un proyecto urgente?
          </h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contamos con opciones de producción express para pedidos que necesitas con mayor rapidez. 
            Contáctanos para conocer disponibilidad y tiempos de entrega.
          </p>
          <a
            href="https://wa.me/5215545925827?text=Hola,%20tengo%20un%20proyecto%20urgente%20de%20bolsas%20de%20papel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors"
          >
            Escríbenos por WhatsApp
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
