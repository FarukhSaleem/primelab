import { createSlice } from "@reduxjs/toolkit";
import reducers from "./user.reducer";
import { InitialStateType, UserType } from "./user.types";

export const initialState: InitialStateType = {
  user: {} as UserType,
  isLoading: false,
  error: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export default slice;
