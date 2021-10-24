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
    couponName: null,
    couponValue: null,
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
      state.isError = false;
      state.errorMessage = '';
      state.couponName = null;
      state.couponValue = null;
    },

    onPurchaseRequestFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    },

    onApplyCouponRequest: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
    },
    onApplyCouponSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.couponValue = payload.couponValue;
      state.couponName = payload.couponName;
    },
    onApplyCouponFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload;
    },

    resetCheckout: (state, { payload }) => {
      state.isPaymentSuccessfulStep = false;
      state.isPaymentStep = false;
      state.shippingInfo = null;
      state.billingInfo = null;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
      state.couponName = null;
      state.couponValue = null;
    }
  }
});

const { actions } = checkout;

export const onCalculateShipping =
  ({ shippingInfo, billingInfo, bagProducts }) =>
  async (dispatch, getState) => {
    dispatch(actions.onCalculateShippingRequest());

    const { couponName } = getState().checkout;
    const { country } = shippingInfo.address;

    try {
      const result = await axios.post('/checkout/shipping', {
        country,
        bagProducts,
        couponName
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
  async (dispatch, getState) => {
    dispatch(actions.onPurchaseRequest());

    const { couponName } = getState().checkout;

    try {
      await axios.post('/checkout/payment', {
        isOnlinePayment,
        token,
        shippingInfo,
        billingInfo,
        bagProducts,
        couponName
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

export const onApplyCoupon =
  ({ coupon }) =>
  async (dispatch, getState) => {
    dispatch(actions.onApplyCouponRequest());
    const { couponName, couponValue } = getState().checkout;

    if (couponName && couponValue) {
      const errorMessage = {
        title: 'Coupon already exists',
        description: 'You can use only 1 coupon per order.'
      };
      dispatch(actions.onPurchaseRequestFailure(errorMessage));
      return;
    }

    const { deliveryPrice, products } = getState().bag;

    try {
      const { data } = await axios.post('/apply-coupon', {
        coupon,
        deliveryPrice,
        bagProducts: products
      });

      const { couponName, couponValue, newTotal } = data;

      dispatch(actions.onApplyCouponSuccess({ couponName, couponValue }));
      dispatch(setTotal(newTotal));
    } catch (error) {
      const errorMessage = {
        title: error.response.data.title,
        description: error.response.data.description
      };
      dispatch(actions.onPurchaseRequestFailure(errorMessage));
    }
  };

export const { setIsPaymentStep, closeError, resetCheckout } = checkout.actions;

export default checkout.reducer;
