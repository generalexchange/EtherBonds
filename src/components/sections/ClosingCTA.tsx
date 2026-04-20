"use client";

import { COPY } from "@/lib/copy";
import { sectionTransition, sectionViewport } from "@/lib/section-motion";
import { motion } from "framer-motion";
import { CopyMark, GitHubMark } from "@/components/ui/BrandIcons";
import { useCallback, useState } from "react";

export function ClosingCTA() {
  const c = COPY.homepage.closingCTA;
  const [copied, setCopied] = useState(false);
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText("npm i @etherbonds/sdk");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="bg-charcoal-950 py-24 text-parchment-50 md:py-40">
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center md:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={sectionViewport}
        transition={sectionTransition}
      >
        <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
          {c.label}
        </p>
        <h2 className="mt-6 font-serif text-[clamp(2.5rem,8vw,6rem)] font-normal leading-[1] tracking-tight">
          {c.headlineLine1}
          <br />
          {c.headlineLine2}
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-lg text-parchment-50/70">
          {c.sub}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-sage-500 px-6 py-3 font-sans font-medium text-charcoal-950 shadow-lg transition hover:bg-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
          >
            <GitHubMark className="h-5 w-5" />
            {c.ctaPrimary}
          </a>
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-2 rounded-md border border-parchment-50/20 bg-charcoal-900 px-5 py-3 font-mono text-sm text-parchment-50 transition hover:border-parchment-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
          >
            {c.ctaSecondary}
            <CopyMark className="h-4 w-4 text-parchment-50/50" />
            <span className="sr-only">{copied ? "Copied" : "Copy install command"}</span>
          </button>
        </div>
        <p className="mt-10 font-mono text-xs text-parchment-50/40">{c.footnote}</p>
      </motion.div>
    </section>
  );
}
