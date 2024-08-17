/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "rgb(255, 203, 5)"
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
        fadeOut: {
          '0%': {opacity: 1 },
          '100%': {opacity: 0 },
        },
        fadeIn: {
          '0%': {opacity: 0 },
          '100%': {opacity: 1},
        },
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwardes',
        'fade-out': 'fadeOut 0.5s ease-out forwardes'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
