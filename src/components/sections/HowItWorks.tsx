"use client";

import { COPY } from "@/lib/copy";
import {
  sectionTransition,
  sectionViewport,
  staggerChild,
  staggerParent,
} from "@/lib/section-motion";
import { motion } from "framer-motion";

export function HowItWorks() {
  const s = COPY.homepage.howItWorks;

  return (
    <section className="bg-charcoal-950 py-20 text-parchment-50 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
            {s.label}
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,5vw,4rem)] leading-tight tracking-tight">
            {s.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-parchment-50/60">
            {s.subhead}
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={staggerParent}
        >
          <motion.article
            variants={staggerChild}
            className="flex h-full flex-col rounded-xl border border-parchment-50/10 bg-charcoal-900/60 p-8"
          >
            <span className="font-mono text-sm text-parchment-50/40">{s.steps[0].n}</span>
            <h3 className="mt-4 font-serif text-2xl">{s.steps[0].title}</h3>
            <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-parchment-50/70">
              {s.steps[0].body}
            </p>
            <div
              className="mt-6 h-[180px] overflow-hidden rounded-lg border border-parchment-50/10 bg-charcoal-950 p-3 font-mono text-[11px]"
              aria-label="GitHub OAuth consent mockup"
            >
              <p className="text-parchment-50/50">Grant access</p>
              <ul className="mt-3 space-y-2">
                {s.steps[0].oauthRepos.map((repo) => (
                  <li key={repo} className="flex items-center gap-2 text-parchment-50/80">
                    <span className="h-3 w-3 rounded border border-parchment-50/30" />
                    {repo}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.article
            variants={staggerChild}
            className="flex h-full flex-col rounded-xl border border-parchment-50/10 bg-charcoal-900/60 p-8"
          >
            <span className="font-mono text-sm text-parchment-50/40">{s.steps[1].n}</span>
            <h3 className="mt-4 font-serif text-2xl">{s.steps[1].title}</h3>
            <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-parchment-50/70">
              {s.steps[1].body}
            </p>
            <div
              className="mt-6 h-[180px] overflow-hidden rounded-lg border border-parchment-50/10 bg-charcoal-950 p-3 font-mono text-[11px]"
              aria-label="Registrar connection mockup"
            >
              <p className="text-parchment-50/60">Domain settings</p>
              <p className="mt-6 text-parchment-50/90">{s.steps[1].domainLine}</p>
            </div>
          </motion.article>

          <motion.article
            variants={staggerChild}
            className="flex h-full flex-col rounded-xl border border-parchment-50/10 bg-charcoal-900/60 p-8"
          >
            <span className="font-mono text-sm text-parchment-50/40">{s.steps[2].n}</span>
            <h3 className="mt-4 font-serif text-2xl">{s.steps[2].title}</h3>
            <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-parchment-50/70">
              {s.steps[2].body}
            </p>
            <pre
              className="mt-6 h-[180px] overflow-auto rounded-lg border border-parchment-50/10 bg-charcoal-950 p-3 font-mono text-[10px] leading-relaxed text-parchment-50/80"
              aria-label="CLI issuance output"
            >
              {s.steps[2].terminalLines.join("\n")}
            </pre>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
