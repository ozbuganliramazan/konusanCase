import {configureStore} from '@reduxjs/toolkit';
import contentSlice from './favoritesReducer';

export const store = configureStore({
  reducer: {
    content: contentSlice,
  },
});
