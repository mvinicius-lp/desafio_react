import React from 'react'
import styles from '../Logar/Login.module.css'
import {CadastroUser} from '../../service/api'
import { Link } from 'react-router-dom'

type Props = {}

const Cadastro = (props: Props) => {
  return (   
    <div className={styles.center}>
      <br /><br /><br /><br /><br />
      <form className={styles.form}>
      <h1 id={styles.cadastro}>Cadastro</h1>
      <div className={styles.input_container}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          name="senha"
          placeholder="Crie uma senha"
        />
      </div>
      <input type="submit" value="Cadastrar"/>
      <p>  
          Já tem conta?
          <Link to="/"> Ir para Login </Link>
      </p>
    </form>
    <br /><br /><br /><br /><br /><br /></div>
  )
}

export default Cadastro