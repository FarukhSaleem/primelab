import { AppDispatch } from "..";
import { fetchUserLogin } from "../../services/login/loginServiceFunction";
import slice from "./user.slices";
import { UserType } from "./user.types";

const { usersSuccess, startLoading, hasError } = slice.actions;

export const fetchUser = (data: UserType) => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  try {
    const response = await fetchUserLogin({
      email: data.email,
      password: data.password,
      user_name: data.user_name || '',
      phone: data.phone
    });
    dispatch(usersSuccess(response.data));
  } catch (err: any) {
    dispatch(hasError(err?.message));
    console.error("fetchUser", err.message);
  }
};
