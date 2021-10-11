import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './user';
import axios from 'axios';

const slice = createSlice({
  name: 'app',
  initialState: {
    isInitialized: false,
    isInitInProgress: false,
    error: null
  },
  reducers: {
    // initialize
    initializeRequest: (state, { payload }) => {
      state.isInitInProgress = true;
    },
    initializeSuccess: (state, { payload }) => {
      state.isInitInProgress = false;
      state.isInitialized = true;
    },
    initializeFailure: (state, { payload }) => {
      state.isInitInProgress = false;
      state.isInitialized = true;
      state.error = payload;
    },
    clearError: (state, { payload }) => {
      state.error = null;
    }
  }
});

const { actions } = slice;

const getToken = () => {
  const root = JSON.parse(window.localStorage.getItem('persist:root'));
  const user = JSON.parse(root.user);

  return user.token;
};

export const initialize = () => async (dispatch) => {
  dispatch(actions.initializeRequest());
  try {
    if (!!getToken()) {
      const token = getToken();

      await axios.get(`/verifyToken?token=${token}`);

      dispatch(updateUser({ isAuthenticated: true }));

      dispatch(actions.initializeSuccess());
    } else {
      dispatch(actions.initializeFailure('error'));
    }
  } catch (error) {
    dispatch(actions.initializeFailure('error'));
  }
};

export const { clearError } = slice.actions;

export default slice.reducer;
