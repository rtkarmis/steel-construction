"use client";

import { siteConfig } from "@/lib/seo";
import Script from "next/script";

export default function SchemaAboutPage() {
  const certificates = [
    {
      name: "ISO 9001 Kalite Yönetim Sistemi",
      description:
        "Güvenoğlu Çelik & Metal, ISO 9001 kalite yönetim standartlarına uygun üretim yapmaktadır.",
      image: "/images/cert/iso9001.webp",
    },
    {
      name: "ISO 14001 Çevre Yönetim Sistemi",
      description:
        "Üretim süreçleri çevre dostu ISO 14001 standartlarına uygun yürütülmektedir.",
      image: "/images/cert/iso14001.webp",
    },
    {
      name: "CE Avrupa Uygunluk Belgesi",
      description:
        "Tüm ürünlerimiz Avrupa Birliği CE uygunluk sertifikasına sahiptir.",
      image: "/images/cert/ce.webp",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      // 🔹 Organization
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.siteName,
        url: `${siteConfig.siteUrl}/`,
        logo: `${siteConfig.siteUrl}/images/settings/logo.webp`,
        sameAs: [
          siteConfig.socialLinks.instagram,
          siteConfig.socialLinks.facebook,
          siteConfig.socialLinks.whatsapp,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phoneDisplay,
            contactType: "customer service",
            areaServed: siteConfig.areaServed || "TR",
            availableLanguage: ["tr", "en"],
          },
        ],
      },

      // 🔹 AboutPage
      {
        "@type": "AboutPage",
        "@id": `${siteConfig.siteUrl}/hakkimizda#about`,
        url: `${siteConfig.siteUrl}/hakkimizda`,
        name: `Hakkımızda - ${siteConfig.siteName}`,
        description:
          "Güvenoğlu Çelik & Metal, çelik yapı sektöründe kalite, mühendislik disiplini ve güvenilirliğiyle öncü bir firmadır.",
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        mainEntity: { "@id": `${siteConfig.siteUrl}/#organization` },
      },

      // 🔹 Certificates (CreativeWork list)
      {
        "@type": "ItemList",
        "@id": `${siteConfig.siteUrl}/hakkimizda#certificates`,
        name: "Sertifikalar ve Kalite Belgeleri",
        description:
          "Güvenoğlu Çelik & Metal'in sahip olduğu ISO ve CE kalite belgeleri.",
        numberOfItems: certificates.length,
        itemListElement: certificates.map((c, index) => ({
          "@type": "CreativeWork",
          position: index + 1,
          name: c.name,
          description: c.description,
          image: `${siteConfig.siteUrl}${c.image}`,
          url: `${siteConfig.siteUrl}/hakkimizda#certificates`,
        })),
      },
    ],
  };

  return (
    <Script
      id="schema-about-page"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
