/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'],
      },
      gap: {
        '11': '2.75rem',
        '13': '3.25rem',
      }
    },
  },
  plugins: [],
}