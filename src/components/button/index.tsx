import React, { ReactElement, ReactNode } from 'react'
import { PrimaryButton, OutlineButton } from './index.styled'

type ButtonProps = {
  outline?: boolean
  disable?: boolean
  children: ReactNode
}

const Button = ({ outline, disable, children }: ButtonProps): ReactElement => {
  if (outline)
    return <OutlineButton disabled={disable}>{children}</OutlineButton>
  return <PrimaryButton disabled={disable}>{children}</PrimaryButton>
}

export default Button
