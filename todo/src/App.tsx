import React, { useState } from "react";
import styles from "./App.module.css";

// components
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Modal from "./pages/Modal/Modal";
import TaskForm from "./pages/Home/TaskForm";
import Lista from './pages/Lista/TaskList';
import Login from "./pages/Logar/Login";

// interfaces
import { ITask } from "./interfaces/Task";
import Cadastro from "./pages/Cadastrar/Cadastro";
import { BrowserRouter } from "react-router-dom";
import Routess from "./routes";
import Form from "./pages/Form/Form";
import Modalx from "./pages/Modal/Modal"
import Notas from "./pages/Notas/Notas";
import TaskList from "./pages/Lista/TaskList";
import Navbar from "./pages/Navbar/Navbar";

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routess/>
      </BrowserRouter>
    </div>
  );
}

export default App;
