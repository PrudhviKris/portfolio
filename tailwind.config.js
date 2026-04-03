/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0b1120',
        ink: '#e2e8f0',
        accent: '#22c55e',
        accent2: '#38bdf8',
        card: '#111827',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,197,94,0.12), 0 20px 60px rgba(56,189,248,0.12)',
      },
    },
  },
  plugins: [],
}