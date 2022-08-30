// Empty.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';
import { ButtonProps, buttonSizes, buttonTypes } from './button.props';

export default {
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      options: buttonSizes,
    },
    type: {
      options: buttonTypes,
    },
  },
  args: {
    children: 'Button',
    size: 'default',
    type: 'default',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

// Type
export const DefaultType = Template.bind({});
DefaultType.args = { type: 'default' };
export const Primary = Template.bind({});
Primary.args = { type: 'primary' };
export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };
export const Tertiary = Template.bind({});
Tertiary.args = { type: 'tertiary' };

// Size
export const XLarge = Template.bind({});
XLarge.args = { size: 'x-large' };
export const Large = Template.bind({});
Large.args = { size: 'large' };
export const Default = Template.bind({});
Default.args = { size: 'medium' };
export const Small = Template.bind({});
Small.args = { size: 'small' };
export const XSmall = Template.bind({});
XSmall.args = { size: 'x-small' };
