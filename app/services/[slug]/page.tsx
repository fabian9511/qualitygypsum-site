import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import serviceContent from "@/lib/service-content.json";
import JsonLd from "@/components/JsonLd";
import { CTASection } from "@/components/Section";
import { ArrowRight, Phone, Mail } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: service.href },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const content = (serviceContent as Record<string, string>)[service.slug];

  const schema = [
    serviceSchema(service),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/" },
      { name: service.shortTitle, path: service.href },
    ]),
  ];

  return (
    <>
      <JsonLd data={schema} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative py-20 sm:py-24">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/services/" className="hover:text-accent">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/80">{service.shortTitle}</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl uppercase leading-[1.02] sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">{service.hero}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact-us/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Request a Quote Here <ArrowRight width={16} height={16} />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              <Phone width={16} height={16} /> {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Service image */}
      <section className="bg-white">
        <div className="container-x -mt-10 sm:-mt-12">
          <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card)]">
            <Image
              src={service.image}
              alt={service.title}
              width={1600}
              height={800}
              className="aspect-[2/1] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Full service content (migrated from the original page) */}
      <section className="bg-white">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.5fr_0.7fr]">
          {content ? (
            <article
              className="prose-blog max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div className="space-y-4 text-[17px] leading-relaxed text-muted">
              {service.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          <aside className="h-fit space-y-4 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-line bg-paper p-6">
              <p className="font-display text-lg font-bold text-ink">Serving Calgary &amp; area</p>
              <p className="mt-2 text-sm text-muted">{site.serviceAreas.join(" · ")}</p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href={site.phoneHref} className="flex items-center gap-2 text-ink hover:text-accent-dark">
                  <Phone width={16} height={16} className="text-accent-dark" /> {site.phone}
                </a>
                <a href={site.emailHref} className="flex items-center gap-2 text-ink hover:text-accent-dark">
                  <Mail width={16} height={16} className="text-accent-dark" /> {site.email}
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-ink p-6 text-white">
              <p className="font-display text-lg font-bold text-white">Request a free quote</p>
              <p className="mt-2 text-sm text-white/60">On-site measure, no obligation.</p>
              <Link
                href="/contact-us/"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
              >
                Request a Quote <ArrowRight width={16} height={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-line bg-paper">
        <div className="container-x py-16">
          <h2 className="text-2xl text-ink">Other services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="group rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <h3 className="text-base text-ink group-hover:text-accent-dark">{s.shortTitle}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-muted">
                  Learn more <ArrowRight width={15} height={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
