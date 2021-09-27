// Combine all reducers in this file and export the combined reducers //
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// ================== Reducers ================== //

import brands from './brands';
import payment from './payment';
import bag from './bag';
import wishlist from './wishlist';
import checkout from './checkout';
import product from './product';

// ================== Global app state ================== //

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bag', 'wishlist']
};

const appReducer = combineReducers({
  brands,
  payment,
  bag,
  wishlist,
  checkout,
  product
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return appReducer(state, action);
};

const pReducer = persistReducer(persistConfig, rootReducer);

export default function createReducer() {
  return pReducer;
}
