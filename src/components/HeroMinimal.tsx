const HeroMinimal = () => {
  return (
    <section id="inicio" className="min-h-[70vh] flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Video de fabricación */}
          <div className="w-full max-w-3xl mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="https://videos.pexels.com/video-files/18694869/18694869-hd_1920_1080_24fps.mp4" type="video/mp4" />
            </video>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-snug mb-10 max-w-5xl tracking-tight">
            <span className="block">Diseñamos y fabricamos <span className="text-primary">bolsas de papel y de tela</span> personalizadas</span>
            <span className="block">para que tu marca <span className="font-semibold">venda más, destaque y se recuerde.</span></span>
          </h1>

          <
            href="#contacto"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg group"
          >
            <span>Cotiza tus bolsas personalizadas</span>
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
