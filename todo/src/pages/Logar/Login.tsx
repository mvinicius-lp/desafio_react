import React, { useContext, useState } from 'react'
import styles from '../Logar/Login.module.css'
import { Link } from 'react-router-dom';
import {LoginUser} from './../../service/Users'
import { AuthContext } from "../../App"

type Props = {}

const Login = (props: Props) => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  let token = ''
  
  const auth = useContext(AuthContext);

  const handleLogin = () => {
    console.log("entrou")
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }


    const user = {
      "email": email,
      "password": senha
    }
    LoginUser(user).then((response)=> {
      auth.setAuth({token: response.data.token, nome: response.data.nome});
    }).catch((error)=>{
        alert("Usario ou senha incorreta");
    })
  };
  
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
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="password">Senha</label>
        <input
          type="text"
          name="senha"
          placeholder="ex. senha"
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
      </div>
      <input className={styles.botao} value="Logar" onClick={handleLogin}/>
      <div>
        <p>
          Ainda não tem uma conta?
          <Link to="/cadastro"> Cadastre-se</Link>
        </p>
      </div>
    </form>
    <br /><br /><br /><br /><br /><br /><br /><br />
  </div>
  )
}

export default Login