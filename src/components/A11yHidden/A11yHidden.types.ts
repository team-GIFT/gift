import React from 'react';

export interface A11yHiddenProps {
  $focusable?: boolean;
  restProps?: object;
  // TODO: htmlFor
  htmlFor?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
}

export interface StyledA11yHiddenProps {
  $focusable?: boolean;
}
