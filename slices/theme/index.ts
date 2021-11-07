import { createSlice } from "@reduxjs/toolkit";
import { THEME_TYPES } from "../../components/helpers/SwitchTheme/index.config";

const theme = createSlice({
  name: 'theme',
  initialState: THEME_TYPES.SNOW,
  reducers: {
    changeTheme: (_, action) => action.payload,
  }
})

const { reducer, actions } = theme;
export const { changeTheme } = actions;
export default reducer;
