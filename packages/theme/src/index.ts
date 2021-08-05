import components from "./components"
import foundations from "./foundations"
import styles from "./styles"
import { ThemeConfig, ThemeDirection } from "./theme.types"

const direction = "ltr" as ThemeDirection

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "$on",
}

export const theme = {
  direction,
  ...foundations,
  components,
  styles,
  config,
}

export type DefaultCakeTheme = typeof theme

export * from "./theme.types"
export * from "./utils"

export default theme
