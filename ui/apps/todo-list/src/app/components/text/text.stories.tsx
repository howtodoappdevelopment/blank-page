// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextProps } from './text.props';
import { Text } from './text';

export default {
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: TextProps) => (
  <Text {...args} />
);

// export const Issue = Template.bind({});
// Issue.args = {};
