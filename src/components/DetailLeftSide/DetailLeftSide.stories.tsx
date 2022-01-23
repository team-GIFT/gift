import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DetailLeftSide } from './DetailLeftSide';

export default {
  title: 'components/DetailLeftSide',
  component: DetailLeftSide,
} as ComponentMeta<typeof DetailLeftSide>;

const Template: ComponentStory<typeof DetailLeftSide> = () => (
  <DetailLeftSide />
);

export const DetailLeftSideBasic = Template.bind({});
