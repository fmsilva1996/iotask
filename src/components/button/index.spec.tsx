import React from 'react'
import { screen } from '@testing-library/react'
import { renderStyled } from '../../core/tests/helpers'
import Button from './index'

describe('<Button />', () => {
  it('should render without error', () => {
    renderStyled(<Button>Click</Button>)
    const buttonElement = screen.getByText(/click/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
