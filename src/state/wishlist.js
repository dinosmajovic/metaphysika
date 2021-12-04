import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'api';

export const wishlist = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistProducts: null,
    isLoading: false,
    loadingProductId: null,
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
    deleteFromWishlistRequest: (state, { payload }) => {
      state.loadingProductId = payload.productId;
      state.isLoading = true;
      state.isError = false;
    },
    deleteFromWishlistSuccess: (state) => {
      state.loadingProductId = null;
      state.isLoading = false;
    },
    deleteFromWishlistFailure: (state) => {
      state.loadingProductId = null;
      state.isLoading = false;
      state.isError = true;
    },

    // ADD TO WISHLIST
    addToWishlistRequest: (state, { payload }) => {
      state.loadingProductId = payload.productId;
      state.isLoading = true;
      state.isError = false;
    },
    addToWishlistSuccess: (state) => {
      state.loadingProductId = null;
      state.isLoading = false;
    },
    addToWishlistFailure: (state) => {
      state.loadingProductId = null;
      state.isLoading = false;
      state.isError = true;
    }
  }
});

const { actions } = wishlist;

export const addToWishlist = (payload) => async (dispatch) => {
  const { productId, token } = payload;

  dispatch(actions.addToWishlistRequest({ productId }));

  try {
    await axios.get(API + '/addToWishlist', {
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

  dispatch(actions.deleteFromWishlistRequest({ productId }));

  try {
    await axios.get(API + '/deleteFromWishlist', {
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
      const getWishlist = await axios.get(API + '/wishlist', {
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
