import { Metadata } from "next";

// Critical images that should be preloaded
const criticalImages = [
  "/images/home/hero.webp",
  "/images/about/hero-about.webp",
  "/images/project/hero-projects.webp",
  "/images/service/hero-services.webp",
  "/images/reference/hero-reference.webp",
];

// Generate preload metadata for critical images
export function generateImagePreloadMetadata(): Metadata {
  const links = criticalImages.map((src) => ({
    rel: "preload" as const,
    as: "image" as const,
    href: src,
    type: "image/webp",
  }));

  return {
    other: {
      // Resource hints
      "link-preload-images": "critical",
    },
  };
}

// Component for client-side image preloading
export function ImagePreloader() {
  if (typeof window !== "undefined") {
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }

  return null;
}
