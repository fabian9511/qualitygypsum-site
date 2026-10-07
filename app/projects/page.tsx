import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, CTASection } from "@/components/Section";
import { projects } from "@/lib/projects";
import { commercialProjects, residentialProjects, type ListedProject } from "@/lib/project-list";
import { ArrowRight } from "@/components/icons";
import { breadcrumbSchema, collectionSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Drywall Projects in Calgary",
  description:
    "Drywall projects by Quality Gypsum Services across Calgary and area: commercial builds, tenant improvements, warehouses, schools, and custom homes.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects/" }]),
          collectionSchema({
            path: "/projects/",
            name: "Quality Gypsum projects in Calgary",
            description: "Commercial, tenant improvement and residential drywall projects by Quality Gypsum Services.",
            items: projects.map((p) => ({ name: p.title, path: p.href })),
          }),
        ]}
      />
      <PageHero
        eyebrow="Our Work"
        title="Projects across Calgary & area"
        intro="From commercial warehouses and tenant improvements to custom homes, here's a look at the work our crews deliver — built to commercial standards, every time."
      />

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="leading-relaxed text-muted">
              Each project below was delivered by Quality Gypsum Services as the drywall contractor:
              steel stud framing, insulation and spray foam, drywall and taping, acoustical ceilings,
              or the full interior package. General contractors, developers, and homeowners across
              Calgary, Airdrie, and southern Alberta trust the same crews for warehouses, schools,
              offices, and custom homes.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group overflow-hidden rounded-3xl border border-line bg-paper transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
                    src={p.image}
                    alt={`${p.title}: ${p.category.toLowerCase()} drywall project by Quality Gypsum Services`}
                    width={800}
                    height={534}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    {p.category}
                  </span>
                  {p.location && (
                    <span className="absolute bottom-4 left-4 text-xs font-medium text-white/90">
                      {p.location}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-lg text-ink group-hover:text-accent-dark">{p.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    View project <ArrowRight width={15} height={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="container-x py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent-dark">Completed work</p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">More jobs our crews have delivered</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Recent commercial and residential jobs across Calgary and southern Alberta, built for
              general contractors and builders including Theodore Builders, BUILD IT Calgary, LD&amp;A,
              EFC Developments, Versatile Developments, Old Street Developments and First General.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <ProjectList title="Commercial" items={commercialProjects} />
            <ProjectList title="Residential" items={residentialProjects} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ProjectList({ title, items }: { title: string; items: ListedProject[] }) {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl text-ink">{title}</h3>
        <span className="text-sm text-muted">{items.length} projects</span>
      </div>
      <ul className="mt-5 divide-y divide-line">
        {items.map((p) => (
          <li key={p.name} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <p className="font-medium text-ink">{p.name}</p>
              <p className="text-sm text-muted">
                {p.area}
                {p.gc ? ` · for ${p.gc}` : ""}
              </p>
            </div>
            <span className="w-fit shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-dark">
              {p.type}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
