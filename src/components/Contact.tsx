import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate inputs
    if (!formData.name.trim() || formData.name.length > 100) {
      toast({
        title: "Error",
        description: "Por favor ingresa un nombre válido (máximo 100 caracteres).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un correo electrónico válido.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Save to database
    const { error } = await supabase.from('cotizaciones').insert({
      nombre: formData.name.trim(),
      empresa: formData.company.trim() || null,
      correo: formData.email.trim(),
      telefono: formData.phone.trim() || null,
      mensaje: formData.message.trim() || 'Sin mensaje adicional',
    });

    if (error) {
      console.error('Error saving quote:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message with form data
    const whatsappMessage = encodeURIComponent(
      `Hola, me gustaría cotizar bolsas de papel.\n\n` +
      `Nombre: ${formData.name}\n` +
      `Empresa: ${formData.company || 'No especificada'}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone || 'No especificado'}\n` +
      `Mensaje: ${formData.message || 'Sin mensaje adicional'}`
    );

    toast({
      title: "¡Gracias por tu interés!",
      description: "Tu solicitud fue enviada. Te redirigiremos a WhatsApp.",
    });

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/5215554757247?text=${whatsappMessage}`, '_blank');
    }, 1500);

    setIsSubmitting(false);
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Correo electrónico",
      value: "labolsadetumarca@gmail.com",
      href: "mailto:labolsadetumarca@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+52 1 55 5475 7247",
      href: "https://wa.me/5215554757247",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ciudad de México, México",
      href: null,
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
              Contacto
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Solicita Tu Cotización
            </h2>
            <p className="text-muted-foreground mb-8">
              Cuéntanos sobre tu proyecto y te enviaremos una cotización personalizada 
              en menos de 24 horas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={20}
                    className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={1000}
                  className="w-full px-4 py-3 bg-background border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto: tipo de bolsa, cantidad, tamaño, diseño..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-soft hover:shadow-elevated"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Solicitud
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-secondary/30 rounded-2xl p-8 lg:p-10 h-full">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center flex-shrink-0 shadow-card">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Síguenos en redes</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/Labolsadetumarca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-card"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/labolsadetumarca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-card"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
