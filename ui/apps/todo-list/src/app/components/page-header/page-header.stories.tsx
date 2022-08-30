// Empty.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHeader } from './page-header';
import { PageHeaderProps } from './page-header.props';

export default {
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args: PageHeaderProps) => (
  <PageHeader {...args} />
);

// export const Empty = Template.bind({});
// Empty.args = {};
