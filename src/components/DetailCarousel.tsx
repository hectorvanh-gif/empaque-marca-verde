import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import detail1 from "@/assets/carousel/detail-1.jpg";
import detail2 from "@/assets/carousel/detail-2.jpg";
import detail3 from "@/assets/carousel/detail-3.jpg";
import detail4 from "@/assets/carousel/detail-4.jpg";

const slides = [
  { image: detail1, alt: "Impresión personalizada en papel kraft" },
  { image: detail2, alt: "Detalle de asa trenzada" },
  { image: detail3, alt: "Textura de papel kraft natural" },
  { image: detail4, alt: "Bolsas premium en uso" },
];

const DetailCarousel = () => {
  return (
    <section className="py-8 md:py-16 bg-background">
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
