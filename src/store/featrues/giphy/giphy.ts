import {
  createSlice,
  createAsyncThunk,
  createSelector,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  getTrendingGifs,
  getTrendingClips,
  getArtistGifs,
  getStoryGifs,
} from '@/services';
import { GiphyStateProps, CardProps, Response, IGif } from './giphy.types';

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

export const fetchStoryGifs = createAsyncThunk(
  'gifs/story',
  async (offset: number) => await getStoryGifs(offset)
);

const initialState: GiphyStateProps = {
  trendingGifs: { items: [], isLoading: true },
  trendingClips: { items: [], isLoading: true },
  artistGifs: { items: [], isLoading: true },
  storyGifs: { items: [], isLoading: true },
};

const giphySlice = createSlice({
  name: 'giphy',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTrendingGifs.pending, (state) => {
      state.trendingGifs.isLoading = true;
    });

    builder.addCase(
      fetchTrendingGifs.fulfilled,
      (state, action: PayloadAction<IGif[]>) => {
        state.trendingGifs.isLoading = false;
        state.trendingGifs.items.push(...action.payload);
      }
    );

    builder.addCase(fetchTrendingGifs.rejected, (state) => {
      state.trendingGifs.isLoading = true;
    });

    builder.addCase(fetchArtistGifs.pending, (state) => {
      state.artistGifs.isLoading = true;
    });

    builder.addCase(
      fetchArtistGifs.fulfilled,
      (state, action: PayloadAction<IGif[]>) => {
        state.artistGifs.isLoading = false;
        state.artistGifs.items.push(...action.payload);
      }
    );

    builder.addCase(fetchArtistGifs.rejected, (state) => {
      state.artistGifs.isLoading = true;
    });

    builder.addCase(fetchTrendingClips.pending, (state) => {
      state.trendingClips.isLoading = true;
    });

    builder.addCase(
      fetchTrendingClips.fulfilled,
      (state, action: PayloadAction<IGif[]>) => {
        state.trendingClips.isLoading = false;
        state.trendingClips.items.push(...action.payload);
      }
    );

    builder.addCase(fetchTrendingClips.rejected, (state) => {
      state.trendingClips.isLoading = true;
    });

    builder.addCase(fetchStoryGifs.pending, (state) => {
      state.storyGifs.isLoading = true;
    });

    builder.addCase(
      fetchStoryGifs.fulfilled,
      (state, action: PayloadAction<IGif[]>) => {
        state.storyGifs.isLoading = false;
        state.storyGifs.items.push(...action.payload);
      }
    );

    builder.addCase(fetchStoryGifs.rejected, (state) => {
      state.storyGifs.isLoading = true;
    });
  },
});

export const trendingGifsSelector = createSelector(
  (state: Response) => state.giphy.trendingGifs.isLoading,
  (state: Response) => state.giphy.trendingGifs.items,
  (isLoading, items) => ({
    isLoading,
    gifs: items.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export const artistGifsSelector = createSelector(
  (state: Response) => state.giphy.artistGifs.isLoading,
  (state: Response) => state.giphy.artistGifs.items,
  (isLoading, items) => ({
    isLoading,
    gifs: items.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export const trendingClipsSelector = createSelector(
  (state: Response) => state.giphy.trendingClips.isLoading,
  (state: Response) => state.giphy.trendingClips.items,
  (isLoading, items) => ({
    isLoading,
    gifs: items.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export const storyGifsSelector = createSelector(
  (state: Response) => state.giphy.storyGifs.isLoading,
  (state: Response) => state.giphy.storyGifs.items,
  (isLoading, items) => ({
    isLoading,
    gifs: items.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
      })
    ),
  })
);

export default giphySlice.reducer;
