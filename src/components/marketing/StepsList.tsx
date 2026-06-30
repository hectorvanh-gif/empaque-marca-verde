import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const StepsList = ({
  eyebrow,
  heading,
  description,
  steps,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  steps: Step[];
}) => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">{eyebrow}</span>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{heading}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-secondary" />
            )}
            <div className="relative text-center">
              <div className="relative inline-flex mb-6">
                <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-accent-foreground font-display text-lg font-bold rounded-full flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsList;
