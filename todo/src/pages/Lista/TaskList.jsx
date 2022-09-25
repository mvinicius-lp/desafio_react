import React, { Props, useContext, useEffect, useState } from "react";
// CSS
import styles from "./TaskList.module.css";
// API
import {Deleta, Listar} from '../../service/Api';
import { AuthContext } from "../../routes";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const TaskList = () => {

  const [notas, setNotas] = useState([])
  const  context = useContext(AuthContext)

  useEffect(()=>{
    carregarNotas()
  },[])

  function carregarNotas(){
    Listar(context.token.token).then(
      (response) => {
        if(response.data != null){
          setNotas(response.data.notes)
        }
      }
    ).catch(
        (error => {
            console.log(error);
        })
    )
  }

  function deletarNota(id) {
    Deleta(context.token.token, id).then(
      (response) => {
        carregarNotas()
        alert("Nota Deletada");
      }
    ).catch(
        (error => {
            console.log(error);
        })
    )
  }

  return (
    <div>
      <Navbar/>
       {notas.length > 0 ? (
        notas.map((nota) => (
          <div key={nota.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{nota.title}</h4>
              <p>Descrição: {nota.description}</p>
              <div className={styles.details}>
              <p>Conteúdo: {nota.content}</p>
            </div>
            </div>
            <div className={styles.actions}>
              <Link to={`/edit/${nota.id}`} ><i className="bi bi-eye-fill"></i></Link>
              <i className="bi bi-trash" onClick={()=>{deletarNota(nota.id)}}></i>
            </div>
          </div>
        ))
      ) : (
        <h3>
          <br /><br />
          Não há notas cadastradas</h3>
      )}
      <Footer/>
    </div>
  );
};

export default TaskList;
