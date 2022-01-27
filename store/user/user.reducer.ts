import { InitialStateType, ActionType, UserType } from "./user.types";

// Reducers
const reducer = {
  startLoading: (state: InitialStateType) => {
    state.isLoading = true;
    state.user = {} as UserType;
    state.error = "";
  },
  hasError: (state: InitialStateType, action: ActionType) => {
    state.error = action.payload;
    state.user = {} as UserType;
    state.isLoading = false;
  },
  usersSuccess: (state: InitialStateType, action: ActionType) => {
    state.user = action.payload;
    state.isLoading = false;
    state.error = "";
  },
};
export default reducer;
