import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "ghostNavy" | "filledNavy" | "filledTiffany" | "textIvory";

const base =
  "inline-flex items-center justify-center border px-5 py-2.5 text-[11px] uppercase tracking-cta transition-[color,background-color,border-color,transform] duration-200 ease-institutional hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-500 focus-visible:ring-offset-2 rounded-lg";

const boxedMotion = "hover:scale-[1.01]";

const variants: Record<Variant, string> = {
  ghostNavy:
    `${boxedMotion} border-charcoal-900 bg-transparent text-charcoal-900 hover:bg-charcoal-900/5 ring-offset-parchment-50`,
  filledNavy:
    `${boxedMotion} border-charcoal-900 bg-charcoal-900 text-parchment-50 hover:bg-charcoal-700 ring-offset-parchment-50`,
  filledTiffany:
    `${boxedMotion} border-sage-500 bg-sage-500 text-charcoal-950 hover:bg-sage-300 ring-offset-charcoal-950`,
  textIvory:
    "border-transparent bg-transparent text-parchment-50 underline-offset-4 hover:underline rounded-lg px-0 py-0 ring-offset-charcoal-950",
};

export function ButtonLink({
  href,
  children,
  variant,
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Link> & {
  variant: Variant;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Link>
  );
}
