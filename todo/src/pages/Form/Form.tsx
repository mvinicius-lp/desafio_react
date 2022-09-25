import React, { useState } from 'react'
import { ITask } from '../../interfaces/Task';
import TaskForm from '../Home/TaskForm';
import styles from "../../App.module.css";
import Modal from "../Modal/Modal"

type Props = {}

const Form = (props: Props) => {
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const deleteTask = (title: string): void => {
        setTaskList(
          taskList.filter((task) => {
            return task.title !== title;
          })
        );
      };
      const updateTask = (id: number, title: string, difficulty: string, content: string) => {
        const updatedTask: ITask = { id, title, difficulty, content};
    
        const updatedItems = taskList.map((task) => {
          return task.id === updatedTask.id ? updatedTask : task;
        });
    
        setTaskList(updatedItems);
    
        hideOrShowModal(false);
      };
      const hideOrShowModal = (display: boolean) => {
        const modal = document.getElementById("modal");
        if (display) {
          modal!.classList.remove("hide");
        } else {
          modal!.classList.add("hide");
        }
      };
    
      const editTask = (task: ITask): void => {
        hideOrShowModal(true);
        setTaskToUpdate(task);
      };

  return (
    <><Modal children={
      <TaskForm
      btnText="Editar"
      taskList={taskList}
      task={taskToUpdate}
      handleUpdate={updateTask}
    />
    } title="Modal"/>

    <main className={styles.main}>
        <div className={styles.todo_form}>
          <TaskForm
            taskList={taskList}
            setTaskList={setTaskList}
            btnText="Cadastrar"
          />
        </div>
      </main>
    </>
  )
}

export default Form