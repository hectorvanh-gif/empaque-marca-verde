import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useLanguage } from "@/contexts/LanguageContext";
import detail1 from "@/assets/carousel/detail-1.jpg";
import detail2 from "@/assets/carousel/detail-2.jpg";
import detail3 from "@/assets/carousel/detail-3.jpg";
import detail4 from "@/assets/carousel/detail-4.jpg";

const images = [detail1, detail2, detail3, detail4];

const DetailCarousel = () => {
  const { t } = useLanguage();
  const slides = images.map((image, i) => ({ image, alt: t.detailCarousel.alts[i] }));

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 mb-6 md:mb-8 text-center">
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-foreground">
          {t.detailCarousel.heading}
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
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-2/3 md:basis-1/2 lg:basis-1/3">
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-video">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default DetailCarousel;
