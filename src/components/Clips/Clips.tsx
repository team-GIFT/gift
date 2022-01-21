import React from 'react';
import {
  StyledSection,
  StyledWrapper,
  StyledPrimaryCard,
} from './Clips.styled';
import { Card } from '@/components';

export function Clips() {
  const card = {
    // redux global로 받아올 것
    title: 'hihi',
    url: 'https://giphy.com/gifs/lego-baby-yoda-legos-lego-star-wars-holiday-special-l7fdqmHQ1jCg2HzQlx',
    preview: {
      height: 238,
      width: 423,
      mp4_size: '26021',
      mp4: 'https://media4.giphy.com/media/zWGsVQuMFQUfaY3lTu/giphy.mp4?cid=cba2429c38f8yhuyvnaicqo7xzpmnptwffvsd7eyizrz88lx&rid=giphy.mp4&ct=v',
    },
    user: {
      image: 'https://media3.giphy.com/channel_assets/lego/OZpuno6GstOM.png',
      link: 'https://giphy.com/lego/',
      name: 'park',
    },
    containerType: 'clips',
  };

  return (
    <StyledSection className="clips">
      <StyledPrimaryCard {...card} />
      <StyledWrapper>
        <Card {...card} />
        <Card {...card} />
      </StyledWrapper>
    </StyledSection>
  );
}
