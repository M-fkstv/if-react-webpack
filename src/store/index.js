import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { rootReducer } from './slices';
import { availableHot } from '../services/getAvailable';
import { availableHotels1 } from '../services/availableHotelsAPI';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
        // add hotels to blacklist
      },
    }).concat([availableHot.middleware]),
});

export const persistor = persistStore(store);
