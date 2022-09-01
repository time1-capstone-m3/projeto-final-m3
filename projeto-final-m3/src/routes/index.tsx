import {Routes, Route} from 'react-router-dom'
import LoginRegister from '../pages/login-cadastro';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRegister/>}/>
      <Route path="/dashboard" />
      <Route path="/product/id"/>
      <Route path="/profile"/> 
    </Routes>
  )
}

export default RoutesMain;

