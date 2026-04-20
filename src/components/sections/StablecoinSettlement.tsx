"use client";

import { COPY } from "@/lib/copy";
import { sectionTransition, sectionViewport } from "@/lib/section-motion";
import { motion } from "framer-motion";

export function StablecoinSettlement() {
  const s = COPY.homepage.stablecoinSettlement;
  const steps = s.flow;

  return (
    <section className="bg-parchment-200/40 py-20 text-charcoal-900 md:py-32">
      <div className="mx-auto max-w-[900px] px-6 md:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-sage-700">
            {s.label}
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight">
            {s.headline}
          </h2>
          <p className="mt-6 font-sans text-lg text-charcoal-900/70">{s.body}</p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ ...sectionTransition, delay: 0.06 }}
          aria-label="Settlement flow from repository to domain wallet"
        >
          {steps.map((step, i) => (
            <div key={step.node} className="flex flex-col items-center gap-2 md:flex-row">
              <div className="w-full min-w-[140px] max-w-xs rounded-md border border-charcoal-900/15 bg-parchment-50/80 p-4 text-center font-sans text-sm font-medium text-charcoal-900 md:max-w-none">
                {step.node}
              </div>
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center gap-1 px-2 md:flex-row">
                  {step.arrowLabel ? (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-900/50">
                      {step.arrowLabel}
                    </span>
                  ) : null}
                  <span className="text-lg text-sage-700" aria-hidden>
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.blockquote
          className="mt-12 rounded-lg border border-charcoal-900/10 border-l-4 border-l-sage-500 bg-charcoal-900/5 px-6 py-4 font-mono text-sm leading-relaxed text-charcoal-900/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ ...sectionTransition, delay: 0.1 }}
        >
          {s.quote}
        </motion.blockquote>
      </div>
    </section>
  );
}
