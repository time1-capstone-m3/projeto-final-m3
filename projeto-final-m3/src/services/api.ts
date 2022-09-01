import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-time1-m3.herokuapp.com",
  timeout: 5000,
});

export default api;
