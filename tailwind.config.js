/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: "#121212",
        cardBg: "#181818",
        primaryGrey: "#595959",
        secondaryGrey: "#D4D4D4",
      },
      backgroundImage: {
        linearBlueBg: "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
      }
    },
  },
  plugins: [],
}