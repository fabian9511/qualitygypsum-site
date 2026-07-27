import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { postsByDate, getPost, blogSlugs } from "@/lib/blog";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { CTASection } from "@/components/Section";
import { ArrowRight } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.domain}/${post.slug}/`,
      publishedTime: post.date,
      images: post.image ? [`${site.domain}${post.image}`] : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = postsByDate
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fill = postsByDate.filter((p) => p.slug !== post.slug).slice(0, 3);
  const suggestions = (related.length ? related : fill).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${site.domain}${post.image}` : undefined,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    mainEntityOfPage: `${site.domain}/${post.slug}/`,
  };

  const crumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/${post.slug}/` },
  ]);

  return (
    <>
      <JsonLd data={[jsonLd, crumbs]} />

      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container-x relative py-16 sm:py-20">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/blog/" className="hover:text-accent">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/80">{post.category}</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-3xl leading-[1.1] sm:text-4xl">{post.title}</h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-white/60">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>· {post.author}</span>
          </div>
        </div>
      </section>

      {post.image && (
        <section className="bg-white">
          <div className="container-x -mt-8 sm:-mt-10">
            <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card)]">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                width={1600}
                height={900}
                priority
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-white">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.5fr_0.7fr]">
          <article
            className="prose-blog max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <aside className="h-fit lg:sticky lg:top-28">
            <div className="rounded-3xl bg-ink p-7 text-white">
              <h2 className="font-display text-lg font-bold text-white">Talk to a real contractor</h2>
              <p className="mt-2 text-sm text-white/60">
                Free, no-obligation estimate for your Calgary project.
              </p>
              <Link
                href="/contact-us/"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Request a Quote <ArrowRight width={16} height={16} />
              </Link>
              <a
                href={site.phoneHref}
                className="mt-3 block text-center text-sm font-semibold text-white/70 hover:text-accent"
              >
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {suggestions.length > 0 && (
        <section className="border-t border-line bg-paper">
          <div className="container-x py-16">
            <h2 className="text-2xl text-ink">Keep reading</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {suggestions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}/`}
                  className="group rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-base leading-snug text-ink group-hover:text-accent-dark">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-muted">
                    Read <ArrowRight width={15} height={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
