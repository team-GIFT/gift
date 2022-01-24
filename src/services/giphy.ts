import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(GIPHY_API_KEY);

export const getTrendingGifs = async () => {
  const { data: gifs } = await gf.trending({ limit: 25 });
  return gifs;
};

export const getTrendingClips = async () => {
  const { data: clips } = await gf.trending({ type: 'videos', limit: 3 });
  return clips;
};

export const getArtistGifs = async () => {
  const { data: gifs } = await gf.gifs('art-design', 'illustration');
  return gifs;
};

export const giphySearchApi = createApi({
  reducerPath: 'giphySearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/' }),

  endpoints: (builder) => ({
    getAutoComplete: builder.query({
      query: (word) => `gifs/search/tags?api_key=${GIPHY_API_KEY}&q=${word}`,
    }),

    getChannels: builder.query({
      query: (word) => `channels/search?api_key=${GIPHY_API_KEY}&q=${word}`,
    }),

    getSearchSuggestions: builder.query({
      query: (word) => `tags/related/${word}?api_key=${GIPHY_API_KEY}`,
    }),

    getGifById: builder.query({
      query: (id) => `gifs/${id}?api_key=${GIPHY_API_KEY}`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetAutoCompleteQuery,
  useGetChannelsQuery,
  useGetSearchSuggestionsQuery,
  useGetGifByIdQuery,
} = giphySearchApi;
