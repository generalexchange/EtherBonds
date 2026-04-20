"use client";

import { COPY } from "@/lib/copy";
import { sectionEase } from "@/lib/section-motion";
import { motion, useReducedMotion } from "framer-motion";
import { GitHubMark } from "@/components/ui/BrandIcons";
import Link from "next/link";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";

const yamlLines = [
  "# .etherbonds/instrument.yml",
  "",
  "repository:",
  "  name: next.js",
  "  owner: vercel",
  "  visibility: public",
  "",
  "instrument:",
  "  type: repository_bond",
  "  tenor: 60_months",
  "  yield_source: analytics",
  "",
  "metrics_tracked:",
  "  - commits_per_week",
  "  - stars_delta",
  "  - downstream_installs",
  "  - forks_active",
  "",
  "settlement:",
  "  address: vercel.com",
  "  registrar: namecheap",
  "  currency: USDC",
  "  cadence: monthly",
  "",
  "status: ACTIVE",
  "last_settlement: 2025-01-15T00:00:00Z",
  "next_settlement: 2025-02-15T00:00:00Z",
  "accrued_yield: 2,847.52 USDC",
] as const;

function highlightYamlLine(line: string) {
  if (line.startsWith("#")) {
    return <span className="text-parchment-50/40">{line}</span>;
  }
  if (line.includes("USDC") || /T\d{2}:\d{2}:\d{2}Z/.test(line)) {
    const parts = line.split(/(\d[\d,.]*\s*USDC|\d{4}-\d{2}-\d{2}T[\d:Z]+)/g);
    return (
      <span>
        {parts.map((part, i) =>
          /\d/.test(part) && (part.includes("USDC") || part.includes("T")) ? (
            <span key={i} className="text-umber-500">
              {part}
            </span>
          ) : (
            <span key={i} className="text-sage-300">
              {part}
            </span>
          ),
        )}
      </span>
    );
  }
  if (line.trim().startsWith("-")) {
    return <span className="text-sage-300">{line}</span>;
  }
  if (line.includes(":")) {
    const idx = line.indexOf(":");
    return (
      <span>
        <span className="text-parchment-50">{line.slice(0, idx)}</span>
        <span className="text-parchment-50/50">:{line.slice(idx + 1)}</span>
      </span>
    );
  }
  return <span className="text-parchment-50/90">{line}</span>;
}

function CopyHint({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, [value]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className="group relative inline-flex items-center gap-2 font-mono text-xs text-parchment-50/40 transition-colors hover:text-parchment-50/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
    >
      <span>{children}</span>
      <span className="pointer-events-none absolute -right-1 top-1/2 -translate-y-1/2 translate-x-full whitespace-nowrap pl-2 text-[10px] text-sage-400 opacity-0 transition-opacity group-hover:opacity-100">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

export function Hero() {
  const h = COPY.homepage.hero;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="protocol"
      className="relative min-h-[90vh] overflow-hidden bg-charcoal-950 py-16 text-parchment-50 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,245,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,241,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[480px] w-[480px] -translate-y-1/2 translate-x-1/4 rounded-full bg-sage-500/20 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
              {h.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-serif text-[clamp(2.25rem,7vw,6rem)] font-normal leading-[1.05] tracking-tight text-parchment-50"
            >
              {h.headlineLine1}
              <br />
              {h.headlineLine2}
              <br />
              {h.headlineLine3}{" "}
              <span className="text-sage-500">{h.headlineAccent}</span>
            </h1>
            <p className="mt-8 max-w-[560px] font-sans text-lg text-parchment-50/70 md:text-xl">
              {h.subhead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="https://github.com"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-sage-500 px-6 py-3 font-sans font-medium text-charcoal-950 shadow-lg transition hover:bg-sage-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
              >
                <GitHubMark className="h-5 w-5" />
                {h.ctaPrimary}
              </a>
              <Link
                href="https://docs.etherbonds.com"
                className="inline-flex items-center justify-center rounded-md border border-parchment-50/20 bg-transparent px-6 py-3 font-sans font-medium text-parchment-50 transition hover:border-parchment-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
              >
                {h.ctaSecondary}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-parchment-50/40">
              <CopyHint value="npm install @etherbonds/sdk">{h.cliRow.npm}</CopyHint>
              <span aria-hidden className="text-parchment-50/20">
                ·
              </span>
              <CopyHint value="curl -fsSL etherbonds.sh | sh">{h.cliRow.curl}</CopyHint>
              <span aria-hidden className="text-parchment-50/20">
                ·
              </span>
              <a
                href="https://github.com/etherbonds"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-parchment-50/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
              >
                {h.cliRow.github}
              </a>
            </div>
            <p className="sr-only">
              Copy commands: npm install @etherbonds/sdk, or curl installer script.
            </p>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              className="origin-top-right lg:-rotate-1"
              initial={false}
              aria-label="Example instrument configuration in a code editor"
            >
              <div className="relative rounded-lg border border-parchment-50/10 bg-charcoal-900/90 shadow-2xl shadow-sage-500/15">
                <div className="flex items-center gap-2 border-b border-parchment-50/10 px-4 py-3">
                  <span aria-hidden className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span aria-hidden className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span aria-hidden className="h-3 w-3 rounded-full bg-sage-500/80" />
                  <span className="ml-2 font-mono text-xs text-parchment-50/70">
                    {h.mockup.repo}
                  </span>
                  <span className="ml-auto flex items-center gap-1 font-mono text-[11px] text-sage-400">
                    <span className="h-1.5 w-1.5 animate-live-dot rounded-full bg-sage-500" />
                    {h.mockup.branch}
                  </span>
                </div>
                <pre className="max-h-[min(60vh,520px)] overflow-x-auto overflow-y-auto p-4 font-mono text-[12px] leading-relaxed md:text-[13px]">
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: reduceMotion ? 0 : 0.04,
                        },
                      },
                    }}
                  >
                    {yamlLines.map((line, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 6 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, ease: sectionEase },
                          },
                        }}
                      >
                        {line === "" ? (
                          <br />
                        ) : (
                          <div className="whitespace-pre-wrap">
                            {highlightYamlLine(line)}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <hr className="absolute bottom-0 left-0 right-0 border-0 border-t border-parchment-50/10" />
    </section>
  );
}
