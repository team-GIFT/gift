import { CardProps } from '@/components/Card/Card.types';
export interface GridProps {
  gifs: CardProps[];
  forwardRef:
    | React.RefObject<HTMLDivElement>
    | ((instance: HTMLDivElement | null) => void)
    | null
    | undefined;
}
export interface StyledGridItemProps {
  'data-width': string;
}
