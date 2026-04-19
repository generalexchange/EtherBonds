"use client";

import { easeInstitutional } from "@/components/primitives/FadeIn";
import { TabularNumber } from "@/components/primitives/TabularNumber";
import { ButtonLink } from "@/components/ui/Button";
import { ThinRule } from "@/components/ui/ThinRule";
import { YIELDS } from "@/lib/constants";
import { COPY } from "@/lib/copy";
import { animate } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function useAnimatedNumber(target: number, duration = 1.8, decimals = 2) {
  const [text, setText] = useState("0.00");

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      ease: easeInstitutional,
      onUpdate: (v) => {
        setText(v.toFixed(decimals));
      },
    });
    return () => controls.stop();
  }, [duration, target, decimals]);

  return text;
}

function useAnimatedTvl(duration = 1.8) {
  const [text, setText] = useState("$0.00M");
  useEffect(() => {
    const controls = animate(0, 0, {
      duration,
      ease: easeInstitutional,
      onUpdate: (v) => {
        setText(`$${v.toFixed(2)}M`);
      },
    });
    return () => controls.stop();
  }, [duration]);
  return text;
}

function Constellation() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      aria-hidden
    >
      <defs>
        <style>{`
          @keyframes constellation-drift {
            0% { transform: translate3d(0,0,0); }
            100% { transform: translate3d(2%, -1.5%, 0); }
          }
          .constellation-root {
            animation: constellation-drift 120s linear infinite alternate;
          }
        `}</style>
      </defs>
      <g className="constellation-root text-tiffany-500">
        <g stroke="currentColor" strokeOpacity="0.05" fill="none" strokeWidth="0.5">
          <line x1="8%" y1="22%" x2="18%" y2="28%" />
          <line x1="18%" y1="28%" x2="28%" y2="24%" />
          <line x1="28%" y1="24%" x2="38%" y2="32%" />
          <line x1="62%" y1="18%" x2="72%" y2="26%" />
          <line x1="72%" y1="26%" x2="84%" y2="22%" />
          <line x1="14%" y1="68%" x2="24%" y2="62%" />
          <line x1="24%" y1="62%" x2="34%" y2="70%" />
          <line x1="76%" y1="58%" x2="88%" y2="64%" />
        </g>
        <g fill="currentColor" fillOpacity="0.06">
          <circle cx="8%" cy="22%" r="1.2" />
          <circle cx="18%" cy="28%" r="1" />
          <circle cx="28%" cy="24%" r="0.9" />
          <circle cx="38%" cy="32%" r="1.1" />
          <circle cx="62%" cy="18%" r="1" />
          <circle cx="72%" cy="26%" r="0.9" />
          <circle cx="84%" cy="22%" r="1" />
          <circle cx="14%" cy="68%" r="0.9" />
          <circle cx="24%" cy="62%" r="1" />
          <circle cx="34%" cy="70%" r="1.1" />
          <circle cx="76%" cy="58%" r="1" />
          <circle cx="88%" cy="64%" r="0.9" />
        </g>
      </g>
    </svg>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const y12 = useAnimatedNumber(YIELDS.twelve);
  const y36 = useAnimatedNumber(YIELDS.thirtySix);
  const y60 = useAnimatedNumber(YIELDS.sixty);
  const tvl = useAnimatedTvl();

  const headline = useMemo(() => {
    let idx = 0;
    return COPY.hero.headlineLines.map((line, li) => ({
      li,
      words: line.words.map((w) => ({
        ...w,
        delay: idx++ * 0.07,
      })),
    }));
  }, []);

  return (
    <section
      id="protocol"
      className="relative min-h-[100dvh] overflow-hidden bg-navy-950 pt-24 text-ivory-50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-navy-900 via-navy-950 to-navy-950"
        aria-hidden
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <Constellation />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-content flex-col justify-center px-6 pb-16 pt-10 lg:px-10">
        <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-tiffany-500">
          {COPY.hero.eyebrow}
        </p>

        <h1 className="font-serif text-[clamp(2.5rem,10vw,4rem)] font-normal leading-none tracking-[-0.02em] text-ivory-50 md:text-[clamp(3.5rem,8vw,7rem)]">
          {headline.map((line) => (
            <span key={line.li} className="block">
              {line.words.map((w, wi) => (
                <motion.span
                  key={`${line.li}-${wi}`}
                  className={w.italic ? "italic" : undefined}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: reduceMotion ? 0 : w.delay,
                    ease: easeInstitutional,
                  }}
                >
                  {w.text}
                  {wi < line.words.length - 1 ? "\u00a0" : null}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-prose text-lg text-ivory-50/70 md:text-[18px]">
          {COPY.hero.subhead}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <ButtonLink href="#instruments" variant="filledTiffany">
            {COPY.hero.ctaPrimary}
          </ButtonLink>
          <ButtonLink href="#documentation" variant="textIvory">
            {COPY.hero.ctaSecondary} →
          </ButtonLink>
        </div>

        <div className="mt-16">
          <ThinRule className="text-ivory-50" />
          <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <p className="text-[10px] uppercase tracking-eyebrow text-ivory-50/50">
                {COPY.hero.yieldLabels.twelve}
              </p>
              <p className="mt-2 font-mono text-3xl text-gold-500 md:text-4xl">
                <TabularNumber>
                  {y12}%
                </TabularNumber>
              </p>
              <p className="mt-1 font-mono text-xs text-ivory-50/50">
                {COPY.hero.yieldQualifiers.fixed}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-eyebrow text-ivory-50/50">
                {COPY.hero.yieldLabels.thirtySix}
              </p>
              <p className="mt-2 font-mono text-3xl text-gold-500 md:text-4xl">
                <TabularNumber>
                  {y36}%
                </TabularNumber>
              </p>
              <p className="mt-1 font-mono text-xs text-ivory-50/50">
                {COPY.hero.yieldQualifiers.fixed}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-eyebrow text-ivory-50/50">
                {COPY.hero.yieldLabels.sixty}
              </p>
              <p className="mt-2 font-mono text-3xl text-gold-500 md:text-4xl">
                <TabularNumber>
                  {y60}%
                </TabularNumber>
              </p>
              <p className="mt-1 font-mono text-xs text-ivory-50/50">
                {COPY.hero.yieldQualifiers.fixed}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-eyebrow text-ivory-50/50">
                {COPY.hero.yieldLabels.tvl}
              </p>
              <p className="mt-2 font-mono text-3xl text-ivory-50 md:text-4xl">
                <TabularNumber>{tvl}</TabularNumber>
              </p>
              <p className="mt-1 font-mono text-xs text-ivory-50/50">
                {COPY.hero.yieldQualifiers.networks}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
