import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve WordPress-style trailing slashes so every existing URL
  // (and its Google ranking) keeps resolving with a 200 after migration.
  trailingSlash: true,

  images: {
    // AVIF first (smallest), WebP fallback. Phones get phone-sized files via `sizes`.
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    // Optimized images are cached at the edge for 31 days.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      { protocol: "https", hostname: "qualitygypsum.ca" },
      { protocol: "https", hostname: "www.qualitygypsum.ca" },
    ],
  },

  poweredByHeader: false,

  async headers() {
    return [
      {
        // Photos, logos and fonts rarely change: cache them in the browser and at the edge.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Old Rank Math (WordPress) sitemaps -> the new Next.js sitemap,
      // so Search Console and crawlers land on the right file.
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/category-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/jet-theme-core-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      // Convenience aliases (old nav sometimes linked these).
      { source: "/contact/", destination: "/contact-us/", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy-policy-2/", permanent: true },
      // Consolidated blog posts — duplicates and thin pages that competed with the
      // homepage / service pages for "drywall contractor Calgary" and split rankings.
      { source: "/drywallcontractorstips/", destination: "/drywall-contractors-in-calgary/", permanent: true },
      { source: "/drywall-contractors-in-calgary-quality-gypsum-services/", destination: "/", permanent: true },
      { source: "/professional-drywall-contractor/", destination: "/", permanent: true },
      { source: "/drywall-installation/", destination: "/services/drywall/", permanent: true },
      { source: "/basementdevelopment/", destination: "/basement-development-for-homeowners/", permanent: true },
      // Seton Carwash used to live at an old Bridgeland URL with the wrong photo.
      { source: "/projects/custom-homes-bridgeland/", destination: "/projects/seton-carwash/", permanent: true },
    ];
  },
};

export default nextConfig;
