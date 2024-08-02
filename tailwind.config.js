/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#5cb85c',
      },
      fontFamily: {
        'sans': "Source Sans Pro, sans-serif",
        'logo': "Titillium Web, sans-serif"
      }
    },
  },
  plugins: [],
}