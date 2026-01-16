import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      company: "Boutique Elegante",
      text: "Las bolsas que fabricaron para nuestra boutique superaron nuestras expectativas. Nuestros clientes las reutilizan y eso nos da mucha visibilidad.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      company: "Café La Terraza",
      text: "Excelente calidad y servicio. Las bolsas para delivery quedaron perfectas y resistentes. El equipo fue muy profesional en todo momento.",
      rating: 5,
    },
    {
      name: "Ana Ruiz",
      company: "Eventos Corporativos MX",
      text: "Trabajamos con ellos para un evento de 2,000 personas y cumplieron en tiempo y forma. Las bolsas fueron el complemento perfecto para los regalos.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-sage">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            La confianza de nuestros clientes es nuestro mayor logro. Conoce las experiencias 
            de quienes ya trabajan con nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-background rounded-2xl shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-secondary">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
