import React from 'react'

import styles from "./Tesk.module.css";

type Props = {}

const Tesk = (props: Props) => {
  return (
    <div className="container" >
    <a className="links" id="paracadastro"></a>
    <a className="links" id="paralogin"></a>
     
    <div className="content">      
      <div id="login">
        <form method="post" action=""> 
          <h1>Login</h1> 
          <p> 
            <label htmlFor="nome_login">Seu nome</label>
            <input id="nome_login" name="nome_login" type="text" placeholder="ex. contato@htmlecsspro.com"/>
          </p>
           
          <p> 
            <label htmlFor="email_login">Seu e-mail</label>
            <input id="email_login" name="email_login" type="password" placeholder="ex. senha" /> 
          </p>
           
          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label htmlFor="manterlogado">Manter-me logado</label>
          </p>
           
          <p> 
            <input type="submit" value="Logar" /> 
          </p>
           
          <p className="link">
            Ainda não tem conta?
            <a href="#paracadastro">Cadastre-se</a>
          </p>
        </form>
      </div>
      <div id="cadastro">
        <form method="post" action=""> 
          <h1>Cadastro</h1> 
           
          <p> 
            <label htmlFor="nome_cad">Seu nome</label>
            <input id="nome_cad" name="nome_cad" type="text" placeholder="nome" />
          </p>
           
          <p> 
            <label htmlFor="email_cad">Seu e-mail</label>
            <input id="email_cad" name="email_cad" type="email" placeholder="contato@htmlecsspro.com"/> 
          </p>
           
          <p> 
            <label htmlFor="senha_cad">Sua senha</label>
            <input id="senha_cad" name="senha_cad" type="password" placeholder="ex. 1234"/>
          </p>
           
          <p> 
            <input type="submit" value="Cadastrar"/> 
          </p>
           
          <p className="link">  
            Já tem conta?
            <a href="#paralogin"> Ir para Login </a>
          </p>
        </form>
      </div>
    </div>
  </div>  
  )
}

export default Tesk