import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Card1 = Template.bind({});
Card1.args = {
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
  },
};

export const Card2 = Template.bind({});
Card2.args = {
  url: 'https://giphy.com/gifs/lego-baby-yoda-legos-lego-star-wars-holiday-special-l7fdqmHQ1jCg2HzQlx',
  preview: {
    height: 238,
    width: 423,
    mp4_size: '26021',
    mp4: 'https://media2.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy-preview.mp4?cid=cba2429cw0fac1emonrgvmysazoia3kme3u2zirwfhrjex1x&rid=giphy-preview.mp4&ct=g',
  },
  user: {
    image: 'https://media3.giphy.com/channel_assets/lego/OZpuno6GstOM.png',
    link: 'https://giphy.com/lego/',
  },
};

export const Card3 = Template.bind({});
Card3.args = {
  url: 'https://giphy.com/gifs/cbs-kids-say-the-darndest-things-darnedest-season-2-z8XtwKGIRQSBCmU4sW',
  preview: {
    height: 200,
    width: 200,
    mp4_size: '24329',
    mp4: 'https://media4.giphy.com/media/z8XtwKGIRQSBCmU4sW/giphy-preview.mp4?cid=cba2429cw0fac1emonrgvmysazoia3kme3u2zirwfhrjex1x&rid=giphy-preview.mp4&ct=g',
  },
  user: {
    image: 'https://media3.giphy.com/avatars/cbs/pIz1VJ98eZf3.png',
    link: 'https://giphy.com/cbs/',
  },
};

export const Card4 = Template.bind({});
Card4.args = {
  url: 'https://giphy.com/gifs/theoffice-the-office-episode-23-tv-DhstvI3zZ598Nb1rFf',
  preview: {
    height: 124,
    width: 148,
    mp4_size: '45194',
    mp4: 'https://media2.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-preview.mp4?cid=cba2429cw0fac1emonrgvmysazoia3kme3u2zirwfhrjex1x&rid=giphy-preview.mp4&ct=g',
  },
  user: {
    image: 'https://media0.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg',
    link: 'https://giphy.com/theoffice/',
  },
};

export const Card5 = Template.bind({});
Card5.args = {
  url: 'https://giphy.com/gifs/happy-birthday-zM4tBLfudy0rS',
  preview: {
    height: 202,
    width: 371,
    mp4_size: '27040',
    mp4: 'https://media3.giphy.com/media/zM4tBLfudy0rS/giphy-preview.mp4?cid=cba2429c5pxvvcbb6cjjfw4t6pu7lf41mry1kbt2he444hpo&rid=giphy-preview.mp4&ct=g',
  },
};

{
  /* <div className="card">
  <a href="#">
    <video autoplay loop><source src="" type="" /></video>
  </a>
  <div className="button-group">
    <button type="button" />
    <button type="button" />
  </div>
  <a href="#"></a>
</div> */
}
