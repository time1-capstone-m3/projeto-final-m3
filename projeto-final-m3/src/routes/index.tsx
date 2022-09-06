import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginRegister from "../pages/login-cadastro";
import Desapego from "../pages/Desapego";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product/id" />
      <Route path="/profile" />
      <Route path="/desapego" element={<Desapego />} />
    </Routes>
  );
};

export default RoutesMain;
