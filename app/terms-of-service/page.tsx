import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Quality Gypsum Services Ltd. website.",
  alternates: { canonical: "/terms-of-service/" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="bg-white">
        <div className="container-x max-w-3xl py-16">
          <div className="prose-blog">
            <p>
              These terms govern your use of the Quality Gypsum Services Ltd. website. By using this
              site, you agree to them.
            </p>
            <h2>Use of this website</h2>
            <p>
              The content on this site is provided for general information about our services. While
              we work to keep it accurate and current, we make no warranties about its completeness
              or accuracy.
            </p>
            <h2>Quotes & estimates</h2>
            <p>
              Any pricing, tools, or estimates provided on this site — including calculators — are
              for planning purposes only and do not constitute a binding quote. A formal written
              scope is provided after an on-site measure.
            </p>
            <h2>Intellectual property</h2>
            <p>
              All content, branding, and materials on this site are the property of Quality Gypsum
              Services Ltd. unless otherwise noted, and may not be reproduced without permission.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a href={site.emailHref}>{site.email}</a> or {site.phone}.
            </p>
            <p>
              <em>
                These terms are provided as a starting template and should be reviewed by a qualified
                professional.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
