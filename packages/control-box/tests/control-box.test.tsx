import { testA11y } from "@cake-ui/test-utils"
import * as React from "react"
import ControlBox from "../src/control-box"

it("passes a11y test", async () => {
  await testA11y(<ControlBox />)
})
