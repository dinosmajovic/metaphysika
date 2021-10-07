import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const user = createSlice({
  name: 'user',
  initialState: {
    token: null,
    refreshToken: null,
    tokenExpirationTime: null,
    isAuthenticated: false,
    userData: null,
    isLoading: false
  },
  reducers: {
    logInUser: (state, { payload }) => {
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.tokenExpirationTime = payload.tokenExpirationTime;
      state.userData = payload.userData;
      state.isAuthenticated = true;
    },

    setNewToken: (state, { payload }) => {
      state.token = payload.token;
      state.tokenExpirationTime = payload.expirationTime;
    },

    updateUser: (state, { payload }) => {
      state.isAuthenticated = payload.isAuthenticated;
    }
  }
});

const { actions } = user;

export const refreshUserToken =
  (refreshToken) => async (dispatch, getState) => {
    if (getState().user.refreshToken && getState().user.isAuthenticated) {
      try {
        const getNewToken = await axios.post('/refreshUserToken', {
          refreshToken
        });

        const { token, expirationTime } = getNewToken.data;

        dispatch(
          actions.setNewToken({
            token,
            expirationTime: parseInt(expirationTime)
          })
        );
      } catch (error) {
        dispatch({ type: 'RESET_APP' });
      }
    }
  };

export const { logInUser, updateUser } = user.actions;
export default user.reducer;
