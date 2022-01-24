import { configureStore } from '@reduxjs/toolkit';

import { giphySearchApi } from '@/services';
import rootReducer from './featrues';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const { NODE_ENV } = process.env;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => {
    return [...defaultMiddleware(), giphySearchApi.middleware];
  },
  devTools: NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
