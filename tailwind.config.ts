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
        ivory: "#F8F6F2",
        "ivory-dark": "#F0EDE7",
        charcoal: "#2C2A28",
        "charcoal-soft": "#3D3B38",
        olive: "#5C6B52",
        "olive-muted": "#6B7A5E",
        terracotta: "#A67B5B",
        "terracotta-muted": "#8B6B4F",
        copper: "#B87333",
        gold: "#C9A962",
        "gold-muted": "#B89B5A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(44 42 40 / 0.06), 0 1px 2px -1px rgb(44 42 40 / 0.04)",
        "card-hover": "0 4px 12px -2px rgb(44 42 40 / 0.08), 0 2px 6px -2px rgb(44 42 40 / 0.04)",
        "hero-glow": "0 0 80px -20px rgb(92 107 82 / 0.15)",
      },
      backgroundImage: {
        "bridge-gradient":
          "linear-gradient(135deg, rgb(92 107 82 / 0.04) 0%, transparent 50%, rgb(167 123 91 / 0.04) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
