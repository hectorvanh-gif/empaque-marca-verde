import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import catKraftReciclado from "@/assets/catalog/cat-kraft-reciclado.jpg";

const sizes = [
  { tamano: "4", codigo: "AK-4", ancho: "12.5", largo: "22.0", fuelle: "7.0", bolsas: "250", kilos: "3.5" },
  { tamano: "6", codigo: "AK-6", ancho: "15.0", largo: "24.0", fuelle: "8.0", bolsas: "250", kilos: "5.7" },
  { tamano: "12", codigo: "AK-12", ancho: "18.0", largo: "30.0", fuelle: "10.0", bolsas: "250", kilos: "7.6" },
  { tamano: "20", codigo: "AK-20", ancho: "21.0", largo: "35.0", fuelle: "12.0", bolsas: "250", kilos: "9.5" },
  { tamano: "40c", codigo: "AK-40c", ancho: "30.0", largo: "30.0", fuelle: "12.5", bolsas: "250", kilos: "10.5" },
  { tamano: "40", codigo: "AK-40", ancho: "30.0", largo: "45.0", fuelle: "12.5", bolsas: "250", kilos: "12.5" },
];

const waLink = "https://wa.me/5215545925827?text=Hola%2C%20me%20interesan%20las%20Bolsas%20de%20Papel%20Kraft%20Reciclado";

const BolsasKraftReciclado = () => {
  return (
    <>
      <Helmet>
        <title>Bolsas de Papel Kraft Reciclado | Medidas y Precios | BolsasMX</title>
        <meta
          name="description"
          content="Bolsas de papel kraft reciclado fabricadas en México. Consulta todas las medidas, códigos y presentación por bulto. Solicita tu cotización."
        />
        <link rel="canonical" href="https://www.bolsasmx.com/bolsas-kraft-reciclado" />
      </Helmet>
      <Header />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-sage">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                  Catálogo estándar
                </span>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5">
                  Bolsas de Papel <span className="text-primary">Kraft Reciclado</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Fabricadas en México con papel kraft 100% reciclado. Disponibles en
                  múltiples medidas estándar y personalizables con tu marca.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <div className="aspect-square bg-card rounded-2xl shadow-card overflow-hidden p-6 flex items-center justify-center">
                <img
                  src={catKraftReciclado}
                  alt="Bolsas de papel kraft reciclado"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TABLA DE MEDIDAS */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Medidas disponibles
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
                Tabla de tamaños
              </h2>
              <p className="text-muted-foreground">Todas las medidas en centímetros.</p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-hidden rounded-2xl shadow-card border border-border/20">
              <table className="w-full text-left">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-5 py-4 font-display font-semibold">Tamaño</th>
                    <th className="px-5 py-4 font-display font-semibold">Código</th>
                    <th className="px-5 py-4 font-display font-semibold">Ancho (cm)</th>
                    <th className="px-5 py-4 font-display font-semibold">Largo (cm)</th>
                    <th className="px-5 py-4 font-display font-semibold">Fuelle (cm)</th>
                    <th className="px-5 py-4 font-display font-semibold">Bolsas por bulto</th>
                    <th className="px-5 py-4 font-display font-semibold">Kilos por bulto</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  {sizes.map((s, i) => (
                    <tr
                      key={s.codigo}
                      className={`border-t border-border/20 ${i % 2 === 1 ? "bg-secondary/30" : ""} hover:bg-secondary/50 transition-colors`}
                    >
                      <td className="px-5 py-4 font-semibold text-primary">{s.tamano}</td>
                      <td className="px-5 py-4 text-foreground">{s.codigo}</td>
                      <td className="px-5 py-4 text-foreground">{s.ancho}</td>
                      <td className="px-5 py-4 text-foreground">{s.largo}</td>
                      <td className="px-5 py-4 text-foreground">{s.fuelle}</td>
                      <td className="px-5 py-4 text-foreground">{s.bolsas}</td>
                      <td className="px-5 py-4 text-foreground">{s.kilos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden grid gap-4">
              {sizes.map((s) => (
                <div key={s.codigo} className="bg-card rounded-xl shadow-card border border-border/20 p-5">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/20">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Tamaño</p>
                      <p className="font-display text-2xl text-primary font-semibold">{s.tamano}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {s.codigo}
                    </span>
                  </div>
                  <dl className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Ancho</dt>
                      <dd className="text-foreground font-medium">{s.ancho} cm</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Largo</dt>
                      <dd className="text-foreground font-medium">{s.largo} cm</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Fuelle</dt>
                      <dd className="text-foreground font-medium">{s.fuelle} cm</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">Bolsas / bulto</dt>
                      <dd className="text-foreground font-medium">{s.bolsas}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-muted-foreground">Kilos por bulto</dt>
                      <dd className="text-foreground font-medium">{s.kilos} kg</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                Escríbenos para cotizar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BolsasKraftReciclado;
