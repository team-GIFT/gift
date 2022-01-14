import React from 'react';
import { FormInputProps } from './FormInput.types';
import { Label, Input } from './FormInput.styled';
import A11yHidden from '../A11yHidden/A11yHidden';

export function FormInput({
  id,
  label,
  type = 'text',
  value = '',
  visibleLabel = true,
  children = '',
  inputProps = {},
  ...restProps
}: FormInputProps) {
  return (
    <div {...restProps}>
      {visibleLabel ? (
        <Label htmlFor={id}>{label}</Label>
      ) : (
        <A11yHidden as="label" htmlFor={id}>
          {label}
        </A11yHidden>
      )}
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={children}
        {...inputProps}
      />
    </div>
  );
}
