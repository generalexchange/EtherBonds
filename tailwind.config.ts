import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tiffany: {
          50: "#F0FAF8",
          100: "#D8F1EC",
          300: "#7DD3C0",
          500: "#0ABAB5",
          700: "#087A75",
          900: "#04433F",
        },
        navy: {
          50: "#F4F6FA",
          100: "#E6EBF3",
          500: "#1E3A5F",
          700: "#132744",
          900: "#0A1628",
          950: "#050B14",
        },
        ivory: {
          50: "#FAFAF7",
          100: "#F4F3ED",
          200: "#E8E6DB",
        },
        graphite: {
          600: "#4A4A48",
          800: "#252523",
          900: "#18181B",
        },
        gold: {
          500: "#B8935A",
          600: "#9C7A47",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
        nav: "0.1em",
        cta: "0.08em",
      },
      transitionTimingFunction: {
        institutional: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        content: "1100px",
        prose: "620px",
        closing: "800px",
      },
    },
  },
  plugins: [],
};

export default config;
