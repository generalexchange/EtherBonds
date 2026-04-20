"use client";

import { COPY } from "@/lib/copy";
import {
  sectionTransition,
  sectionViewport,
  staggerChild,
  staggerParent,
} from "@/lib/section-motion";
import { motion } from "framer-motion";

const gradients = [
  "bg-[radial-gradient(ellipse_at_top_left,rgba(74,124,89,0.25),transparent_55%)]",
  "bg-[radial-gradient(ellipse_at_top_right,rgba(139,111,71,0.22),transparent_55%)]",
  "bg-[radial-gradient(ellipse_at_bottom,rgba(26,26,24,0.45),transparent_60%)]",
] as const;

const labelTone = ["text-sage-600", "text-umber-600", "text-charcoal-900/55"] as const;

export function UseCases() {
  const u = COPY.homepage.useCases;

  return (
    <section className="bg-parchment-100 py-20 text-charcoal-900 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-sage-700">
            {u.label}
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight">
            {u.headline}
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={staggerParent}
        >
          {u.cards.map((card, i) => (
            <motion.article
              key={card.label}
              variants={staggerChild}
              className="group flex aspect-[3/4] flex-col overflow-hidden rounded-xl border border-charcoal-900/10 bg-parchment-50 shadow-lg transition-colors hover:border-sage-500/30"
            >
              <div
                className={`relative h-[60%] ${gradients[i]} bg-parchment-200/30`}
                aria-hidden
              >
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(44,44,42,0.08) 12px, rgba(44,44,42,0.08) 13px)",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col bg-parchment-50/95 p-6">
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.2em] ${labelTone[i]}`}
                >
                  {card.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug">{card.headline}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal-900/70">
                  {card.body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
