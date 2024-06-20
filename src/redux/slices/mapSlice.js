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
    selectedCafeData: {},
    address: '',
    viewAll: true
  },
  reducers: {
    setCurrentPositionAddress: (state, action) => {
      state.address = action.payload;
    },
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
    },
    ViewSpecificRegionRange: (state) => {
      state.viewAll = false;
    }
  }
});

export const {
  changeCenter,
  searchThisText,
  mapCafeList,
  setCafeData,
  setCurrentPositionAddress,
  ViewSpecificRegionRange
} = mapSlice.actions;

export default mapSlice.reducer;
