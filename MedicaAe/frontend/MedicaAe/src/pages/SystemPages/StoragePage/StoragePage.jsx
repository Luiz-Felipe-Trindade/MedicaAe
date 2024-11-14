import styles from "./StoragePage.module.css";
import { FaFilter } from "react-icons/fa";

import { NavBar } from "../../../components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";
import { NavLink } from "react-router-dom";

export const StoragePage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.box}>
          <Filter />
          <label>Estoque de medicamentos</label>
          <div className={styles.iten_box}></div>
        </div>
        <NavLink className={styles.button} to={"/storage/add"}>
          Adicionar Medicamento
        </NavLink>
      </div>
    </div>
  );
};
