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
  getRelatedGifs,
  getRelatedStickers,
  getSearchGifs,
} from '@/services';
import {
  GiphyStateProps,
  CardProps,
  Response,
  IGif,
  RelatedProps,
  SearchProps,
} from './giphy.types';

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

export const fetchRelatedGifs = createAsyncThunk(
  'gifs/related',
  async ({ id, num, offset }: RelatedProps) =>
    await getRelatedGifs({ id, num, offset })
);

export const fetchRelatedStickers = createAsyncThunk(
  'stickers/related',
  async ({ id, num }: RelatedProps) => await getRelatedStickers({ id, num })
);

export const fetchSearchGifs = createAsyncThunk(
  'gifs/search',
  async ({ term, num, offset }: SearchProps) =>
    await getSearchGifs({ term, num, offset })
);

const initialState: GiphyStateProps = {
  trendingGifs: { items: [], isLoading: true },
  trendingClips: { items: [], isLoading: true },
  artistGifs: { items: [], isLoading: true },
  storyGifs: { items: [], isLoading: true },
  relatedGifs: { items: [], isLoading: true },
  relatedStickers: { items: [], isLoading: true },
  searchGifs: { items: [], isLoading: true },
};

const giphySlice = createSlice({
  name: 'giphy',
  initialState,

  reducers: {
    resetSearchGifs(state) {
      state.searchGifs.items = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRelatedGifs.pending, (state) => {
      state.relatedGifs.isLoading = true;
    });

    builder.addCase(
      fetchRelatedGifs.fulfilled,
      (state, action: PayloadAction<IGif[]>) => {
        state.relatedGifs.isLoading = false;
        state.relatedGifs.items.push(...action.payload);
      }
    );

    builder.addCase(fetchRelatedGifs.rejected, (state) => {
      state.relatedGifs.isLoading = true;
    });

    builder.addCase(fetchRelatedStickers.pending, (state) => {
      state.relatedStickers.isLoading = true;
    });

    builder.addCase(
      fetchRelatedStickers.fulfilled,
      (state, action: PayloadAction<IGif[]>) => {
        state.relatedStickers.isLoading = false;
        state.relatedStickers.items.push(...action.payload);
      }
    );

    builder.addCase(fetchRelatedStickers.rejected, (state) => {
      state.relatedStickers.isLoading = true;
    });

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

    builder.addCase(fetchSearchGifs.pending, (state) => {
      state.searchGifs.isLoading = true;
    });

    builder.addCase(
      fetchSearchGifs.fulfilled,
      (state, action: PayloadAction<IGif[]>) => {
        state.searchGifs.isLoading = false;
        state.searchGifs.items.push(...action.payload);
      }
    );

    builder.addCase(fetchSearchGifs.rejected, (state) => {
      state.searchGifs.isLoading = true;
    });
  },
});

export const trendingGifsSelector = createSelector(
  (state: Response) => state.giphy.trendingGifs.isLoading,
  (state: Response) => state.giphy.trendingGifs.items,
  (isLoading, items) => ({
    isLoading,
    gifs: items.map(
      ({ id, title, images, user }): CardProps => ({
        id,
        title,
        original: images.fixed_height,
        user,
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
      ({ id, title, images, user }): CardProps => ({
        id,
        title,
        original: images.fixed_height,
        user,
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
      ({ id, title, images, user }): CardProps => ({
        id,
        title,
        original: images.original_mp4,
        user,
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
      ({ id, title, images, user }): CardProps => ({
        id,
        title,
        original: images.fixed_height,
        user,
      })
    ),
  })
);

export const relatedGifsSelector = createSelector(
  (state: Response) => state.giphy.relatedGifs.isLoading,
  (state: Response) => state.giphy.relatedGifs.items,
  (isLoading, items) => ({
    isLoading,
    gifs: items.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.fixed_height,
      })
    ),
  })
);

export const relatedStickersSelector = createSelector(
  (state: Response) => state.giphy.relatedStickers.isLoading,
  (state: Response) => state.giphy.relatedStickers.items,
  (isLoading, items) => ({
    isLoading,
    gifs: items.map(
      ({ id, title, images }): CardProps => ({
        id,
        title,
        original: images.fixed_height,
      })
    ),
  })
);

export const searchGifsSelector = createSelector(
  (state: Response) => state.giphy.searchGifs.isLoading,
  (state: Response) => state.giphy.searchGifs.items,
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

export const { resetSearchGifs } = giphySlice.actions;

export default giphySlice.reducer;
