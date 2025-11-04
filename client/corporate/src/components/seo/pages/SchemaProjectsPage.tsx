import { siteConfig } from "@/lib/seo";
import { Project } from "@/types/project";
import Script from "next/script";

const SchemaProjectsPage = ({ projects }: { projects: Project[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.siteUrl}/projeler#projects`,
    name: "Projeler - Güvenoğlu Çelik",
    about:
      "Çelik yapı projeleri, endüstriyel tesisler, hangar ve depo yapıları",
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.translations.tr.name,
      description: p.translations.tr.description,
      url: `${siteConfig.siteUrl}${p.slug}`,
    })),
  };
  return (
    <Script
      id="schema-projects"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
export default SchemaProjectsPage;
