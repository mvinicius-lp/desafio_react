import React from 'react'

//CSS
import styles from "./TeskForm.module.css";

type Props = {
    btnText: string;
}

const TeskForm = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
        <div className={styles.input_container}>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" placeholder="Título da nota" />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="description">Descrição</label>
            <input type="text" name="description" placeholder="Descrição da nota" />
        </div>
        <div className={styles.input_container}>
            <label htmlFor="content">Conteúdo</label>
            <input type="text" name="content" placeholder="Conteúdo da nota" />
        </div>
        <input type="submit" value={btnText}/>
    </form>
  )
}

export default TeskForm