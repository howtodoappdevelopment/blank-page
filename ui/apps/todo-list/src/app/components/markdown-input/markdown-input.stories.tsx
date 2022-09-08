// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MarkdownInputProps } from './markdown-input.props';
import { MarkdownInput } from './markdown-input';

export default {
  component: MarkdownInput,
} as ComponentMeta<typeof MarkdownInput>;

const Template: ComponentStory<typeof MarkdownInput> = (
  args: MarkdownInputProps
) => <MarkdownInput {...args} />;

// export const Issue = Template.bind({});
// Issue.args = {};
