import { KEY_TYPES } from './../../utils/localStoreTools';
import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStoreTools";

let userData = getItem(KEY_TYPES.AUTHEN);
userData = userData?.auth_token ? userData.user : {}

const user = createSlice({
  name: 'user',
  initialState: {
    email: '',
    firstName: '',
    lastName: '',
    token: '',
    ...userData
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
