/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "menuBlue": "#023047",
        "primaryBlue": "#219ebc",
        "secondaryBlue": "#8ecae6",
        "primaryOrange": "#fb8500",
        "secondaryOrange": "#ffb703"
      }
    },
  },
  plugins: [],
}