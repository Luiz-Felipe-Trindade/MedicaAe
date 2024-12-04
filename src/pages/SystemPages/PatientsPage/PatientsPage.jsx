import { NavBar } from "../../../components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";
import { CardsPatitens } from "./components/CardsPatients/CardsPatients";
import { NavButton } from "../../../components/Buttons/NavButton/NavButton";

import styles from "./PatientsPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const PatientsPage = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/paciente");
      const pacData = response.data.map((pac) => ({
        id: pac.id_paciente,
        name: pac.nomepaciente,
        idadepaciente: pac.idadepaciente,
        genero: pac.genero,
        numcontato: pac.numcontato,
        cpf: pac.cpf,
        alergia: pac.alergia,
      }));
      setPatients(pacData);
    } catch (error) {
      console.error("Erro ao buscar pacientes:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.left}>
        <div className={styles.box}>
          <Filter />
          <label>Pacientes Cadastrados</label>
          <div className={styles.iten_box}>
            {patients.length > 0 ? (
              patients.map((pac) => (
                <CardsPatitens key={pac.id} patitens={pac} />
              ))
            ) : (
              <p>Carregando Pacientes...</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.rest}>
        <div className={styles.navbutton}>
          <NavButton name={"Cadastrar Paciente"} to="/pacientes/add" />
        </div>
      </div>
    </div>
  );
};
