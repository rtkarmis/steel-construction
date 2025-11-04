"use client";
import { references } from "@/data/reference";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";

export default function SchemaReferencesPage() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/referanslar#webpage`,
        url: `${siteConfig.siteUrl}/referanslar`,
        name: `Referanslarımız - ${siteConfig.siteName}`,
        isPartOf: { "@id": `${siteConfig.siteUrl}#website` },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/images/settings/logo.webp`,
        sameAs: [
          siteConfig.socialLinks.instagram,
          siteConfig.socialLinks.facebook,
          siteConfig.socialLinks.whatsapp,
        ],
        hasPart: references.map((ref) => ({
          "@type": "Organization",
          name: ref.translations.tr.name,
          url: ref.website || siteConfig.siteUrl,
          logo: `${siteConfig.siteUrl}${ref.logo}`,
          description: ref.translations.tr.description || undefined,
        })),
      },
    ],
  };

  return (
    <Script
      id="schema-references"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
