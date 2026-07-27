import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="container-x relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-7xl font-extrabold text-accent sm:text-8xl">404</span>
        <h1 className="mt-4 text-3xl text-white">Page not found</h1>
        <p className="mt-3 max-w-md text-white/60">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
          >
            Back to home <ArrowRight width={16} height={16} />
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
