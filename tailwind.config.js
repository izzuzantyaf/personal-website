const colors = require('tailwindcss/colors')
const { socialMedias } = require('./constants/social-media')

module.exports = {
  darkMode: 'class',
  future: {},
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelist: [
        ...socialMedias.map(socmed => socmed.hoverColor),
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
