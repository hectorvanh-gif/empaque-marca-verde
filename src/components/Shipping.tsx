import { Truck, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                Enviamos a Todo México
              </h3>
              <p className="text-muted-foreground">
                Llegamos a cualquier parte del país
              </p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-border" />
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                Cobertura Nacional
              </h3>
              <p className="text-muted-foreground">
                Sin importar tu ubicación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
