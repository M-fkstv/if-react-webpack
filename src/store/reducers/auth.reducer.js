// import { createReducer } from '@reduxjs/toolkit';
// import { AUTH } from '../../Constants/actionTypse';
// import { INITIAL_STATE } from '../../Constants/initialState';
// import { setAuthStatus } from '../actions/auth.actions';

// // export const authReducer = (state = INITIAL_STATE.auth, action) => {
// //   switch (action.type) {
// //     case AUTH.setStatus:
// //       return { ...state, status: action.payload };

// //     default:
// //       return state;
// //   }
// // };

// export const authReducer = createReducer(INITIAL_STATE.auth,{
//   [setAuthStatus]:(state, action) => ({...state, status: action.payload }),
// });
