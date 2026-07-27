import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTASection, ServiceAreasStrip } from "@/components/Section";
import { services } from "@/lib/services";
import { ArrowRight, Ruler, Shield, Layers, Grid, Home as HomeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services | Best Drywall Contractors | Calgary",
  description:
    "Professional drywall services for residential and commercial projects in Calgary — steel stud framing, insulation and spray foam, drywall and finishing, acoustical ceilings, and basement development.",
  alternates: { canonical: "/services/" },
};

const icons: Record<string, React.ComponentType<{ width?: number; height?: number; className?: string }>> = {
  "steel-stud-framing": Ruler,
  insulation: Shield,
  drywall: Layers,
  "acoustical-ceilings": Grid,
  "basement-development": HomeIcon,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Professional drywall services in Calgary"
        intro="Quality Gypsum Services provides professional drywall for residential and commercial projects across Calgary. We specialize in steel stud framing, insulation and spray foam, drywall installation and finishing, acoustical ceilings, and a variety of ceiling textures — high-quality craftsmanship on every project."
      />

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => {
              const Icon = icons[s.slug] ?? Layers;
              return (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="group flex flex-col rounded-3xl border border-line bg-paper p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-accent">
                      <Icon width={26} height={26} />
                    </div>
                    <span className="font-display text-2xl font-extrabold text-line">
                      0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl text-ink">{s.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{s.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-accent-dark">
                    Explore {s.shortTitle} <ArrowRight width={16} height={16} />
                  </span>
                </Link>
              );
            })}
            <Link
              href="/services/t-bar-calculator/"
              className="group flex flex-col justify-between rounded-3xl bg-accent p-8 text-white transition hover:bg-accent-dark hover:text-white"
            >
              <div>
                <span className="eyebrow">Free tool</span>
                <h2 className="mt-4 text-2xl">T-Bar Ceiling Calculator</h2>
                <p className="mt-3 leading-relaxed opacity-80">
                  Estimate the grid and tiles you need for an acoustical ceiling in seconds.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                Open calculator <ArrowRight width={16} height={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ServiceAreasStrip />
      <CTASection />
    </>
  );
}
