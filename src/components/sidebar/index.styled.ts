import styled from 'styled-components'

export const SidebarStyled = styled.aside`
  width: 250px;
  height: 100%;
  position: absolute;
  background: ${props => props.theme.colors.primBlack};
`

export const LogoStyled = styled.section`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`
