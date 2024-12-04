import styles from "./Cards.module.css";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { CardsPopUp } from "../CardsPopUp/CardsPopUp";

export const Cards = ({ id, data }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };
  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className={styles.container} onClick={handleOpenPopUp}>
      {isPopUpOpen && (
        <CardsPopUp onClose={handleClosePopUp} tittle={"Editar Tratamento"} />
      )}

      <div className={styles.columns}>
        <div className={styles.infos}>
          <p className={styles.text}>
            Paciente:
            <br />
            {data.patient}
          </p>
          <br />
          <p className={styles.text}>
            Medicamento: <br />
            {data.remedy}
          </p>
        </div>
        <div className={styles.infos}>
          <p className={styles.text}>
            Dosagem(mg):
            <br />
            {data.dosage}
          </p>
          <br />
          <p className={styles.text}>
            Status do Tratamento: <br />
            {data.status}
          </p>
        </div>
        <div className={styles.infos}>
          <p className={styles.text}>
            Inicio do tratamento:
            <br />
            {data.beginTrat}
          </p>
          <br />
          <p className={styles.text}>
            Fim do tratamento: <br />
            {data.endTrat}
          </p>
        </div>
      </div>

      <div className={styles.icon}>
        <p className={styles.text}>Clique para editar</p>
        {/* <IoEye size={25} /> */}
      </div>
    </div>
  );
};
