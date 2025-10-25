import { allLinks } from "@/data/menu";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

// Generate metadata map from allLinks array
export const pageMetadataMap: Record<string, Metadata> = allLinks.reduce(
  (acc, linkItem) => {
    const { item, description } = linkItem;
    const slug = item.slug === "/" ? "" : item.slug.replace("/", "");

    acc[item.slug] = generatePageMetadata({
      title: item.label,
      description: description,
      slug: slug,
    });

    return acc;
  },
  {} as Record<string, Metadata>
);

// Helper function to get metadata for a specific page
export function getPageMetadata(slug: string): Metadata | undefined {
  const metadata = pageMetadataMap[slug];
  if (!metadata) {
    console.warn(`Metadata not found for slug: ${slug}`);
  }
  return metadata;
}

// Get all available page slugs
export function getAllPageSlugs(): string[] {
  return Object.keys(pageMetadataMap);
}
