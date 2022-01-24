import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from './Carousel';

export default {
  title: 'components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

const cards = [
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
  {
    title: 'hihi',
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
      name: 'park',
    },
  },
];

export const Carousel1 = Template.bind({});
Carousel1.args = {
  cards,
};
