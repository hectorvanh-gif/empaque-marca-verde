import { Helmet } from "react-helmet-async";

/**
 * description y canonical/hreflang se inyectan por ruta en scripts/prerender.mjs
 * (HTML estático servido antes de hidratar). Aquí solo seteamos <title> (por si
 * hay navegación SPA sin recarga) y los JSON-LD schemas de la página.
 */
const PageSEO = ({ title, schemas }: { title: string; schemas: object[] }) => (
  <Helmet>
    <title>{title}</title>
    {schemas.map((schema, i) => (
      <script key={i} type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    ))}
  </Helmet>
);

export default PageSEO;
