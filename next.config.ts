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
      // Consolidated blog posts — duplicates and thin pages that competed with the
      // homepage / service pages for "drywall contractor Calgary" and split rankings.
      { source: "/drywallcontractorstips/", destination: "/drywall-contractors-in-calgary/", permanent: true },
      { source: "/drywall-contractors-in-calgary-quality-gypsum-services/", destination: "/", permanent: true },
      { source: "/professional-drywall-contractor/", destination: "/", permanent: true },
      { source: "/drywall-installation/", destination: "/services/drywall/", permanent: true },
      { source: "/basementdevelopment/", destination: "/basement-development-for-homeowners/", permanent: true },
    ];
  },
};

export default nextConfig;
