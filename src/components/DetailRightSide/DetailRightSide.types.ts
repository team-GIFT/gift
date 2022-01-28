import { CardProps } from '@/components/Card/Card.types';
import { GifWithTagsResult } from '@/services/types/query';

export interface DetailRightSideProps {
  data: GifWithTagsResult;
  relatedGifs: CardProps[];
  relatedStickers: CardProps[];
  forwardRef:
    | React.RefObject<HTMLDivElement>
    | ((instance: HTMLDivElement | null) => void)
    | null
    | undefined;
}
