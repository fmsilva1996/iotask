import React, { ReactElement } from 'react'
import Logo from '../../assets/logo.svg'

const Sidebar = (): ReactElement => (
  <aside style={{ backgroundColor: 'black' }}>
    <section>
      <Logo />
    </section>
  </aside>
)

export default Sidebar
