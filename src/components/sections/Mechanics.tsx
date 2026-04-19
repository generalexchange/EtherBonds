import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { COPY } from "@/lib/copy";

export function Mechanics() {
  return (
    <section
      id="mechanics"
      className="bg-navy-950 px-6 py-24 text-ivory-50 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-eyebrow text-tiffany-500">
            {COPY.mechanics.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-6">
          <SerifHeadline as="h2" level="section" className="text-ivory-50">
            {COPY.mechanics.headline}
          </SerifHeadline>
        </FadeIn>
        <FadeIn delay={0.16} className="mt-6 max-w-prose text-base text-ivory-50/70">
          {COPY.mechanics.subhead}
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
          {COPY.mechanics.steps.map((step, i) => (
            <FadeIn
              key={step.n}
              delay={0.08 * (i + 3)}
              className={`relative border-l border-ivory-50/20 pl-6 ${
                i === 0 ? "lg:border-l-0 lg:pl-0" : "lg:pl-8"
              }`}
            >
              <p className="font-serif text-4xl text-ivory-50/30 md:text-5xl">{step.n}</p>
              <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-ivory-50/80">
                {step.title}
              </p>
              <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-ivory-50/70">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.48} className="mt-16 max-w-[720px] text-sm italic text-ivory-50/60">
          {COPY.mechanics.footnote}
        </FadeIn>
      </div>
    </section>
  );
}
