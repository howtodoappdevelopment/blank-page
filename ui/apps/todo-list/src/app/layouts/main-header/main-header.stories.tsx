// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainHeader } from './main-header';
import { MainHeaderProps } from './main-header.props';
import { Button } from '../button/button';

export default {
  component: MainHeader,
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = (args: MainHeaderProps) => (
  <MainHeader {...args} />
);

export const Empty = Template.bind({});
Empty.args = {};

export const WithExtras = Template.bind({});
WithExtras.args = {
  extras: (
    <div className="inline-block">
      <Button>Add</Button>
      <Button type={'secondary'}>Refresh</Button>
    </div>
  ),
};

export const WithSideNavContent = Template.bind({});
WithSideNavContent.args = {
  sideNavContent: (
    <div className="block">
      <Button>Add</Button>
      <Button type={'secondary'}>Refresh</Button>
    </div>
  ),
};
