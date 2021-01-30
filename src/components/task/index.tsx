import React, { ReactElement, useState } from 'react'
import { Checkbox, Container, Heading } from '@chakra-ui/react'

export type TaskProps = {
  title: string
  isDone?: boolean
}

export const Task = ({ title, isDone }: TaskProps): ReactElement => {
  const [isChecked, setIsChecked] = useState(isDone || false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked)

  const renderTitle = () => {
    if (!isChecked)
      return (
        <Heading textStyle="h5" lineHeight="30px">
          {title}
        </Heading>
      )
    return (
      <Heading
        textStyle="h5"
        lineHeight="30px"
        color="brand.secGray"
        textDecoration="line-through"
      >
        {title}
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
