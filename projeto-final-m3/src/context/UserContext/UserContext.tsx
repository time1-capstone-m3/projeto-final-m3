import { createContext, useState } from "react";
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
  const [modal, setModal] = useState(false)
  const navigate = useNavigate();

  const registerUser = async (data: RegisterData) => {
    const { confirmPassword, ...remaining } = data;
    await api
      .post("/register", remaining)
      .then((res) => {
        console.log(res);
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
        console.log(res);
        localStorage.setItem("@token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("@user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        toast.success("Logado com sucesso!");
        navigate("/dashboard");
        console.log("bugfix");
      })
      .catch((err) => console.log(err));
  };

  const edit = async (data: EditData) => {
    const token = JSON.parse(localStorage.getItem("@token") || "");
    const user = JSON.parse(localStorage.getItem("@user") || "");

    await api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setModal(false)
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    console.log("Deslogou");
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
