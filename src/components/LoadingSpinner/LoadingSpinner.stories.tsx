import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

export default {
  title: 'components/LoadingSpinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
);

export const LoadingSpinnerBasic = Template.bind({});
LoadingSpinnerBasic.args = {
  size: 10,
};
