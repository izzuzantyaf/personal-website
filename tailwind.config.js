module.exports = {
  darkMode: 'class',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    fontFamily: {
      'sans': '"Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    extend: {
      // screens: {
      //   light: { raw: "(prefers-color-scheme: light)" },
      //   dark: { raw: "(prefers-color-scheme: dark)" },
      // },
    }
  },
  variants: {},
  plugins: [
    // function ({ addBase, config }) {
    //   addBase({
    //     body: {
    //       color: config("theme.colors.black"),
    //       backgroundColor: config("theme.colors.white")
    //     },
    //     "@screens dark": {
    //       body: {
    //         color: config("theme.colors.white"),
    //         backgroundColor: config("theme.colors.black")
    //       }
    //     }
    //   });
    // }
  ],
}
