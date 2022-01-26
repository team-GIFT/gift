import { Result, GifResult } from '@giphy/js-fetch-api';
import { IChannel, IGif } from '@giphy/js-types';

interface Meta {
  msg: string;
  response_id: string;
  status: number;
}

interface Term {
  name: string;
  analytics_response_payload: string;
}

export interface AutoComplete {
  data: Term[];
  meta: Meta;
}

export interface Channels extends Result {
  data: IChannel[];
}

export type SearchSuggestions = Term[];

export interface MultiGifsById extends Result {
  data: IGif[];
}

export interface RelatedProps {
  id: string;
  num: number;
  offset?: number;
}

export type TermObject = {
  name: string;
};

export type TermObjectList = TermObject[];

export type GifWithTagsResult = GifResult &
  IGif & {
    source: string;
    title: string;
    images: {
      original: {
        webp: string;
      };
    };
    tags: string[];
  };

export { IGif } from '@giphy/js-types';
