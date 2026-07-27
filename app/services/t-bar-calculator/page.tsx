import type { Metadata } from "next";
import Calculator from "./Calculator";
import { PageHero, CTASection } from "@/components/Section";

export const metadata: Metadata = {
  title: "T-Bar Ceiling Calculator | Quality Gypsum Services | Calgary",
  description:
    "Free T-bar (acoustical ceiling) calculator. Estimate ceiling tiles, main runners, cross tees, and wall angle for your Calgary project in seconds.",
  alternates: { canonical: "/services/t-bar-calculator/" },
};

export default function TBarCalculatorPage() {
  return (
    <>
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
      <CTASection />
    </>
  );
}
