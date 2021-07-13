import { ThemingProps } from "@cake-ui/system"
import { Dict, isObject } from "@cake-ui/utils"
import { mergeThemeOverride, ThemeExtension } from "../extend-theme"

export function withDefaultVariant({
  variant,
  components,
}: {
  variant: ThemingProps["variant"]
  components?: string[] | Dict
}): ThemeExtension {
  return (theme) => {
    let names = Object.keys(theme.components || {})

    if (Array.isArray(components)) {
      names = components
    } else if (isObject(components)) {
      names = Object.keys(components)
    }

    return mergeThemeOverride(theme, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withVariant = {
            defaultProps: {
              variant,
            },
          }
          return [componentName, withVariant]
        }),
      ),
    })
  }
}
