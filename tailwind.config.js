/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Funnel Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#2B4F76',
        teal: '#6A9DAB',
        mint: '#A6D8C9',
        cream: '#F7F7DC',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};