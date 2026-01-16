import { ShoppingBag, Utensils, Gift, Building } from "lucide-react";
import productsBags from "@/assets/products-bags.jpg";

const Products = () => {
  const applications = [
    {
      icon: ShoppingBag,
      title: "Retail y Boutiques",
      description: "Bolsas elegantes que reflejan la calidad de tu tienda y productos.",
    },
    {
      icon: Utensils,
      title: "Restaurantes y Cafeterías",
      description: "Empaques prácticos y atractivos para delivery y take-away.",
    },
    {
      icon: Gift,
      title: "Eventos y Regalos",
      description: "Bolsas personalizadas para ocasiones especiales y corporativos.",
    },
    {
      icon: Building,
      title: "Marcas Corporativas",
      description: "Soluciones de empaque que fortalecen tu imagen empresarial.",
    },
  ];

  const features = [
    "Papel kraft natural o blanco",
    "Diferentes tamaños disponibles",
    "Asas de papel torcido o plano",
    "Impresión a una o varias tintas",
    "Acabados especiales disponibles",
    "Pedidos desde 500 piezas",
  ];

  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Nuestros Productos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Bolsas de Papel Personalizadas
          </h2>
          <p className="text-muted-foreground text-lg">
            Fabricamos bolsas de papel de alta calidad con tu logo y diseño personalizado. 
            Ideales para cualquier industria que busque un empaque sustentable y profesional.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/30 rounded-2xl -rotate-3" />
            <img
              src={productsBags}
              alt="Variedad de bolsas de papel personalizadas en diferentes tamaños"
              className="relative rounded-xl shadow-elevated w-full"
            />
          </div>

          {/* Features */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-6">
              Características de Nuestras Bolsas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-6 bg-secondary/30 rounded-xl">
              <p className="text-foreground font-medium mb-2">
                ¿Necesitas un tamaño o diseño especial?
              </p>
              <p className="text-muted-foreground text-sm">
                Trabajamos proyectos personalizados según tus necesidades específicas. 
                Contáctanos para discutir tu proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group p-6 bg-background border border-secondary rounded-xl hover:border-accent/50 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <app.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h4 className="font-display text-lg text-foreground mb-2">
                {app.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
