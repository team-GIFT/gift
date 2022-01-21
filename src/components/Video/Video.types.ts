import { RefObject } from 'react';

export interface VideoProps {
  src: string;
  className?: string;
}

export interface StyledVideoContainerProps {
  $width: string | null;
  ref: RefObject<HTMLDivElement>;
}
