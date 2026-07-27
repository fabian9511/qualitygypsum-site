"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";

type Grid = "2x4" | "2x2";
type Method = "dim" | "area";

function ceil(n: number) {
  return Number.isFinite(n) && n > 0 ? Math.ceil(n) : 0;
}

export default function Calculator() {
  const [projectName, setProjectName] = useState("");
  const [method, setMethod] = useState<Method>("dim");
  const [length, setLength] = useState("24");
  const [width, setWidth] = useState("16");
  const [area, setArea] = useState("384");
  const [panel, setPanel] = useState<Grid>("2x2");
  const [waste, setWaste] = useState(10);

  const r = useMemo(() => {
    let L = 0,
      W = 0,
      A = 0;
    if (method === "dim") {
      L = Math.max(0, parseFloat(length) || 0);
      W = Math.max(0, parseFloat(width) || 0);
      A = L * W;
    } else {
      A = Math.max(0, parseFloat(area) || 0);
      L = Math.sqrt(A);
      W = L;
    }
    const wf = 1 + waste / 100;
    const perimeter = 2 * (L + W);

    // Grid framing (USG area-based formulas, matched to manufacturer spec)
    const mainTees = ceil((A / 48) * wf); // 12 ft main tees, 4 ft O.C.
    const xTee4 = ceil((A / 8) * wf); // 4 ft cross tees, 2 ft O.C.
    const xTee2 = panel === "2x2" ? ceil((A / 8) * wf) : 0; // 2 ft cross tees (2x2 only)
    const wallAngle = A > 0 ? ceil((perimeter / 12) * wf) + 3 : 0; // 12 ft, +3 pc buffer

    // Hardware & fasteners
    const hangers = ceil((A / 16) * wf); // one per 16 sq ft (4 ft × 4 ft grid)
    const eyeScrews = hangers;
    const wireClips = hangers;
    const wallScrews = ceil(perimeter / (16 / 12)); // every 16 in around perimeter

    // Panels
    const panelArea = panel === "2x4" ? 8 : 4;
    const fullPanels = ceil(A / panelArea);
    const totalPanels = A > 0 ? ceil(fullPanels * wf) + 3 : 0;

    return {
      L,
      W,
      A,
      perimeter,
      mainTees,
      xTee4,
      xTee2,
      wallAngle,
      hangers,
      eyeScrews,
      wireClips,
      wallScrews,
      fullPanels,
      totalPanels,
    };
  }, [method, length, width, area, panel, waste]);

  function reset() {
    setProjectName("");
    setLength("");
    setWidth("");
    setArea("");
    setPanel("2x2");
    setWaste(10);
    setMethod("dim");
  }

  function exportCsv() {
    const name = projectName || "T-Bar Project";
    const is2x2 = panel === "2x2";
    const rows: [string, string | number][] = [
      ["T-Bar Ceiling Estimate", ""],
      ["Project", name],
      ["Panel Size", panel],
      ["Waste Factor", `${waste}%`],
      ["Room Length (ft)", r.L ? r.L.toFixed(2) : ""],
      ["Room Width (ft)", r.W ? r.W.toFixed(2) : ""],
      ["Area (sq ft)", r.A.toFixed(2)],
      ["", ""],
      ["GRID FRAMING", ""],
      ["Main Tees (12 ft)", r.mainTees],
      ["4 ft Cross Tees", r.xTee4],
      ...(is2x2 ? ([["2 ft Cross Tees", r.xTee2]] as [string, number][]) : []),
      ["Wall Angle (12 ft, incl. 3 pc buffer)", r.wallAngle],
      ["", ""],
      ["HARDWARE & FASTENERS", ""],
      ["Hanger Wires", r.hangers],
      ["Eye Screws", r.eyeScrews],
      ["Wire Clips", r.wireClips],
      ["Wall Angle Fasteners", r.wallScrews],
      ["", ""],
      ["PANELS", ""],
      ["Panels (base count)", r.fullPanels],
      ["Total Panels to Purchase (incl. 3 pc buffer)", r.totalPanels],
    ];
    const csv = rows
      .map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\r\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name.replace(/\s+/g, "_") + "_TBar_Estimate.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }

  const summary = [
    { label: "Sq Ft", value: r.A % 1 === 0 ? r.A.toString() : r.A.toFixed(1) },
    { label: "Panels", value: r.totalPanels.toString() },
    { label: "Waste", value: `${waste}%` },
  ];

  const grid: { label: string; sub: string; value: number; show?: boolean }[] = [
    { label: "Main Tees (12 ft)", sub: "Run along room length · 4 ft O.C.", value: r.mainTees },
    { label: "4 ft Cross Tees", sub: "Perpendicular to main tees · 2 ft O.C.", value: r.xTee4 },
    { label: "2 ft Cross Tees", sub: "2×2 grid subdivision", value: r.xTee2, show: panel === "2x2" },
    { label: "Wall Angle / L-Molding (12 ft)", sub: "Perimeter support · incl. 3 pc buffer", value: r.wallAngle },
  ];

  const hardware = [
    { label: "Hanger Wires", sub: "Every 4 ft along main tees · includes ends", value: r.hangers },
    { label: "Eye Screws / Eyebolts", sub: "1 per hanger wire · into structure above", value: r.eyeScrews },
    { label: "Wire Clips / Saddle Ties", sub: "1 per hanger wire at tee attachment", value: r.wireClips },
    { label: "Wall Angle Screws / Powder Nails", sub: "Every 16 in along perimeter", value: r.wallScrews },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Inputs */}
      <div className="rounded-3xl border border-line bg-paper p-7">
        <h2 className="text-xl text-ink">Project details</h2>

        <label className="mt-6 block">
          <span className="text-sm font-medium text-ink">Project name</span>
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="e.g. Office Renovation"
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-accent"
          />
        </label>

        <div className="mt-5">
          <span className="text-sm font-medium text-ink">Input method</span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {([
              ["dim", "Length × Width"],
              ["area", "Known Area"],
            ] as [Method, string][]).map(([m, lbl]) => (
              <button
                key={m}
                type="button"
                onClick={() => setMethod(m)}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  method === m
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-white text-muted hover:border-ink/30"
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>
        </div>

        {method === "dim" ? (
          <div className="mt-5 grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-ink">Length (ft)</span>
              <input
                type="number"
                min="0"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink">Width (ft)</span>
              <input
                type="number"
                min="0"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-accent"
              />
            </label>
          </div>
        ) : (
          <label className="mt-5 block">
            <span className="text-sm font-medium text-ink">Total area (sq ft)</span>
            <input
              type="number"
              min="0"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-accent"
            />
          </label>
        )}

        <div className="mt-5">
          <span className="text-sm font-medium text-ink">Panel size</span>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {(["2x4", "2x2"] as Grid[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setPanel(g)}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  panel === g
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-white text-muted hover:border-ink/30"
                }`}
              >
                {g === "2x4" ? "2′ × 4′" : "2′ × 2′"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <span className="text-sm font-medium text-ink">Waste factor: {waste}%</span>
          <input
            type="range"
            min="0"
            max="25"
            step="1"
            value={waste}
            onChange={(e) => setWaste(parseInt(e.target.value))}
            className="mt-3 w-full accent-[var(--color-accent)]"
          />
        </div>

        <button
          type="button"
          onClick={reset}
          className="mt-6 w-full rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-muted transition hover:border-ink/30 hover:text-ink"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      <div className="rounded-3xl bg-ink p-7 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl text-white">Material estimate</h2>
            <p className="mt-1 text-sm text-white/50">
              4 ft O.C. main tees · accurate counts + fasteners.
            </p>
          </div>
          <button
            type="button"
            onClick={exportCsv}
            className="rounded-full border border-accent px-4 py-2 text-xs font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            Export CSV
          </button>
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10">
          {summary.map((s, i) => (
            <div
              key={s.label}
              className={`bg-white/[0.03] px-3 py-4 text-center ${i < 2 ? "border-r border-white/10" : ""}`}
            >
              <span className="block font-display text-2xl font-extrabold text-accent">{s.value}</span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-widest text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <ResultGroup title="Grid Framing" rows={grid} accent />
        <ResultGroup title="Hardware & Fasteners" rows={hardware} />
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
          <div className="bg-white/[0.04] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-white/50">
            Panels
          </div>
          <Row label="Panels (base count)" sub="Area ÷ panel size · matches manufacturer spec" value={r.fullPanels} />
          <Row
            label="Total Panels to Purchase"
            sub="Base count + waste + 3 pc buffer"
            value={r.totalPanels}
            accent
            last
          />
        </div>

        <p className="mt-5 text-xs text-white/40">
          Estimate for planning. Contact us for an exact material takeoff.
        </p>
        <Link
          href="/contact-us/"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-dark"
        >
          Get an exact quote <ArrowRight width={16} height={16} />
        </Link>
      </div>
    </div>
  );
}

function ResultGroup({
  title,
  rows,
  accent,
}: {
  title: string;
  rows: { label: string; sub: string; value: number; show?: boolean }[];
  accent?: boolean;
}) {
  const visible = rows.filter((r) => r.show !== false);
  return (
    <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
      <div className="bg-white/[0.04] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-white/50">
        {title}
      </div>
      {visible.map((r, i) => (
        <Row
          key={r.label}
          label={r.label}
          sub={r.sub}
          value={r.value}
          accent={accent}
          last={i === visible.length - 1}
        />
      ))}
    </div>
  );
}

function Row({
  label,
  sub,
  value,
  accent,
  last,
}: {
  label: string;
  sub: string;
  value: number;
  accent?: boolean;
  last?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 ${last ? "" : "border-b border-white/10"}`}>
      <div>
        <div className="text-sm text-white/80">{label}</div>
        <div className="text-[0.7rem] text-white/40">{sub}</div>
      </div>
      <div
        className={`ml-3 whitespace-nowrap font-display text-base font-bold ${
          accent ? "text-accent" : "text-white"
        }`}
      >
        {value.toLocaleString()} pcs
      </div>
    </div>
  );
}
