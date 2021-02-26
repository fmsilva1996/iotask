import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index'

describe('<Button />', () => {
  it('should render without error', () => {
    render(<Button>Click</Button>)
    const buttonElement = screen.getByText(/click/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
