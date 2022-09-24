import React, { createContext, useState } from "react";
import { Router, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from "./pages/Logar/Login";
import Cadastro from "./pages/Cadastrar/Cadastro";
import Form from "./pages/Form/Form";
import Routess from "./routes";
import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/Navbar/Navbar";



function App() {
  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});
  return (

    // <AuthContext.Provider value={{ token: auth, setAuth: setAuthLS }}>
      <BrowserRouter>
          <Routess/>
      </BrowserRouter>
    // </AuthContext.Provider>
  );
}

export default App;
