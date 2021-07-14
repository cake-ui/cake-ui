// .storybook/YourTheme.js

import { create } from "@storybook/theming"

export default create({
  base: "light",
  brandTitle: "Cake UI",
  brandUrl: "https://github.com/cake-ui/cake-ui",
  brandImage:
    "https://github.com/cake-ui/cake-ui/blob/75290f422792382b27ab7871fd93915a28a10747/docs/logo/cake-logo.png?raw=true",

  appBg: "#ECEFF1",
  appContentBg: "white",
  appBorderColor: "#F4F6F8",
  appBorderRadius: 4,
  fontBase: "'TTNorms',system-ui,sans-serif",
  fontCode: "monospace",
  textColor: "#121214",
  textInverseColor: "rgba(255,255,255,0.9)",

  barTextColor: "#121214",
  barSelectedColor: "black",
  barBg: "white",

  inputBg: "white",
  inputBorder: "#121214",
  inputTextColor: "black",
  inputBorderRadius: 4,

  colorPrimary: "#880E4F",
  colorSecondary: "#D81B60",

  gridCellSize: 8,
})
