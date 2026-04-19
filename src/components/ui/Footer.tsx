import { CONTACT_EMAIL } from "@/lib/constants";
import { COPY } from "@/lib/copy";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 px-6 py-16 text-parchment-50 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="font-serif text-sm tracking-wide">{COPY.brand.wordmark}</p>
          <p className="mt-3 max-w-[14rem] text-xs leading-relaxed text-parchment-50/60">
            {COPY.footer.tagline}
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-parchment-50/50">
            {COPY.footer.columns.protocol.title}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {COPY.footer.columns.protocol.links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-parchment-50/80 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-parchment-50/50">
            {COPY.footer.columns.governance.title}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {COPY.footer.columns.governance.links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-parchment-50/80 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-parchment-50/50">
            {COPY.footer.columns.research.title}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {COPY.footer.columns.research.links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-parchment-50/80 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-parchment-50/50">
            {COPY.footer.columns.contact.title}
          </p>
          <p className="mt-4 text-sm">
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-parchment-50/80 transition-colors hover:text-parchment-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
            >
              {COPY.footer.columns.contact.email}
            </Link>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1200px] border-t border-parchment-50/10 pt-8 text-[11px] leading-relaxed text-parchment-50/40">
        <p>{COPY.footer.disclaimer}</p>
        <p className="mt-4 text-parchment-50/50">{COPY.footer.version}</p>
      </div>
    </footer>
  );
}
