import { configureStore } from '@reduxjs/toolkit';
import mapSlice from './slices/mapSlice';
import postSlice from './slices/postSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    map: mapSlice
  }
});

export default store;
