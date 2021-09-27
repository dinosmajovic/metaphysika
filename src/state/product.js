import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
  'fetchProduct',
  async (productName) => {
    try {
      const product = await axios.get('/getProduct', {
        params: {
          productName
        }
      });

      try {
        const fetchedRelatedProducts = await axios.post(
          '/product/relatedProducts',
          product
        );

        return { fetchedRelatedProducts, product };
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
);

const product = createSlice({
  name: 'product',
  initialState: {
    relatedProducts: null,
    product: null,
    isError: false
  },
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setProduct: (state, { payload }) => {
      state.product = payload;
    }
  },
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {},
    [fetchProduct.fulfilled]: (state, action) => {
      const relatedProducts = action.payload.fetchedRelatedProducts;
      const product = action.payload.product;
      state.relatedProducts = relatedProducts;
      state.product = product;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.isError = true;
    }
  }
});

export const { setIsLoading, setProduct } = product.actions;
export default product.reducer;
