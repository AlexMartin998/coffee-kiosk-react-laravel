import { AuthState } from './';

type AuthAction = { type: AuthActionType.login };

export enum AuthActionType {
  login = '[Auth] - Log In',
}

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionType.login:
      return { ...state };

    default:
      return state;
  }
};
