import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Task, TaskProps } from './index'

export default {
  title: 'Task',
  component: Task,
} as Meta

const Template: Story<TaskProps> = args => <Task {...args}>Example Task</Task>

export const Default = Template.bind({})
Default.args = {
  isDone: false,
}

export const Checked = Template.bind({})
Checked.args = {
  isDone: true,
}
