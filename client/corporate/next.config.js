/** @type {import('next').NextConfig} */
const crypto = require("crypto");

const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [65, 80, 90, 95], // Tüm image kaliteleri destekleniyor
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Vercel production optimizations
    domains: [],
    remotePatterns: [],
    loader: "default",
    // Aggressive caching for better performance
    unoptimized: false,
    // Vercel edge caching
    path: "/_next/image",
    loader: "default",
  },

  // Performance optimizations
  poweredByHeader: false,
  generateEtags: true,
  compress: true,

  // Modern compilation settings
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true, // Critical CSS extraction aktif
    optimizePackageImports: ["lucide-react", "framer-motion"],
    webpackBuildWorker: true,
    // Bundle size optimizations
    optimizeServerReact: true,
  },

  // Webpack optimizations for bundle splitting
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      // Optimize bundle splitting
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          framework: {
            chunks: "all",
            name: "framework",
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return (
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module) {
              const hash = crypto.createHash("sha1");
              hash.update(module.identifier());
              return hash.digest("hex").substring(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: "commons",
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name: false,
            priority: 10,
            minChunks: 2,
          },
        },
      };
    }
    return config;
  },

  // Turbopack config for Next.js 16
  turbopack: {},
};

module.exports = nextConfig;
