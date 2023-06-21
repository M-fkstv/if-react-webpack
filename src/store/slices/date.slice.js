import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';

export const dateFromSlice = createSlice({
  name: 'dateFrom',
  initialState: INITIAL_STATE.dateFrom,
  reducers: {
    setDateFrom(state, action) {
      return action.payload;
    },
  },
});

export const dateToSlice = createSlice({
  name: 'dateTo',
  initialState: INITIAL_STATE.dateTo,
  reducers: {
    setDateTo(state, action) {
      return action.payload;
    },
  },
});

export const { setDateFrom } = dateFromSlice.actions;
export const { setDateTo } = dateToSlice.actions;

export const dateFromRreducer = dateFromSlice.reducer;
export const dateToRreducer = dateToSlice.reducer;
