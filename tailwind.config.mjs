import type { Config } from "tailwindcss";

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
      animation: {},
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "16rem" },
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
  plugins: [],
};
export default config;
