import { useReducer } from 'react';
import { toast } from 'react-toastify';

import { AuthContext, authReducer } from './';
import { IRegisterUser, IUser } from '@/interfaces';
import { kioskApi } from '@/api';
import { isAxiosError } from 'axios';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AUTH_INIT_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INIT_STATE);

  const registerUser = async (userData: IRegisterUser) => {
    try {
      const { data } = await kioskApi.post('/register', { ...userData });
      console.log(data);
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response?.data.message);
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
