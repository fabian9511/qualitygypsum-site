import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, CTASection } from "@/components/Section";
import { projects } from "@/lib/projects";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects | Drywall Contractor Portfolio | Calgary",
  description:
    "A portfolio of Quality Gypsum Services projects across Calgary — commercial builds, tenant improvements, warehouses, schools, and custom homes.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects across Calgary & area"
        intro="From commercial warehouses and tenant improvements to custom homes, here's a look at the work our crews deliver — built to commercial standards, every time."
      />

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group overflow-hidden rounded-3xl border border-line bg-paper transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
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

      <CTASection />
    </>
  );
}
