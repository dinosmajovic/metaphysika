import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const header = createSlice({
  name: 'header',
  initialState: {
    categories: null,
    brands: null,
    isLoading: false,
    isError: false,
    errorMessage: {}
  },
  reducers: {
    getBrandsAndCategoriesRequest: (state) => {
      state.isError = false;
      state.errorMessage = {};
      state.isLoading = true;
    },
    getBrandsAndCategoriesSuccess: (state, { payload }) => {
      state.categories = payload.categories;
      state.brands = payload.brands;
      state.isLoading = false;
    },
    getBrandsAndCategoriesFailure: (state, { payload }) => {
      state.errorMessage = payload;
      state.isError = true;
      state.isLoading = false;
    }
  }
});

const { actions } = header;

export const getBrandsAndCategories = (payload) => async (dispatch) => {
  dispatch(actions.getBrandsAndCategoriesRequest());

  try {
    const { data } = await axios.get('/brands/categories');

    dispatch(
      actions.getBrandsAndCategoriesSuccess({
        categories: data.categories,
        brands: data.brands
      })
    );
  } catch (error) {
    const errorMessage = {
      title: error.response.data.title,
      description: error.response.data.description
    };

    dispatch(actions.getBrandsAndCategoriesFailure(errorMessage));
  }
};

export default header.reducer;
