// 📁 /components/seo/SchemaHome.tsx
"use client";

import { siteConfig } from "@/lib/seo";
import Script from "next/script";

const SchemaHomePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // 🔹 1. Genel site yapısı (WebSite)
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: `${siteConfig.siteUrl}/`,
        name: siteConfig.siteName,
        description:
          siteConfig.defaultDescription ||
          "Güvenoğlu Çelik & Metal - Çelik Konstrüksiyon ve Fabrika İmalatı",
        publisher: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },

      // 🔹 2. Organizasyon bilgisi (Organization)
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.siteName,
        url: `${siteConfig.siteUrl}/`,
        logo: `${siteConfig.siteUrl}/images/settings/logo.webp`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: [
          siteConfig.socialLinks.instagram,
          siteConfig.socialLinks.facebook,
          siteConfig.socialLinks.whatsapp,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress:
            siteConfig.streetAddress || "Sanayi Mahallesi 125. Sokak No:15",
          addressLocality: siteConfig.addressLocality || "Bolu",
          postalCode: siteConfig.postalCode || "14030",
          addressCountry: siteConfig.addressCountry || "TR",
        },
        founder: siteConfig.legalName || "Güvenoğlu Çelik & Metal",
        foundingDate: siteConfig.foundingDate || "1999",
      },

      // 🔹 3. Yerel işletme bilgisi (LocalBusiness)
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.siteUrl}/#localbusiness`,
        name: siteConfig.siteName || "Güvenoğlu Çelik & Metal",
        logo: `${siteConfig.siteUrl}/images/settings/logo.webp`,
        telephone: siteConfig.phone || "+90 374 253 12 34",
        priceRange: "$$",
        url: siteConfig.siteUrl || "https://guvenoglucelikmetal.com/",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            siteConfig.streetAddress || "Sanayi Mahallesi 125. Sokak No:15",
          addressLocality: siteConfig.addressLocality || "Bolu",
          postalCode: siteConfig.postalCode || "14030",
          addressCountry: siteConfig.addressCountry || "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo?.latitude || 40.7395,
          longitude: siteConfig.geo?.longitude || 31.6119,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: siteConfig.weekdays,
            opens: siteConfig.openingHours.weekdays.open,
            closes: siteConfig.openingHours.weekdays.close,
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "Kapalı",
            closes: "Kapalı",
          },
        ],
        sameAs: [
          siteConfig.socialLinks.instagram,
          siteConfig.socialLinks.facebook,
        ],
        areaServed: siteConfig.areaServed || "Türkiye",
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Çelik Konstrüksiyon",
              description:
                "Endüstriyel ve ticari yapılarda çelik konstrüksiyon proje tasarımı, imalatı ve montajı.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fabrika İmalatı",
              description:
                "Anahtar teslim fabrika yapıları, proje yönetimi ve mühendislik desteği.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="schema-home"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
};
export default SchemaHomePage;
