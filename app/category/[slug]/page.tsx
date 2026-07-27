import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { postsByDate, type Post } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { PageHero, CTASection } from "@/components/Section";
import { ArrowRight } from "@/components/icons";

// These slugs match the old WordPress category archive URLs exactly, so the
// /category/<slug>/ pages Google indexed keep resolving with a 200.
type Cat = { name: string; description: string; select: (p: Post) => boolean };

const CATEGORIES: Record<string, Cat> = {
  blog: {
    name: "Blog",
    description:
      "Drywall, framing, insulation, and basement development advice from Quality Gypsum Services in Calgary.",
    select: () => true,
  },
  drywall: {
    name: "Drywall",
    description: "Drywall installation, taping, finishing, and repair articles for Calgary homes and businesses.",
    select: (p) => p.category === "Drywall",
  },
  construction: {
    name: "Construction",
    description: "Construction and renovation insight from a working Calgary drywall contractor.",
    select: (p) => p.category === "Construction",
  },
  insulation: {
    name: "Insulation",
    description: "Insulation and spray foam guidance for energy-efficient, comfortable Calgary buildings.",
    select: (p) => p.category === "Insulation",
  },
  taping: {
    name: "Taping",
    description: "Drywall taping and mudding — levels of finish and how to get a flawless wall.",
    select: (p) =>
      ["different-levels-of-drywall-taping", "proper-drywall-taping-mudding"].includes(p.slug),
  },
  "fire-rating": {
    name: "Fire Rating",
    description: "Fire-rated drywall and wall assemblies for safe, code-compliant Calgary projects.",
    select: (p) => p.category === "Fire Rating",
  },
  "steel-stud-framing": {
    name: "Steel Stud Framing",
    description: "Steel stud framing for commercial and residential interiors in Calgary.",
    select: (p) => p.category === "Steel Stud Framing",
  },
  sprayfoam: {
    name: "Spray Foam",
    description: "Spray foam and loosefill insulation for Calgary homes — benefits and installation.",
    select: (p) =>
      ["know-about-spray-foam-insulation", "loosefill-insulation"].includes(p.slug),
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES[slug];
  if (!cat) return {};
  return {
    title: `${cat.name} Articles | Quality Gypsum Blog`,
    description: cat.description,
    alternates: { canonical: `/category/${slug}/` },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = CATEGORIES[slug];
  if (!cat) notFound();

  const posts = postsByDate.filter(cat.select);
  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: cat.name, path: `/category/${slug}/` },
  ]);

  return (
    <>
      <JsonLd data={crumbs} />
      <PageHero eyebrow="Blog Category" title={cat.name} intro={cat.description} />

      <section className="bg-white">
        <div className="container-x py-16">
          <div className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link href="/blog/" className="font-semibold text-accent-dark hover:text-accent">
              ← All articles
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                {post.image && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                    {post.category}
                  </span>
                  <h2 className="mt-2 text-lg leading-snug text-ink group-hover:text-accent-dark">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted">
                    <span>{formatDate(post.date)}</span>
                    <ArrowRight width={15} height={15} className="text-ink" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
