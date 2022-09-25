import React from "react";
import { Link } from  "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.header}>
     <div className={styles.acoes}>
        <Link to="/">Cadastrar nota</Link>
        <Link to="/lista">Ver notas</Link>
    </div>
    </nav>
  );
};

export default Navbar;
