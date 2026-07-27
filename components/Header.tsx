"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav, site } from "@/lib/site";
import { Phone, Menu, Close, ChevronDown, ArrowRight } from "./icons";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Quality Gypsum Services — home">
      <Image
        src="/images/logo-wordmark.png"
        alt="Quality Gypsum Services"
        width={1200}
        height={361}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-ink text-white/80 md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <span className="tracking-wide">Commercial &amp; Residential Drywall Contractor · Calgary, AB</span>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-accent">
              <Phone width={14} height={14} /> {site.phone}
            </a>
            <a href={site.emailHref} className="hover:text-accent">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-line bg-white/95 backdrop-blur">
        <div className="container-x flex h-18 items-center justify-between py-3">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:text-ink"
                  >
                    {item.label}
                    <ChevronDown width={14} height={14} className="mt-0.5 opacity-60" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-[var(--shadow-lift)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-3 py-2.5 text-sm text-ink/75 transition hover:bg-paper hover:text-ink"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition hover:text-ink ${
                    pathname === item.href ? "text-ink" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact-us/"
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark hover:text-white sm:inline-flex"
            >
              Request a Quote <ArrowRight width={16} height={16} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-line text-ink lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-line bg-white lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-line pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-muted"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone width={16} height={16} /> Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
