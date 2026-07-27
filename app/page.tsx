import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { SectionHeading, CTASection, ServiceAreasStrip } from "@/components/Section";
import { site, values } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { postsByDate } from "@/lib/blog";
import {
  ArrowRight,
  Phone,
  Check,
  Ruler,
  Layers,
  Shield,
  Home as HomeIcon,
  Grid,
  Star,
} from "@/components/icons";

const serviceIcons: Record<
  string,
  React.ComponentType<{ width?: number; height?: number; className?: string }>
> = {
  "steel-stud-framing": Ruler,
  insulation: Shield,
  drywall: Layers,
  "acoustical-ceilings": Grid,
  "basement-development": HomeIcon,
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);
  const featuredPosts = postsByDate.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="container-x relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.experienceYears} years · Commercial &amp; residential
            </span>
            <h1 className="mt-6 text-4xl font-extrabold uppercase leading-[0.98] sm:text-6xl">
              Drywall contractor <br className="hidden sm:block" />
              in <span className="text-accent">Calgary</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/70">
              Steel stud framing, insulation, drywall, and ceilings — built to commercial
              standards. {site.mission}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact-us/" variant="primary">
                Request a Quote <ArrowRight width={16} height={16} />
              </Button>
              <Button href={site.phoneHref} variant="light">
                <Phone width={16} height={16} /> {site.phone}
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["10+", "Years of experience"],
                ["Full-time", "In-house crews"],
                ["Fixed", "Written scope quotes"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-extrabold text-white">{n}</div>
                  <div className="text-sm text-white/55">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero photo */}
          <div className="relative animate-fade-up">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/plans-review.jpg"
                alt="Quality Gypsum team reviewing project plans on a tablet on a Calgary jobsite"
                width={1600}
                height={1067}
                priority
                className="h-[30rem] w-full object-cover object-[center_30%] sm:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-ink/70 p-4 backdrop-blur">
                <p className="eyebrow text-accent">
                  How can we help you the &lsquo;Builder&rsquo; succeed?
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.slice(0, 4).map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 transition hover:border-accent hover:text-accent"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                  <Link
                    href="/services/"
                    className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-accent-dark"
                  >
                    All services <ArrowRight width={13} height={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceAreasStrip />

      {/* VALUES */}
      <section className="bg-white">
        <div className="container-x py-20 sm:py-24">
          <SectionHeading
            eyebrow="What we stand for"
            title="Built on quality, honesty, and trust"
            intro="Our values shape every project — from a single basement to a full commercial fit-out."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.key}
                className="group rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink font-display text-lg font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our services"
              title="Everything from framing to final finish"
              intro="One accountable contractor for the full drywall scope — commercial and residential."
            />
            <Button href="/services/" variant="outline">
              View all services <ArrowRight width={16} height={16} />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug] ?? Layers;
              return (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-ink/15 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-dark">
                    <Icon width={24} height={24} />
                  </div>
                  <h3 className="mt-6 text-xl text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-accent-dark">
                    Learn more <ArrowRight width={16} height={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-ink text-white">
        <div className="container-x grid gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              light
              eyebrow="The QGS difference"
              title="Commercial standards on every job"
              intro="Most basement outfits are one truck and whoever they found that week. QGS runs commercial drywall and steel stud crews full time — so you get the same people and the same standard, every project."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/about/" variant="primary">
                About Quality Gypsum <ArrowRight width={16} height={16} />
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Dead-straight framing", "Engineered steel stud framing that makes every following trade easier."],
              ["Our own crews on site", "Full-time employees, not subcontractors found week to week."],
              ["Finished to level", "Drywall taped and sanded to Level 4 or 5 — ready for paint."],
              ["No price surprises", "A fixed written scope after an on-site measure. No obligation."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
                  <Check width={18} height={18} />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-white">{t}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white">
        <div className="container-x py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Recent work"
              title="Projects across Calgary"
              intro="Commercial builds, tenant improvements, and custom homes — delivered to standard."
            />
            <Button href="/projects/" variant="outline">
              All projects <ArrowRight width={16} height={16} />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group overflow-hidden rounded-3xl border border-line bg-paper transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={534}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-ink">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CLIENTS */}
      <section className="bg-paper">
        <div className="container-x py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} width={20} height={20} />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                &ldquo;We don&rsquo;t just build walls; we build relationships. Your project, our
                commitment.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-muted">
                The standard behind every Quality Gypsum project.
              </p>
            </div>
            <div>
              <p className="eyebrow text-accent-dark">Trusted Builders &amp; Trade Partners</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {site.clients.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${c.name}`}
                    aria-label={`Visit ${c.name} website`}
                    className="flex items-center justify-center rounded-xl border border-line bg-white px-4 py-5 transition hover:border-accent hover:shadow-[var(--shadow-card)]"
                  >
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={200}
                      height={80}
                      className="max-h-10 w-auto object-contain opacity-80 transition hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-white">
        <div className="container-x py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="From the blog"
              title="Drywall insight & guides"
              intro="Practical advice on drywall, framing, insulation, and basements in Calgary."
            />
            <Button href="/blog/" variant="outline">
              Read the blog <ArrowRight width={16} height={16} />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-paper transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
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
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg leading-snug text-ink group-hover:text-accent-dark">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    Read more <ArrowRight width={16} height={16} />
                  </span>
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
