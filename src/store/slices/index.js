import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';
import { authReducer } from './auth.slice';
import { availableReducer } from './available.slice';

import storage from 'redux-persist/lib/storage';
import { availableHotels1 } from '../../services/availableHotelsAPI';
import { availableHot } from '../../services/getAvailable';
import { themeReducer } from './theme.slice';
import { adultsReducer } from './adults.slice';
import { childrenAgeReducer, childrenReducer } from './childrens.slice';
import { roomsReducer } from './rooms.slice';
import { dateFromRreducer, dateToRreducer } from './date.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    availableHot.reducerPath,
    // availableHotels1.reducerPath,
  ],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme: themeReducer,
    auth: authReducer,
    user: userReducer,
    adults: adultsReducer,
    children: childrenReducer,
    childrenAge: childrenAgeReducer,
    dateFrom: dateFromRreducer,
    dateTo: dateToRreducer,
    rooms: roomsReducer,
    [availableHot.reducerPath]: availableHot.reducer,
    // availableHotels: availableReducer,
  }),
);
