// Combine all reducers in this file and export the combined reducers //
import { combineReducers } from 'redux';

// ================== Reducers ================== //

import brands from './brands';

// ================== Global app state ================== //

const appReducer = combineReducers({
  brands
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default function createReducer() {
  return rootReducer;
}
