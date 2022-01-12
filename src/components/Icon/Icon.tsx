import React from 'react';

type IconType =
  | 'favorite'
  | 'favorite-added'
  | 'link'
  | 'more'
  | 'search'
  | 'search'
  | 'sound-off'
  | 'sound-on'
  | 'verified';

interface IconProps {
  type: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

export function Icon({
  type,
  width = 64,
  height = 64,
  fill = 'currentColor',
}: IconProps) {
  return (
    <>
      <svg width={width} height={height} fill={fill}>
        <use href={`#${type}`} />
      </svg>
    </>
  );
}
