import React from 'react';
import { StyledCommonWrapper } from './Wrapper.styled';
import { WrapperProps } from './Wrapper.types';

export function Wrapper({ ...restProps }: WrapperProps) {
  return <StyledCommonWrapper {...restProps} />;
}
