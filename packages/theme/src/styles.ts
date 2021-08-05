import { mode, Styles } from "@cake-ui/theme-tools"

// TODO: Isso precisa ser revisto a substituição não é perfeita

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode(
        "$on-color-neutral-grey.800",
        "$on-color-neutral-grey.100",
      )(props),
      bg: mode(
        "$on-color-neutral-grey.100",
        "$on-color-neutral-grey.800",
      )(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode(
        "$on-color-neutral-grey.400",
        "$on-color-neutral-grey.100",
      )(props),
    },
    "*, *::before, &::after": {
      borderColor: mode(
        "$on-color-neutral-grey.200",
        "$on-color-neutral-grey.100",
      )(props),
      wordWrap: "break-word",
    },
  }),
}

export default styles
