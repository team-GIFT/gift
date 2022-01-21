import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Clips } from './Clips';

export default {
  title: 'components/Clips',
  component: Clips,
} as ComponentMeta<typeof Clips>;

const Template: ComponentStory<typeof Clips> = () => <Clips />;

export const ClipsDefault = Template.bind({});
