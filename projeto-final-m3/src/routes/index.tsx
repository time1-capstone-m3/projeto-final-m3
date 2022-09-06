import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginRegister from "../pages/login-cadastro";
import Desapego from "../pages/Desapego";
import Profile from "../pages/Profile";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/product/id" />
      <Route path="/profile" element={<Profile />} />
      <Route path="/donate" element={<Desapego />} />
    </Routes>
  );
};

export default RoutesMain;
