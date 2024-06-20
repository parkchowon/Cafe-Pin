import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import hashtagSlice from './slices/hashtagSlice';
import arrangeOptionSlice from './slices/arrangeOptionSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    hashtag: hashtagSlice,
    arrangeOption: arrangeOptionSlice
  }
});

export default store;
