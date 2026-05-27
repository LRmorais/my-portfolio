/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#6366f1' },
      },
      boxShadow: {
        soft: '0 2px 16px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.03)',
      },
    },
  },
  plugins: [],
}

