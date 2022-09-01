import {Routes, Route} from 'react-router-dom'

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" />
      <Route path="/dashboard" />
      <Route path="/product/id"/>
      <Route path="/profile"/> 
    </Routes>
  )
}

export default RoutesMain;

