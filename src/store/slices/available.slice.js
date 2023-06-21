import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';

export const availableHotelsSlice = createSlice({
  name: 'availableHotels',
  initialState: INITIAL_STATE.availableHotels,
  reducers: {
    setAvailableHotels(state, action) {
      return action.payload;
    },
  },
});

export const { setAvailableHotels } = availableHotelsSlice.actions;

export const availableReducer = availableHotelsSlice.reducer;
