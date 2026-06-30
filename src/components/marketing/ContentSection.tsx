import { ReactNode } from "react";

interface ContentSectionProps {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  children?: ReactNode;
  background?: "background" | "sage";
}

const ContentSection = ({ eyebrow, heading, paragraphs, children, background = "background" }: ContentSectionProps) => (
  <section className={`py-16 md:py-20 ${background === "sage" ? "bg-gradient-sage" : "bg-background"}`}>
    <div className="container mx-auto px-6 max-w-4xl">
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">{eyebrow}</span>
      )}
      {heading && <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">{heading}</h2>}
      {paragraphs?.map((p, i) => (
        <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">
          {p}
        </p>
      ))}
      {children}
    </div>
  </section>
);

export default ContentSection;
