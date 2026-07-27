import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain.replace(/\/$/, "");
  const u = (path: string) => `${base}${path}`;

  const staticPaths = [
    { path: "/", priority: 1 },
    { path: "/about/", priority: 0.7 },
    { path: "/services/", priority: 0.9 },
    { path: "/services/t-bar-calculator/", priority: 0.6 },
    { path: "/projects/", priority: 0.8 },
    { path: "/blog/", priority: 0.7 },
    { path: "/work-with-us/", priority: 0.5 },
    { path: "/contact-us/", priority: 0.8 },
    { path: "/privacy-policy-2/", priority: 0.2 },
    { path: "/terms-of-service/", priority: 0.2 },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((s) => ({
    url: u(s.path),
    changeFrequency: "monthly",
    priority: s.priority,
  }));

  for (const s of services) {
    entries.push({ url: u(s.href), changeFrequency: "monthly", priority: 0.8 });
  }
  for (const p of projects) {
    entries.push({ url: u(p.href), changeFrequency: "yearly", priority: 0.6 });
  }
  for (const post of posts) {
    entries.push({
      url: u(`/${post.slug}/`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  // Blog category archives (match the old WordPress category URLs).
  const categories = [
    "blog",
    "drywall",
    "construction",
    "insulation",
    "taping",
    "fire-rating",
    "steel-stud-framing",
    "sprayfoam",
  ];
  for (const slug of categories) {
    entries.push({ url: u(`/category/${slug}/`), changeFrequency: "monthly", priority: 0.4 });
  }

  return entries;
}
