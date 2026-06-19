import { Factory, Leaf, Paintbrush, Store } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Factory, Leaf, Paintbrush, Store];

const WhyBags = () => {
  const { t } = useLanguage();
  const features = t.whyBags.features.map((feature, i) => ({ ...feature, icon: icons[i] }));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            {t.whyBags.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/30 flex items-center justify-center mb-5">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg md:text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBags;
