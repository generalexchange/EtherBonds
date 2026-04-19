import type { HTMLAttributes } from "react";

type Level = "hero" | "section" | "closing";

const sizeClasses: Record<Level, string> = {
  hero: "font-serif text-[clamp(2.5rem,10vw,4rem)] md:text-[clamp(3.5rem,8vw,7rem)] leading-none tracking-[-0.02em]",
  section:
    "font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.02em]",
  closing:
    "font-serif text-[clamp(3rem,6vw,6rem)] leading-[1.05] tracking-[-0.02em]",
};

export function SerifHeadline({
  as: Tag = "h2",
  level = "section",
  className = "",
  ...props
}: HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3";
  level?: Level;
}) {
  return (
    <Tag
      className={`${sizeClasses[level]} ${className}`.trim()}
      {...props}
    />
  );
}
