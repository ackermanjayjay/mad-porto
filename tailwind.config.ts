/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("daisyui")],
}