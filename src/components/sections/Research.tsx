import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { COPY } from "@/lib/copy";
import Link from "next/link";

export function Research() {
  return (
    <section id="research" className="bg-parchment-50 px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[900px]">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-eyebrow text-sage-700">
            {COPY.research.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-6">
          <SerifHeadline as="h2" level="section" className="text-charcoal-900">
            {COPY.research.headline}
          </SerifHeadline>
        </FadeIn>
        <FadeIn delay={0.16} className="mt-6 text-base leading-relaxed text-stone-800">
          {COPY.research.body}
        </FadeIn>
        <FadeIn delay={0.24} className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <Link
            href="#documentation"
            className="text-sm text-charcoal-900 underline-offset-4 transition-colors hover:text-sage-700 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-50"
          >
            {COPY.research.whitepaper} →
          </Link>
          <Link
            href="#research"
            className="text-sm text-charcoal-900 underline-offset-4 transition-colors hover:text-sage-700 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-50"
          >
            {COPY.research.publications} →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
