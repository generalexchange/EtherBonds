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
        sage: {
          50: "#e8f2eb",
          100: "#c9e0d1",
          300: "#7aab8a",
          500: "#4a7c59",
          700: "#355d42",
          900: "#243d2e",
        },
        charcoal: {
          50: "#f0f0ef",
          100: "#e0e0de",
          500: "#6b6b69",
          700: "#454543",
          900: "#2c2c2a",
          950: "#1a1a18",
        },
        parchment: {
          50: "#f7f5f1",
          100: "#ebe6dd",
          200: "#d9d1c4",
        },
        stone: {
          600: "#5c5a57",
          800: "#363432",
          900: "#252422",
        },
        umber: {
          500: "#8b6f47",
          600: "#6e5638",
        },
      },
      fontFamily: {
        serif: [
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        sans: [
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: ["var(--font-mono)", "Consolas", "ui-monospace", "monospace"],
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
