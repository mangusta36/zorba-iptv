import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1415",
        panel: "#172021",
        line: "rgba(242,239,232,0.16)",
        mist: "#b2bbb7",
        ember: "#d8aa72",
        gold: "#d8aa72",
        cyan: "#f2efe8"
      },
      boxShadow: {
        glow: "none",
        panel: "none"
      },
      borderRadius: {
        card: "8px"
      },
      fontFamily: {
        sans: ["var(--font-body)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
