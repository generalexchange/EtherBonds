"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  COPYRIGHT_TEXT,
  DISCLOSURE_TEXT,
  FOOTER_COLUMNS,
  VERSION_TEXT,
} from "@/lib/footer-links";
import { LiveBlock } from "./LiveBlock";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950";

export default function FullFooter() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      role="contentinfo"
      className="bg-charcoal-950 py-24 text-parchment-50 md:py-32"
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-[32px] tracking-tight text-parchment-50">
            ETHERBONDS
          </h2>
          <p className="mt-2 text-[14px] uppercase tracking-[0.2em] text-parchment-50/60">
            Infrastructure as Pension
          </p>
        </div>

        <hr className="mb-16 border-0 border-t border-parchment-50/10" />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-6 font-sans text-[11px] uppercase tracking-[0.12em] text-parchment-50/50">
                {column.title}
              </h3>
              <ul className="space-y-1.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}-${link.label}`}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block py-1.5 text-[14px] text-parchment-50/80 transition-colors duration-200 hover:text-parchment-50 ${linkFocus}`}
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className="ml-1 text-[10px] text-parchment-50/30 transition-colors group-hover:text-parchment-50/60"
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block py-1.5 text-[14px] text-parchment-50/80 transition-colors duration-200 hover:text-parchment-50 ${linkFocus}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="mb-12 mt-16 border-0 border-t border-parchment-50/10" />

        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <span className="font-mono text-[12px] text-parchment-50/60 tabular-nums">
            {VERSION_TEXT}
          </span>
          <LiveBlock />
        </div>

        <hr className="mb-8 border-0 border-t border-parchment-50/10" />

        <div className="max-w-4xl">
          <p className="text-[11px] leading-relaxed text-parchment-50/40">
            {DISCLOSURE_TEXT}
          </p>
          <p className="mt-4 text-[10px] text-parchment-50/30">
            {COPYRIGHT_TEXT}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
