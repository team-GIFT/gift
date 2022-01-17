import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GlobalNav } from './GlobalNav';

export default {
  title: 'components/ChannelInfo',
  component: GlobalNav,
} as ComponentMeta<typeof GlobalNav>;

// TODO: Doesn't appear
const Template: ComponentStory<typeof GlobalNav> = () => <GlobalNav />;

export const GNBBasic = Template.bind({});
GNBBasic.args = {
  listItems: [
    { id: 'reactions', href: '/reactions', text: 'Reactions' },
    { id: 'entertainment', href: '/entertainment', text: 'Entertainment' },
    { id: 'sports', href: '/sports', text: 'Sports' },
    { id: 'stickers', href: '/stickers', text: 'Stickers' },
    { id: 'artists', href: '/artists', text: 'Artists' },
    { id: 'more', href: '/more', text: '...' },
  ],
};
