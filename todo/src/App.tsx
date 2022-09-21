import React from 'react';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import TeskForm from './components/TeskForm';
import TeskList from './components/TeskList';

//CSS
import styles from "./App.module.css";


function App() {
  return (
    <div>
     <Header />
     <main className={styles.main}>
        <div>
          <h2>Nota</h2>
          <TeskForm btnText="Criar nota"/>
        </div>
        <div>
          <h2>Suas notas</h2>
          <TeskList/>
        </div>
     </main>
     <Footer />
    </div>
  );
}

export default App;
