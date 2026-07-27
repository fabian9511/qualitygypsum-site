import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, CTASection } from "@/components/Section";
import { postsByDate } from "@/lib/blog";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog | Drywall Tips & Guides | Calgary",
  description:
    "Practical drywall, framing, insulation, and basement development advice from Quality Gypsum Services — Calgary's professional drywall contractor.",
  alternates: { canonical: "/blog/" },
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [lead, ...rest] = postsByDate;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Drywall insight & guides"
        intro="Advice on drywall, steel stud framing, insulation, ceilings, and basement development — written by a working Calgary contractor."
      />

      <section className="bg-white">
        <div className="container-x py-16">
          {/* Lead post */}
          <Link
            href={`/${lead.slug}/`}
            className="group grid overflow-hidden rounded-3xl border border-line bg-paper transition hover:shadow-[var(--shadow-card)] lg:grid-cols-2"
          >
            <div className="relative min-h-[260px] overflow-hidden">
              <Image
                src={lead.image ?? "/images/plans-review.jpg"}
                alt={lead.imageAlt ?? lead.title}
                width={900}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-accent px-3 py-1 font-semibold text-white">
                  {lead.category}
                </span>
                <span className="text-muted">{formatDate(lead.date)}</span>
              </div>
              <h2 className="mt-4 text-2xl leading-snug text-ink group-hover:text-accent-dark sm:text-3xl">
                {lead.title}
              </h2>
              <p className="mt-3 text-muted">{lead.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                Read article <ArrowRight width={16} height={16} />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
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
                  <h3 className="mt-2 text-lg leading-snug text-ink group-hover:text-accent-dark">
                    {post.title}
                  </h3>
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
