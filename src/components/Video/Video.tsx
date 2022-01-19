import React from 'react';
import 'styled-components';
import { VideoProps } from './Video.types';

export function Video({ src, className }: VideoProps): JSX.Element {
  const isAutoPlayMode = true; // redux global 상태를 받아올 것

  return (
    <video
      className={className}
      autoPlay={isAutoPlayMode}
      loop={isAutoPlayMode}
      muted={true}
      playsInline={true}
      css={`
        width: 100%;
        pointer-events: none;
      `}
    >
      <source className="cardSource" data-src={src} type="video/mp4" />
      <p>
        This sentence appears on the screen when your browser does not support
        video tags!
      </p>
    </video>
  );
}
