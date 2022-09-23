import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom';

import Login from './pages/Logar/Login'
import Cadastro from './pages/Cadastrar/Cadastro'
import Form from './pages/Form/Form';
import Navbar from './pages/Navbar/Navbar';


const Routess: any = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/form" element={<Form />} />
        </Routes>
    );
}

export default Routess;