import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from './index'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story = args => <Button {...args}>Active</Button>

export const Default = Template.bind({})
Default.args = {
  disable: false,
}

export const Outline = Template.bind({})
Outline.args = {
  outline: true,
  disable: false,
}
