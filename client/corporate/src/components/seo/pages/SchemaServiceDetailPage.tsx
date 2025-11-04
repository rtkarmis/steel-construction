import { siteConfig } from "@/lib/seo";
import { Service } from "@/types/service";
import Script from "next/script";

export default function SchemaServiceDetail({ service }: { service: Service }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}${service.slug}#webpage`,
        url: `${siteConfig.siteUrl}${service.slug}`,
        name: `${service.translations.tr.name} - ${siteConfig.siteName}`,
        inLanguage: "tr",
        isPartOf: { "@id": `${siteConfig.siteUrl}/hizmetler#webpage` },
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.siteUrl}${service.slug}#service`,
        serviceType: service.translations.tr.name,
        description: service.translations.tr.detailDescription,
        inLanguage: "tr",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Türkiye",
        },
        provider: {
          "@type": "Organization",
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/images/settings/logo.webp`,
        },
      },
    ],
  };

  return (
    <Script
      id={`schema-service-${service.id}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
