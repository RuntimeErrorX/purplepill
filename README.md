# purplepill
# Moonshield uikit
## Install

`yarn add @moonshield/uikit`

## Setup

### Theme

Before using @moonshield/uikit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@moonshield/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@moonshield/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

#
