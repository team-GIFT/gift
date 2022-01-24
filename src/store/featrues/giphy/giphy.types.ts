import { IGif } from '@giphy/js-types';

export interface GiphyStateProps {
  isLoading: {
    trendingGifs: boolean;
    artistGifs: boolean;
    trendingClips: boolean;
  };
  gifs: {
    trendingGifs: IGif[];
    artistGifs: IGif[];
    trendingClips: IGif[];
  };
}

export interface Response {
  giphy: GiphyStateProps;
}

export { CardProps } from '@/components/Card/Card.types';
