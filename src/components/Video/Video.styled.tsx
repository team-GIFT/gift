import styled from 'styled-components';
import { StyledVideoContainerProps } from './Video.types';
import { px2rem } from '@/styles/utils';

export const StyledVideoContainer = styled.div<StyledVideoContainerProps>`
  position: relative;
  height: 100%;

  &.clipsVideo,
  &.gridVideo {
    height: 0;
    padding-top: ${({ $width }) => ($width === '1' ? '112.5%' : '55.113%')};
  }
  overflow: hidden;

  &.gridVideo:hover video {
    transform: scale(1.2);
  }

  border-radius: ${px2rem(8)};
`;

export const StyledVideo = styled.video`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  border-radius: ${px2rem(8)};
  transition: ease all 0.25s;
`;
