import { siteConfig } from "@/lib/seo";
import { Project } from "@/types/project";
import Script from "next/script";

export default function SchemaProjectDetailPage({
  project,
}: {
  project: Project;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Project",
    "@id": `${siteConfig.siteUrl}${project.slug}#project`,
    name: project.translations.tr.name,
    description: project.translations.tr.description,
    location: project.translations.tr.location,
    startDate: project.year,
    image: project.gallery[0],
    url: `${siteConfig.siteUrl}${project.slug}`,
    sponsor: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };

  return (
    <Script
      id={`schema-project-${project.id}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
