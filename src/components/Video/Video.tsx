import React, { useRef, useLayoutEffect, useState } from 'react';
import 'styled-components';
import { StyledVideoContainer, StyledVideo } from './Video.styled';
import { VideoProps } from './Video.types';

export function Video({ src, className }: VideoProps): JSX.Element {
  const isAutoPlayMode = true; // redux global 상태를 받아올 것
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const $gridItem = ref.current.closest('.gridItem') as HTMLElement | null;

    setWidth($gridItem?.dataset.width as string);
  }, []);

  return (
    <StyledVideoContainer $width={width} ref={ref}>
      <StyledVideo
        className={className}
        autoPlay={isAutoPlayMode}
        loop={isAutoPlayMode}
        muted
        playsInline
      >
        <source className="cardSource" src={src} type="video/mp4" />
        <p>
          This sentence appears on the screen when your browser does not support
          video tags!
        </p>
      </StyledVideo>
    </StyledVideoContainer>
  );
}
