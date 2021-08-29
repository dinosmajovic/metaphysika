import { configureStore } from '@reduxjs/toolkit';
import createReducer from './reducer';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

const persistor = persistStore(store);
export { persistor, store };
