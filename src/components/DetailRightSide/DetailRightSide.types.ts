import { CardProps } from './../Card/Card.types';
import { GifWithTagsResult } from '@/services/types/query';

export interface DetailRightSideProps {
  data: GifWithTagsResult;
  relatedGifs: CardProps;
  relatedStickers: CardProps;
}
