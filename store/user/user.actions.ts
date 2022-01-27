import { AppDispatch } from "..";
import { fetchUserLogin } from "../../services/login/loginServiceFunction";
import slice from "./user.slices";
import { UserType } from "./user.types";

const { usersSuccess, startLoading, hasError } = slice.actions;

export const fetchUser = (data: UserType) => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  try {
    const response = await fetchUserLogin(data);
    dispatch(usersSuccess(response.data));
  } catch (err: any) {
    dispatch(hasError(err?.message));
    console.error("fetchUser", err.message);
  }
};
