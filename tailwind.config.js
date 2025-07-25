/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        navy: {
          900: "#0a192f",
        },
        // Adding gradient-friendly colors
        indigo: {
          400: "#818cf8",
        },
        cyan: {
          300: "#67e8f9",
          400: "#22d3ee",
        },
      },
      // Extended animations for skills section
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      // Glass morphism effects
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        skill: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],

  // DaisyUI theme config - modified for dark theme
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          // Override or extend light theme colors if needed
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#818cf8", // indigo-400
          secondary: "#22d3ee", // cyan-400
          accent: "#67e8f9", // cyan-300
          neutral: "#1e293b", // slate-800
          "base-100": "#0f172a", // slate-900
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
    darkTheme: "dark", // Set dark as default
  },
};
