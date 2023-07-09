export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;

  createdAt?: string;
  updatedAt?: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
