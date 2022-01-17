import React from 'react';
import { StyledButton } from './CardButton.styled';
import { CardButtonProps } from './CardButton.types';

export function CardButton(props: CardButtonProps) {
  return (
    <StyledButton
      type="button"
      $name={props.buttonName}
      // onClick={props.onClick}
      aria-label={props['aria-label']}
    />
  );
}
