import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "ghostNavy" | "filledNavy" | "filledTiffany" | "textIvory";

const base =
  "inline-flex items-center justify-center border px-5 py-2.5 text-[11px] uppercase tracking-cta transition-[color,background-color,border-color,transform] duration-200 ease-institutional focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tiffany-500 focus-visible:ring-offset-2";

const boxedMotion = "hover:scale-[1.01]";

const variants: Record<Variant, string> = {
  ghostNavy:
    `${boxedMotion} border-navy-900 bg-transparent text-navy-900 hover:bg-navy-900/5 rounded-none ring-offset-ivory-50`,
  filledNavy:
    `${boxedMotion} border-navy-900 bg-navy-900 text-ivory-50 hover:bg-navy-700 rounded-none ring-offset-ivory-50`,
  filledTiffany:
    `${boxedMotion} border-tiffany-500 bg-tiffany-500 text-navy-950 hover:bg-tiffany-300 rounded-none ring-offset-navy-950`,
  textIvory:
    "border-transparent bg-transparent text-ivory-50 underline-offset-4 hover:underline rounded-none px-0 py-0 ring-offset-navy-950",
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
