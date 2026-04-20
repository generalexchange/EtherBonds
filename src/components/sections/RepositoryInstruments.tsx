"use client";

import { COPY } from "@/lib/copy";
import { sectionTransition, sectionViewport } from "@/lib/section-motion";
import Link from "next/link";
import { motion } from "framer-motion";

function Sparkline() {
  const d =
    "M 0 40 Q 40 35 80 28 T 160 18 T 240 12 T 320 8 L 320 48 L 0 48 Z";
  const stroke = "M 0 40 Q 40 35 80 28 T 160 18 T 240 12 T 320 8";
  return (
    <svg
      viewBox="0 0 320 48"
      className="h-24 w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a7c59" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4a7c59" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={d} fill="url(#sparkFill)" />
      <path
        d={stroke}
        fill="none"
        stroke="#4a7c59"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function RepositoryInstruments() {
  const r = COPY.homepage.repositoryInstruments;

  return (
    <section className="bg-parchment-100 py-20 text-charcoal-900 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={sectionTransition}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-sage-700">
              {r.label}
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight">
              {r.headline}
            </h2>
            <p className="mt-6 font-sans text-lg text-charcoal-900/70">{r.body}</p>
            <div className="mt-8 divide-y divide-charcoal-900/10 border-y border-charcoal-900/10">
              {r.tenors.map((row) => (
                <div key={row.label} className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="font-mono text-xs uppercase tracking-wider text-sage-800">
                    {row.label}
                  </span>
                  <p className="font-sans text-sm text-charcoal-900/75">{row.text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/instruments"
              className="mt-6 inline-block font-sans text-sm text-sage-700 underline-offset-4 transition hover:text-sage-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-100"
            >
              {r.cta}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ ...sectionTransition, delay: 0.08 }}
            className="overflow-hidden rounded-xl border border-charcoal-900/10 bg-parchment-50 shadow-2xl"
            aria-label="Repository performance dashboard mockup"
          >
            <div className="flex items-center justify-between border-b border-charcoal-900/10 px-4 py-3 font-mono text-xs text-charcoal-900/70">
              <span>{r.dashboard.breadcrumb}</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-live-dot rounded-full bg-sage-500" />
                {r.dashboard.live}
                <span className="text-charcoal-900/40">⋯</span>
              </span>
            </div>
            <div className="space-y-4 p-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {r.dashboard.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-charcoal-900/10 bg-parchment-100/80 p-3"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-charcoal-900/50">
                      {m.label}
                    </p>
                    <p className="mt-1 font-mono text-lg tabular-nums text-charcoal-900">
                      {m.value}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-sage-700">{m.sub}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-charcoal-900/10 bg-parchment-100/60 p-2">
                <Sparkline />
              </div>
              <ul className="space-y-3 border-t border-charcoal-900/10 pt-3">
                {r.dashboard.feed.map((item) => (
                  <li
                    key={item.time + item.line}
                    className="flex items-start gap-2 font-mono text-[12px] text-charcoal-900/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500" />
                    <span className="flex-1">{item.line}</span>
                    <span className="shrink-0 text-charcoal-900/40">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
