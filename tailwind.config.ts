import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark mode data-driven color palette
        dark: {
          bg: "#0D1117",
          bgSecondary: "#161B22",
          bgTertiary: "#1C2128",
          border: "#30363D",
          text: "#C9D1D9",
          textSecondary: "#8B949E",
          textMuted: "#6E7681",
        },
        neon: {
          cyan: "#00F5FF",
          blue: "#00D4FF",
          purple: "#B76EFF",
          pink: "#FF006E",
          green: "#00FF87",
          orange: "#FF6B35",
          yellow: "#FFD60A",
        },
        data: {
          success: "#00FF87",
          warning: "#FFD60A",
          error: "#FF006E",
          info: "#00D4FF",
          primary: "#00F5FF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-data": "linear-gradient(135deg, #00F5FF 0%, #B76EFF 50%, #FF006E 100%)",
        "gradient-dark": "linear-gradient(135deg, #0D1117 0%, #161B22 50%, #1C2128 100%)",
        "grid-pattern": "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2330363D\" fill-opacity=\"0.2\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Consolas", "Monaco", "monospace"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00F5FF, 0 0 10px #00F5FF" },
          "100%": { boxShadow: "0 0 20px #00F5FF, 0 0 30px #00D4FF, 0 0 40px #B76EFF" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(100%)" },
        },
      },
      boxShadow: {
        "neon-sm": "0 0 10px rgba(0, 245, 255, 0.3)",
        "neon-md": "0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2)",
        "neon-lg": "0 0 30px rgba(0, 245, 255, 0.5), 0 0 60px rgba(183, 110, 255, 0.3)",
        "neon-xl": "0 0 40px rgba(0, 245, 255, 0.6), 0 0 80px rgba(183, 110, 255, 0.4), 0 0 120px rgba(255, 0, 110, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
