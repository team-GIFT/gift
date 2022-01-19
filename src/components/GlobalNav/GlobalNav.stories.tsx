import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GlobalNav } from './GlobalNav';

export default {
  title: 'components/GlobalNav',
  component: GlobalNav,
} as ComponentMeta<typeof GlobalNav>;

const Template: ComponentStory<typeof GlobalNav> = () => <GlobalNav />;

export const GNBBasic = Template.bind({});
