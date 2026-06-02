import { Recycle, Palette, MapPin, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Recycle,
      title: "Material Ecológico",
      description: "Papel 100% reciclable y biodegradable. Contribuye al cuidado del planeta con cada bolsa.",
      highlight: "Eco-friendly",
    },
    {
      icon: Palette,
      title: "Personalización Total",
      description: "Diseños únicos con tu logo, colores y acabados especiales que reflejan tu marca.",
      highlight: "Tu diseño",
    },
    {
      icon: MapPin,
      title: "Hecho en México",
      description: "Producción nacional que garantiza tiempos de entrega cortos y apoyo a la industria local.",
      highlight: "Nacional",
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Materiales de primera calidad y procesos de fabricación que aseguran durabilidad.",
      highlight: "Alta calidad",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-mist font-medium text-sm tracking-wide uppercase mb-4">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            ¿Por Qué Elegir Nuestras Bolsas de Papel?
          </h2>
          <p className="text-accent-foreground/80 text-lg">
            Más que proveedores, somos aliados de tu marca. Ofrecemos soluciones de empaque 
            sustentable que fortalecen la identidad de tu negocio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group p-8 bg-accent-foreground/5 rounded-2xl border border-accent-foreground/10 hover:bg-accent-foreground/10 transition-all duration-300"
            >
              {/* Highlight Badge */}
              <span className="absolute top-6 right-6 px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full">
                {benefit.highlight}
              </span>

              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-secondary" />
              </div>

              <h3 className="font-display text-2xl mb-3">
                {benefit.title}
              </h3>

              <p className="text-accent-foreground/70 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-accent-foreground/80 mb-6 text-lg">
            Únete a las marcas conscientes que eligen empaques sustentables
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-elevated"
          >
            Solicita Tu Cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
