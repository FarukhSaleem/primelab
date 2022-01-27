export interface UserType {
  id?: number;
  email: string;
  name?: string;
  password: string;
  phone?: string;
  token?: string;
  user_name?: string;
}
export interface InitialStateType {
  user: UserType;
  isLoading: boolean;
  error: string;
}
export interface ActionType {
  payload: any;
}
