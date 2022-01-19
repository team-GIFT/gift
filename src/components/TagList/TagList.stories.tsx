import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagList } from './TagList';

export default {
  title: 'components/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = (args) => (
  <TagList {...args} />
);

export const basciTagList = Template.bind({});
// basciTagList.args = {
//   height: 50,
// };
