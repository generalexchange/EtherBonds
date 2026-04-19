import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { COPY } from "@/lib/copy";
import Link from "next/link";

export function Governance() {
  return (
    <section id="governance" className="bg-parchment-100 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <SerifHeadline as="h2" level="section" className="text-charcoal-900">
            {COPY.governance.headline}
          </SerifHeadline>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[17px] leading-relaxed text-charcoal-900">
            {COPY.governance.body}
          </p>
          <Link
            href="#governance"
            className="mt-6 inline-block text-sm text-charcoal-900 underline-offset-4 transition-colors hover:text-sage-700 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-100"
          >
            {COPY.governance.link} →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
