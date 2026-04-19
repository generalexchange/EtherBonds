import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { COPY } from "@/lib/copy";
import Link from "next/link";

export function Security() {
  return (
    <section id="security" className="bg-charcoal-950 px-6 py-24 text-parchment-50 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-eyebrow text-sage-500">
            {COPY.security.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-6">
          <SerifHeadline as="h2" level="section" className="text-parchment-50">
            {COPY.security.headline}
          </SerifHeadline>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-parchment-50/10 pt-12 md:grid-cols-3 md:gap-10">
          {COPY.security.columns.map((col, i) => (
            <FadeIn key={col.firm} delay={0.08 * (i + 2)}>
              <p className="text-xs uppercase tracking-eyebrow text-parchment-50/60">
                {col.firm}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-parchment-50/80">
                {col.report}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-parchment-50/70">
                {col.summary}
              </p>
              <Link
                href="#research"
                className="mt-6 inline-block text-sm text-parchment-50 underline-offset-4 transition-colors hover:text-sage-300 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
              >
                {col.cta} →
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
