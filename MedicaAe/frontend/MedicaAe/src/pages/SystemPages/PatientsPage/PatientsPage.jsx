import { NavBar } from "../../../components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";
import { NavLink } from "react-router-dom";
import styles from "./PatientsPage.module.css";

export const PatientsPage = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.list}>
          <Filter />
          <label>Pacientes</label>
          <div className={styles.cards_list}></div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Editar Paciente</button>
          <NavLink className={styles.button_add} to={"/patients/add"}>
            <p>Cadastrar Paciente</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
