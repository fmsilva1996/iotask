import React, { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Sidebar from './components/sidebar/index'
import theme from './core/theme'

export default function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar />
    </ChakraProvider>
  )
}
