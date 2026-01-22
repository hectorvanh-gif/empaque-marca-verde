import Header from "@/components/Header";
import HeroMinimal from "@/components/HeroMinimal";
import ProductCarousel from "@/components/ProductCarousel";
import IndustrialCarousel from "@/components/IndustrialCarousel";
import WhyBags from "@/components/WhyBags";
import DetailCarousel from "@/components/DetailCarousel";
import FinalCTA from "@/components/FinalCTA";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroMinimal />
      <ProductCarousel />
      <IndustrialCarousel />
      <WhyBags />
      <DetailCarousel />
      <FinalCTA />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
