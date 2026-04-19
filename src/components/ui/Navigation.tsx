import { COPY } from "@/lib/copy";
import Link from "next/link";

export function Navigation() {
  const baseBtn =
    "inline-flex items-center justify-center border px-4 py-2 text-[11px] uppercase tracking-cta transition-[color,background-color,border-color,transform] duration-200 ease-institutional hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-50 rounded-lg";

  return (
    <header className="relative z-10 border-b border-charcoal-900/10 bg-parchment-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-3 sm:px-6 lg:px-10"
      >
        <Link
          href="/"
          className="font-serif text-[18px] tracking-wide text-charcoal-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-50 sm:text-[20px]"
        >
          {COPY.brand.wordmark}
        </Link>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:flex-1 sm:justify-center lg:gap-6">
          {COPY.nav.links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[12px] uppercase tracking-nav text-stone-600 transition-colors duration-200 hover:text-charcoal-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-50 lg:text-[13px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <Link
            href="#ledger"
            className={`${baseBtn} border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900/5`}
          >
            {COPY.nav.viewLedger}
          </Link>
          <Link
            href="#access"
            className={`${baseBtn} border-charcoal-900 bg-charcoal-900 text-parchment-50 hover:bg-charcoal-700`}
          >
            {COPY.nav.accessProtocol}
          </Link>
        </div>
      </nav>
    </header>
  );
}
