import { createSlice } from '@reduxjs/toolkit';
import axios from '../../node_modules/axios/index';
import { setTotal, setDeliveryPrice, setSubtotal, resetBag } from './bag';

export const checkout = createSlice({
  name: 'checkout',
  initialState: {
    isPaymentSuccessfulStep: false,
    isPaymentStep: false,
    shippingInfo: null,
    billingInfo: null,
    isLoading: false,
    isError: false,
    errorMessage: ''
  },
  reducers: {
    onCalculateShippingRequest: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
    },
    onCalculateShippingSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isPaymentStep = true;
      state.shippingInfo = payload.shippingInfo;
      state.billingInfo = payload.billingInfo;
    },
    onCalculateShippingFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    },

    setIsPaymentStep: (state, { payload }) => {
      state.isPaymentStep = payload.isPaymentStep;
    },

    closeError: (state, { payload }) => {
      state.isError = false;
    },

    onPurchaseRequest: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
    },

    onPurchaseRequestSuccess: (state, { payload }) => {
      state.isPaymentSuccessfulStep = true;
      state.isLoading = false;
      state.isPaymentStep = false;
      state.shippingInfo = false;
      state.billingInfo = false;
    },

    onPurchaseRequestFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    }
  }
});

const { actions } = checkout;

export const onCalculateShipping =
  ({ shippingInfo, billingInfo, bagProducts }) =>
  async (dispatch) => {
    dispatch(actions.onCalculateShippingRequest());

    const { country } = shippingInfo.address;

    try {
      const result = await axios.post('/checkout/shipping', {
        country,
        bagProducts
      });
      const { shippingPrice, subtotal, total } = result.data;

      dispatch(setTotal(total));
      dispatch(setDeliveryPrice(shippingPrice));
      dispatch(setSubtotal(subtotal));
      dispatch(
        actions.onCalculateShippingSuccess({ shippingInfo, billingInfo })
      );
    } catch (error) {
      const errorMessage = {
        title: error.response.data.title,
        description: error.response.data.description
      };

      dispatch(actions.onCalculateShippingFailure(errorMessage));
    }
  };

export const onPurchase =
  ({ isOnlinePayment, token, shippingInfo, billingInfo, bagProducts }) =>
  async (dispatch) => {
    dispatch(actions.onPurchaseRequest());

    try {
      await axios.post('/checkout/payment', {
        isOnlinePayment,
        token,
        shippingInfo,
        billingInfo,
        bagProducts
      });
      dispatch(actions.onPurchaseRequestSuccess());
      dispatch(resetBag());
    } catch (error) {
      const errorMessage = {
        title: error.response.data.title,
        description: error.response.data.description
      };
      dispatch(actions.onPurchaseRequestFailure(errorMessage));
    }
  };

export const { setIsPaymentStep, closeError } = checkout.actions;

export default checkout.reducer;
