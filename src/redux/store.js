import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/postSlice';
import hashtagSlice from './slices/hashtagSlice';
import arrangeOptionSlice from './slices/arrangeOptionSlice';
import isLoggedInSlice from './slices/isLoggedInSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    hashtag: hashtagSlice,
    arrangeOption: arrangeOptionSlice,
    isLoggedIn: isLoggedInSlice
  }
});

export default store;
