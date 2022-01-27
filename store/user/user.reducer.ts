import { InitialStateType, ActionType } from "./user.types";

// Reducers
const reducer = {
  startLoading: (state: InitialStateType) => {
    state.isLoading = true;
  },
  hasError: (state: InitialStateType, action: ActionType) => {
    state.error = action.payload;
    state.isLoading = false;
  },
  usersSuccess: (state: InitialStateType, action: ActionType) => {
    state.user = action.payload;
    state.isLoading = false;
    state.error = "";
  },
};
export default reducer;
