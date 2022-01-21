import styled from 'styled-components';
import { StyledVideoContainerProps } from './Video.types';

export const StyledVideoContainer = styled.div<StyledVideoContainerProps>`
  position: relative;
  height: 0;
  padding-top: ${({ $width }) => ($width === '1' ? '100%' : '50%')};
`;

export const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;
