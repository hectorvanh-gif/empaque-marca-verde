import { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
}

const UseCasesGrid = ({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: UseCase[];
}) => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">{eyebrow}</span>
        <h2 className="font-display text-2xl md:text-3xl text-foreground">{heading}</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 p-6 bg-card rounded-xl shadow-card border border-border/20 hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-lg flex items-center justify-center">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-base text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesGrid;
