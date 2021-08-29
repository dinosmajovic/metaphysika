import { createSlice } from '@reduxjs/toolkit';

export const wishlist = createSlice({
  name: 'wishlist',
  initialState: {
    products: []
  },
  reducers: {
    addOrDeleteFromWishlist: (state, { payload }) => {
      const productAlreadyInWishlist = state.products.filter((product) => {
        return product.id === payload.id;
      });

      if (productAlreadyInWishlist.length > 0) {
        const index = state.products.findIndex((product) => {
          return product.id === payload.id;
        });

        const newProducts = [...state.products];

        newProducts.splice(index, 1);

        state.products = newProducts;
      } else {
        state.products.push(payload);
      }
    },

    deleteProductFromWishlist: (state, { payload }) => {
      const index = state.products.findIndex((product) => {
        return product.bagId === payload;
      });

      const newProducts = [...state.products];
      newProducts.splice(index, 1);

      state.products = newProducts;
    }
  }
});

export const { addOrDeleteFromWishlist, deleteProductFromWishlist } =
  wishlist.actions;

export default wishlist.reducer;
