import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Catálogo", href: "/bolsas-catalogo", isRoute: true },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo con efecto hover */}
          <a 
            href="#inicio" 
            className="group flex items-center gap-4 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={logo} 
                alt="La Bolsa de Tu Marca - Bolsas de papel personalizadas" 
                className={`relative z-10 w-auto transition-all duration-500 ${
                  isScrolled ? "h-16" : "h-20 lg:h-24"
                }`}
              />
            </div>
            {/* Tagline que aparece en hover */}
            <div className="hidden lg:flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
              <span className="text-xs font-medium text-primary tracking-widest uppercase">
                Fabricantes
              </span>
              <span className="text-sm text-muted-foreground">
                Bolsas de papel kraft
              </span>
            </div>
          </a>

          {/* Desktop Navigation con estilo premium */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="relative px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]" />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="relative px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]" />
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button con más presencia */}
          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 group"
          >
            <span>Cotiza Ahora</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-foreground rounded-full hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu con animación mejorada */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-secondary/30 shadow-2xl transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col py-6 px-6 space-y-2">
            {navItems.map((item, index) => (
              <li 
                key={item.href}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`transition-all duration-300 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
              >
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-foreground/80 hover:text-primary hover:bg-secondary/30 rounded-xl transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-foreground/80 hover:text-primary hover:bg-secondary/30 rounded-xl transition-all duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg"
              >
                <span>Cotiza Ahora</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
