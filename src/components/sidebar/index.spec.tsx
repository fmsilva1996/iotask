import React from 'react'
import { render } from '@testing-library/react'
import Sidebar from './index'

describe('<Sidebar />', () => {
  it('should render without error', () => {
    const { container } = render(<Sidebar />)
    const sidebarElement = container.querySelector('section')
    expect(sidebarElement).toBeInTheDocument()
  })
})
