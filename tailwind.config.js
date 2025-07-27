/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        jump: 'jump 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // or 'media' — choose only one
}
