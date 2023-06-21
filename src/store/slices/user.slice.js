import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
