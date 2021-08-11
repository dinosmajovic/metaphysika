import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'payment',
  initialState: {
    paymentIsAccepted: -1
  },
  reducers: {
    setPayment: (state, { payload }) => {
      state.paymentIsAccepted = payload;
    }
  }
});

export const { setPayment } = slice.actions;

export default slice.reducer;
