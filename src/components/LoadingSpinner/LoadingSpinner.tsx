import React from 'react';
import {
  StyledLoadingSpinnerWrap,
  StyledLoadingSpinnerItem,
} from './LoadingSpinner.styled';
import { LoadingSpinnerProps } from './LoadingSpinner.types';

export function LoadingSpinner({
  size = 10,
}: LoadingSpinnerProps): JSX.Element {
  const spinnerItems: string[] = [
    'green01',
    'blue01',
    'violet01',
    'pink01',
    'yellow01',
  ];
  const spinnerItem = spinnerItems.map((color) => (
    <StyledLoadingSpinnerItem key={color} $size={size} $color={color} />
  ));
  return <StyledLoadingSpinnerWrap>{spinnerItem}</StyledLoadingSpinnerWrap>;
}
