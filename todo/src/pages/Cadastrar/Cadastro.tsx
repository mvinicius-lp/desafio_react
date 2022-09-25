import React, { useState } from 'react'
import styles from '../Logar/Login.module.css'
import { Link } from 'react-router-dom'
import {CadastroUser} from '../../service/Users'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {

    // if (!email || !nome || !senha) {
    //   setError("Preencha todos os campos");
    //   return;
    // } 

    const user = {
      "name": nome,
      "email": email,
      "password": senha
    }

   const res = CadastroUser(user);
    CadastroUser(user).then((response)=>{
      console.log("Deu certo")
    }).catch((error)=>{
        alert("Usuário não cadastrado");
    })
    
  };

  return (   
    <>
    <Header/>
    <br /><br /><br /><br /><br />
    <div className={styles.center}>
      <form className={styles.form}>
      <h1>CADASTRO</h1>
      <div className={styles.input_container}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          name="senha"
          placeholder="Crie uma senha"
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <input className={styles.botao} value="Cadastrar" onClick={handleSignup}/>
      </div>
      <p>  
          Já tem conta?
          <Link to="/login"> Ir para Login </Link>
      </p>
    </form>
    <br /><br /><br /><br /><br /><br /></div>
    <Footer/>
    </>
  )
}