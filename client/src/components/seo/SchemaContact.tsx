"use client";

import { siteConfig } from "@/lib/seo";
import Script from "next/script";
const SchemaContact = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.siteUrl}/iletisim`,
    name: siteConfig.siteName,
    image: siteConfig.defaultImage,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₺₺",
    description: siteConfig.defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress || siteConfig.address,
      addressLocality: siteConfig.addressLocality,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry || "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo?.latitude,
      longitude: siteConfig.geo?.longitude,
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
        dayOfWeek: siteConfig.weekend,
        opens: siteConfig.openingHours.sunday.open,
        closes: siteConfig.openingHours.sunday.close,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["Turkish"],
        areaServed: siteConfig.areaServed,
      },
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "sales",
        availableLanguage: ["Turkish"],
      },
    ],
    sameAs: [siteConfig.socialLinks.instagram, siteConfig.socialLinks.facebook],
  };

  return (
    <Script
      id="contact-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaContact;
