import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const wishlist = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistProducts: null,
    isLoading: false,
    isError: false
  },
  reducers: {
    // GET WISHLIST
    getWishlistRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getWishlistSuccess: (state, { payload }) => {
      state.wishlistProducts = payload;
      state.isLoading = false;
    },
    getWishlistFailure: (state) => {
      state.isError = true;
      state.isLoading = false;
    },

    // DELETE FROM WISHLIST
    deleteFromWishlistRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    deleteFromWishlistSuccess: (state, { payload }) => {
      state.isLoading = false;
    },
    deleteFromWishlistFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },

    // DELETE FROM WISHLIST
    addToWishlistRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    addToWishlistSuccess: (state, { payload }) => {
      state.isLoading = false;
    },
    addToWishlistFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

const { actions } = wishlist;

export const addToWishlist = (payload) => async (dispatch) => {
  const { productId, token } = payload;

  dispatch(actions.addToWishlistRequest());

  try {
    await axios.get('/addToWishlist', {
      params: {
        token,
        productId
      }
    });

    await dispatch(getWishlist({ token }));

    dispatch(actions.addToWishlistSuccess());
  } catch {
    dispatch(actions.addToWishlistFailure());
  }
};

export const deleteFromWishlist = (payload) => async (dispatch) => {
  const { productId, token } = payload;

  dispatch(actions.deleteFromWishlistRequest());

  try {
    await axios.get('/deleteFromWishlist', {
      // delete(`/wishlist/${productId}`)
      params: {
        token,
        productId
      }
    });

    await dispatch(getWishlist({ token }));

    dispatch(actions.deleteFromWishlistSuccess());
  } catch {
    dispatch(actions.deleteFromWishlistFailure());
  }
};

export const getWishlist =
  ({ token }) =>
  async (dispatch) => {
    dispatch(actions.getWishlistRequest());

    try {
      const getWishlist = await axios.get('/wishlist', {
        params: {
          token
        }
      });

      const wishlistProducts = getWishlist.data;

      dispatch(actions.getWishlistSuccess(wishlistProducts));
    } catch (error) {
      dispatch(actions.getWishlistFailure());
    }
  };

export const { setWishlistProducts, clearError } = wishlist.actions;

export default wishlist.reducer;
