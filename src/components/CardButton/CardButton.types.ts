import { FlattenSimpleInterpolation } from 'styled-components';
import { MouseEventHandler } from 'react';

export interface ButtonInfoProps {
  favorite: {
    backgroundUrl: string;
    animation: FlattenSimpleInterpolation;
  };

  clipboard: {
    backgroundUrl: string;
    animation: FlattenSimpleInterpolation;
  };

  share: {
    backgroundUrl: string;
    animation: FlattenSimpleInterpolation;
  };

  embed: {
    backgroundUrl: string;
    animation: FlattenSimpleInterpolation;
  };

  mute?: {
    backgroundUrl: string;
  };

  nonMute?: {
    backgroundUrl: string;
  };
}

export interface CardButtonProps {
  buttonName: keyof ButtonInfoProps;
  ['aria-label']: string;
  isTextMode?: boolean;
  children?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps {
  $name: keyof ButtonInfoProps;
  $isTextMode: boolean;
}
