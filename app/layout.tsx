import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Quality Gypsum Services | Drywall Contractor in Calgary",
    template: "%s | Quality Gypsum Services",
  },
  description:
    "Quality Gypsum Services is a Calgary drywall contractor specializing in steel stud framing, insulation, drywall, taping, acoustical ceilings, and basement development for commercial and residential projects.",
  keywords: [
    "drywall contractor Calgary",
    "steel stud framing",
    "insulation Calgary",
    "acoustical ceilings",
    "basement development Calgary",
    "drywall taping",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.domain,
    siteName: site.name,
    title: "Quality Gypsum Services | Drywall Contractor in Calgary",
    description:
      "Commercial and residential drywall, framing, insulation, and ceilings across Calgary and surrounding areas.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className="antialiased">
      <body className="min-h-screen bg-white">
        <JsonLd data={[localBusinessSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* GoHighLevel live chat widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a675de5ac56ff00a1980bef"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
