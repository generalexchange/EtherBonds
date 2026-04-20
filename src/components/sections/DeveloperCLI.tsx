"use client";

import { COPY } from "@/lib/copy";
import { sectionTransition, sectionViewport } from "@/lib/section-motion";
import { motion } from "framer-motion";

const checks = COPY.homepage.developerCLI.features;

export function DeveloperCLI() {
  const d = COPY.homepage.developerCLI;

  return (
    <section className="bg-charcoal-950 py-20 text-parchment-50 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={sectionTransition}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
              {d.label}
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight">
              {d.headline}
            </h2>
            <p className="mt-6 font-sans text-lg text-parchment-50/70">{d.body}</p>
            <ul className="mt-8 space-y-3 font-sans text-sm text-parchment-50/80">
              {checks.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-sage-500">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ ...sectionTransition, delay: 0.08 }}
            className="overflow-hidden rounded-lg border border-parchment-50/10 bg-charcoal-900 shadow-2xl"
            aria-label="EtherBonds CLI session"
          >
            <div className="flex items-center gap-2 border-b border-parchment-50/10 px-3 py-2">
              <span className="h-3 w-3 rounded-full bg-red-500/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-sage-500/70" aria-hidden />
              <span className="ml-2 font-mono text-[11px] text-parchment-50/50">
                {d.terminalTitle}
              </span>
            </div>
            <div className="max-h-[min(70vh,520px)] overflow-x-auto overflow-y-auto p-4 font-mono text-[13px] leading-[1.7] text-parchment-50">
              <TerminalBody />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerminalBody() {
  return (
    <>
      <p className="text-parchment-50">$ etherbonds status</p>
      <p className="mt-2 text-parchment-50/50">&nbsp;</p>
      <Row k="Repository" v="vercel/next.js" />
      <Row k="Instrument" v="0x7a9f...3f21" valueTone="umber" />
      <Row k="Tenor" v="60 months" />
      <Row k="Days active" v="287" />
      <p className="mt-3 text-parchment-50/50">&nbsp;</p>
      <Row k="Accrued yield" v="12,847.52 USDC" valueTone="sage" />
      <Row k="Next settlement" v="12 days" />
      <Row k="Settlement address" v="vercel.com" valueTone="umber" />
      <p className="mt-3 text-parchment-50/50">&nbsp;</p>
      <Row k="Metrics tracked" v="6" />
      <Row k="Last indexer update" v="42 seconds ago" />
      <p className="mt-4 text-parchment-50">$ etherbonds yield --projection 90d</p>
      <p className="mt-2 text-parchment-50/50">&nbsp;</p>
      <p className="text-parchment-50">Projected 90-day yield:</p>
      <Row k="Conservative" v="3,200 USDC" valueTone="sage" />
      <Row k="Baseline" v="4,100 USDC" valueTone="sage" />
      <Row k="Optimistic" v="5,400 USDC" valueTone="sage" />
      <p className="mt-3 text-parchment-50/60">
        Based on 287 days of historical data. Actual yield may vary.
      </p>
      <p className="mt-4 text-parchment-50">
        $ <span className="animate-blink-cursor">▍</span>
      </p>
    </>
  );
}

function Row({
  k,
  v,
  valueTone,
}: {
  k: string;
  v: string;
  valueTone?: "sage" | "umber";
}) {
  const dots = ".".repeat(Math.max(4, 28 - k.length));
  const valClass =
    valueTone === "sage"
      ? "text-sage-400"
      : valueTone === "umber"
        ? "text-umber-500"
        : "text-parchment-50";
  return (
    <p>
      <span className="text-parchment-50/70">{k}</span>{" "}
      <span className="text-parchment-50/20">{dots}</span>{" "}
      <span className={valClass}>{v}</span>
    </p>
  );
}
