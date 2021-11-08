import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loading";
import themeReducer from "../slices/theme";
import userReducer from "../slices/user";
import toastReducer from "../slices/toast";

const rootReducer = {
  loading: loadingReducer,
  theme: themeReducer,
  user: userReducer,
  toast: toastReducer,
}
const store = configureStore({
  reducer: rootReducer
})

export default store;
