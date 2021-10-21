import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
  name: 'modal',
  initialState: {
    isLogInModal: false
  },
  reducers: {
    onOpenLogInModal: (state, { payload }) => {
      state.isLogInModal = true;
    },
    onCloseLogInModal: (state, { payload }) => {
      state.isLogInModal = false;
    }
  }
});

export const { onOpenLogInModal, onCloseLogInModal } = modal.actions;
export default modal.reducer;
