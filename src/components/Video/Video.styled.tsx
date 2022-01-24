import styled from 'styled-components';
import { StyledVideoContainerProps } from './Video.types';

export const StyledVideoContainer = styled.div<StyledVideoContainerProps>`
  position: relative;
  height: 100%;

  &.clipsVideo,
  &.gridVideo {
    height: 0;
    padding-top: ${({ $width }) => ($width === '1' ? '112.5%' : '56.25%')};
  }
`;

export const StyledVideo = styled.video`
  position: absolute;
  object-fit: contain;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .gridVideo & {
    object-fit: cover;
  }
`;
