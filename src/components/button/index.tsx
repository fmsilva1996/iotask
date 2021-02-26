import React, { ReactElement, ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
}

const Button = ({ children }: ButtonProps): ReactElement => {
  return <button>{children}</button>
}

export default Button
