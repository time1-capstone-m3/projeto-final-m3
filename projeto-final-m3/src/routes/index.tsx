import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/login" />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/id" />
            <Route path="/profile" />
        </Routes>
    );
};

export default RoutesMain;
