import { NavBar } from "../../../components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";
import { Cards } from "./components/Cards/Cards";
import { NavButton } from "../../../components/Buttons/NavButton/NavButton";

import styles from "./MedicinesPage.module.css";

export const MedicinesPage = () => {
  const medicines = [
    {
      id: 1,
      name: "Nimesulida",
      dosage: "100",
      indication: "...",
      generic: true,
      description: "...",
    },
  ];
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.left}>
        <div className={styles.box}>
          <Filter />
          <label>Medicamentos cadastrados</label>
          <div className={styles.iten_box}>
            {medicines.map((i) => (
              <Cards key={i.id} medicies={i} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rest}>
        <div className={styles.navbutton}>
          <NavButton name={"Cadastrar Medicamento"} to="/medicines/add" />
        </div>
      </div>
    </div>
  );
};
