import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route, Link, useNavigate }  from 'react-router-dom';

import Login from './pages/Logar/Login'
import Cadastro from './pages/Cadastrar/Cadastro'
import Form from './pages/Form/Form';
import Navbar from './pages/Navbar/Navbar';

export const AuthContext = createContext<IProviderAuth>({ token: null, setAuth: null});

interface IProviderAuth {
    token: any,
    setAuth: any
  }

const Routess: any = () => {
    const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});
    const setAuthLS = (newAuth: any)=>{
        setAuth(newAuth);
        console.log(newAuth)
        localStorage.setItem("token", newAuth.token);
        localStorage.setItem("nome", newAuth.nome);
    }
    const navigate = useNavigate();
    return (
        <AuthContext.Provider value={{ token: auth, setAuth: setAuthLS }}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route
                    path="/form"
                    element={auth.token == null ? 
                    <Navigate to='/' replace /> :
                    <Form />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default Routess;