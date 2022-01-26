import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { GiphyFetch, GifResult } from '@giphy/js-fetch-api';
import {
  AutoComplete,
  Channels,
  SearchSuggestions,
  MultiGifsById,
  IGif,
  RelatedProps,
  TermObject,
  TermObjectList,
  GifWithTagsResult,
  SearchProps,
  IUser,
} from './types/query';
import { IChannel } from '@giphy/js-types';

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

export const getSearchGifs = async ({ term, num, offset }: SearchProps) => {
  const { data: gifs } = await gf.search(term, {
    limit: num,
    offset: num * (offset ? offset : 0),
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

    getChannels: builder.query<IUser[], string>({
      query: (word) =>
        `channels/search?api_key=${GIPHY_API_KEY}&q=${word}&limit=4`,
      transformResponse: (response: { data: IChannel[] }) =>
        response.data.map((channel: IChannel) => channel.user),
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

    getGifWithTagsById: builder.query<GifWithTagsResult, string>({
      async queryFn(arg, queryApi, extraOptions, fetchWithBQ) {
        const responseDataById = await fetchWithBQ(
          `gifs/${arg}?api_key=${GIPHY_API_KEY}`
        );

        if (responseDataById.error) throw responseDataById.error;

        const { data: dataById } = responseDataById.data as GifResult;

        const result = await fetchWithBQ(
          `tags/related/${dataById.title}?api_key=${GIPHY_API_KEY}`
        );

        if (result.data) {
          const { data: tagsByTitle } = result.data as {
            data: TermObjectList;
          };

          return {
            data: {
              ...dataById,
              tags: tagsByTitle.map((o: TermObject) => o.name),
            } as unknown as GifWithTagsResult,
          };
        } else {
          return { error: result.error as FetchBaseQueryError };
        }
      },
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
  useGetGifWithTagsByIdQuery,
} = giphySearchApi;
