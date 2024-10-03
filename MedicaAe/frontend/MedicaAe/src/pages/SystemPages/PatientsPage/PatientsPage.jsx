import React from 'react';
import styles from './PatientsPage.module.css';
import { NavBar } from "../../../components/NavBar/NavBar";
import { FaFilter } from "react-icons/fa";
export const PatientsPage = () => {


const Pacientes = () => {
  const pacientes = [
    {
      nome: "João Carlos Silva",
      alergia: "Nenhuma Alergia",
      contato: "(99) 99999-9999",
      alta: "Não"
    },

  ];

  return (
    <div className={styles.page-container}>
      <NavBar />
      <div className={styles.filter_case}>
              <button className={styles.filter}>
                Filtrar
                <FaFilter className={styles.icon} size={13} />
              </button>
        </div>
      <div className={styles.pacientes-container}>
        <div className={styles.pacientes-lista}>
          {pacientes.map((paciente, index) => (
            <div key={index} className={styles.paciente-card}>
              <p><strong>{paciente.nome}</strong></p>
              <p>{paciente.alergia}</p>
              <p>Contato de emergência: {paciente.contato}</p>
              <p>Alta: {paciente.alta}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.button-container}>
        <button className={styles.cadastrar-paciente}>Cadastrar Paciente</button>
      </div>
    </div>
  );
};
};
