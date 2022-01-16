import styled from 'styled-components';
import { LoadingSpinnerItemProps } from './LoadingSpinner.types';
import { color } from '@/styles/theme';

export const StyledLoadingSpinnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLoadingSpinnerItem = styled.div<LoadingSpinnerItemProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin: 10px;
  background: ${color.green01};
`;
