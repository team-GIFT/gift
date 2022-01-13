import React from 'react';
import { StyledA11yHidden } from './A11yHidden.styled';
import { A11yHiddenProps } from './A11yHidden.types';

function A11yHidden({
  $focusable,
  children,
  ...restProps
}: A11yHiddenProps): JSX.Element {
  return (
    <StyledA11yHidden $focusable={$focusable} {...restProps}>
      {children && children}
    </StyledA11yHidden>
  );
}

export default React.memo(A11yHidden);
