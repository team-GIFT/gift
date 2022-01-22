import { IGif } from '@giphy/js-types';

export interface GiphyStateProps {
  isLoading: boolean;
  data: IGif[];
}

export interface Response {
  giphy: GiphyStateProps;
}

export { CardProps } from '@/components/Card/Card.types';
