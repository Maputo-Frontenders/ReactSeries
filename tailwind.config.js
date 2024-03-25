/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                mf: {
          primary: "#201C39",
          secondary: "#4ED4C5",
          secondaryVariation: "#15F8B6",
          white: "#E4E5E7",
          least: "#17253D",
          blue: "#191737",
          dark: "#121214",
          purple: "#15F8B6",
          orange: "#FF9F24",
          pink: "#FF5FCC"
        },
      }
    },
  },
  plugins: [],
}

