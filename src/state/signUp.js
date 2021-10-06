import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signUpUser = createAsyncThunk(
  'signUp',
  async (userData, { rejectWithValue }) => {
    const password = userData.password;
    const email = userData.email;

    try {
      const user = await axios.post('/signInUser', {
        email,
        password
      });

      return user.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const signUp = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    token: null,
    isAuthenticated: false,
    isError: false,
    errorDescripition: null,
    errorTitle: null
  },
  reducers: {
    closeError: (state, { payload }) => {
      state.isError = payload;
    }
  },
  extraReducers: {
    [signUpUser.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = payload;
    },
    [signUpUser.rejected]: (state, { payload }) => {
      state.errorDescripition = payload.errorDescripition;
      state.errorTitle = payload.errorTitle;
      state.isError = true;
      state.isLoading = false;
    }
  }
});

export const { closeError } = signUp.actions;
export default signUp.reducer;
