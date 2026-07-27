"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { ArrowRight, Check } from "@/components/icons";

const projectTypes = ["Residential", "Commercial", "Renovation", "Tenant Improvement", "Out of Town"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    message: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function openMailtoFallback() {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Project type: ${form.projectType}`,
      "",
      form.message,
    ].join("\n");
    const url = `${site.emailHref}?subject=${encodeURIComponent(
      `Quote request from ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      // Email provider not configured (or send failed) — fall back to the
      // visitor's email client so the lead still reaches the inbox.
      openMailtoFallback();
      setStatus("sent");
    } catch {
      openMailtoFallback();
      setStatus("sent");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-line bg-paper p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
          <Check width={28} height={28} />
        </div>
        <h3 className="mt-5 text-2xl text-ink">Thanks — we&rsquo;ll be in touch</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          We reply within one business day. Need to reach us sooner? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-accent-dark">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-white p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="(403) 000-0000"
          />
        </Field>
        <Field label="Project type">
          <select
            value={form.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className="input"
          >
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Project details" required>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="input resize-none"
            placeholder="Tell us about your project, timeline, and location. You can email drawings to info@qualitygypsum.ca."
          />
        </Field>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-dark hover:text-white disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send request"} <ArrowRight width={16} height={16} />
      </button>
      <p className="mt-4 text-xs text-muted">
        On-site measure, no obligation. We reply within one business day.
      </p>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-line);
          background: #fff;
          padding: 0.75rem 1rem;
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus { border-color: var(--color-accent); }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label} {required && <span className="text-accent-dark">*</span>}
      </span>
      {children}
    </label>
  );
}
