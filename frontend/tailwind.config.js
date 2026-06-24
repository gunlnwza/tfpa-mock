/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Athiti', '"Roboto Condensed"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marqueeRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-right": "marqueeRight 60s linear infinite",
      },
    },
  },
  plugins: [],
};