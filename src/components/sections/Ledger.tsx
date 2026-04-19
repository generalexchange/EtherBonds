import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { TabularNumber } from "@/components/primitives/TabularNumber";
import { LEDGER_SNAPSHOT } from "@/lib/constants";
import { COPY } from "@/lib/copy";
import Link from "next/link";

function Row({
  left,
  leftVal,
  right,
  rightVal,
}: {
  left: string;
  leftVal: string;
  right: string;
  rightVal: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 border-b border-navy-900/10 py-3 text-sm text-navy-900 md:grid-cols-2 md:gap-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span>{left}</span>
        <TabularNumber className="text-navy-900">{leftVal}</TabularNumber>
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span>{right}</span>
        <TabularNumber className="text-navy-900">{rightVal}</TabularNumber>
      </div>
    </div>
  );
}

export function Ledger() {
  return (
    <section id="ledger" className="bg-ivory-50 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <FadeIn>
          <SerifHeadline as="h2" level="section" className="text-navy-900">
            {COPY.ledger.headline}
          </SerifHeadline>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 border border-navy-900/10 bg-ivory-100 p-6 md:p-8">
          <div className="flex flex-col gap-2 text-xs uppercase tracking-eyebrow text-graphite-600 md:flex-row md:items-center md:justify-between">
            <span>{COPY.ledger.title}</span>
            <TabularNumber className="text-graphite-600">
              BLOCK {LEDGER_SNAPSHOT.block} · {LEDGER_SNAPSHOT.timeGmt}
            </TabularNumber>
          </div>
          <div className="mt-4 h-px w-full bg-navy-900/10" />
          <div className="mt-2">
            {COPY.ledger.rows.map((r) => (
              <Row
                key={r.left}
                left={r.left}
                leftVal={r.leftVal}
                right={r.right}
                rightVal={r.rightVal}
              />
            ))}
          </div>
          <div className="mt-4 h-px w-full bg-navy-900/10" />
          <p className="mt-4 font-mono text-xs text-graphite-600">
            <Link
              href="#ledger"
              className="text-navy-900 underline-offset-4 transition-colors hover:text-tiffany-700 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50"
            >
              {COPY.ledger.footer}
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
