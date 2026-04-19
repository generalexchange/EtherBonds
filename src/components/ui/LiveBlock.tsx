"use client";

import { useEffect, useState } from "react";

// TODO: Replace with wagmi useBlockNumber once WagmiProvider is added to root layout

const INITIAL_BLOCK = 19284551;

function formatUtcTime(d: Date) {
  return d.toLocaleTimeString("en-GB", {
    timeZone: "UTC",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function LiveBlock() {
  const [block, setBlock] = useState(INITIAL_BLOCK);
  const [time, setTime] = useState<string>(() => formatUtcTime(new Date()));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const tick = () => {
      setTime(formatUtcTime(new Date()));
      setBlock((b) => b + 1);
    };
    const id = window.setInterval(tick, 12_000);
    return () => window.clearInterval(id);
  }, []);

  const displayBlock = mounted
    ? block.toLocaleString("en-GB")
    : (19_284_551).toLocaleString("en-GB");

  return (
    <span
      aria-live="polite"
      className="flex items-center gap-2 font-mono text-[12px] text-parchment-50/60 tabular-nums"
    >
      <span
        aria-hidden="true"
        className="h-[6px] w-[6px] shrink-0 bg-sage-500 motion-safe:animate-pulse"
      />
      <span>
        Synchronised to block {displayBlock} · {time} GMT
      </span>
    </span>
  );
}
