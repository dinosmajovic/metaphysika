import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const product = createSlice({
  name: 'product',
  initialState: {
    product: null,
    isError: false,
    errorMessage: {},
    isLoading: true
  },
  reducers: {
    getProductRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    setProduct: (state, { payload }) => {
      state.product = payload;
    },
    getProductSuccess: (state, { payload }) => {
      state.isLoading = false;
    },
    getProductFailure: (state, { payload }) => {
      state.errorMessage = payload;
      state.isError = true;
      state.isLoading = false;
    },
    clearProduct: (state, { payload }) => {
      state.product = null;
      state.isError = false;
      state.isLoading = true;
    }
  }
});

const { actions } = product;

export const getProduct = (payload) => async (dispatch, getState) => {
  const { productPath, token } = payload;

  dispatch(actions.getProductRequest());

  try {
    const fetchedProduct = await axios.get('/getProduct', {
      params: {
        productPath,
        token
      }
    });

    const product = fetchedProduct.data;

    dispatch(actions.setProduct(product));
  } catch (error) {
    const errorMessage = {
      title: error.response.data.title,
      description: error.response.data.description
    };
    dispatch(actions.getProductFailure(errorMessage));
  }
};

export const { clearProduct, getProductSuccess } = product.actions;
export default product.reducer;
