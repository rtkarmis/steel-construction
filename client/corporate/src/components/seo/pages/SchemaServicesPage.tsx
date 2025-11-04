import { siteConfig } from "@/lib/seo";
import { Service } from "@/types/service";
import Script from "next/script";

export default function SchemaServicesPage({
  services,
}: {
  services: Service[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/hizmetler#webpage`,
        url: `${siteConfig.siteUrl}/hizmetler`,
        name: `Hizmetlerimiz - ${siteConfig.siteName}`,
        isPartOf: { "@id": `${siteConfig.siteUrl}#website` },
        description:
          "Güvenoğlu Çelik & Metal'in mühendislikten montaja kadar sunduğu tüm çelik yapı hizmetleri.",
      },
      {
        "@type": "Service",
        serviceType: "Engineering and Metal Construction Services",
        provider: {
          "@type": "Organization",
          name: siteConfig.siteName,
          url: siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}/images/settings/logo.webp`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hizmetlerimiz",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.translations.tr.name,
              description: s.translations.tr.description,
              url: `${siteConfig.siteUrl}${s.slug}`,
            },
          })),
        },
      },
    ],
  };

  return (
    <Script
      id="schema-services"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
