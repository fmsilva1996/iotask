import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Task, TaskProps } from './index'

export default {
  title: 'Task',
  component: Task,
} as Meta

const Template: Story<TaskProps> = args => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Test Task',
}

export const Checked = Template.bind({})
Checked.args = {
  title: 'Test Task',
  isDone: true,
}
