import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstHashtagClick: true,
  hashtagStates: {
    '커피 맛집': true,
    '디저트 맛집': true,
    '분위기 좋은': true,
    '데이트 명소': true,
    '공부하기 좋은': true,
    '단체모임 가능': true
  }
};

const hashtagSlice = createSlice({
  name: 'hashtag',
  initialState: initialState,
  reducers: {
    SWITCH_HASHTAG_ONOFF: (state, action) => {
      state.hashtagStates[action.payload] = !state.hashtagStates[action.payload];
      if (
        Object.values(state.hashtagStates).every((value) => {
          return value === false;
        })
      ) {
        state.hashtagStates['커피 맛집'] = true;
        state.hashtagStates['디저트 맛집'] = true;
        state.hashtagStates['분위기 좋은'] = true;
        state.hashtagStates['데이트 명소'] = true;
        state.hashtagStates['공부하기 좋은'] = true;
        state.hashtagStates['단체모임 가능'] = true;
      }
    },
    INITIAL_SWITCH_HASHTAG_ONOFF: (state, action) => {
      state.hashtagStates['커피 맛집'] = false;
      state.hashtagStates['디저트 맛집'] = false;
      state.hashtagStates['분위기 좋은'] = false;
      state.hashtagStates['데이트 명소'] = false;
      state.hashtagStates['공부하기 좋은'] = false;
      state.hashtagStates['단체모임 가능'] = false;
      state.hashtagStates[action.payload] = !state.hashtagStates[action.payload];
      state.firstHashtagClick = false;
    },
    SWITCH_ON_ALL_HASHTAG: (state) => {
      state.hashtagStates['커피 맛집'] = true;
      state.hashtagStates['디저트 맛집'] = true;
      state.hashtagStates['분위기 좋은'] = true;
      state.hashtagStates['데이트 명소'] = true;
      state.hashtagStates['공부하기 좋은'] = true;
      state.hashtagStates['단체모임 가능'] = true;
    }
  }
});

export const { INITIAL_SWITCH_HASHTAG_ONOFF, SWITCH_HASHTAG_ONOFF, SWITCH_ON_ALL_HASHTAG } = hashtagSlice.actions;
export default hashtagSlice.reducer;
