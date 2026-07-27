import Link from "next/link";
import Image from "next/image";
import { site, mainNav } from "@/lib/site";
import { services } from "@/lib/services";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-icon.png"
                alt="Quality Gypsum"
                width={200}
                height={160}
                className="h-10 w-auto"
              />
              <span className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
                Quality Gypsum
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.mission} A full-time commercial and residential drywall contractor serving Calgary and surrounding communities for {site.experienceYears} years.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent"
              >
                <Facebook width={18} height={18} />
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent"
              >
                <Instagram width={18} height={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {mainNav
                .filter((n) => !n.children)
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="transition hover:text-accent">
                      {n.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/about/" className="transition hover:text-accent">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition hover:text-accent">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 transition hover:text-accent">
                  <Phone width={18} height={18} className="mt-0.5 text-accent" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-start gap-3 transition hover:text-accent">
                  <Mail width={18} height={18} className="mt-0.5 text-accent" /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin width={18} height={18} className="mt-0.5 text-accent" /> {site.address}
              </li>
            </ul>
            <Link
              href="/contact-us/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              Request a Quote <ArrowRight width={16} height={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy-2/" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
