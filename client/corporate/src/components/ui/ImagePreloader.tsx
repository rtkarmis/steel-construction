"use client";
import { useEffect } from "react";

interface ImagePreloaderProps {
  src: string;
  priority?: boolean;
}

export default function ImagePreloader({
  src,
  priority = true,
}: ImagePreloaderProps) {
  useEffect(() => {
    if (priority && typeof window !== "undefined") {
      // Create a preload link for critical images
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.type = "image/webp";
      link.fetchPriority = "high";

      // Add to head
      document.head.appendChild(link);

      // Cleanup
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, priority]);

  // Also preload via Image constructor
  useEffect(() => {
    if (priority && typeof window !== "undefined") {
      const img = new window.Image();
      img.src = src;
    }
  }, [src, priority]);

  return null;
}
