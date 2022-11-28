/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'sail': ['Sail', 'cursive']
      },
      mytheme: {
        primary: "#000000",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
}