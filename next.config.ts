import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve WordPress-style trailing slashes so every existing URL
  // (and its Google ranking) keeps resolving with a 200 after migration.
  trailingSlash: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "qualitygypsum.ca" },
      { protocol: "https", hostname: "www.qualitygypsum.ca" },
    ],
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
    ];
  },
};

export default nextConfig;
