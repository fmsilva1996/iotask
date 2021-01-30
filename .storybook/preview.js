import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { withPerformance } from 'storybook-addon-performance'
import theme from '../src/core/theme'

const withChakra = StoryFn => (
  <ChakraProvider theme={theme}>
    <div id="story-wrapper" style={{ minHeight: '100vh' }}>
      <StoryFn />
    </div>
  </ChakraProvider>
)

export const decorators = [withChakra, withPerformance]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
