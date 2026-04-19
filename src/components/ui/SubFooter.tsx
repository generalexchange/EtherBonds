import Link from "next/link";
import { DISCLOSURE_TEXT, VERSION_TEXT } from "@/lib/footer-links";
import { LiveBlock } from "./LiveBlock";

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950";

export default function SubFooter() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-parchment-50/10 bg-charcoal-950"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Link
            href="/"
            className={`group ${linkFocus}`}
          >
            <span className="font-serif text-[20px] tracking-tight text-parchment-50 transition-colors duration-200 group-hover:text-sage-500">
              ETHERBONDS
            </span>
          </Link>
          <LiveBlock />
        </div>

        <hr className="mb-8 border-0 border-t border-parchment-50/10" />

        <nav
          aria-label="Essential links"
          className="mb-8 flex flex-wrap gap-x-6 gap-y-2"
        >
          <Link
            href="/instruments"
            className={`text-[12px] uppercase tracking-[0.1em] text-parchment-50/60 transition-colors hover:text-parchment-50 ${linkFocus}`}
          >
            Instruments
          </Link>
          <Link
            href="/governance"
            className={`text-[12px] uppercase tracking-[0.1em] text-parchment-50/60 transition-colors hover:text-parchment-50 ${linkFocus}`}
          >
            Governance
          </Link>
          <Link
            href="/research/whitepaper.pdf"
            className={`text-[12px] uppercase tracking-[0.1em] text-parchment-50/60 transition-colors hover:text-parchment-50 ${linkFocus}`}
          >
            Whitepaper
          </Link>
          <a
            href="https://github.com/etherbonds"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[12px] uppercase tracking-[0.1em] text-parchment-50/60 transition-colors hover:text-parchment-50 ${linkFocus}`}
          >
            GitHub{" "}
            <span aria-hidden="true" className="text-parchment-50/30">
              ↗
            </span>
          </a>
          <Link
            href="/legal/terms"
            className={`text-[12px] uppercase tracking-[0.1em] text-parchment-50/60 transition-colors hover:text-parchment-50 ${linkFocus}`}
          >
            Terms
          </Link>
          <Link
            href="/legal/privacy"
            className={`text-[12px] uppercase tracking-[0.1em] text-parchment-50/60 transition-colors hover:text-parchment-50 ${linkFocus}`}
          >
            Privacy
          </Link>
          <a
            href="mailto:mail@etherbonds.com"
            className={`text-[12px] uppercase tracking-[0.1em] text-parchment-50/60 transition-colors hover:text-parchment-50 ${linkFocus}`}
          >
            mail@etherbonds.com
          </a>
        </nav>

        <p className="mb-6 font-mono text-[11px] text-parchment-50/40 tabular-nums">
          {VERSION_TEXT}
        </p>

        <p className="max-w-4xl text-[10px] leading-relaxed text-parchment-50/30">
          {DISCLOSURE_TEXT}
        </p>
      </div>
    </footer>
  );
}
