import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F6F2",
        foreground: "#0A0A0A",
        boring: {
          bg: "#F7F6F2",
          black: "#0A0A0A",
          acid: "#DFFF00",
          gray: "#E5E4DE",
          muted: "#6B6A66",
        },
      },
      fontFamily: {
        space: ["var(--font-space)", "Space Grotesk", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tightest: "-0.07em",
      },
      borderRadius: {
        // No rounded cards requirement
        none: "0px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
