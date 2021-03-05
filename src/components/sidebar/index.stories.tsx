import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Sidebar from './index'

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta

const Template: Story = () => <Sidebar />

export const Default = Template.bind({})
