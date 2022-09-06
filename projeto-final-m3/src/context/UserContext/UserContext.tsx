import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LoginData,
  RegisterData,
  UserProps,
  IUserProvider,
  EditData,
  UserData,
} from "./interfaces";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<IUserProvider>({} as IUserProvider);

const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loginUser, setLoginUser] = useState(true);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");
    const id = localStorage.getItem("@id");

    const autoLogin = () => {
      api
        .get(`/users/${String(id)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    };

    if (token) {
      autoLogin();
    }
  }, []);

  const registerUser = async (data: RegisterData) => {
    const { confirmPassword, ...remaining } = data;

    await api
      .post("/register", remaining)
      .then((res) => {
        toast.success("Usuário criado com sucesso!");
        setLoginUser(true);
      })
      .catch((err) => {
        toast.error("Dados incorretos!");
        console.log(err);
      });
  };

  const login = async (data: LoginData) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@token", res.data.accessToken);
        localStorage.setItem("@id", res.data.user.id);
        setUser(res.data.user);
        toast.success("Logado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("E-mail ou senha inválidos");
      });
  };

  const edit = async (data: EditData) => {
    const token = localStorage.getItem("@token");
    const id = localStorage.getItem("@id");

    await api
      .patch(`/users/${String(id)}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        setModal(false);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    setUser({} as UserData);
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        login,
        edit,
        logout,
        user,
        loginUser,
        setLoginUser,
        modal,
        setModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
