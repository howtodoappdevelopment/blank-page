import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from './app';

export default {
  component: App,
  title: 'App',
} as ComponentMeta<typeof App>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
