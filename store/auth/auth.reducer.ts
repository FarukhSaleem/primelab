// Action Types
const ACTION_TYPE_AUTHENTICATE = 'ACTION_TYPE_AUTHENTICATE';
const ACTION_TYPE_AUTHENTICATE_SUCCESS = 'ACTION_TYPE_AUTHENTICATE_SUCCESS';
const ACTION_TYPE_AUTHENTICATE_FAILURE = 'ACTION_TYPE_AUTHENTICATE_FAILURE';

export const AuthActions = {
  ACTION_TYPE_AUTHENTICATE,
  ACTION_TYPE_AUTHENTICATE_SUCCESS,
  ACTION_TYPE_AUTHENTICATE_FAILURE,
};

export type Auth = {
  token: string;
}

export const initialAuthState: AuthState = {
  auth: { token: "" },
  errorMessage: '',
  pending: false
}

// Actions
export interface AuthAction {
  type: string;
  payload: any;
}

export type AuthState = {
  auth: Auth;
  pending: boolean;
  errorMessage: string;
}

export const AuthReducer = (
  state = initialAuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActions.ACTION_TYPE_AUTHENTICATE:
      return {
        auth: { token: '' },
        errorMessage: action.payload.errorMessage || '',
        pending: true,
      };
    case AuthActions.ACTION_TYPE_AUTHENTICATE_SUCCESS:
      return {
        ...state,
        auth: { token: action.payload.token },
        errorMessage: action.payload.errorMessage || '',
        pending: false,
      };
    case AuthActions.ACTION_TYPE_AUTHENTICATE_FAILURE:
      return {
        ...state,
        auth: { token: '' },
        errorMessage: action.payload.errorMessage || '',
        pending: false,
      };
    default:
      return {
        ...state
      };
  }
};
