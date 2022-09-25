import React, { createContext, useState } from "react";
import { Router, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Routess from "./routes";


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
