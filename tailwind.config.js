/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#0e1620",
        bg2: "#141E30",
        bg3: "#1c2d44",
        bg4: "#35577D",
        accent1: "#67E8F9",
        accent2: "#818CF8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "main-gradient":
          "radial-gradient(ellipse at 15% 0%, rgba(103, 232, 249, 0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, rgba(129, 140, 248, 0.07) 0%, transparent 55%), linear-gradient(170deg, #0e1620 0%, #141E30 40%, #1c2d44 100%)",
        "accent-gradient": "linear-gradient(135deg, #67E8F9 0%, #818CF8 100%)",
      },
    },
  },
  plugins: [],
};
