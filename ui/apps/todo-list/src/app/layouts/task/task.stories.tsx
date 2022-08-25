// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Task } from './task';
import { TaskProps } from './task.props';

export default {
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args: TaskProps) => (
  <Task {...args} />
);

// export const Issue = Template.bind({});
// Issue.args = {};
