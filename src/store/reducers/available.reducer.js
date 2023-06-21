// import { createReducer } from '@reduxjs/toolkit';
// // import { AVAILABLE } from '../../Constants/actionTypse';
// import { INITIAL_STATE } from '../../Constants/initialState';
// import { setAvailableHotels } from '../actions/available.actions';

// // export const availableReducer = (state = INITIAL_STATE.availableHotels, action) => {
// //   switch (action.type) {
// //     case AVAILABLE.setAvailable:
// //       return [...action.payload];

// //     default:
// //       return state;
// //   }
// // };

// export const availableReducer = createReducer(INITIAL_STATE.availableHotels, {
//   [setAvailableHotels]: (state, action) => action.payload,
// });
