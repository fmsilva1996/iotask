import React, { ReactElement, ReactNode, useState } from 'react'
import { Checkbox, Container, Heading } from '@chakra-ui/react'

export type TaskProps = {
  isDone?: boolean
  children: ReactNode
}

export const Task = ({ isDone, children }: TaskProps): ReactElement => {
  const [isChecked, setIsChecked] = useState(isDone || false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked)

  const renderTitle = () => {
    if (!isChecked)
      return (
        <Heading as="h5" size="sm" fontWeight="normal">
          {children}
        </Heading>
      )
    return (
      <Heading
        as="h5"
        size="sm"
        fontWeight="normal"
        color="gray.500"
        textDecoration="line-through"
      >
        {children}
      </Heading>
    )
  }

  return (
    <Container variant="task">
      <Checkbox
        isChecked={isChecked}
        size="lg"
        spacing="1rem"
        onChange={e => handleChange(e)}
      >
        {renderTitle()}
      </Checkbox>
    </Container>
  )
}

export default Task
