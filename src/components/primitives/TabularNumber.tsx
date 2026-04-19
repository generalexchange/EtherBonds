import type { HTMLAttributes } from "react";

export function TabularNumber({
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`font-mono tabular-nums ${className}`.trim()}
      {...props}
    />
  );
}
