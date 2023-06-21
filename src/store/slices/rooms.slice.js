import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: INITIAL_STATE.rooms,
  reducers: {
    setRooms(state, action) {
      return action.payload;
    },
    clearRooms(state, action) {
      return INITIAL_STATE.rooms;
    },
  },
});

export const { setRooms, clearRooms } = roomsSlice.actions;

export const roomsReducer = roomsSlice.reducer;
