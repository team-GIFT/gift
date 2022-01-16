import React from 'react';
import {
  StyledLoadingSpinnerWrap,
  StyledLoadingSpinnerItem,
} from './LoadingSpinner.styled';
import { LoadingSpinnerProps } from './LoadingSpinner.types';

export function LoadingSpinner({
  size = 10,
}: LoadingSpinnerProps): JSX.Element {
  return (
    <StyledLoadingSpinnerWrap>
      <StyledLoadingSpinnerItem $size={size} />
    </StyledLoadingSpinnerWrap>
  );
}
