import { CardProps } from '@/components/Card/Card.types';
import { Swiper } from 'swiper/types';

export interface CarouselCardsProps {
  cards: CardProps[];
}

export type OnLazyImageReadyProps = [
  swiper: Swiper,
  slideEl: HTMLElement,
  cardSource: HTMLElement
];

export * from '@/components/Card/Card.types';
