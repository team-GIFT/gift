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

export interface GetAutoCompleteQuery {
  data: Term[];
  meta: Meta;
}

export interface GetChannelsQuery extends Result {
  data: IChannel[];
}

export interface GetSearchSuggestionsQuery {
  data: Term[];
  meta: Meta;
}

export interface GetGifByIdQuery {
  data: IGif;
  meta: Meta;
}

export interface GetGifsByIdQuery extends Result {
  data: IGif[];
}
