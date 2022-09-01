import { ReactNode } from "react";

export interface UserProps {
  children: ReactNode;
}

export interface IUserProvider {
  registerUser: (data: RegisterData) => void;
  edit: (data: EditData) => void;
  login: (data: LoginData) => void;
  logout: () => void;
}

export interface UserData {
  email: string;
  nome: string;
  state: string;
  id: number;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: UserData;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  state: string;
  confirmPassword: string;
}

export interface EditData {
  email: string;
  name: string;
  password: string;
  state: string;
}
