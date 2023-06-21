import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';

export const adultsSlice = createSlice({
  name: 'adults',
  initialState: INITIAL_STATE.adults,
  reducers: {
    setAdults(state, action) {
      return action.payload;
    },
    clearAdults(state, action) {
      return INITIAL_STATE.adults;
    },
  },
});

export const { setAdults, clearAdults } = adultsSlice.actions;

export const adultsReducer = adultsSlice.reducer;
