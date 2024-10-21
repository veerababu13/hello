/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'dot-flashing': {
          '0%': { transform: 'scale(1)' },
          '50%, 100%': { transform: 'scale(0.4)', opacity: '0.8' },
        },
      },
      animation: {
        'dot-flashing': 'dot-flashing 1s infinite linear both',
      },
    },
  },
  plugins: [],
}

