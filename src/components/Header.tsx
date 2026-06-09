import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";

const WA_NEW = "https://wa.me/525545925827?text=Hola%2C%20quiero%20cotizar%20bolsas%20de%20papel%20kraft.%20Mi%20negocio%20es%20%5Btipo%20de%20negocio%20o%20producto%20que%20vendo%5D%2C%20la%20bolsa%20que%20necesito%20es%20de%20aproximadamente%20%5Bancho%20%C3%97%20alto%5D%20cm%20y%20calculo%20unas%20%5Bcantidad%5D%20piezas.%20%C2%BFMe%20pueden%20ayudar%20a%20elegir%20el%20gramaje%3F";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: isHome ? "#inicio" : "/" },
    { label: "Catálogo", href: "/bolsas-catalogo" },
    { label: "Nosotros", href: isHome ? "#nosotros" : "/#nosotros" },
    { label: "Contacto", href: isHome ? "#contacto" : "/#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="BolsasMX"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_NEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-elevated text-sm"
            >
              <span>Cotiza Ahora</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4 px-2 mb-4">
              {navLinks.map((link) => (
                <NavLink key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <a
              href={WA_NEW}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 text-sm"
            >
              <span>Cotiza Ahora</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
