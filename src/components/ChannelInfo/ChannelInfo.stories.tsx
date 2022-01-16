import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChannelInfo } from './ChannelInfo';

export default {
  title: 'components/ChannelInfo',
  component: ChannelInfo,
} as ComponentMeta<typeof ChannelInfo>;

const Template: ComponentStory<typeof ChannelInfo> = (args) => (
  <ChannelInfo {...args} />
);

export const ChannelBasic = Template.bind({});
ChannelBasic.args = {
  imgUrl: 'http://placehold.it/50x50',
  channelLink: '#',
  userName: '임씨 유저 소형',
  channelName: '@sosoyim',
  size: 50,
  verified: true,
  useUserName: true,
  useChannelName: true,
};

export const ChannelAvailableForWorking = Template.bind({});
ChannelAvailableForWorking.args = {
  imgUrl: 'http://placehold.it/50x50',
  channelLink: '#',
  userName: '임씨 유저 소형',
  channelName: '@sosoyim',
  size: 50,
  useUserName: true,
  useChannelName: true,
  isAvailableForWorking: true,
};

export const ChannelOnlyImage = Template.bind({});
ChannelOnlyImage.args = {
  imgUrl: 'http://placehold.it/50x50',
  channelLink: '#',
  userName: '임씨 유저 소형',
  channelName: '@sosoyim',
  size: 50,
  onlyProfileImage: true,
  marginRight: 0,
};

export const ChannelOnlyUserName = Template.bind({});
ChannelOnlyUserName.args = {
  imgUrl: 'http://placehold.it/50x50',
  channelLink: '#',
  userName: '임씨 유저 소형',
  channelName: '@sosoyim',
  size: 25,
  marginRight: 8,
  useUserName: true,
  useChannelName: false,
};

export const ChannelOnlyChannelName = Template.bind({});
ChannelOnlyChannelName.args = {
  imgUrl: 'http://placehold.it/50x50',
  channelLink: '#',
  userName: '임씨 유저 소형',
  channelName: '@sosoyim',
  size: 25,
  marginRight: 8,
  useUserName: false,
  useChannelName: true,
  verified: true,
};
