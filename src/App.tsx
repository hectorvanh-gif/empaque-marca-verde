import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import ProductCategoryPage from "@/components/marketing/ProductCategoryPage";
import HubPage from "@/components/marketing/HubPage";
import SpecsPage from "@/components/marketing/SpecsPage";
import AboutPage from "@/components/marketing/AboutPage";
import ContactPage from "@/components/marketing/ContactPage";

// EN product content
import { pillarEn } from "@/content/products/en/pillar";
import { kraftEn } from "@/content/products/en/kraft";
import { sizeChartEn } from "@/content/products/en/size-chart";
import { whiteEn } from "@/content/products/en/white";
import { foodEn } from "@/content/products/en/food";
import { deliveryEn } from "@/content/products/en/delivery";
import { retailEn } from "@/content/products/en/retail";
import { breadEn } from "@/content/products/en/bread";
import { customEn } from "@/content/products/en/custom";

// ES product content
import { pillarEs } from "@/content/products/es/pillar";
import { kraftEs } from "@/content/products/es/kraft";
import { tablaTamanosEs } from "@/content/products/es/tabla-de-tamanos";
import { blancasEs } from "@/content/products/es/blancas";
import { comidaEs } from "@/content/products/es/comida";
import { entregaEs } from "@/content/products/es/entrega";
import { menudeoEs } from "@/content/products/es/menudeo";
import { paraPanEs } from "@/content/products/es/para-pan";
import { estrazaEs } from "@/content/products/es/estraza";
import { personalizadasEs } from "@/content/products/es/personalizadas";

// Services content
import { servicesHubEn } from "@/content/services/en/hub";
import { manufacturingEn } from "@/content/services/en/manufacturing";
import { customPrintingEn } from "@/content/services/en/custom-printing";
import { servicesHubEs } from "@/content/services/es/hub";
import { fabricacionEs } from "@/content/services/es/fabricacion";
import { logoPersonalizadoEs } from "@/content/services/es/logo-personalizado";

// Wholesale / Samples
import { wholesaleEn } from "@/content/misc/en/wholesale";
import { samplesEn } from "@/content/misc/en/samples";
import { mayoreoEs } from "@/content/misc/es/mayoreo";
import { muestrasEs } from "@/content/misc/es/muestras";

// About
import { aboutEn } from "@/content/misc/en/about";
import { nosotrosEs } from "@/content/misc/es/nosotros";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Routes>
              {/* ── Home (EN canonical at root, ES at /es) ── */}
              <Route path="/" element={<Index />} />
              <Route path="/es" element={<Index />} />

              {/* ── EN product pages ── */}
              <Route path="/paper-bags" element={<HubPage content={pillarEn} />} />
              <Route path="/paper-bags/kraft" element={<ProductCategoryPage content={kraftEn} />} />
              <Route path="/paper-bags/white" element={<ProductCategoryPage content={whiteEn} />} />
              <Route path="/paper-bags/food" element={<ProductCategoryPage content={foodEn} />} />
              <Route path="/paper-bags/delivery" element={<ProductCategoryPage content={deliveryEn} />} />
              <Route path="/paper-bags/retail" element={<ProductCategoryPage content={retailEn} />} />
              <Route path="/paper-bags/bread" element={<ProductCategoryPage content={breadEn} />} />
              <Route path="/paper-bags/custom" element={<ProductCategoryPage content={customEn} />} />
              <Route path="/paper-bags/size-chart" element={<SpecsPage content={sizeChartEn} />} />

              {/* ── ES product pages ── */}
              <Route path="/es/bolsas-papel" element={<HubPage content={pillarEs} />} />
              <Route path="/es/bolsas-papel/kraft" element={<ProductCategoryPage content={kraftEs} />} />
              <Route path="/es/bolsas-papel/blancas" element={<ProductCategoryPage content={blancasEs} />} />
              <Route path="/es/bolsas-papel/comida" element={<ProductCategoryPage content={comidaEs} />} />
              <Route path="/es/bolsas-papel/entrega" element={<ProductCategoryPage content={entregaEs} />} />
              <Route path="/es/bolsas-papel/menudeo" element={<ProductCategoryPage content={menudeoEs} />} />
              <Route path="/es/bolsas-papel/para-pan" element={<ProductCategoryPage content={paraPanEs} />} />
              <Route path="/es/bolsas-papel/estraza" element={<ProductCategoryPage content={estrazaEs} />} />
              <Route path="/es/bolsas-papel/personalizadas" element={<ProductCategoryPage content={personalizadasEs} />} />
              <Route path="/es/bolsas-papel/tabla-de-tamanos" element={<SpecsPage content={tablaTamanosEs} />} />

              {/* ── Services (EN/ES) ── */}
              <Route path="/services" element={<HubPage content={servicesHubEn} />} />
              <Route path="/services/manufacturing" element={<ProductCategoryPage content={manufacturingEn} />} />
              <Route path="/services/custom-printing" element={<ProductCategoryPage content={customPrintingEn} />} />
              <Route path="/es/servicios" element={<HubPage content={servicesHubEs} />} />
              <Route path="/es/servicios/fabricacion" element={<ProductCategoryPage content={fabricacionEs} />} />
              <Route path="/es/servicios/logo-personalizado" element={<ProductCategoryPage content={logoPersonalizadoEs} />} />

              {/* ── Wholesale / Samples (EN/ES) ── */}
              <Route path="/wholesale" element={<ProductCategoryPage content={wholesaleEn} />} />
              <Route path="/samples" element={<ProductCategoryPage content={samplesEn} />} />
              <Route path="/es/mayoreo" element={<ProductCategoryPage content={mayoreoEs} />} />
              <Route path="/es/muestras" element={<ProductCategoryPage content={muestrasEs} />} />

              {/* ── About (EN/ES) ── */}
              <Route path="/about-us" element={<AboutPage content={aboutEn} />} />
              <Route path="/es/nosotros" element={<AboutPage content={nosotrosEs} />} />

              {/* ── Contact (EN/ES) ── */}
              <Route
                path="/contact"
                element={
                  <ContactPage
                    helmetTitle="Contact Us | Get a Quote | BolsasMX"
                    h1="Get a Quote"
                    breadcrumbs={[
                      { label: "Home", path: "/" },
                      { label: "Contact", path: "/contact" },
                    ]}
                  />
                }
              />
              <Route
                path="/es/contacto"
                element={
                  <ContactPage
                    helmetTitle="Contacto | Solicitar Cotización | BolsasMX"
                    h1="Solicitar Cotización"
                    breadcrumbs={[
                      { label: "Inicio", path: "/es" },
                      { label: "Contacto", path: "/es/contacto" },
                    ]}
                  />
                }
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
