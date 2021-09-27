import { createSlice } from '@reduxjs/toolkit';
// import { get } from 'api/fetch';

// ================== Reducers ================== //

const slice = createSlice({
  name: 'brands',
  initialState: {
    isLoading: false,
    test: true
  },
  reducers: {
    // fetchContract
    fetchContractRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchContractSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contract = payload;
    },
    fetchContractFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.contract = null;
    }
  }
});

export default slice.reducer;
