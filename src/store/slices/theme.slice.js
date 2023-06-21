import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: INITIAL_STATE.theme,
  reducers: {
    setTheme(state, action) {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
