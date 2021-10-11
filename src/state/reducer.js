// Combine all reducers in this file and export the combined reducers //
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// ================== Reducers ================== //

import app from './app';
import payment from './payment';
import bag from './bag';
import wishlist from './wishlist';
import checkout from './checkout';
import product from './product';
import signUp from './signUp';
import user from './user';

// ================== Global app state ================== //

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app', 'bag', 'user']
};

const appReducer = combineReducers({
  app,
  payment,
  bag,
  wishlist,
  checkout,
  product,
  signUp,
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    localStorage.clear();
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const pReducer = persistReducer(persistConfig, rootReducer);

export default function createReducer() {
  return pReducer;
}
