import React, { ReactElement } from 'react'
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import theme from './core/theme'

export default function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Heading textStyle="h1">Hello, World!</Heading>
      <Text textStyle="textLight">Hello, World!</Text>
    </ChakraProvider>
  )
}
