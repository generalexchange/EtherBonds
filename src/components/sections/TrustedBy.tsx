"use client";

import { COPY } from "@/lib/copy";
import { sectionTransition, sectionViewport } from "@/lib/section-motion";
import { motion } from "framer-motion";

export function TrustedBy() {
  const t = COPY.homepage.trustedBy;

  return (
    <section className="border-b border-parchment-50/10 bg-charcoal-900 py-16 text-parchment-50 md:py-20">
      <motion.div
        className="mx-auto max-w-[1400px] px-6 text-center md:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-parchment-50/40">
          {t.label}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 font-mono text-sm text-parchment-50/50">
          {t.names.map((name, i) => (
            <span key={name} className="inline-flex items-center gap-x-2">
              {i > 0 && (
                <span aria-hidden className="text-parchment-50/25">
                  ·
                </span>
              )}
              <span className="transition-colors hover:text-parchment-50">{name}</span>
            </span>
          ))}
        </div>
        <hr className="mx-auto mt-10 max-w-3xl border-0 border-t border-parchment-50/10" />
        <p className="mt-6 text-center text-[11px] text-parchment-50/35">
          {t.caption}
        </p>
      </motion.div>
    </section>
  );
}
