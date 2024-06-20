import { createSlice } from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    level: 3,
    position: {
      lat: 33.450701,
      lng: 126.570667
    },
    searchText: '',
    cafeList: [],
    selectedCafeData: {}
  },
  reducers: {
    changeCenter: (state, action) => {
      state.level = action.payload.level;
      state.position = action.payload.position;
    },
    searchThisText: (state, action) => {
      state.searchText = action.payload;
    },
    mapCafeList: (state, action) => {
      state.cafeList = action.payload;
    },
    setCafeData: (state, action) => {
      state.selectedCafeData = action.payload;
    }
  }
});

export const { changeCenter, searchThisText, mapCafeList, setCafeData } = mapSlice.actions;

export default mapSlice.reducer;
