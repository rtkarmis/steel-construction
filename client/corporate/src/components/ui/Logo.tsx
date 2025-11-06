"use client";

import { siteConfig } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

/**
 * 🔹 Logo bileşeni (responsive + 16:9 optimize)
 * - Mobil ve masaüstü için ayrı boyutlar
 * - Doğal oran: 1024x576 (16:9)
 * - CLS yok (sabit width/height)
 * - Lazy load + async decoding
 * - Retina ekranlarda net görünüm
 */
export default function Logo({
  href = "/",
  priority = false,
  width,
  height,
  responsive = true,
}: {
  href?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  responsive?: boolean;
}) {
  // Responsive default values
  const defaultWidth = responsive ? undefined : width || 220;
  const defaultHeight = responsive ? undefined : height || 123;

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center select-none"
      aria-label={siteConfig.siteName}
    >
      <Image
        src="/images/settings/logo.webp"
        alt={siteConfig.siteName}
        width={width || defaultWidth || 220}
        height={height || defaultHeight || 123}
        priority={priority}
        decoding="async"
        className={
          responsive
            ? "object-contain w-auto h-auto max-w-[180px] max-h-[100px] md:max-w-[220px] md:max-h-[123px]"
            : "object-contain w-auto h-auto"
        }
        style={
          !responsive
            ? {
                maxHeight: `${height || 123}px`,
                maxWidth: `${width || 220}px`,
              }
            : undefined
        }
        sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 220px"
      />
    </Link>
  );
}
