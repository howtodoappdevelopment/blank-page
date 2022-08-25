// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SideNav } from './side-nav';
import { SideNavProps } from './side-nav.props';

export default {
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args: SideNavProps) => (
  <SideNav {...args} />
);

// export const Issue = Template.bind({});
// Issue.args = {};
