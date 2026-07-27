import type { Metadata } from "next";
import GhlForm from "@/components/GhlForm";
import { PageHero } from "@/components/Section";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Clock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Drywall Quote | Calgary",
  description:
    "Contact Quality Gypsum Services for a free, no-obligation drywall quote in Calgary. Call (403) 809-2908, email info@qualitygypsum.ca, or send us your project details.",
  alternates: { canonical: "/contact-us/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Request a free quote"
        intro="Tell us about your project and we'll reply within one business day with an on-site measure and a fixed written scope — no obligation."
      />

      <section className="bg-white">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <div>
            <h2 className="text-2xl text-ink">Get in touch</h2>
            <p className="mt-3 leading-relaxed text-muted">
              We don&rsquo;t just build walls; we build relationships. Reach out and let&rsquo;s
              talk about your project.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={<Phone width={20} height={20} />} label="Phone" href={site.phoneHref}>
                {site.phone}
              </ContactRow>
              <ContactRow icon={<Mail width={20} height={20} />} label="Email" href={site.emailHref}>
                {site.email}
              </ContactRow>
              <ContactRow icon={<MapPin width={20} height={20} />} label="Address">
                {site.address}
              </ContactRow>
              <div className="rounded-2xl border border-line bg-paper p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-accent">
                    <Clock width={20} height={20} />
                  </span>
                  <span className="font-display font-bold text-ink">Hours</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-muted">
                      <span>{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-paper p-4">
              <p className="text-sm font-medium text-ink">Service areas</p>
              <p className="mt-1 text-sm text-muted">{site.serviceAreas.join(" · ")}</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <GhlForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-paper">
        <div className="container-x pb-16">
          <div className="overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Quality Gypsum Services location"
              src="https://www.google.com/maps?q=4975%20130%20Ave%20SE%2C%20Calgary%2C%20Alberta&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-accent">
        {icon}
      </span>
      <span>
        <span className="block text-xs uppercase tracking-widest text-muted">{label}</span>
        <span className="font-display font-semibold text-ink">{children}</span>
      </span>
    </div>
  );
  return href ? (
    <a href={href} className="block transition hover:opacity-80">
      {inner}
    </a>
  ) : (
    inner
  );
}
