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
};

export default RoutesMain;
