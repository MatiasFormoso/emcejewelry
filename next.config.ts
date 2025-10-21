import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de rendimiento
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Compresión
  compress: true,
  
  // Optimización de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },
  
  // Redirects configuration
  async redirects() {
    return [
      {
        source: "/",
        destination: "/es",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
