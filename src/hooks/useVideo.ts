import { useLayoutEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [width, setWidth] = useState<string | null>(null);

  const { ref: observerRef, inView } = useInView({ triggerOnce: true });

  useLayoutEffect(() => {
    if (!videoRef.current) return;

    const $gridItem = videoRef.current.closest('.gridItem') as HTMLElement;

    setWidth($gridItem?.dataset.width as string);
  }, [inView]);

  return { width, observerRef, videoRef, inView };
};
