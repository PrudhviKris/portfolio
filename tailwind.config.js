/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0c0c10',
        ink: '#f3f4f6',
        accent: '#b91c1c',
        accent2: '#ef4444',
        card: '#16161d',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(185,28,28,0.18), 0 20px 60px rgba(239,68,68,0.18)',
      },
    },
  },
  plugins: [],
}