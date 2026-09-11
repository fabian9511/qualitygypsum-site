import type { Metadata } from "next";
import Calculator from "./Calculator";
import { PageHero, CTASection } from "@/components/Section";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "T-Bar Ceiling Calculator (Free)",
  description:
    "Free T-bar (acoustical ceiling) calculator. Estimate ceiling tiles, main runners, cross tees, and wall angle for your Calgary project in seconds.",
  alternates: { canonical: "/services/t-bar-calculator/" },
};

const faqs = [
  {
    question: "What does the T-bar ceiling calculator estimate?",
    answer:
      "Enter the room length and width and it estimates the number of ceiling tiles, main runners (main tees), cross tees, and wall angle needed for a standard 2x2 or 2x4 suspended grid. Add a waste allowance before ordering.",
  },
  {
    question: "How accurate is the estimate?",
    answer:
      "It is a planning number based on room dimensions. Bulkheads, columns, light fixtures, diffusers, and border tile layout all change the real count, which is why we do an on-site measure before quoting an installation.",
  },
  {
    question: "Do you install T-bar ceilings in Calgary?",
    answer:
      "Yes. Quality Gypsum Services installs acoustical ceilings for offices, tenant improvements, schools, and commercial buildings across Calgary and area, including custom clouds and grid layouts. Call (403) 809-2908 for a fixed written quote.",
  },
];

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "T-Bar Ceiling Calculator",
  url: `${site.domain}/services/t-bar-calculator/`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  provider: { "@id": `${site.domain}/#business` },
  description:
    "Free calculator that estimates ceiling tiles, main runners, cross tees, and wall angle for a suspended (T-bar) acoustical ceiling.",
};

export default function TBarCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          toolSchema,
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: "T-Bar Ceiling Calculator", path: "/services/t-bar-calculator/" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Free Tool"
        title="T-Bar Ceiling Calculator"
        intro="Enter your room dimensions to estimate the grid and tiles for an acoustical (T-bar) ceiling. Use it to plan and budget — then contact us for an exact material takeoff."
      />
      <section className="bg-white">
        <div className="container-x py-16">
          <Calculator />
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-ink">How to use the calculator</h2>
            <ol className="mt-4 space-y-3 text-muted">
              <li><strong className="text-ink">1. Measure the room.</strong> Length and width at ceiling height, in feet or metres.</li>
              <li><strong className="text-ink">2. Pick the tile size.</strong> 2x2 grids look cleaner in offices; 2x4 is cheaper for warehouses and back-of-house.</li>
              <li><strong className="text-ink">3. Read the material list.</strong> Tiles, main runners, cross tees, and wall angle, ready to check against a supplier quote.</li>
              <li><strong className="text-ink">4. Add waste.</strong> Plan 5 to 10 percent extra for cuts at the borders and around fixtures.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl text-ink">Common questions</h2>
            <div className="mt-4 space-y-5">
              {faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-display text-base font-bold text-ink">{f.question}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
