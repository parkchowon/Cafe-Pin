import { createSlice } from '@reduxjs/toolkit';

const checkAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    return true;
  } else {
    return false;
  }
};

const initialState = {
  isLoggedIn: checkAccessToken()
};

const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState: initialState,
  reducers: {
    SWITCH_TO_LOGGED_IN: (state) => {
      state.isLoggedIn = true;
    },
    SWITCH_TO_LOGGED_OUT: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const { SWITCH_TO_LOGGED_IN, SWITCH_TO_LOGGED_OUT } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
