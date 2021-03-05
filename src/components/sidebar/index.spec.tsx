import React from 'react'
import { renderStyled } from '../../core/tests/helpers'
import Sidebar from './index'

describe('<Sidebar />', () => {
  it('should render without error', () => {
    const { container } = renderStyled(<Sidebar />)
    const sidebarElement = container.querySelector('section')
    expect(sidebarElement).toBeInTheDocument()
  })
})
