"use client";

import Script from "next/script";

// GoHighLevel / LeadConnector embedded "General Inquiry Form".
// Submissions flow directly into the Quality Gypsum GHL CRM.
export default function GhlForm() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)]">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/QIv0aEljGGN3ZNroCrm4"
        title="General Inquiry Form"
        id="inline-QIv0aEljGGN3ZNroCrm4"
        className="w-full"
        style={{ height: 959, border: "none", borderRadius: 8 }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="General Inquiry Form"
        data-height="959"
        data-layout-iframe-id="inline-QIv0aEljGGN3ZNroCrm4"
        data-form-id="QIv0aEljGGN3ZNroCrm4"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
