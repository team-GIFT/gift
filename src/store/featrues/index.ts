import { combineReducers } from 'redux';

import giphyReducer from './giphy/giphy';
import { giphySearchApi } from '@/services/giphy';

export default combineReducers({
  giphy: giphyReducer,
  [giphySearchApi.reducerPath]: giphySearchApi.reducer,
});
