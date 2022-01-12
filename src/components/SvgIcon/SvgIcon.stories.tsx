import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SvgIcon } from './SvgIcon';

export default {
  title: 'components/SvgIcon',
  component: SvgIcon,
  argTypes: {
    id: {
      options: ['favorite', 'link', 'more'],
      control: { type: 'radio' },
    },
    width: { control: 30 },
    height: { control: 30 },
    fill: { control: /(background\|color)$/i },
  },
  parameters: {
    componentSubtitle: 'id를 통해 필요한 아이콘을 표시합니다.',
  },
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = args => <SvgIcon {...args} />;

export const IdTypes = Template.bind({});
IdTypes.args = {
  id: 'verified',
};

IdTypes.parameters = {
  docs: {
    storyDescription: 'description test',
  },
};

export const Sizes = Template.bind({});
Sizes.args = {
  id: 'sizes',
};
