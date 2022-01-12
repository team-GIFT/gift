import React from 'react';
import sprites from './sprites.svg';
import { SvgIconProps } from './SvgIcon.type';
export function SvgIcon({
  id,
  width = 64,
  height = 64,
  fill = 'currentColor',
}: SvgIconProps) {
  return (
    <>
      <svg width={width} height={height} fill={fill}>
        <use href={`${sprites}#${id}`} />
      </svg>
    </>
  );
}
