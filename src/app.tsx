import React, { ReactElement } from 'react'
import { ChakraProvider, Heading } from '@chakra-ui/react'

export default function App(): ReactElement {
  return (
    <ChakraProvider>
      <Heading as="h1" size="4xl">
        Hello, World!
      </Heading>
    </ChakraProvider>
  )
}
