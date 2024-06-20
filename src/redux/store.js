import { configureStore } from '@reduxjs/toolkit';
import arrangeOptionSlice from './slices/arrangeOptionSlice';
import isLoggedInSlice from './slices/isLoggedInSlice';
import hashtagSlice from './slices/hashtagSlice';
import mapSlice from './slices/mapSlice';

const store = configureStore({
  reducer: {
    hashtag: hashtagSlice,
    arrangeOption: arrangeOptionSlice,
    isLoggedIn: isLoggedInSlice,
    map: mapSlice
  }
});

export default store;
