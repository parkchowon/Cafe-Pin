import { configureStore } from '@reduxjs/toolkit';
import arrangeOptionSlice from './slices/arrangeOptionSlice';
import isLoggedInSlice from './slices/isLoggedInSlice';
import hashtagSlice from './slices/hashtagSlice';
import mapSlice from './slices/mapSlice';
import postSlice from './slices/postSlice';
import cafeSearchTextSlice from './slices/cafeSearchTextSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    hashtag: hashtagSlice,
    arrangeOption: arrangeOptionSlice,
    isLoggedIn: isLoggedInSlice,
    map: mapSlice,
    cafeSearchText: cafeSearchTextSlice
  }
});

export default store;
