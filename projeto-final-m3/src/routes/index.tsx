import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginRegister from "../pages/login-cadastro";
import Donate from "../pages/Donate";
import Profile from "../pages/Profile";
import ProductPage from "../pages/Product";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/product/id" />
      <Route path="/profile" element={<Profile />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};

export default RoutesMain;
