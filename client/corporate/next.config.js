/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production için static export, development için normal
  ...(process.env.NODE_ENV === 'production' && {
    output: "export",
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: "out",
  }),

  images: {
    // Statik export için unoptimized true
    unoptimized: true,
    // Image optimization için format priority
    formats: ["image/webp", "image/avif"],

    // Image quality ayarları
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],

    // Cache süreleri - daha aggressive
    minimumCacheTTL: 31536000, // 1 yıl

    // Instant loading için optimizasyonlar
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features
  experimental: {
    // Static generation optimizations
    optimizeCss: true,
    optimizePackageImports: ["next/image"],
  },
};

module.exports = nextConfig;
