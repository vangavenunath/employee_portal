import React, { useState } from 'react';
import Login from './components/Login/Login';
import EmployeeHome from './components/EmployeeHome/EmployeeHome'
const App = (() => {
  
  const [isLogin,setIsLogin] = useState(true)
  
  return (
    <div>
      {isLogin && <Login setIsLogin={setIsLogin}/>}
      {!isLogin && <EmployeeHome/>}
      {/* <EmployeeHome/> */}
  </div>
      );
  })
  export default App;
