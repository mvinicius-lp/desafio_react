import React from 'react'
import styles from '../Logar/Login.module.css'

type Props = {}

const Cadastro = (props: Props) => {
  return (   
    <div className={styles.center}>
      <br /><br /><br /><br /><br />
      <form className={styles.form}>
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
          <a href=""> Ir para Login </a>
      </p>
    </form>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>
  )
}

export default Cadastro