import { createSlice } from '@reduxjs/toolkit';

export const checkout = createSlice({
  name: 'checkout',
  initialState: {
    isPaymentStep: false,
    shippingDetails: null
  },
  reducers: {
    setIsPaymentStep: (state, { payload }) => {
      state.isPaymentStep = payload;
    },
    setShippingDetails: (state, { payload }) => {
      state.shippingDetails = payload;
    }
  }
});

export const { setIsPaymentStep, setShippingDetails } = checkout.actions;

export default checkout.reducer;
