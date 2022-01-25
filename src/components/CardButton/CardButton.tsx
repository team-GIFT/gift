import React from 'react';
import { StyledButton, StyledIcon, StyledSpan } from './CardButton.styled';
import { CardButtonProps } from './CardButton.types';

export function CardButton({
  buttonName,
  isTextMode = false,
  onClick,
  children,
  ...restProps
}: CardButtonProps) {
  return (
    <StyledButton
      type="button"
      $name={buttonName}
      $isTextMode={isTextMode}
      onClick={onClick}
      {...restProps}
    >
      {isTextMode && <StyledIcon $name={buttonName} $isTextMode={isTextMode} />}
      {isTextMode && <StyledSpan>{children}</StyledSpan>}
    </StyledButton>
  );
}
