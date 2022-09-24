import React, { createContext, useState } from "react";
import { Router, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from "./pages/Logar/Login";
import Cadastro from "./pages/Cadastrar/Cadastro";
import Form from "./pages/Form/Form";
import Routess from "./routes";
import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/Navbar/Navbar";
export const AuthContext = createContext<IProviderAuth>({ token: null, setAuth: null});

interface IProviderAuth {
  token: any,
  setAuth: any
}

function App() {

  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});
  const setAuthLS = (newAuth: any)=>{
    setAuth(newAuth);
    console.log(newAuth)
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  }

  return (

    <AuthContext.Provider value={{ token: auth, setAuth: setAuthLS }}>
      <BrowserRouter>
          {/* <Route path="/form">
            {
              auth.token == null ?
                <Navigate to="/login"></Navigate> :
                <Navbar></Navbar>
            }
          </Route> */}
          <Routess/>
        </BrowserRouter>
        {/* <Route path="/login" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/form" element={<Form />} /> */}

        
      {/* <BrowserRouter>
        <Navbar/>
        <Routess/>
      </BrowserRouter>
      <Footer/> */}
        
    </AuthContext.Provider>
  );
}

export default App;
