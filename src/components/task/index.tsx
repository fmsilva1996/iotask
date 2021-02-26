import React, { ReactElement, ReactNode } from 'react'

export type TaskProps = {
  children: ReactNode
}

export const Task = ({ children }: TaskProps): ReactElement => {
  return <div>{children}</div>
}

export default Task
