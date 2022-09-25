import React, { useState, ChangeEvent, FormEvent, useEffect, useContext } from "react";
import { ITask } from "../../interfaces/Task";
import styles from "./TaskForm.module.css";
import { AuthContext } from '../../routes';
import { Link, useParams } from "react-router-dom";
import { Atualiza, Cria, Get } from "../../service/Api";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: string, content: string): void;
}


const TaskForm = ({}: Props) => {
  
  const { id } = useParams();

  useEffect(() => {
    Get(context.token.token, id).then(
      (response) => {
        if (response.data.note != null) {
          console.log(response.data.note)
          setNota({
            ...nota,
            title: response.data.note.title,
            content: response.data.note.content,
            description: response.data.note.description
          })
        }

      }
    ).catch(
      (error => {
        console.log(error);
      })
    )
  }, [id])

  const context = useContext(AuthContext)


  const [nota, setNota] = useState({
    title: ' ',
    content: ' ',
    description: ' '
  })


  function updatedNota(e: React.ChangeEvent<HTMLInputElement>) {

    setNota({
      ...nota,
      [e.target.name]: e.target.value
    })
  }

  function addTaskHandler(e: { preventDefault: () => void; }) {
    e.preventDefault()

    if (id == null) {
      Cria(context.token.token, nota).then(
        (response) => {
          console.log(response.data)
          alert("Nota criada com sucesso!");
        }
      ).catch(
        (error => {
          console.log(error);
        })
      )
    } else {
      Atualiza(context.token.token, id, nota).then(
        (response) => {
          alert("Nota Editada com sucesso!");
        }
      ).catch(
        (error => {
          console.log(error);
        })
      )
    }

  }

  return (
    
    <>
    <div>
    <Navbar/>
    </div>
    <br />
    <br />
    <br />
    <br />
    <form onSubmit={(e) => {addTaskHandler(e)}} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          placeholder="Título da nota"
          value={nota.title}
          onChange={(e) => updatedNota(e)}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          placeholder="Descrição da nota"
          value={nota.description}
          onChange={(e) => updatedNota(e)}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="content">Conteúdo</label>
        <input className={styles.tam}
          type="textarea"
          name="content"
          value={nota.content}
          onChange={(e) => updatedNota(e)}
        />
      </div>
      <input type="submit" value="Salvar"/>
    </form>
    <Footer/>
    </>
  );
};

export default TaskForm;