# @cake-ui/alert

Alerts visually highlight important content for the user. They can contain a
title, an icon and content. Each intent has a default icon associated with it.

## Installation

```sh
yarn add @cake-ui/alert

# or

npm i @cake-ui/alert
```

## Import components

```jsx
import {
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription
} from "@cake-ui/alert
```

## Basic usage

```jsx
<Alert status="error" variant="solid" justifyContent="center">
  <AlertIcon />
  <AlertTitle>Your browser is outdated!</AlertTitle>
  <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
</Alert>
```
