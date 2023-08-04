import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openmodal: (state, action) => {
      state.isOpen = true;
    },
    closemodal: (state, action) => {
      state.isOpen = false;
    }
  }
});

console.log(modalSlice);
export const { openmodal, closemodal } = modalSlice.actions;
export default modalSlice.reducer;
