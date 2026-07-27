import { site } from "./site";
import { services } from "./services";

const base = site.domain.replace(/\/$/, "");

// LocalBusiness / GeneralContractor — the highest-value structured data for a
// local trade business. Feeds Google's knowledge panel and AI answer engines
// with the name, contact, address, hours, and service area.
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  "@id": `${base}/#business`,
  name: site.name,
  alternateName: site.shortName,
  description:
    "Commercial and residential drywall contractor in Calgary — steel stud framing, insulation, drywall and taping, acoustical ceilings, and basement development.",
  url: base,
  logo: `${base}/images/logo-wordmark.png`,
  image: `${base}/images/logo-icon.png`,
  telephone: "+14038092908",
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4975 130 Ave SE",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [site.social.facebook, site.social.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drywall & interior services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${base}${s.href}`,
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${base}/#website`,
  name: site.name,
  url: base,
  publisher: { "@id": `${base}/#business` },
};

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${base}${it.path}`,
    })),
  };
}

export function serviceSchema(s: {
  title: string;
  href: string;
  metaDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    name: s.title,
    description: s.metaDescription,
    url: `${base}${s.href}`,
    provider: { "@id": `${base}/#business` },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
  };
}
