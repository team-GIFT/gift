import React, { useEffect } from 'react';
import {
  StyledLoadingSpinnerWrap,
  StyledLoadingSpinnerItem,
} from './LoadingSpinner.styled';
import { LoadingSpinnerProps } from './LoadingSpinner.types';

const startNode: HTMLDivElement = document.getElementById(
  'loading-start'
) as HTMLDivElement;
const endNode: HTMLDivElement = document.getElementById(
  'loading-end'
) as HTMLDivElement;

export function LoadingSpinner({
  size = 10,
}: LoadingSpinnerProps): JSX.Element {
  useEffect(() => {
    startNode.setAttribute('rol', 'alert');
    startNode.insertAdjacentHTML(
      'beforeend',
      `<span class="a11yHidden">please wait while we gather your information, 
      Loading...</span>`
    );

    return () => {
      startNode.removeAttribute('role');
      startNode.innerHTML = '';
      endNode.insertAdjacentHTML(
        'beforeend',
        `<span class="a11yHidden">Loading has been completed</span>`
      );
      setTimeout(() => (endNode.innerHTML = ''), 2000);
    };
  }, []);

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
