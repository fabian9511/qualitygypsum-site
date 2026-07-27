import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { CTASection } from "@/components/Section";
import { ArrowRight, Check } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Projects`,
    description: project.excerpt,
    alternates: { canonical: project.href },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
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
            <Link href="/projects/" className="hover:text-accent">
              Projects
            </Link>
            <span>/</span>
            <span className="text-white/80">{project.title}</span>
          </nav>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {project.category}
            </span>
            {project.location && (
              <span className="text-sm text-white/60">{project.location}</span>
            )}
            {project.year && <span className="text-sm text-white/60">· {project.year}</span>}
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">{project.title}</h1>
        </div>
      </section>

      {/* Project image */}
      <section className="bg-white">
        <div className="container-x -mt-10 sm:-mt-12">
          <div className="overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card)]">
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <span className="eyebrow text-accent-dark">Some background</span>
            <div className="mt-4 space-y-5 text-[17px] leading-relaxed text-muted">
              {project.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-3xl border border-line bg-paper p-7">
            {(project.size || project.location || project.gc) && (
              <>
                <h2 className="font-display text-lg font-bold text-ink">Project Description</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {project.size && (
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-muted">Size</dt>
                      <dd className="mt-0.5 font-medium text-ink">{project.size}</dd>
                    </div>
                  )}
                  {project.location && (
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-muted">Location</dt>
                      <dd className="mt-0.5 font-medium text-ink">{project.location}</dd>
                    </div>
                  )}
                  {project.gc && (
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-muted">General Contractor</dt>
                      <dd className="mt-0.5 font-medium text-ink">{project.gc}</dd>
                    </div>
                  )}
                </dl>
                <hr className="my-5 border-line" />
              </>
            )}
            <h2 className="font-display text-lg font-bold text-ink">Scope of work</h2>
            <ul className="mt-4 space-y-3">
              {project.scope.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-accent">
                    <Check width={14} height={14} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us/"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark hover:text-white"
            >
              Start your project <ArrowRight width={16} height={16} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="container-x py-16">
          <h2 className="text-2xl text-ink">More projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
                  {p.category}
                </span>
                <h3 className="mt-2 text-lg text-ink group-hover:text-accent-dark">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-muted">
                  View <ArrowRight width={15} height={15} />
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
