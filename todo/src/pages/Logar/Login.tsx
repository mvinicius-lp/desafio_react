import React from 'react'
import styles from '../Logar/Login.module.css'
import {LoginUser} from "../../service/api";

type Props = {}

const Login = (props: Props) => {
  return (   
    <div className={styles.center}>
      <br /><br /><br /><br /><br />
      <form className={styles.form}>
      <h1>Login</h1>
      <div className={styles.input_container}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="ex. contato@htmlecsspro.com"
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          name="senha"
          placeholder="ex. senha"
        />
      </div>
      <input type="submit" value="Logar"/>
      <div>
        <p>
          Ainda não tem uma conta?
          <a href=""> Cadastre-se</a>
        </p>
      </div>
    </form>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
  )
}

export default Login