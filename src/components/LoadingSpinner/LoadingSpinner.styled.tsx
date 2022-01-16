import styled, { keyframes } from 'styled-components';
import { LoadingSpinnerItemProps } from './LoadingSpinner.types';
import { color } from '@/styles/theme';

const loading = keyframes`
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(1.5) translateY(-10px);

  }
  100% {
    transform: scale(1) translateY(0);

  }
`;

export const StyledLoadingSpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLoadingSpinnerItem = styled.div<LoadingSpinnerItemProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin: 10px;
  animation: ${loading} 1s infinite;
  background: ${({ $color }) => {
    return color[$color];
  }};
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
  &:nth-child(5) {
    animation-delay: 0.8s;
  }
`;
