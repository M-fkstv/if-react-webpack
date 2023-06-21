import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../Constants/initialState';

export const childrenSlice = createSlice({
  name: 'children',
  initialState: INITIAL_STATE.children,
  reducers: {
    setChildren(state, action) {
      return action.payload;
    },
    clearChildren(state, action) {
      return INITIAL_STATE.children;
    },
  },
});

export const childrenAgeSlice = createSlice({
  name: 'childrenAge',
  initialState: INITIAL_STATE.childrenAge,
  reducers: {
    setChildrenAge(state, action) {
      return [...state, action.payload];
    },
    removeAge(state, action) {
      return [...action.payload];
    },
    updateAge(state, action) {
      return [...action.payload];
    },
    clearAge(state, action) {
      return INITIAL_STATE.childrenAge;
    },
  },
});

export const { setChildren, clearChildren } = childrenSlice.actions;
export const { setChildrenAge, clearAge, removeAge, updateAge } = childrenAgeSlice.actions;

export const childrenReducer = childrenSlice.reducer;
export const childrenAgeReducer = childrenAgeSlice.reducer;
