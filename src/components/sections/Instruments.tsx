import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { TabularNumber } from "@/components/primitives/TabularNumber";
import { ThinRule } from "@/components/ui/ThinRule";
import { YIELDS } from "@/lib/constants";
import { COPY } from "@/lib/copy";
import Link from "next/link";

const yields = [YIELDS.twelve, YIELDS.thirtySix, YIELDS.sixty] as const;

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-end gap-2 font-mono text-[13px] text-navy-900">
      <span className="shrink-0 text-[12px] uppercase tracking-wide text-graphite-600">
        {label}
      </span>
      <span
        className="mb-1.5 min-w-[1rem] flex-1 border-b border-dotted border-navy-900/15"
        aria-hidden
      />
      <TabularNumber className="shrink-0 text-[13px]">{value}</TabularNumber>
    </div>
  );
}

export function Instruments() {
  return (
    <section
      id={COPY.instruments.id}
      className="bg-ivory-100 px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-eyebrow text-tiffany-700">
            {COPY.instruments.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-6">
          <SerifHeadline as="h2" level="section" className="text-navy-900">
            {COPY.instruments.headline}
          </SerifHeadline>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {COPY.instruments.cards.map((card, i) => {
            const y = yields[i];
            const featured = i === 2;
            return (
              <FadeIn key={card.tenor} delay={0.08 * (i + 2)}>
                <article
                  className={`flex h-full flex-col border bg-ivory-50 p-10 md:p-12 ${
                    featured
                      ? "border-tiffany-500"
                      : "border-navy-900/10"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-eyebrow text-graphite-600">
                    {card.tenor}
                  </p>
                  <p className="mt-6 font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-gold-500">
                    <TabularNumber>{y.toFixed(2)}%</TabularNumber>
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-eyebrow text-graphite-600">
                    {card.yieldLabel}
                  </p>
                  <ThinRule className="mt-8 text-navy-900" />
                  <div className="mt-8 flex flex-col gap-3">
                    {card.specs.map((s) => (
                      <SpecRow key={s.label} label={s.label} value={s.value} />
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link
                      href="#documentation"
                      className="text-sm text-navy-900 underline-offset-4 transition-colors hover:text-tiffany-700 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50"
                    >
                      {card.specLink} →
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
