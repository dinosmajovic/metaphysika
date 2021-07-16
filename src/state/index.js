import { configureStore } from '@reduxjs/toolkit';
import createReducer from './reducer';

export const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
