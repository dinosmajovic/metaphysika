import { createSlice } from '@reduxjs/toolkit';

export const bag = createSlice({
  name: 'bag',
  initialState: {
    products: [],
    subtotal: 0,
    total: 0,
    deliveryPrice: 0,
    isPaymentStep: false,
    shippingDetails: null
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },

    deleteProduct: (state, { payload }) => {
      const index = state.products.findIndex((product) => {
        return product.bagId === payload;
      });

      const newProducts = [...state.products];
      newProducts.splice(index, 1);

      state.products = newProducts;
    },

    updateProduct: (state, action) => {
      state.count = state.count - 1;
    },

    calculateSubtotal: (state, action) => {
      const subtotalCount = state.products
        .map((product) => {
          return product.price;
        })
        .reduce((a, b) => a + b, 0);

      state.subtotal = subtotalCount;
    },

    setTotal: (state, { payload }) => {
      state.total = payload;
    },

    setDeliveryPrice: (state, { payload }) => {
      state.deliveryPrice = payload;
    }
  }
});

export const {
  addProduct,
  deleteProduct,
  updateProduct,
  calculateSubtotal,
  setTotal,
  setDeliveryPrice
} = bag.actions;

export default bag.reducer;
