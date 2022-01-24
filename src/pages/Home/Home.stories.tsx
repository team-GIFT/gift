import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Home } from './Home';

export default {
  title: 'pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const HomePage = Template.bind({});
