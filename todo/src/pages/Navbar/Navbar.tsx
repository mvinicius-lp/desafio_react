import React from "react";

import { Link } from  "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.header}>
     <div className={styles.acoes}>
        <a href="">Cadastrar nota</a>
        <a href="">Ver notas</a>
    </div>
    </nav>
  );
};

export default Navbar;
