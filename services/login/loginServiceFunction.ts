import { AxiosResponse } from "axios";
import axiosInstance from "../axiosInstance";
import { RequestLogin } from "./loginServiceFunction.types";
export const fetchUserLogin = (
  body: RequestLogin
): Promise<AxiosResponse<any, any>> => {
  return axiosInstance.post("/login", body);
};
