/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'darken-green': '#041811',
        'showy-violet': '#0749BD',
      },
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
