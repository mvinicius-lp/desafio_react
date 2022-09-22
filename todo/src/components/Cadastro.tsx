import React from 'react'

type Props = {}

const Cadastro = (props: Props) => {
  return (
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
  )
}

export default Cadastro