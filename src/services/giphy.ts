import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import {
  AutoComplete,
  Channels,
  SearchSuggestions,
  MultiGifsById,
  IGif,
  RelatedProps,
} from './types/query';

const gf = new GiphyFetch(GIPHY_API_KEY);

export const getTrendingGifs = async () => {
  const { data: gifs } = await gf.trending({ limit: 25 });
  return gifs;
};

export const getArtistGifs = async () => {
  const { data: gifs } = await gf.gifs('art-design', 'illustration');
  return gifs;
};

export const getTrendingClips = async () => {
  const { data: clips } = await gf.trending({ type: 'videos', limit: 3 });
  return clips;
};

export const getStoryGifs = async (offset: number) => {
  const { data: gifs } = await gf.trending({ limit: 25, offset: 25 * offset });
  return gifs;
};

export const getRelatedGifs = async ({ id, num, offset }: RelatedProps) => {
  const { data: gifs } = await gf.related(id, {
    limit: num,
    type: 'gifs',
    offset: num * (offset ? offset : 0),
  });
  return gifs;
};

export const getRelatedStickers = async ({ id, num }: RelatedProps) => {
  const { data: gifs } = await gf.related(id, {
    limit: num,
    type: 'stickers',
  });
  return gifs;
};

export const giphySearchApi = createApi({
  reducerPath: 'giphySearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/' }),

  endpoints: (builder) => ({
    getAutoComplete: builder.query<AutoComplete, string>({
      query: (word) => `gifs/search/tags?api_key=${GIPHY_API_KEY}&q=${word}`,
    }),

    getChannels: builder.query<Channels, string>({
      query: (word) => `channels/search?api_key=${GIPHY_API_KEY}&q=${word}`,
    }),

    getSearchSuggestions: builder.query<SearchSuggestions, string>({
      query: (word) => `tags/related/${word}?api_key=${GIPHY_API_KEY}`,
      transformResponse: (response: { data: SearchSuggestions }) =>
        response.data,
    }),

    getGifById: builder.query<IGif, string>({
      query: (id) => `gifs/${id}?api_key=${GIPHY_API_KEY}`,
      transformResponse: (response: { data: IGif }) => response.data,
    }),

    getGifsById: builder.query<MultiGifsById, string>({
      query: (id) => `gifs?api_key=${GIPHY_API_KEY}&ids=${id}`,
    }),
  }),
});

export const {
  useGetAutoCompleteQuery,
  useGetChannelsQuery,
  useGetSearchSuggestionsQuery,
  useGetGifByIdQuery,
  useGetGifsByIdQuery,
} = giphySearchApi;
