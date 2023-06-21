// import { createReducer } from '@reduxjs/toolkit';
// import { USER } from '../../Constants/actionTypse';
// import { INITIAL_STATE } from '../../Constants/initialState';
// import { setUser } from '../actions/user.actions';

// // export const userReducer = (state = INITIAL_STATE.user, action) => {
// //   switch (action.type) {
// //     case USER.setUser:
// //       return { ...action.payload };

// //     default:
// //       return state;
// //   }
// // };

// export const userReducer = createReducer(INITIAL_STATE.user, {
//   [setUser]: (state, action) => action.payload ,
// });
