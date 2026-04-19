import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/constants";
import { COPY } from "@/lib/copy";
import Link from "next/link";

export function Closing() {
  return (
    <section
      id="access"
      className="bg-parchment-50 px-6 py-32 text-center lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-closing">
        <FadeIn>
          <SerifHeadline as="h2" level="closing" className="text-charcoal-900">
            {COPY.closing.headlineLine1}
            <br />
            {COPY.closing.headlineLine2}
          </SerifHeadline>
        </FadeIn>
        <FadeIn delay={0.12} className="mt-10">
          <p className="text-[20px] leading-loose text-stone-800">
            {COPY.closing.body}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-12 flex justify-center">
          <ButtonLink href="#instruments" variant="filledNavy">
            {COPY.closing.cta}
          </ButtonLink>
        </FadeIn>
        <FadeIn delay={0.28} className="mt-8 text-xs text-stone-600">
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline-offset-4 transition-colors hover:text-charcoal-900 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-50"
          >
            {CONTACT_EMAIL}
          </Link>
          <span className="mx-2 text-stone-600/50">·</span>
          <span>{COPY.closing.finePrint}</span>
        </FadeIn>
      </div>
    </section>
  );
}
