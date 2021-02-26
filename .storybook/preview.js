import React, { ReactElement } from 'react'
import { withPerformance } from 'storybook-addon-performance'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/core/styles/global'
import Theme from '../src/core/styles/theme'

const withStyled = (Story) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
)

export const decorators = [withStyled, withPerformance]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
