import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.content}>
      <h1>MedicAê</h1>
      <h2 className={styles.tittle}>Seu sistema de gestão de medicamentos</h2>
      <p className={styles.text}>
        MedicAê é um sistema de gestão de medicamentos voltado para hospitais e
        centros de cuidados para pessoas da terceira idade
      </p>
      <div>
        <NavLink to="/register" className={styles.register_btn}>
          Começar a fezer uma conta agora
        </NavLink>
        <NavLink to="/about" className={styles.btn}>
          Conheça um pouco sobre nós
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
