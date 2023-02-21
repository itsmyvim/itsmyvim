/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
             colors: {
        'dark': '#202225',
        'medium-dark': '#292b2f',
        'baby-dark': '#2f3136',
        'text-dark': '#40444b',
      },
        },
  },
  plugins: [],
}
