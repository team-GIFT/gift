import React, { useCallback } from 'react';
import Swiper, { Navigation, Keyboard, A11y } from 'swiper';
import { SwiperSlide, SwiperProps } from 'swiper/react';
import { StyledSlider } from './Carousel.styled';
import { CarouselCardsProps, CardProps } from './Carousel.types';
import { Card } from '@/components';
import { getFocusableElements } from '@/utils';

export function Carousel({ cards, height }: CarouselCardsProps): JSX.Element {
  const createSlide = (cardProps: CardProps, index: number) => {
    return (
      <SwiperSlide key={index}>
        <Card height={height} {...cardProps} />
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
    modules: [Navigation, Keyboard, A11y],
    slidesPerGroupAuto: true,
    slidesPerView: 'auto',
    navigation: true,
    // keyboard: { enabled: true },
    watchSlidesProgress: true,
    onTransitionEnd: handleA11y,
    onAfterInit: handleA11y,
  };

  return <StyledSlider {...settings}>{cards.map(createSlide)}</StyledSlider>;
}
