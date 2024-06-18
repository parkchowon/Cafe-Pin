import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import hashtagSlice from './slices/hashtagSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    hashtag: hashtagSlice
  }
});

export default store;
