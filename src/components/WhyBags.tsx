import { Factory, Leaf, Paintbrush, Store } from "lucide-react";

const features = [
  {
    icon: Factory,
    text: "Fabricación propia",
  },
  {
    icon: Leaf,
    text: "Papel kraft ecológico",
  },
  {
    icon: Paintbrush,
    text: "Personalización total",
  },
  {
    icon: Store,
    text: "Ideal para marcas y retail",
  },
];

const WhyBags = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12 md:mb-16">
          ¿Por qué Bolsas?
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <p className="font-medium text-foreground text-sm md:text-base">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBags;
