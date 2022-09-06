<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Desapego from '../pages/Desapego';
import LoginRegister from '../pages/login-cadastro';

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginRegister/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/id" />
            <Route path="/profile" />
            <Route path="/desapego" element={<Desapego />}/>
        </Routes>
    );
=======
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
>>>>>>> e102865db44a75c94f50a95d5794e2e8b4910291
};

export default RoutesMain;
