import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { getTrendingGifs, getTrendingClips, getArtistGifs } from '@/services';
import { GiphyStateProps, CardProps, Response } from './giphy.types';

export const fetchTrendingGifs = createAsyncThunk(
  'gifs/trending',
  async () => await getTrendingGifs()
);

export const fetchArtistGifs = createAsyncThunk(
  'gifs/artist',
  async () => await getArtistGifs()
);

export const fetchTrendingClips = createAsyncThunk(
  'clips/trending',
  async () => await getTrendingClips()
);

const initialState: GiphyStateProps = {
  isLoading: {
    trendingGifs: true,
    trendingClips: true,
    artistGifs: true,
  },
  gifs: {
    trendingGifs: [],
    trendingClips: [],
    artistGifs: [],
  },
};

const giphySlice = createSlice({
  name: 'giphy',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTrendingGifs.pending, (state) => {
      state.isLoading.trendingGifs = true;
    });

    builder.addCase(fetchTrendingGifs.fulfilled, (state, action) => {
      state.isLoading.trendingGifs = false;
      state.gifs.trendingGifs.push(...action.payload);
    });

    builder.addCase(fetchTrendingGifs.rejected, (state) => {
      state.isLoading.trendingGifs = true;
    });

    builder.addCase(fetchArtistGifs.pending, (state) => {
      state.isLoading.artistGifs = true;
    });

    builder.addCase(fetchArtistGifs.fulfilled, (state, action) => {
      state.isLoading.artistGifs = false;
      state.gifs.artistGifs.push(...action.payload);
    });

    builder.addCase(fetchArtistGifs.rejected, (state) => {
      state.isLoading.artistGifs = true;
    });

    builder.addCase(fetchTrendingClips.pending, (state) => {
      state.isLoading.trendingClips = true;
    });

    builder.addCase(fetchTrendingClips.fulfilled, (state, action) => {
      state.isLoading.trendingClips = false;
      state.gifs.trendingClips.push(...action.payload);
    });

    builder.addCase(fetchTrendingClips.rejected, (state) => {
      state.isLoading.trendingClips = true;
    });
  },
});

export const trendingGifsSelector = createSelector(
  (state: Response) => state.giphy.isLoading.trendingGifs,
  (state: Response) => state.giphy.gifs,
  (trendingGifs, gifs) => ({
    isLoading: trendingGifs,
    cards: gifs.trendingGifs.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export const artistGifsSelector = createSelector(
  (state: Response) => state.giphy.isLoading.artistGifs,
  (state: Response) => state.giphy.gifs,
  (artistGifs, gifs) => ({
    isLoading: artistGifs,
    cards: gifs.artistGifs.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export const trendingClipsSelector = createSelector(
  (state: Response) => state.giphy.isLoading.trendingClips,
  (state: Response) => state.giphy.gifs,
  (trendingClips, gifs) => ({
    isLoading: trendingClips,
    cards: gifs.trendingClips.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export default giphySlice.reducer;
