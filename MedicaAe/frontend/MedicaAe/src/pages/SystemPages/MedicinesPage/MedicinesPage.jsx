import { NavBar } from "../../../components/NavBar/NavBar";
import { Filter } from "./components/Filter/Filter";
import { Cards } from "./components/Cards/Cards";
import { NavButton } from "../../../components/Buttons/NavButton/NavButton";

import styles from "./MedicinesPage.module.css";

export const MedicinesPage = () => {
  const card = [
    {
      id: 1,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 4,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 5,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 2,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
    {
      id: 3,
      remedy: "Nimesulida 100mg",
      dosage: 2,
      patient: "João Carlos Silva",
      action: "Administrado/Agendado",
      time: "17:30",
    },
  ];
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.left}>
        <div className={styles.box}>
          <Filter />
          <label>Medicamentos administrados</label>
          <div className={styles.iten_box}>
            {card.map((i) => (
              <Cards
                key={i.id}
                remedy={i.remedy}
                dosage={i.dosage}
                patient={i.patient}
                action={i.action}
                time={i.time}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <Filter />
          <label>Medicamentos administrados</label>
          <div className={styles.iten_box}>
            {card.map((i) => (
              <Cards
                key={i.id}
                remedy={i.remedy}
                dosage={i.dosage}
                patient={i.patient}
                action={i.action}
                time={i.time}
              />
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
