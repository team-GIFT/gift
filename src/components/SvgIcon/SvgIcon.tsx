import React from 'react';
import sprites from './sprites.svg';

type SvgIconId =
  | 'favorite'
  | 'link'
  | 'more'
  | 'search'
  | 'search'
  | 'sound-off'
  | 'sound-on'
  | 'verified';

interface SvgIconProps {
  id: SvgIconId;
  width?: number;
  height?: number;
  fill?: string;
}

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
