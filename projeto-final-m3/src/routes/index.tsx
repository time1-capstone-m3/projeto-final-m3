import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginRegister from "../pages/login-cadastro";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product/id" />
      <Route path="/profile" />
    </Routes>
  );
};

export default RoutesMain;
