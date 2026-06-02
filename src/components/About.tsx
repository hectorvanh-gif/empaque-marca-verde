import { Leaf, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Nuestras bolsas son 100% reciclables y biodegradables, contribuyendo a un futuro más verde.",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Cada detalle cuenta. Cuidamos la calidad en cada etapa del proceso de fabricación.",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Más de una década ayudando a marcas mexicanas a comunicar su identidad.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-gradient-sage">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
              Quiénes Somos
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Fabricantes de Bolsas de Papel en México
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Somos una empresa mexicana especializada en la fabricación de bolsas de papel personalizadas. 
              Desde nuestros inicios, hemos trabajado con un propósito claro: ofrecer empaques que no solo 
              protejan productos, sino que comuniquen la esencia de cada marca.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Creemos en un modelo de negocio responsable donde la calidad, la personalización y el respeto 
              al medio ambiente van de la mano. Cada bolsa que fabricamos es una extensión de la identidad 
              de nuestros clientes.
            </p>

            <a
              href="#productos"
              className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
            >
              Conoce nuestros productos
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-background rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
