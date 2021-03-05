import React, { ReactElement } from 'react'
import { SidebarStyled, LogoStyled } from './index.styled'
import Logo from '../../assets/logo.svg'

const Sidebar = (): ReactElement => (
  <SidebarStyled>
    <LogoStyled>
      <Logo />
    </LogoStyled>
  </SidebarStyled>
)

export default Sidebar
