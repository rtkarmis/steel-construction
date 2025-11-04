// src/components/seo/MetaHead.tsx
"use client";

import { siteConfig } from "@/lib/seo";
import Head from "next/head";

interface MetaHeadProps {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  noIndex?: boolean;
}

const MetaHead = ({
  title,
  description,
  keywords,
  canonical,
  image = "/images/og-default.webp",
  noIndex = false,
}: MetaHeadProps) => {
  const siteName = siteConfig.siteName;
  const fullTitle = `${title} | ${siteName}`;
  const defaultDescription = siteConfig.defaultDescription;
  const pageDescription = description || defaultDescription;

  return (
    <Head>
      {/* 🧠 Temel Meta Bilgiler */}
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      {/* 🧭 Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* 🚫 İndeksleme Ayarı (opsiyonel) */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* 🧩 Open Graph (Facebook & LinkedIn) */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content={siteName} />

      {/* 🐦 Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};
export default MetaHead;
