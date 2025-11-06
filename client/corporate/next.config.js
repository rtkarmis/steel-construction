/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Image optimization için format priority
    formats: ['image/webp', 'image/avif'],
    
    // Image quality ayarları
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],
    
    // Cache süreleri
    minimumCacheTTL: 31536000, // 1 yıl
    
    // Unoptimized false (optimizasyon aktif)
    unoptimized: false,
  },
  
  // Experimental features
  experimental: {
    // Image loading optimization
    optimizeCss: true,
    optimizePackageImports: ['next/image'],
  },
};

module.exports = nextConfig;
