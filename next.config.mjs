/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentFeedback: true,
  },

  // Required for Netlify deployment
  // "standalone" bundles everything needed for production
  output: "standalone",

  // Image optimization — allow Netlify CDN domain when live
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Compress responses
  compress: true,

  // Power-ups for production only (Turbopack is dev-only)
  ...(process.env.NODE_ENV !== "production" && {
    cacheComponents: true,
    partialPrefetching: true,
    turbopack: {
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  }),
};

export default nextConfig;
