const colors = require("./themeConfig/colors")

module.exports = {
  purge: [],
  darkMode: "class",

  theme: {
    // screens: {
    //   ...breakpoints,
    // },
    colors: {
      ...colors,

      test: "#345679",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
