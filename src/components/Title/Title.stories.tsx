import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from './Title';

export default {
  title: 'components/Title',
  component: Title,
  argTypes: {
    iconType: {
      options: ['artists', 'clips', 'stories', 'trending'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleComponent = Template.bind({});
TitleComponent.args = {
  title: 'title Test',
  as: 'p',
  fontsize: 24,
  marginBottom: 10,
};
