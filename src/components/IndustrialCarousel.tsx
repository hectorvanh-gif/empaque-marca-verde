import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useLanguage } from "@/contexts/LanguageContext";
import industrial1 from "@/assets/carousel/industrial-1.jpg";
import industrial2 from "@/assets/carousel/industrial-2.jpg";
import industrial3 from "@/assets/carousel/industrial-3.jpg";
import industrial4 from "@/assets/carousel/industrial-4.jpg";

const images = [industrial1, industrial2, industrial3, industrial4];

const IndustrialCarousel = () => {
  const { t } = useLanguage();
  const slides = images.map((image, i) => ({ image, text: t.industrialCarousel.slides[i] }));

  return (
    <section className="py-8 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase tracking-wide">
          {t.industrialCarousel.heading}
        </h2>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-2/3">
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-video">
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                  <p className="font-display text-2xl md:text-4xl lg:text-5xl text-primary-foreground">
                    {slide.text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 bg-background/80 backdrop-blur-sm border-0 hover:bg-background" />
        <CarouselNext className="right-4 md:right-8 bg-background/80 backdrop-blur-sm border-0 hover:bg-background" />
      </Carousel>
    </section>
  );
};

export default IndustrialCarousel;
