import styled from 'styled-components';
import { StyledA11yHiddenProps } from './A11yHidden.types';

export const StyledA11yHidden = styled.span`
  overflow: hidden;
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;

  caption& {
    position: static;
  }

  ${({ $focusable }: StyledA11yHiddenProps) =>
    $focusable &&
    `&:focus{
    visibility: initial;
    position: static;
    clip: auto;
    clip-path: unset;
    width: initial;
    height: initial;
    margin: initial;
    white-space: initial;
  }`}
`;
