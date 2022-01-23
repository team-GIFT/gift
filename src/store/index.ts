import { configureStore } from '@reduxjs/toolkit';

import { giphySearchApi } from '@/services';
import rootReducer from './featrues';

const { NODE_ENV } = process.env;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => {
    return [...defaultMiddleware(), giphySearchApi.middleware];
  },
  devTools: NODE_ENV !== 'production',
});
