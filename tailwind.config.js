/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        forest: '#1E3A32',
        gold: '#C4A36A',
        cream: '#F4F0E8',
        ink: '#141414',
        sage: '#3F6B58',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tag: '0.22em',
      },
    },
  },
  plugins: [],
}
