"use client";
import { allLinks } from "@/data/menu";
import { siteConfig } from "@/lib/seo";
import { MenuItem, PageMetadataItem } from "@/types/common";

const SchemaSiteNavigation = () => {
  const flattenLinks = (links: PageMetadataItem[]): MenuItem[] => {
    return links.flatMap((linkItem: PageMetadataItem): MenuItem[] => {
      const link = linkItem.item;
      const base: MenuItem = { label: link.label, slug: link.slug };
      if (link.subLinks) {
        return [base, ...flattenSubLinks(link.subLinks)];
      }
      return [base];
    });
  };

  const flattenSubLinks = (subLinks: MenuItem[]): MenuItem[] => {
    return subLinks.flatMap((link: MenuItem): MenuItem[] => {
      const base: MenuItem = { label: link.label, slug: link.slug };
      if (link.subLinks) {
        return [base, ...flattenSubLinks(link.subLinks)];
      }
      return [base];
    });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: flattenLinks(allLinks).map(
      (link: MenuItem, index: number) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: link.label,
        url: `${siteConfig.siteUrl}${link.slug ?? ""}`,
      })
    ),
  };

  return (
    <script
      id="schema-site-navigation"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
export default SchemaSiteNavigation;
