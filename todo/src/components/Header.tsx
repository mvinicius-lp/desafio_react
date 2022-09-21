import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="p-1 d-flex flex-row justify-content-end">
        <a href="">Criar nota</a>
        <a href="">Listar notas</a>
        <button type="button">Login</button>
    </div>
    </header>
  )
}

export default Header