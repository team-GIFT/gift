import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowMoreLink } from './ArrowMoreLink';

export default {
  title: 'components/ArrowMoreLink',
  component: ArrowMoreLink,
} as ComponentMeta<typeof ArrowMoreLink>;

const Template: ComponentStory<typeof ArrowMoreLink> = (args) => (
  <ArrowMoreLink {...args} />
);

export const ArrowMoreLinkComponent = Template.bind({});
ArrowMoreLinkComponent.args = {
  label: 'more contents',
};
