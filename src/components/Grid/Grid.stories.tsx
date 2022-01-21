import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from './Grid';

export default {
  title: 'components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = () => <Grid />;

export const Grid1 = Template.bind({});
Grid1.args = {
  title: 'hihi',
  url: 'https://giphy.com/gifs/studiosoriginals-TmhCoUsBQrzWrcsqAd',
  preview: {
    height: 228,
    mp4: 'https://media2.giphy.com/media/TmhCoUsBQrzWrcsqAd/giphy-preview.mp4?cid=cba2429cg7wsgc2opasvqed5sf3rge2u3o45dpf2d2zmldey&rid=giphy-preview.mp4&ct=g',
    mp4_size: '38984',
    width: 304,
  },
  user: {
    image: 'https://media3.giphy.com/avatars/studiosoriginals/YkMcrX3ELQ7C.gif',
    link: 'https://giphy.com/studiosoriginals/',
    name: 'park',
  },
};
