import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CTASection, SectionHeading } from "@/components/Section";
import { site, values } from "@/lib/site";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "About | Reliable Drywall Contractor in Calgary",
  description:
    "Quality Gypsum Services is a reliable Calgary drywall contractor built on quality, honesty, and trust. Over 10 years delivering professional drywall and insulation services.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="How can we help you the 'Builder' succeed?"
        intro="At Quality Gypsum Services Ltd., we don't just build walls; we build relationships. We're a reliable drywall contractor in Calgary — dedicated to precision, industry standards, and timely project completion."
      />

      <section className="bg-white">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A working contractor, not a middleman"
              intro="Quality Gypsum Services specializes in professional drywall and insulation across Calgary and the surrounding region. We run commercial drywall and steel stud crews full time — the same experienced people on every job, from a single basement to a full commercial fit-out."
            />
            <p className="mt-4 leading-relaxed text-muted">
              With over {site.experienceYears} years of experience, we've built a reputation on
              craftsmanship, clear communication, and delivering on our promises. Your project, our
              commitment.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-line shadow-[var(--shadow-card)]">
            <Image
              src="/images/team-tablet.jpg"
              alt="Quality Gypsum team reviewing plans on a Calgary jobsite"
              width={1600}
              height={1067}
              className="h-full max-h-[30rem] w-full object-cover"
            />
          </div>
        </div>

        <div className="container-x pb-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["10+ years", "Delivering drywall services in Calgary"],
              ["In-house crews", "Full-time employees, not week-to-week labour"],
              ["Commercial standard", "Applied to residential and commercial alike"],
              ["Fixed scope", "Written quotes with no price surprises"],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl border border-line bg-paper p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-accent">
                  <Check width={18} height={18} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{t}</h3>
                <p className="mt-1.5 text-sm text-muted">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x py-20">
          <SectionHeading
            light
            align="center"
            eyebrow="Our values"
            title="What we stand for"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent font-display text-lg font-extrabold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
