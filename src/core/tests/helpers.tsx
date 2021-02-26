import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from '../styles/theme'
import { render, RenderResult } from '@testing-library/react'

export const renderStyled = (element: ReactNode): RenderResult =>
  render(<ThemeProvider theme={Theme}>{element}</ThemeProvider>)
