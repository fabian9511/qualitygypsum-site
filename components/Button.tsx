import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark hover:text-white shadow-[0_8px_24px_-8px_rgba(0,168,228,0.55)]",
  dark: "bg-ink text-white hover:bg-ink-700",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "border border-white/30 text-white hover:bg-white hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ${styles[variant]} ${className}`;
  if (isExternal) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
