import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from './Grid';

export default {
  title: 'components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Grid1 = Template.bind({});
Grid1.args = {
  forwardRef: null,
  gifs: [
    {
      id: 'DhstvI3zZ598Nb1rFf',
      title: 'Happy Season 9 GIF by The Office',
      original: {
        height: 200,
        width: 240,
        mp4_size: '469325',
        mp4: 'https://media3.giphy.com/media/DhstvI3zZ598Nb1rFf/200.mp4?cid=cba2429cw627bkmacznc09drp80gocuuk91ea9paptej81m3&rid=200.mp4&ct=g',
      },
      user: {
        avatar_url:
          'https://media1.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg',
        username: 'theoffice',
        display_name: 'The Office',
        description: 'The official Giphy page for The Office on Peacock.',
        instagram_url: 'https://instagram.com/theoffice',
        is_verified: true,
        profile_url: 'https://giphy.com/theoffice/',
      },
    },
  ],
};
