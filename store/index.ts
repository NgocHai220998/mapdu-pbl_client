import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loading";
import themeReducer from "../slices/theme";

const rootReducer = {
  loading: loadingReducer,
  theme: themeReducer,
}
const store = configureStore({
  reducer: rootReducer
})

export default store;