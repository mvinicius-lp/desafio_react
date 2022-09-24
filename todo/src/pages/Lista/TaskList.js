import React, { Props, useContext, useEffect, useState } from "react";

// interfaces
import { ITask } from "../../interfaces/Task";
// CSS
import styles from "./TaskList.module.css";
// API
import {DeleteNotas, ListarNotas} from '../../service/api';
import { AuthContext } from "../../App";

// interface Props {
//   taskList: ITask[];
//   handleDelete(title: string): void;
//   handleEdit(task: ITask): void;
// }

const TaskList = ({ taskList, handleDelete, handleEdit }) => {

  const [notas, setNotas] = useState([])
  const  context = useContext(AuthContext)

  // useEffect(()=>{
  //   carregarNotas()
  // },[])

  function carregarNotas(){
    ListarNotas(context.token.token).then(
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
    DeleteNotas(context.token.token, id).then(
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
       {/* {notas.length > 0 ? (
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
              <i className="bi bi-eye-fill" onClick={() => handleEdit(nota.id)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(nota.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há notas cadastradas</p>
      )}
    </><>
     */}
     <p>Ola</p>
    </div>
  );
};

export default TaskList;
