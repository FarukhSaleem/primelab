

export type User = {
  email: string;
  password: string;
}

export const initialUserState: User = {
  email: "",
  password: "",
}
export type UserState = {
  user: User;
  pending: boolean;
  errorMessage: string;
}

// Actions
export interface UserAction {
  type: string;
  payload: UserState;
}

// Action Types
const ACTION_TYPE_SET_LOGIN_USER = 'ACTION_TYPE_SET_LOGIN_USER';
const ACTION_TYPE_SET_LOGIN_USER_SUCCESS = 'ACTION_TYPE_SET_LOGIN_USER_SUCCESS';
const ACTION_TYPE_SET_LOGIN_USER_FAILURE = 'ACTION_TYPE_SET_LOGIN_USER_FAILURE';

export const UserActions = {
  ACTION_TYPE_SET_LOGIN_USER,
  ACTION_TYPE_SET_LOGIN_USER_SUCCESS,
  ACTION_TYPE_SET_LOGIN_USER_FAILURE,
};



export const UserReducer = (
  state = initialUserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActions.ACTION_TYPE_SET_LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        errorMessage: action.payload.errorMessage || '',
        pending: true,
      };
    case UserActions.ACTION_TYPE_SET_LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        errorMessage: action.payload.errorMessage || '',
        pending: false,
      };
    case UserActions.ACTION_TYPE_SET_LOGIN_USER_FAILURE:
      return {
        ...state,
        user: initialUserState,
        errorMessage: action.payload.errorMessage || '',
        pending: false,
      };
    default:
      return {
        ...state,
        user: initialUserState,
        errorMessage: action.payload.errorMessage || '',
        pending: false,
      };
  }
};
