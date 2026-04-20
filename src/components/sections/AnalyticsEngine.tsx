"use client";

import { COPY } from "@/lib/copy";
import {
  sectionTransition,
  sectionViewport,
  staggerChild,
  staggerParent,
} from "@/lib/section-motion";
import { motion } from "framer-motion";

export function AnalyticsEngine() {
  const a = COPY.homepage.analyticsEngine;

  return (
    <section className="bg-charcoal-950 py-20 text-parchment-50 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition}
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
            {a.label}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3rem)] leading-tight">
            {a.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-parchment-50/60">
            {a.subhead}
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={staggerParent}
        >
          {a.cards.map((card) => (
            <motion.article
              key={card.title}
              variants={staggerChild}
              className="rounded-lg border border-parchment-50/10 bg-parchment-50/5 p-6 transition-colors duration-200 hover:border-sage-500/30"
            >
              <h3 className="font-serif text-xl text-parchment-50">{card.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-parchment-50/70">
                {card.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
