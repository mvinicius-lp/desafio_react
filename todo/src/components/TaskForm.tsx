import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// interfaces
import { ITask } from "../interfaces/Task";

// styles
import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: string, content: string): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
      setContent(task.content);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(handleUpdate);
    if (taskList) {
      if (handleUpdate) {
        console.log(title);
        console.log(difficulty);
        console.log(content)
        handleUpdate(id, title, difficulty, content);
      } else {
        const id = Math.floor(Math.random() * 1000);

        const newTask: ITask = { id, title, difficulty, content };

        setTaskList!([...taskList, newTask]);

        setTitle("");
        setDifficulty("");
        setContent("");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if(e.target.name === "difficulty"){
      setDifficulty(e.target.value);
    }else{
      setContent(e.target.value);
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          placeholder="Título da nota"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Descrição</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Descrição da nota"
          value={difficulty}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="content">Conteúdo</label>
        <input
          type="text"
          name="content"
          placeholder="Conteúdo da nota"
          value={content}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
