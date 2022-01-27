import { AxiosResponse } from "axios";
import axiosInstance from "../axiosInstance";
import { requestLogin } from "./loginServiceFunction.types";
export const fetchUserLogin = (
  body: requestLogin
): Promise<AxiosResponse<any, any>> => {
  return axiosInstance.post("/login", body);
};
