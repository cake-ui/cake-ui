# Tooltip

Use this component to display extra information about an element by displaying a
floating description.

## Installation

```sh
yarn add @cake-ui/tooltip

# or

npm i @cake-ui/tooltip
```

## Import components

```js
import { Tooltip } from "@cake-ui/react"
```

## Usage

If the `children` of Tooltip is a string, we wrap with in a `span` with
`tabIndex` set to `0`, to ensure it meets the accessibility requirements.

```jsx
<Tooltip label="Hey, I'm here!">Hover me</Tooltip>
```
