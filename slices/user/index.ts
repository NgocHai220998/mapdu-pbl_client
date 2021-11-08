import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {
    email: '',
    firstName: '',
    lastName: '',
    token: ''
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      ...action.payload?.user,
      token: action.payload.auth_token
    }),
  }
})

const { reducer, actions } = user;
export const { setUser } = actions;
export default reducer;
