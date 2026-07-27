import type { Metadata } from "next";
import { PageHero, CTASection } from "@/components/Section";
import { site } from "@/lib/site";
import { Check, Mail, Phone, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work with Us | Careers & Trade Partners | Calgary",
  description:
    "Join Quality Gypsum Services — we're always looking for skilled drywall, taping, framing, and insulation professionals, plus reliable trade partners across Calgary.",
  alternates: { canonical: "/work-with-us/" },
};

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work with Us"
        title="Build something you're proud of"
        intro="We don't just build walls; we build relationships — with our clients and our crew. We're always interested in hearing from skilled tradespeople and reliable partners who share our standard of quality."
      />

      <section className="bg-white">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-accent-dark">Join our crew</span>
            <h2 className="mt-4 text-3xl text-ink">Trades we hire</h2>
            <p className="mt-4 leading-relaxed text-muted">
              As a full-time commercial and residential drywall contractor, we rely on skilled
              people. If you take pride in your work and want to be part of a team that does it
              right, we'd like to hear from you.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Drywall installers (boarders)",
                "Tapers & finishers (Level 4 / Level 5)",
                "Steel stud framers",
                "Insulation & spray foam installers",
                "Acoustical ceiling (T-bar) installers",
                "Apprentices & labourers",
              ].map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-accent">
                    <Check width={14} height={14} />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-accent-dark">Why QGS</span>
            <h2 className="mt-4 text-3xl text-ink">What we offer</h2>
            <div className="mt-6 grid gap-4">
              {[
                ["Steady, full-time work", "We run commercial crews year-round, not job to job."],
                ["Commercial-grade projects", "Warehouses, schools, tenant improvements, and custom homes."],
                ["A team that values quality", "Do it right, every project — and grow with us."],
                ["Work-life balance", "Team well-being means better results for everyone."],
              ].map(([t, b]) => (
                <div key={t} className="rounded-2xl border border-line bg-paper p-6">
                  <h3 className="font-display text-base font-bold text-ink">{t}</h3>
                  <p className="mt-1.5 text-sm text-muted">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-16">
          <div className="rounded-3xl border border-line bg-white p-8 text-center sm:p-12">
            <h2 className="text-3xl text-ink">Ready to apply?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Send us a note with your experience and the trade you specialize in. Trade partners
              and subcontractors are welcome to reach out too.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`${site.emailHref}?subject=Work with Quality Gypsum Services`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark hover:text-white"
              >
                <Mail width={16} height={16} /> Email your experience
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
              >
                <Phone width={16} height={16} /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
