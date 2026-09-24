/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1f4d36',
        'brand-accent': '#d4b76a',
        'brand-light': '#f5f7f5',
        'happy-yellow': '#FACC15',
        'happy-yellow-dark': '#EAB308',
        'happy-dark': '#121212',
        'happy-gray': '#6F6F6F',
        'happy-bg': '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cursive: ['Yellowtail', 'cursive'],
        serif: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}
