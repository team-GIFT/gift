import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubMenu } from './SubMenu';

export default {
  title: 'components/SubMenu',
  component: SubMenu,
} as ComponentMeta<typeof SubMenu>;

const Template: ComponentStory<typeof SubMenu> = () => <SubMenu />;

export const SubMenuBasic = Template.bind({});
