import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from './index'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story = () => <Button>Button</Button>

export const Default = Template.bind({})
