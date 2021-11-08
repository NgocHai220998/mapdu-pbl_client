import { createSlice } from "@reduxjs/toolkit";

const toast = createSlice({
  name: 'toast',
  initialState: {
    isOpen: false,
    message: '',
    vertical: 'top',
    horizontal: 'center',
    type: 'error'
  },
  reducers: {
    showToast: (state, action) => ({
      ...state,
      ...action.payload,
      isOpen: true,
    }),
    hiddenToast: state => ({
      ...state,
      isOpen: false,
    })
  }
})

const { reducer, actions } = toast;
export const { showToast, hiddenToast } = actions;
export default reducer;
