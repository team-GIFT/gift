import React from 'react';
import sprites from './sprites.svg';
import { SvgIconProps } from './SvgIcon.type';
export function SvgIcon({
  id,
  label = undefined,
  width = 64,
  height = 64,
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
        <use href={`${sprites}#${id}`} />
      </svg>
    </>
  );
}
