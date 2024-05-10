/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"selector",
  theme: {
    extend: {
      colors: {
        vuejs: "#49e659",
        primary: "#222831",
      },
    },
  },
  plugins: [],
};
