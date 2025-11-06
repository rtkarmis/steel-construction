/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production için static export
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: "out",
  }),

  images: {
    // Static export için unoptimized
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Vercel static export optimizasyonları
  poweredByHeader: false,
  generateEtags: false,
  compress: false,
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["next/image"],
  },
};

module.exports = nextConfig;
