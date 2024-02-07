import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landingpage from "./components/Landingpage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Userdashbord from "./components/Userdashbord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="" element={<Landingpage />}></Route>
        <Route path="userlogin" element={<Login />}></Route>
        <Route path="usersignup" element={<Signup />}></Route>
        <Route path="userdashboard/*" element={<Userdashbord />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
