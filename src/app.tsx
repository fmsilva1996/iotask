import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import Button from './components/button'
import GlobalStyles from './core/styles/global'
import Theme from './core/styles/theme'

export default function App(): ReactElement {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <h1>IOTask</h1>
      <Button>Click</Button>
    </ThemeProvider>
  )
}
