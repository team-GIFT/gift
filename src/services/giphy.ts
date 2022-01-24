import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import {
  GetAutoCompleteQuery,
  GetChannelsQuery,
  GetSearchSuggestionsQuery,
  GetGifByIdQuery,
  GetGifsByIdQuery,
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
  const { data: gifs } = await gf.trending({ limit: 25, offset });
  return gifs;
};

export const giphySearchApi = createApi({
  reducerPath: 'giphySearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/' }),

  endpoints: (builder) => ({
    getAutoComplete: builder.query<GetAutoCompleteQuery, string>({
      query: (word) => `gifs/search/tags?api_key=${GIPHY_API_KEY}&q=${word}`,
    }),

    getChannels: builder.query<GetChannelsQuery, string>({
      query: (word) => `channels/search?api_key=${GIPHY_API_KEY}&q=${word}`,
    }),

    getSearchSuggestions: builder.query<GetSearchSuggestionsQuery, string>({
      query: (word) => `tags/related/${word}?api_key=${GIPHY_API_KEY}`,
    }),

    getGifById: builder.query<GetGifByIdQuery, string>({
      query: (id) => `gifs/${id}?api_key=${GIPHY_API_KEY}`,
      transformResponse: (response) => response.data,
    }),

    getGifsById: builder.query<GetGifsByIdQuery, string>({
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
