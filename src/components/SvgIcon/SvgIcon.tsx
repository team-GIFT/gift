import React from 'react';
import sprites from './sprites.svg';
import { SvgIconProps } from './SvgIcon.type';
export function SvgIcon({
  id,
  label = undefined,
  width,
  height,
  fill = 'currentColor',
}: SvgIconProps) {
  return (
    <>
      <svg
        role="img"
        aria-label={label}
        width={width}
        height={height}
        fill={fill}
      >
        {label && <title>{label}</title>}
        <use href={`${sprites}#${id}`} />
      </svg>
    </>
  );
}
