import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'components/Icon',
  component: Icon,
  argTypes: {
    type: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Verified = Template.bind({});
Verified.args = {
  primary: true,
};
