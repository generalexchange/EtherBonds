export const sectionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const sectionViewport = { once: true, margin: "-80px" } as const;

export const sectionTransition = {
  duration: 0.7,
  ease: sectionEase,
} as const;

export const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
} as const;

export const staggerChild = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: sectionTransition,
  },
} as const;
