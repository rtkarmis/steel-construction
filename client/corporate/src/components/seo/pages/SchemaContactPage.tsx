"use client";

import { siteConfig } from "@/lib/seo";
import Script from "next/script";

export default function SchemaContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.siteUrl}/#localbusiness`,
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/images/settings/logo.webp`,
        description: siteConfig.defaultDescription,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "₺₺",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.streetAddress || siteConfig.address,
          addressLocality: siteConfig.addressLocality || "Bolu",
          postalCode: siteConfig.postalCode || "14030",
          addressRegion: "Bolu",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo?.latitude || "40.735",
          longitude: siteConfig.geo?.longitude || "31.611",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: siteConfig?.weekdays || [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: siteConfig.openingHours?.weekdays?.open || "09:00",
            closes: siteConfig.openingHours?.weekdays?.close || "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "Kapalı",
            closes: "Kapalı",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer service",
            areaServed: siteConfig.areaServed || "TR",
            availableLanguage: ["Turkish"],
          },
          {
            "@type": "ContactPoint",
            email: siteConfig.email,
            contactType: "sales",
            availableLanguage: ["Turkish"],
          },
        ],
        sameAs: [
          siteConfig.socialLinks.instagram,
          siteConfig.socialLinks.facebook,
          siteConfig.socialLinks.whatsapp,
        ].filter(Boolean),
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/iletisim#webpage`,
        name: `İletişim - ${siteConfig.siteName}`,
        url: `${siteConfig.siteUrl}/iletisim`,
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        description: siteConfig.defaultDescription,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ana Sayfa",
              item: `${siteConfig.siteUrl}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "İletişim",
              item: `${siteConfig.siteUrl}/iletisim`,
            },
          ],
        },
      },
    ],
  };

  return (
    <Script
      id="schema-contact"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
