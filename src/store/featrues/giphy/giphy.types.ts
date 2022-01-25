import { IGif } from '@giphy/js-types';

export interface GiphyStateProps {
  trendingGifs: {
    items: IGif[];
    isLoading: boolean;
  };
  artistGifs: {
    items: IGif[];
    isLoading: boolean;
  };
  trendingClips: {
    items: IGif[];
    isLoading: boolean;
  };
  storyGifs: {
    items: IGif[];
    isLoading: boolean;
  };
  relatedGifs: {
    items: IGif[];
    isLoading: boolean;
  };
  relatedStickers: {
    items: IGif[];
    isLoading: boolean;
  };
}

export interface Response {
  giphy: GiphyStateProps;
}

export interface RelatedProps {
  id: string;
  num: number;
  offset?: number;
}

export { CardProps } from '@/components/Card/Card.types';

export { IGif } from '@giphy/js-types';
