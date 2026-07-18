import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0b0f",
        "bg-elev": "#121620",
        "bg-elev-2": "#191d29",
        line: "rgba(242,240,234,0.09)",
        "line-strong": "rgba(242,240,234,0.16)",
        text: "#f2f0ea",
        "text-muted": "#9295a3",
        "text-faint": "#5c5f6b",
        amber: "#e8a33d",
        "amber-soft": "rgba(232,163,61,0.14)",
        violet: "#8b7fff",
        "violet-soft": "rgba(139,127,255,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        sm2: "10px",
        md2: "16px",
        lg2: "28px",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(.16,.84,.32,1)",
      },
      keyframes: {
        pulse2: {
          "0%": { boxShadow: "0 0 0 0 rgba(139,127,255,0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgba(139,127,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(139,127,255,0)" },
        },
        scrollbar: {
          "0%": { top: "-100%" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        pulse2: "pulse2 2.4s infinite",
        scrollbar: "scrollbar 2s cubic-bezier(.16,.84,.32,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
