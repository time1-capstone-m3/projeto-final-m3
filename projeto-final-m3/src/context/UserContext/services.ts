import api from "../../services/api";
import { LoginData, LoginResponse, RegisterData } from "./interfaces";

export const loginUser = async (
  dataLogin: LoginData
): Promise<LoginResponse> => {
  console.log("Chegou aqui: ", dataLogin);

  const { data } = await api.post<LoginResponse>("/login", dataLogin);
  console.log("Saiu daqui: ", data);
  localStorage.setItem("@token", JSON.stringify(data.accessToken));
  localStorage.setItem("@user", JSON.stringify(data.user));
  return data;
};

/* export const registerUser = async (dataRegister: RegisterData) => {
  await api.post("/register", dataRegister);
}; */

export default loginUser;
