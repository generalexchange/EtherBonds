"use client";

import { COPY } from "@/lib/copy";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell = scrolled
    ? "bg-ivory-50/95 backdrop-blur-sm border-b border-navy-900/10"
    : "bg-transparent border-b border-transparent";

  const brand = scrolled
    ? "text-navy-900 focus-visible:ring-offset-ivory-50"
    : "text-ivory-50 focus-visible:ring-offset-navy-950";

  const link = scrolled
    ? "text-graphite-600 hover:text-navy-900 focus-visible:ring-offset-ivory-50"
    : "text-ivory-50/80 hover:text-ivory-50 focus-visible:ring-offset-navy-950";

  const ghostBtn = scrolled
    ? "border-navy-900 text-navy-900 hover:bg-navy-900/5 focus-visible:ring-offset-ivory-50"
    : "border-ivory-50/40 text-ivory-50 hover:bg-ivory-50/10 focus-visible:ring-offset-navy-950";

  const filledBtn = scrolled
    ? "border-navy-900 bg-navy-900 text-ivory-50 hover:bg-navy-700 focus-visible:ring-offset-ivory-50"
    : "border-ivory-50 bg-ivory-50 text-navy-950 hover:bg-ivory-100 focus-visible:ring-offset-navy-950";

  const icon = open || scrolled ? "text-navy-900" : "text-ivory-50";

  const baseBtn =
    "inline-flex items-center justify-center border px-5 py-2.5 text-[11px] uppercase tracking-cta transition-[color,background-color,border-color,transform] duration-200 ease-institutional hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 focus-visible:ring-offset-2 rounded-none";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${shell}`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 lg:px-10"
      >
        <Link
          href="/"
          className={`font-serif text-[20px] tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 ${brand}`}
        >
          {COPY.brand.wordmark}
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-8">
            {COPY.nav.links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-[13px] uppercase tracking-nav transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 ${link}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#ledger"
            className={`${baseBtn} ${ghostBtn}`}
          >
            {COPY.nav.viewLedger}
          </Link>
          <Link
            href="#access"
            className={`${baseBtn} ${filledBtn}`}
          >
            {COPY.nav.accessProtocol}
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center transition-colors ${icon} focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 focus-visible:ring-offset-2 ${
            scrolled
              ? "focus-visible:ring-offset-ivory-50"
              : "focus-visible:ring-offset-navy-950"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? COPY.nav.menuClose : COPY.nav.menuOpen}
          </span>
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.25} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.25} />
          )}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? "pointer-events-auto max-h-[480px] border-b border-navy-900/10 opacity-100" : "pointer-events-none max-h-0 opacity-0"} overflow-hidden bg-ivory-50/98 transition-[max-height,opacity] duration-300 ease-institutional`}
      >
        <div className="flex flex-col gap-6 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {COPY.nav.links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-[13px] uppercase tracking-nav text-graphite-600 transition-colors hover:text-navy-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-navy-900/10 pt-4">
            <Link
              href="#ledger"
              onClick={() => setOpen(false)}
              className={`${baseBtn} border-navy-900 text-navy-900 hover:bg-navy-900/5 focus-visible:ring-offset-ivory-50`}
            >
              {COPY.nav.viewLedger}
            </Link>
            <Link
              href="#access"
              onClick={() => setOpen(false)}
              className={`${baseBtn} border-navy-900 bg-navy-900 text-ivory-50 hover:bg-navy-700 focus-visible:ring-offset-ivory-50`}
            >
              {COPY.nav.accessProtocol}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
