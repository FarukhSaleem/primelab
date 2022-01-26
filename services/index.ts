
 import axiosInstance from '../services/AxiosInstance';

// export function createPost (postData:any) {
//     return axiosInstance.post(`posts.json`, postData);
// }  











// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { editUser, EditUserPayload, getCustomer, User } from '../../api/auth';
// import { SubmitValidationErrorResponse } from '../../validation';
// export const getUserThunk = createAsyncThunk<User | null>('user/get', () =>
//   getCustomer(),
// );
// export const editUserThunk = createAsyncThunk<
//   Partial<User>,
//   EditUserPayload,
//   {
//     rejectValue: SubmitValidationErrorResponse;
//   }
// >(
//   'user/edit',
//   async (editUserPayload: EditUserPayload, { rejectWithValue }) => {
//     try {
//       return await editUser(editUserPayload);
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   },
// );
// import { api } from '../api';
// import { Options } from 'ky';
// import { AUTH_API_URL } from '../constants';
// import { User } from './user.types';
// export interface EditUserPayload {
//   email?: string;
//   password?: string;
// }
// export const editUser = (
//   updatedFields: EditUserPayload,
//   options?: Options,
// ): Promise<User> =>
//   api
//     .post('user', {
//       ...options,
//       prefixUrl: AUTH_API_URL,
//       json: updatedFields,
//     })
//     .json<User>();