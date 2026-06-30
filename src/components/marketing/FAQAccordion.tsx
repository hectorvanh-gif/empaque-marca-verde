import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion = ({ eyebrow, heading, items }: { eyebrow: string; heading: string; items: FAQItem[] }) => (
  <section className="py-16 md:py-20 bg-gradient-sage">
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">{eyebrow}</span>
        <h2 className="font-display text-2xl md:text-3xl text-foreground">{heading}</h2>
      </div>
      <div className="bg-card rounded-2xl shadow-card border border-border/20 px-6 md:px-8">
        <Accordion type="single" collapsible>
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base md:text-lg text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQAccordion;
