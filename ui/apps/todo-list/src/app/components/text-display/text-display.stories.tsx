// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextDisplayProps } from './text-display.props';
import { TextDisplay } from './text-display';

export default {
  component: TextDisplay,
} as ComponentMeta<typeof TextDisplay>;

const Template: ComponentStory<typeof TextDisplay> = (
  args: TextDisplayProps
) => <TextDisplay {...args} />;

// export const Issue = Template.bind({});
// Issue.args = {};
