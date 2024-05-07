/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        "colour-link": "#5A69AF",
        "colour-navs": "#D7FCD4",
        "colour-text": "#24563A",
        "accent-one": "#EFDAFB",
        "accent-two": "#FFA987"
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        }
      }
    },
  },
  plugins: [],
};
