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
    isMarkerOpen: false,
    viewAll: true
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
    },

    setMarkerOpen: (state, action) => {
      state.isMarkerOpen = action.payload;
    },
    ViewSpecificRegionRange: (state) => {
      state.viewAll = false;
    },
    ViewAllRegion: (state) => {
      state.viewAll = true;
    }
  }
});

export const {
  changeCenter,
  searchThisText,
  mapCafeList,
  setCafeData,
  ViewSpecificRegionRange,
  ViewAllRegion,
  setMarkerOpen
} = mapSlice.actions;

export default mapSlice.reducer;
