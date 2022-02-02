import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Video } from './Video';

export default {
  title: 'components/Video',
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Video1 = Template.bind({});
Video1.args = {
  style: {
    width: 500,
    height: 281.25,
  },
  src: 'https://media2.giphy.com/media/TmhCoUsBQrzWrcsqAd/giphy-preview.mp4?cid=cba2429cg7wsgc2opasvqed5sf3rge2u3o45dpf2d2zmldey&rid=giphy-preview.mp4&ct=g',
};
