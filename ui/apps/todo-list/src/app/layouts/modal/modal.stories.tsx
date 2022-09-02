// Issue.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './modal';
import { ModalProps } from './modal.props';

export default {
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args} />
);

// Type
// export const DefaultType = Template.bind({});
// DefaultType.args = { type: 'default' };
