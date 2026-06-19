import heroPoster from "@/assets/carousel/industrial-1.jpg";

const HeroMinimal = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/18694869/18694869-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenido encima del video */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-snug mb-10 max-w-5xl tracking-tight drop-shadow-lg">
            <span className="block">Diseñamos y fabricamos <span className="text-green-300">bolsas de papel y de tela</span> personalizadas</span>
            <span className="block">para que tu marca <span className="font-semibold">venda más, destaque y se recuerde.</span></span>
          </h1>

          <a
            href="https://wa.me/525545925827?text=Hola%2C%20quiero%20cotizar%20bolsas%20de%20papel%20kraft.%20Mi%20negocio%20es%20%5Btipo%20de%20negocio%20o%20producto%20que%20vendo%5D%2C%20la%20bolsa%20que%20necesito%20es%20de%20aproximadamente%20%5Bancho%20%C3%97%20alto%5D%20cm%20y%20calculo%20unas%20%5Bcantidad%5D%20piezas.%20%C2%BFMe%20pueden%20ayudar%20a%20elegir%20el%20gramaje%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
          >
            <span>Cotiza Ahora</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
