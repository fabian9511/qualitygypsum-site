import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Quality Gypsum Services Ltd. collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy-2/" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-white">
        <div className="container-x max-w-3xl py-16">
          <div className="prose-blog">
            <p>
              Quality Gypsum Services Ltd. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy. This policy explains what information we collect through this
              website and how we use it.
            </p>
            <h2>Information we collect</h2>
            <p>
              When you submit a quote request or contact form, we collect the details you provide —
              such as your name, email address, phone number, and project information. We may also
              collect standard, non-identifying analytics about how visitors use the site.
            </p>
            <h2>How we use your information</h2>
            <p>
              We use your information only to respond to your enquiry, prepare quotes, and provide
              our services. We do not sell your personal information to third parties.
            </p>
            <h2>Data retention & security</h2>
            <p>
              We retain enquiry information for as long as needed to serve you and meet our legal and
              business obligations, and we take reasonable measures to protect it.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Contact us at{" "}
              <a href={site.emailHref}>{site.email}</a> or {site.phone}.
            </p>
            <p>
              <em>
                This policy is provided as a starting template and should be reviewed by a qualified
                professional to ensure it meets your legal obligations.
              </em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
