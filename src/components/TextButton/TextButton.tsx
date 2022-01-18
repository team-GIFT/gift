import React from 'react';
import { StyledTextButton } from './TextButton.styled';
import { TextButtonProps } from './TextButton.types';

export function TextButton({ children, ...restProps }: TextButtonProps) {
  return <StyledTextButton {...restProps}>{children}</StyledTextButton>;
}
