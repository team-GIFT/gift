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
  onClick() {
    console.log('byde');
  },
};

export const ClipboardButton = Template.bind({});
ClipboardButton.args = {
  buttonName: 'clipboard',
  'aria-label': 'clipboard',
  // onClick() {
  // console.log('byde');
  // },
};

export const ShareButton = Template.bind({});
ShareButton.args = {
  buttonName: 'share',
  'aria-label': 'share',
  onClick() {
    console.log('bye');
  },
};

export const EmbedButton = Template.bind({});
EmbedButton.args = {
  buttonName: 'embed',
  'aria-label': 'embed',
  onClick() {
    console.log('bye');
  },
};

export const MuteButton = Template.bind({});
MuteButton.args = {
  buttonName: 'mute',
  'aria-label': 'mute',
  onClick() {
    console.log('bye');
  },
};

export const NonMuteButton = Template.bind({});
NonMuteButton.args = {
  buttonName: 'nonMute',
  'aria-label': 'non mute',
  onClick() {
    console.log('bye');
  },
};
