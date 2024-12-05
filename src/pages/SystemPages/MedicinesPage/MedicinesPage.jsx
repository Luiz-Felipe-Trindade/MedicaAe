import { NavBar } from "../../../components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";
import { Cards } from "./components/Cards/Cards";
import { NavButton } from "../../../components/Buttons/NavButton/NavButton";

import styles from "./MedicinesPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const MedicinesPage = () => {
  const [medicines, setMedicines] = useState([]);

  const fetchMedicines = async () => {
    try {
      const response = await axios.get("http://localhost:3000/medicamento");
      const medicinesData = response.data.map((med) => ({
        id: med.id_med,
        name: med.nome,
        dosage: med.dose,
        indication: med.descricao,
        description: med.descricao,
      }));

      medicinesData.sort((a, b) => a.id - b.id);

      setMedicines(medicinesData);
    } catch (error) {
      console.error("Erro ao buscar medicamentos:", error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.left}>
        <div className={styles.box}>
          <Filter />
          <label>Medicamentos cadastrados</label>
          <div className={styles.iten_box}>
            {medicines.length > 0 ? (
              medicines.map((med) => <Cards key={med.id} medicies={med} />)
            ) : (
              <p>Carregando medicamentos...</p>
            )}
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
