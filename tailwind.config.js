const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  future: {},
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      whitelist: [
        'text-red-600',
        'text-gray-600',
        'text-blue-600',
        'text-pink-600',
        'text-blue-400',
      ],
      keyframes: true,
      fontFace: true,
    }
  },
  theme: {
    fontFamily: {
      'sans': '"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    extend: {
      colors: {
        'gray': colors.blueGray,
      }
    },
  },
  variants: {},
  plugins: [],
}
