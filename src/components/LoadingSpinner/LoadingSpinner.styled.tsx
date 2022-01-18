import styled, { keyframes } from 'styled-components';
import { LoadingSpinnerItemProps } from './LoadingSpinner.types';

interface Color {
  white: string;
  black: string;
  gray04: string;
  gray05: string;
  gray06: string;
  violet01: string;
  violet02: string;
  pink01: string;
  green01: string;
  blue01: string;
  yellow01: string;
}
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
  background: ${({ $color, theme }) => {
    return theme.color[$color as keyof Color];
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
