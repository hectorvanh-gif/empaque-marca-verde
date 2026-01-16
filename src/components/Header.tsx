import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Productos", href: "#productos" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="La Bolsa de Tu Marca - Bolsas de papel personalizadas" 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contacto"
            className="hidden lg:inline-flex px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-soft hover:shadow-elevated"
          >
            Cotiza Ahora
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-secondary/50 shadow-elevated">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/30 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="px-4 pt-4">
                <a
                  href="#contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg"
                >
                  Cotiza Ahora
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
