import React from 'react';
import 'styled-components';
import { StyledVideoContainer, StyledVideo } from './Video.styled';
import { VideoProps } from './Video.types';
import { useVideo } from '@/hooks';

export function Video({ src, className }: VideoProps): JSX.Element {
  const isAutoPlayMode = true; // redux global 상태를 받아올 것
  const { width, observerRef, videoRef, inView } = useVideo();

  return (
    <StyledVideoContainer $width={width} ref={observerRef}>
      {inView && (
        <StyledVideo
          className={className}
          autoPlay={isAutoPlayMode}
          loop={isAutoPlayMode}
          ref={videoRef}
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
          <p>
            This sentence appears on the screen when your browser does not
            support video tags!
          </p>
        </StyledVideo>
      )}
    </StyledVideoContainer>
  );
}
