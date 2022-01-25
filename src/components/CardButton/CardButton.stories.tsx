import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardButton } from './CardButton';

export default {
  title: 'components/CardButton',
  component: CardButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof CardButton>;

const Template: ComponentStory<typeof CardButton> = (args) => (
  <CardButton {...args} />
);

export const FavoriteButton = Template.bind({});
FavoriteButton.args = {
  buttonName: 'favorite',
  'aria-label': 'favorite',
  isTextMode: true,
  children: 'favorite',
};

export const ClipboardButton = Template.bind({});
ClipboardButton.args = {
  buttonName: 'clipboard',
  'aria-label': 'clipboard',
  isTextMode: true,
  children: 'clipboard',
};

export const ShareButton = Template.bind({});
ShareButton.args = {
  buttonName: 'share',
  'aria-label': 'share',
  isTextMode: true,
  children: 'share',
};

export const EmbedButton = Template.bind({});
EmbedButton.args = {
  buttonName: 'embed',
  'aria-label': 'embed',
  isTextMode: true,
  children: 'embed',
};

export const MuteButton = Template.bind({});
MuteButton.args = {
  buttonName: 'mute',
  'aria-label': 'mute',
};

export const NonMuteButton = Template.bind({});
NonMuteButton.args = {
  buttonName: 'nonMute',
  'aria-label': 'non mute',
};
