/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '90': {
          bg: '#030303',
          bg2: '#0a0a0a',
          bg3: '#111111',
          border: '#222222',
        },
        'product': {
          'creation-agent': '#a855f7',
          'enterprise': '#3b82f6',
          'agency': '#ec4899',
          'content-agent': '#22d3ee',
          'customer-story': '#f97316',
          'real-shoots': '#22c55e',
          'ai-studio': '#8b5cf6',
          'creator-pro': '#fbbf24',
          'affiliate': '#14b8a6',
        },
        'electric': '#00f0ff',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
