import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    hiddenLoading: state => false,
    showLoadding: state => true
  }
})

const { reducer, actions } = loading;
export const { hiddenLoading, showLoadding } = actions;
export default reducer;
