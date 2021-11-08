import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {
    email: '',
    firstName: '',
    lastName: ''
  },
  reducers: {
    setUser: (state, action) => {

    },
    getUser: state => state
  }
})

const { reducer, actions } = user;
export const { setUser, getUser } = actions;
export default reducer;
