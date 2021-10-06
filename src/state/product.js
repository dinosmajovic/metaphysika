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

// import { createSlice } from '@reduxjs/toolkit';

// // ================== Reducers ================== //

// const slice = createSlice({
//   name: '/insurance/purchase',
//   initialState: {
//     paymentCard: {
//       isLoading: false,
//       error: null
//     }
//   },
//   reducers: {
//     // updatePaymentCard
//     updatePaymentCardRequest: (state, { payload }) => {
//       state.paymentCard.isLoading = true;
//       state.paymentCard.error = null;
//     },
//     updatePaymentCardSuccess: (state, { payload }) => {
//       state.paymentCard.isLoading = false;
//     },
//     updatePaymentCardFailure: (state, { payload }) => {
//       state.paymentCard.isLoading = false;
//       state.paymentCard.error = payload;
//     },

//     clearError: (state) => {
//       state.paymentCard.error = null;
//     }
//   }
// });

// export default slice.reducer;

// // ================== Actions ================== //

// const { actions } = slice;

// export const updatePaymentCard = (info, insuranceContractID) => {
//   return async (dispatch, getState, { post }) => {
//     dispatch(actions.updatePaymentCardRequest());

//     const { paymentCard, address } = info || {};
//     const expiryDate = paymentCard?.creditCardExpiryDate?.split('/');

//     const body = {
//       creditCardCCV: paymentCard?.creditCardCCV,
//       creditCardExpiryMonth: expiryDate[0],
//       creditCardExpiryYear: expiryDate[1],
//       creditCardHolderName: paymentCard?.creditCardHolderName,
//       creditCardNumber: paymentCard?.creditCardNumber?.replace(/\s/g, ''),
//       creditCardType: paymentCard?.creditCardType,
//       insuranceContractIDs: [insuranceContractID],
//       address: address
//     };

//     try {
//       await post('/insurance/ni/purchase/update-card', body);

//       dispatch(actions.updatePaymentCardSuccess());
//     } catch (error) {
//       dispatch(actions.updatePaymentCardFailure(error));
//     }
//   };
// };

// export const { clearError } = actions;
