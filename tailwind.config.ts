import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "dosis-regular": ["Dosis-Regular"],
      "dosis-light": ["Dosis-Light"],
      "dosis-extrabold": ["Dosis-ExtraBold"],
      playwrite: ["Playwrite"],
      monospace: ["KodeMono"],
      "victor-mono": ['"Victor Mono Variable"'],
      "victor-mono-italic": ['"Victor Mono Variable Italic"'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.6,-0.28,0.74,0.05)",
        "in-back": "cubic-bezier(0.6,-0.28,0.74,0.05)",
        "out-back": "cubic-bezier(0.18,0.89,0.32,1.27)",
        "in-out-back": "cubic-bezier(0.68,-0.55,0.27,1.55)",
      },
      animation: {
        "typing-blink-caret":
          "typing 2s steps(20, end), blink-caret 0.75s step-end infinite",
        "blink-caret": "blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          from: { width: "11rem" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "orange",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animate-typing-blink-caret": (value) => ({
            animation: `typing 2s steps(20, end), blink-caret 0.75s step-end ${value}`,
          }),
        },
        {
          values: { "5": "5", "10": "10" },
        },
      );
    }),
  ],
};
export default config;
