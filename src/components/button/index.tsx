import React, { ReactElement, ReactNode } from 'react'

type ButtonProps = {
  disable?: boolean
  children: ReactNode
}

const Button = ({ disable, children }: ButtonProps): ReactElement => {
  return <button disabled={disable}>{children}</button>
}

export default Button
