import { createContext } from 'react';

import { IRegisterUser, IUser } from '@/interfaces';

interface AuthContextProps {
  isLoggedIn: boolean;
  user?: IUser;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerUser: (userData: IRegisterUser) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);
