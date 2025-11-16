import type { Metadata } from "next";

/* -------------------------------------------------------------
 🧩 1. Site Genel Ayarları
------------------------------------------------------------- */

export const siteConfig = {
  siteUrl: "https://guvenoglucelik.com",
  siteName: "Güvenoğlu Çelik & Metal",
  siteNameEn: "Güvenoğlu Steel & Metal",
  legalName: "Güvenoğlu Çelik & Metal",
  defaultTitle: "Güvenoğlu Çelik & Metal | Çelik Yapı İnşaat",
  defaultDescription:
    "Çelik yapı sektöründe kaliteli, güvenilir ve yenilikçi çözümler sunan Güvenoğlu Çelik & Metal ile projelerinizi hayata geçirin.",
  defaultImage: "https://guvenoglucelik.com/images/settings/logo.webp",
  email: "info@guvenoglucelik.com",
  phone: "+905523154619",
  phoneDisplay: "+90 (552) 315 46 19",
  vatOffice: "Bolu",
  address: "Karacaağaç Mevkii, D100 Üzeri No:2, 14100 Bolu Merkez/Bolu",
  addressEn:
    "Karacaagac District, D100 Highway, No. 2, 14100 Bolu Central/Bolu",
  streetAddress: "Karacaağaç Mevkii, D100 Üzeri no:2",
  addressLocality: "Bolu",
  postalCode: "14100",
  addressCountry: "TR",
  locationFrameUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96738.79799634304!2d31.57490024807927!3d40.738101500701376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d39c8b0d9f199%3A0xf7ae397b570a7e33!2zR8O8dmVub8SfbHUgRGVtaXIgRG_En3JhbWE!5e0!3m2!1str!2str!4v1762208549642!5m2!1str!2str",
  socialLinks: {
    instagram: "https://www.instagram.com/guvenoglucelikmetal",
    facebook: "https://www.facebook.com/guvenoglucelikmetal",
    whatsapp: "https://wa.me/905523154619",
  },
  gmbPlaceId: "",
  geo: {
    latitude: 41.0082,
    longitude: 28.9784,
  },
  weekdays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  weekendSundays: ["Sunday"],
  openingHours: {
    weekdays: { open: "08:00", close: "18:00" },
    saturday: { open: "09:00", close: "18:00" },
    sunday: { open: "Kapalı", close: "Kapalı" }, // Kapalı
  },
  areaServed: [
    "İstanbul",
    "Ankara",
    "Çorum",
    "Bursa",
    "Antalya",
    "Kocaeli",
    "Sakarya",
    "Tekirdağ",
    "Kırklareli",
  ],
  foundingDate: "2015",
};

/* -------------------------------------------------------------
 ⚙️ 2. Varsayılan Metadata
------------------------------------------------------------- */

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.defaultDescription,
  keywords: [
    "çelik yapı",
    "çelik inşaat",
    "steel construction",
    "çelik iskelet",
    "endüstriyel yapı",
    "çelik konstrüksiyon",
    "prefabrik yapı",
    "çelik çatı",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.siteUrl,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 800,
        height: 600,
        alt: "Güvenoğlu Çelik & Metal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.defaultImage],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

/* -------------------------------------------------------------
 🧩 3. Sayfa Bazlı Metadata Üreticisi
------------------------------------------------------------- */

export function generatePageMetadata({
  title,
  description,
  slug,
  image,
}: {
  title: string;
  description?: string;
  slug?: string;
  image?: string;
}): Metadata {
  const url = slug
    ? `${siteConfig.siteUrl.replace(/\/$/, "")}/${slug}`
    : siteConfig.siteUrl;

  return {
    title,
    description: description || siteConfig.defaultDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.siteName}`,
      description: description || siteConfig.defaultDescription,
      url,
      images: [
        {
          url: image || siteConfig.defaultImage,
          width: 800,
          height: 600,
          alt: "Eflatun Teknoloji Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description || siteConfig.defaultDescription,
      images: [image || siteConfig.defaultImage],
    },
  };
}

/* -------------------------------------------------------------
 📞 4. Structured Data JSON-LD (Schema.org)
------------------------------------------------------------- */

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.siteName,
    image: siteConfig.defaultImage,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        siteConfig.streetAddress || "İhsaniye, Çeşmeli Sk. No: 14/B",
      addressLocality: siteConfig.addressLocality || "Bolu",
      postalCode: siteConfig.postalCode || "14100",
      addressCountry: siteConfig.addressCountry || "Türkiye",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo?.latitude || 40.737002,
      longitude: siteConfig.geo?.longitude || 31.609721,
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: "Çelik Yapı Tasarımı" },
      { "@type": "Offer", itemOffered: "İmalat ve Montaj" },
      { "@type": "Offer", itemOffered: "Endüstriyel Yapılar" },
      { "@type": "Offer", itemOffered: "Ticari Yapılar" },
    ],
    areaServed: siteConfig.areaServed.map((place) => ({
      "@type": "Place",
      name: place,
    })),
    sameAs: Object.values(siteConfig.socialLinks),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.weekdays,
        opens: siteConfig.openingHours.weekdays.open,
        closes: siteConfig.openingHours.weekdays.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: siteConfig.openingHours.saturday.open,
        closes: siteConfig.openingHours.saturday.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "Kapalı",
        closes: "Kapalı",
      },
    ],
  };
}
