import React, { useCallback } from 'react';
import Swiper, { Navigation, Keyboard, A11y, Lazy } from 'swiper';
import { SwiperSlide, SwiperProps } from 'swiper/react';
import { StyledSlider } from './Carousel.styled';
import {
  CarouselCardsProps,
  OnLazyImageReadyProps,
  CardProps,
} from './Carousel.types';
import { Card } from '@/components';
import { getFocusableElements } from '@/utils/focusOrTabbable';

export function Carousel({ cards }: CarouselCardsProps): JSX.Element {
  const createSlide = (cardProps: CardProps, key: number) => {
    return (
      <SwiperSlide key={key}>
        <Card {...cardProps} />
      </SwiperSlide>
    );
  };

  const handleA11y = useCallback((swiper: Swiper) => {
    Array.from(swiper.slides).forEach(($slide) => {
      $slide.classList.contains('swiper-slide-visible')
        ? $slide.setAttribute('aria-hidden', 'false')
        : $slide.setAttribute('aria-hidden', 'true');

      $slide?.classList.contains('swiper-slide-visible') &&
      $slide.nextElementSibling?.classList.contains('swiper-slide-visible')
        ? getFocusableElements($slide).forEach(($el) => ($el.tabIndex = 0))
        : getFocusableElements($slide).forEach(($el) => ($el.tabIndex = -1));
    });
  }, []);

  const settings: SwiperProps = {
    modules: [Navigation, Keyboard, A11y, Lazy],
    lazy: { elementClass: 'cardSource' },
    slidesPerGroupAuto: true,
    slidesPerView: 'auto',
    navigation: true,
    keyboard: { enabled: true },
    watchSlidesProgress: true,
    onLazyImageReady(...props: OnLazyImageReadyProps) {
      const [, , cardSource] = props;
      (cardSource.parentNode as HTMLVideoElement).load();
    },
    onTransitionEnd: handleA11y,
    onAfterInit: handleA11y,
  };

  return <StyledSlider {...settings}>{cards.map(createSlide)}</StyledSlider>;
}
