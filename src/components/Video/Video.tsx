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
      <source src={src} type="video/mp4" />
      <p>
        이 문장은 여러분의 브라우저가 video 태그를 지원하지 않을 때 화면에
        표시됩니다!
      </p>
    </video>
  );
}
