import { FadeIn } from "@/components/primitives/FadeIn";
import { SerifHeadline } from "@/components/primitives/SerifHeadline";
import { COPY } from "@/lib/copy";

export function Thesis() {
  return (
    <section className="bg-ivory-50 px-6 pb-24 pt-40 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-eyebrow text-tiffany-700">
            {COPY.thesis.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-6">
          <SerifHeadline as="h2" level="section" className="text-navy-900">
            {COPY.thesis.headlineLine1}
            <br />
            {COPY.thesis.headlineLine2}
          </SerifHeadline>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 lg:col-span-7">
            {COPY.thesis.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={0.08 * (i + 2)}>
                <p
                  className={
                    i === 1
                      ? "text-[19px] font-medium leading-relaxed text-navy-900"
                      : "text-[19px] leading-relaxed text-navy-900"
                  }
                >
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.32} className="lg:col-span-5">
            <blockquote className="font-serif text-[1.5rem] italic leading-snug text-graphite-600 md:text-[28px]">
              <span className="not-italic" aria-hidden>
                &ldquo;
              </span>
              {COPY.thesis.pullQuote.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              <span className="not-italic" aria-hidden>
                &rdquo;
              </span>
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-eyebrow text-graphite-600">
              {COPY.thesis.pullQuote.attribution}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
