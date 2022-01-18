import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextButton } from './TextButton';
import { TextButtonProps } from './TextButton.types';

export default {
  title: 'components/TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = ({
  children,
  ...restProps
}: TextButtonProps) => <TextButton {...restProps}>{children}</TextButton>;

export const TextButtonBasic = Template.bind({});
TextButtonBasic.args = {};
