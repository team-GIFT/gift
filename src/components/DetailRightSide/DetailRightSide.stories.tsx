import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DetailRightSide } from './DetailRightSide';

export default {
  title: 'components/DetailRightSide',
  component: DetailRightSide,
} as ComponentMeta<typeof DetailRightSide>;

const Template: ComponentStory<typeof DetailRightSide> = () => (
  <DetailRightSide />
);

export const DetailRightSideBasic = Template.bind({});
