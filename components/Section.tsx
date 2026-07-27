import type { ReactNode } from "react";
import Button from "./Button";
import { site } from "@/lib/site";
import { Phone, ArrowRight } from "./icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-accent" : "text-accent-dark"}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-3 text-3xl leading-[1.08] sm:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[17px] leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-x relative py-20 sm:py-24">
        {eyebrow && <span className="eyebrow text-accent">{eyebrow}</span>}
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/70">{intro}</p>}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="bg-ink">
      <div className="container-x py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-700 px-8 py-12 sm:px-14 sm:py-16">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <span className="eyebrow text-accent">Ready to take the next step?</span>
              <h2 className="mt-3 text-3xl text-white sm:text-4xl">
                Get a free estimate on your project
              </h2>
              <p className="mt-4 text-white/70">
                On-site measure, no obligation. We reply within one business day with a fixed
                written scope — no price changes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact-us/" variant="primary">
                Request a Quote <ArrowRight width={16} height={16} />
              </Button>
              <Button href={site.phoneHref} variant="light">
                <Phone width={16} height={16} /> {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreasStrip() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="container-x flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-ink">
          Proudly serving
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {site.serviceAreas.map((a) => (
            <span key={a} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
