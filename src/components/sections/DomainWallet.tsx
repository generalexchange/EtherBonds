"use client";

import { COPY } from "@/lib/copy";
import { sectionTransition, sectionViewport } from "@/lib/section-motion";
import Link from "next/link";
import { motion } from "framer-motion";

export function DomainWallet() {
  const d = COPY.homepage.domainWallet;
  const w = d.wallet;

  return (
    <section className="bg-charcoal-900 py-20 text-parchment-50 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={sectionTransition}
            className="order-2 lg:order-1"
          >
            <div
              className="overflow-hidden rounded-xl border border-parchment-50/10 bg-charcoal-950/80 p-6 shadow-2xl animate-border-pulse-sage"
              aria-label="Domain wallet balance mockup"
            >
              <p className="font-mono text-sm text-parchment-50/70">{w.title}</p>
              <p className="mt-4 font-mono text-[56px] font-normal leading-none tabular-nums tracking-tight text-parchment-50">
                {w.balance}
              </p>
              <p className="mt-2 font-mono text-xs text-parchment-50/50">
                {w.balanceLabel}
              </p>
              <div className="mt-8 space-y-2 border-t border-parchment-50/10 pt-4 font-mono text-sm tabular-nums">
                {w.earnings.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 text-parchment-50/80">
                    <span>{row.label}</span>
                    <span className="text-sage-300">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-parchment-50/10 pt-4 font-mono text-xs">
                <p className="text-parchment-50/50">Linked Repositories</p>
                {w.repos.map((repo) => (
                  <div
                    key={repo.name}
                    className="flex flex-wrap items-center justify-between gap-2 text-parchment-50/85"
                  >
                    <span>{repo.name}</span>
                    <span className="text-sage-400">● {repo.status}</span>
                    <span className="text-umber-400 tabular-nums">{repo.mo}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-parchment-50/10 pt-4">
                <button
                  type="button"
                  className="rounded-md border border-parchment-50/20 px-4 py-2 font-sans text-sm text-parchment-50 transition hover:bg-parchment-50/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
                >
                  {w.withdraw}
                </button>
                <button
                  type="button"
                  className="rounded-md border border-parchment-50/20 px-4 py-2 font-sans text-sm text-parchment-50 transition hover:bg-parchment-50/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
                >
                  {w.configure}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ ...sectionTransition, delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
              {d.label}
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight">
              {d.headline}
            </h2>
            <p className="mt-6 font-sans text-lg text-parchment-50/70">{d.body}</p>
            <p className="mt-4 font-sans text-base text-parchment-50/60">{d.subbody}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {d.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-parchment-50/15 bg-parchment-50/5 px-3 py-1 font-sans text-xs text-parchment-50/80"
                >
                  {pill}
                </span>
              ))}
            </div>
            <Link
              href="/providers"
              className="mt-8 inline-block font-sans text-sm text-sage-400 underline-offset-4 transition hover:text-sage-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900"
            >
              {d.cta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
