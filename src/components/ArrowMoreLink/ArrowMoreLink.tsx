import React from 'react';
import { StyledArrowMoreLink } from './ArrowMoreLink.styled';
import { ArrowMoreLinkProps } from './ArrowMoreLink.types';
import { SvgIcon } from '@/components';

export function ArrowMoreLink({
  label,
  href = '#',
}: ArrowMoreLinkProps): JSX.Element {
  return (
    <StyledArrowMoreLink href={href}>
      {label}
      <SvgIcon id="flech-sharp" width={11} height={13} />
    </StyledArrowMoreLink>
  );
}
