import React, { ReactElement } from 'react'
import { withPerformance } from 'storybook-addon-performance'

export const decorators = [withPerformance]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
