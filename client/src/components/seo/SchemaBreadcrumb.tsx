"use client";

import { siteConfig } from "@/lib/seo";
import { BreadcrumbItem } from "@/types/common";
import Script from "next/script";

interface Props {
  items: BreadcrumbItem[];
}

const SchemaBreadcrumb = ({ items }: Props) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.slug?.startsWith("http")
        ? item.slug
        : `${siteConfig.siteUrl}${item.slug ?? ""}`,
    })),
  };

  return (
    <Script
      id="schema-breadcrumb"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
};
export default SchemaBreadcrumb;
