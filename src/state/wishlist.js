import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addOrDeleteFromWishlist = createAsyncThunk(
  'addOrDeleteFromWishlist',
  async (data, { rejectWithValue }) => {
    const { isAuthenticated } = data;
    const { token } = data;
    const { productId } = data;

    if (isAuthenticated) {
      try {
        const addOrDeleteFromWishlist = await axios.post(
          '/addOrDeleteFromWishlist',
          {
            token,
            productId
          }
        );

        return addOrDeleteFromWishlist.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    } else {
      const errorMessage = {
        title: 'Unauthorized',
        description: 'Please log in to use wishlist'
      };
      return rejectWithValue(errorMessage);
    }
  }
);

export const wishlist = createSlice({
  name: 'wishlist',
  initialState: {
    isLoading: false,
    actionType: null,
    isError: false,
    errorMessage: {
      title: '',
      description: ''
    }
  },
  reducers: {
    setWishlistProducts: (state, { payload }) => {
      state.wishlistProducts = payload;
    }
  },

  extraReducers: {
    [addOrDeleteFromWishlist.pending]: (state) => {
      state.isLoading = true;
    },
    [addOrDeleteFromWishlist.fulfilled]: (state, { payload }) => {
      state.actionType = payload;
      state.isError = false;
      state.isLoading = false;
    },
    [addOrDeleteFromWishlist.rejected]: (state, { payload }) => {
      state.errorMessage = {
        title: payload.title,
        description: payload.description
      };
      state.isError = true;
      state.isLoading = false;
    }
  }
});

export const { setWishlistProducts } = wishlist.actions;

export default wishlist.reducer;
