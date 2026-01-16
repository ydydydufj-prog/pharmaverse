/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    // This is the most important part - it tells tailwind to look inside your src folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // These enable the "High-Fidelity" colors we used in the Dashboard
        primary: "#0d9488",
        "primary-glow": "#2dd4bf",
        accent: "#e67e22",
        warning: "#f59e0b",
      },
      fontFamily: {
        // Keeps your landing page font working
        mona: ["var(--font-mona)", "sans-serif"],
        // Keeps your medical dashboard font working
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        // Your existing landing page marquee
        "marquee-infinite": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-infinite": "marquee-infinite 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}