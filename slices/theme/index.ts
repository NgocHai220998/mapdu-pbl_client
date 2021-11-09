import { createSlice } from "@reduxjs/toolkit";
import { THEME_TYPES } from "../../components/helpers/SwitchTheme/index.config";
import { getItem, KEY_TYPES } from "../../utils/localStoreTools";

let themData = getItem(KEY_TYPES.THEME);
themData = themData?.theme ? themData?.theme : THEME_TYPES.NORMAL

const theme = createSlice({
  name: 'theme',
  initialState: themData,
  reducers: {
    changeTheme: (_, action) => action.payload,
  }
})

const { reducer, actions } = theme;
export const { changeTheme } = actions;
export default reducer;
