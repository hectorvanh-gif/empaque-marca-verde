import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";
import PageSEO from "@/components/seo/PageSEO";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildBreadcrumbSchema } from "@/lib/schema";

const ContactPage = ({
  helmetTitle,
  h1,
  breadcrumbs,
}: {
  helmetTitle: string;
  h1: string;
  breadcrumbs: { label: string; path: string }[];
}) => (
  <>
    <PageSEO title={helmetTitle} schemas={[buildBreadcrumbSchema(breadcrumbs)]} />
    <Header />
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-28 pb-2">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="sr-only">{h1}</h1>
      </div>
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default ContactPage;
