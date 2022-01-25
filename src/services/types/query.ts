import { Result } from '@giphy/js-fetch-api';
import { IChannel, IGif } from '@giphy/js-types';

interface Meta {
  msg: string;
  response_id: string;
  status: number;
}

interface Term {
  name: string;
}

export interface AutoComplete {
  data: Term[];
  meta: Meta;
}

export interface Channels extends Result {
  data: IChannel[];
}

export interface SearchSuggestions {
  data: Term[];
  meta: Meta;
}

export interface MultiGifsById extends Result {
  data: IGif[];
}

export interface RelatedProps {
  id: string;
  num: number;
  offset?: number;
}
export { IGif } from '@giphy/js-types';
