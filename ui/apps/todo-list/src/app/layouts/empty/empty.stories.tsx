// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Empty } from './empty';
import { EmptyProps } from './empty.props';

export default {
  component: Empty,
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args: EmptyProps) => (
  <Empty {...args} />
);

// export const Issue = Template.bind({});
// Issue.args = {};
