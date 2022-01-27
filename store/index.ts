import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user/user.slices";
const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
