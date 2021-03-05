import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './core/styles/global'
import Theme from './core/styles/theme'
import Sidebar from './components/sidebar/index'

export default function App(): ReactElement {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Sidebar />
    </ThemeProvider>
  )
}
