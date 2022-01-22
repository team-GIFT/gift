import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { getTrendingGifs, getTrendingClips } from '@/services';
import { GiphyStateProps, CardProps, Response } from './giphy.types';

export const fetchTrendingGifs = createAsyncThunk(
  'gifs/trending',
  async () => await getTrendingGifs()
);

export const fetchTrendingClips = createAsyncThunk(
  'clips/trending',
  async () => await getTrendingClips()
);

const initialState: GiphyStateProps = { isLoading: true, data: [] };

const giphySlice = createSlice({
  name: 'giphy',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTrendingGifs.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTrendingGifs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(...action.payload);
    });

    builder.addCase(fetchTrendingGifs.rejected, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTrendingClips.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTrendingClips.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(...action.payload);
    });

    builder.addCase(fetchTrendingClips.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const cardSelector = createSelector(
  (state: Response) => state.giphy.isLoading,
  (state: Response) => state.giphy.data,
  (isLoading, data) => ({
    isLoading,
    cards: data.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export default giphySlice.reducer;
