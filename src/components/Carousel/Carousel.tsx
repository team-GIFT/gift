import React, { useCallback } from 'react';
import { StyledSlider } from './Carousel.styled';
import { CarouselCardsProps, CardProps } from './Carousel.types';
import { Card } from '@/components';

export function Carousel({ cards }: CarouselCardsProps): JSX.Element {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    // lazyLoad: true,
    variableWidth: true,
  };

  const createSlide = useCallback((cardProps, key) => {
    return (
      <div key={key}>
        <Card {...cardProps} />
      </div>
    );
  }, []);

  return (
    <div>
      <h2> Single Item</h2>
      <StyledSlider {...settings}>
        {cards.map((cardProps: CardProps, index: number) =>
          createSlide(cardProps, index)
        )}
      </StyledSlider>
    </div>
  );
}
