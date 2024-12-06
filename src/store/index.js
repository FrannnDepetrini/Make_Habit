import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer from './auth.slice';
import habitReducer from './habit.slice';
import modalReducer from './modal.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    habit: habitReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
