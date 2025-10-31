import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Refined palette for professional LMS
        ink:   "#0b1220",   // page background
        panel: "#101828",   // card glass base
        border:"#1e293b",   // subtle borders
        text:  "#e5efff",   // primary text
        mute:  "#94a3b8",   // secondary text
        accent:"#38bdf8",   // cyan primary
        accent2:"#818cf8",  // violet secondary
        success:"#10b981",
        warn:  "#f59e0b",
        danger:"#ef4444",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,.4)",
        soft: "0 2px 12px rgba(0,0,0,.2)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backdropBlur: { 
        glass: "16px" 
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
