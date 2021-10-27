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
    isLoading: false,
    isError: false,
    errorMessage: '',
    isDeleted: false,
    isPasswordChanged: false,
    profileIsEdited: false
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
    },

    deleteUserRequest: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    },

    deleteUserSuccess: (state, { payload }) => {
      state.isDeleted = true;
      state.isLoading = false;
    },

    deleteUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    },

    changePasswordRequest: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
      state.isPasswordChanged = false;
    },
    changePasswordSuccess: (state) => {
      state.isPasswordChanged = true;
      state.isError = false;
      state.isLoading = false;
    },
    changePasswordFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    },

    onCloseError: (state, { payload }) => {
      state.isError = false;
      state.errorMessage = '';
    },

    onEditProfileRequest: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
      state.profileIsEdited = false;
    },

    onEditProfileSuccess: (state, { payload }) => {
      state.profileIsEdited = true;
      state.isError = false;
      state.isLoading = false;
    },
    onEditProfileFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    },

    resetMyProfileMessages: (state) => {
      state.isError = false;
      state.isDeleted = false;
      state.isPasswordChanged = false;
      state.profileIsEdited = false;
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

export const deleteUser =
  ({ password }) =>
  async (dispatch, getState) => {
    dispatch(actions.deleteUserRequest());
    try {
      await axios.delete('user', {
        params: { password, email: getState().user.userData.email }
      });

      dispatch(actions.deleteUserSuccess());
      dispatch({ type: 'RESET_APP' });
    } catch (error) {
      const errorMessage = {
        title: error.response.data.title,
        description: error.response.data.description
      };

      dispatch(actions.deleteUserFailure(errorMessage));
    }
  };

export const changePassword =
  ({ currentPassword, newPassword }) =>
  async (dispatch, getState) => {
    dispatch(actions.changePasswordRequest());

    try {
      const changePassword = await axios.post('/changePassword', {
        currentPassword,
        newPassword,
        email: getState().user.userData.email
      });

      const { token, refreshToken } = changePassword.data;
      const { userData } = getState().user;
      const tokenExpirationTime = parseInt(
        changePassword.data.tokenExpirationTime
      );

      dispatch(
        actions.logInUser({
          token,
          tokenExpirationTime,
          refreshToken,
          userData
        })
      );
      dispatch(actions.changePasswordSuccess());
    } catch (error) {
      const errorMessage = {
        title: error.response.data.title,
        description: error.response.data.description
      };

      dispatch(actions.changePasswordFailure(errorMessage));
    }
  };

export const onEditProfile =
  ({ form }) =>
  async (dispatch, getState) => {
    dispatch(actions.onEditProfileRequest());
    const email = getState().user.userData.email;

    try {
      const changeData = await axios.post('/editProfile', {
        form,
        email
      });

      const { token, refreshToken, userData } = changeData.data;
      const tokenExpirationTime = parseInt(changeData.data.tokenExpirationTime);

      dispatch(
        actions.logInUser({
          token,
          tokenExpirationTime,
          refreshToken,
          userData
        })
      );
      dispatch(actions.onEditProfileSuccess());
    } catch (error) {
      const errorMessage = {
        title: error.response.data.title,
        description: error.response.data.description
      };

      dispatch(actions.onEditProfileFailure(errorMessage));
    }
  };

export const { logInUser, updateUser, onCloseError, resetMyProfileMessages } =
  user.actions;
export default user.reducer;
