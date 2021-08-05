import { isObject } from "@cake-ui/utils"
import { CakeTheme } from "./theme.types"

export const requiredCakeThemeKeys: (keyof CakeTheme)[] = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
]

export function isCakeTheme(unit: unknown): unit is CakeTheme {
  if (!isObject(unit)) {
    return false
  }

  return requiredCakeThemeKeys.every((propertyName) =>
    Object.prototype.hasOwnProperty.call(unit, propertyName),
  )
}
