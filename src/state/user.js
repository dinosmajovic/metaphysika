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
    logOutUser: (state) => {
      state.token = null;
      state.userData = null;
      state.isAuthenticated = false;
      state.refreshToken = null;
    },
    setNewToken: (state, { payload }) => {
      state.token = payload.token;
      state.tokenExpirationTime = payload.expirationTime;
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
        console.log(error);
      }
    }
  };
export const { logInUser, logOutUser } = user.actions;
export default user.reducer;
